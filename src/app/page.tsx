'use client'
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './page.module.css';
import { requestPermission } from './main';


export default function Home() {
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        await requestPermission();
      } catch (error) {
        console.error('An error occurred while fetching the FCM token', error);
      }
    };

    const fetchWithDebounce = () => {
      if (Notification.permission === 'granted') {
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }
        debounceTimer.current = setTimeout(fetchToken, 300);
      }
    };

    // Initial permission check and setup
    fetchWithDebounce();

    // Cleanup function
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);


  const permissionRequestedRef = useRef(false);

    const requestNotificationPermission = async () => {
        if (!permissionRequestedRef.current && Notification.permission === "default") {
        permissionRequestedRef.current = true; // Prevents future requests
        try {
            const permission = await Notification.requestPermission();
            if (permission === "granted") {
              console.log('Granted')
            }
        } catch (error) {
            console.error("An error occurred while requesting notification permission:", error);
        }
        }
    };
      
      useEffect(() => {
          requestNotificationPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div id="messages"></div>
        <div id="token"></div>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
