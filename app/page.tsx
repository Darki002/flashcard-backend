import Image from 'next/image';
import Head from 'next/head';
import styles from './page.module.css';

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>SimpleCards - Minimalistische Flashcard App</title>
          <meta name="description" content="SimpleCards – Die minimalistische Flashcard-App, mit der du schnell Decks erstellst, Karten hinzufügst und effizient lernst." />
        </Head>

        <header className={styles.header}>
          {/* Icon der App */}
          <Image src="/icon.png" alt="SimpleCards Icon" width={100} height={100} />
          <h1 className={styles.title}>SimpleCards</h1>
        </header>

        <main className={styles.main}>
          {/* Kurze Beschreibung (< 40 Wörter) */}
          <p className={styles.description}>
            Minimalistische Flashcard-App zum Erstellen von Decks, Karten hinzufügen und Lernen mit Erinnerungsbenachrichtigungen. Ideal für schnelle Lerneinheiten.
          </p>

          {/* Placeholder Screenshots */}
          <div className={styles.screenshotContainer}>
            <div className={styles.screenshot}>
              <Image src="/screenshot1.png" alt="Screenshot 1" width={200} height={400} />
            </div>
            <div className={styles.screenshot}>
              <Image src="/screenshot2.png" alt="Screenshot 2" width={200} height={400} />
            </div>
            <div className={styles.screenshot}>
              <Image src="/screenshot3.png" alt="Screenshot 3" width={200} height={400} />
            </div>
          </div>

          {/* Download Button für APK */}
          <a href="/SimpleCards.apk" download className={styles.downloadButton}>
            APK Herunterladen
          </a>
        </main>

        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()} SimpleCards
        </footer>
      </div>
  );
}
