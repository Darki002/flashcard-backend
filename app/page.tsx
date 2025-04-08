import Image from 'next/image';
import Head from 'next/head';
import styles from './page.module.css';

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>SimpleCards - Minimalistische Flashcard App</title>
          <meta name="description" content="SimpleCards – Die minimalistische Flashcard-App, mit der du schnell Decks erstellst, Karten hinzufügst und effizient lernst. Jetzt mit einem klaren und modernen Design in der Farbe #635f9c." />
        </Head>

        <header className={styles.header}>
          <div className={styles.hero}>
            <Image src="/logo.png" alt="SimpleCards Icon" width={120} height={120} />
            <h1 className={styles.title}>SimpleCards</h1>
            <p className={styles.tagline}>
              Deine minimalistische Flashcard-App für effizientes Lernen.
            </p>
            <a href="https://github.com/LlynBaum/simple-cards/releases/latest/download/simple-cards.apk" download className={styles.ctaButton}>
              Jetzt APK herunterladen
            </a>
          </div>
        </header>

        <main className={styles.main}>
          <h2 className={styles.sectionTitle}>Warum SimpleCards?</h2>
          <p className={styles.description}>
            Erstelle Decks, füge Karten hinzu und lerne effizient mit Erinnerungsbenachrichtigungen. Ideal für schnelle Lerneinheiten und langfristigen Erfolg.
          </p>

          <h2 className={styles.sectionTitle}>Screenshots</h2>
          <div className={styles.screenshotContainer}>
            <div className={styles.screenshot}>
              <Image src="/screenshot1.png" alt="Screenshot 1" width={250} height={450} />
            </div>
            <div className={styles.screenshot}>
              <Image src="/screenshot2.png" alt="Screenshot 2" width={250} height={450} />
            </div>
            <div className={styles.screenshot}>
              <Image src="/screenshot3.png" alt="Screenshot 3" width={250} height={450} />
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()} SimpleCards. Alle Rechte vorbehalten.
        </footer>
      </div>
  );
}
