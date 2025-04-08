import Image from 'next/image';
import Head from 'next/head';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SimpleCards - Minimalistische Flashcard App</title>
                <meta name="description" content="SimpleCards – Die minimalistische Flashcard-App, mit der du schnell Decks erstellst, Karten hinzufügst und effizient lernst. Jetzt mit einem klaren und modernen Design in der Farbe #635f9c." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>

            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <Image src="/logo.png" alt="SimpleCards Logo" width={40} height={40} />
                        <span>SimpleCards</span>
                    </div>
                    <div className={styles.navLinks}>
                        <a href="#features">Features</a>
                        <a href="#screenshots">Screenshots</a>
                        <a href="https://github.com/LlynBaum/simple-cards" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </nav>

                <div className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>Effizientes Lernen mit <span>SimpleCards</span></h1>
                        <p className={styles.tagline}>
                            Die minimalistische Flashcard-App für schnelles und nachhaltiges Lernen
                        </p>
                        <a href="https://github.com/LlynBaum/simple-cards/releases/latest/download/simple-cards.apk" download className={styles.ctaButton}>
                            Jetzt herunterladen
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                    <div className={styles.heroImage}>
                        <Image
                            src="/logo.png"
                            alt="SimpleCards App"
                            width={300}
                            height={600}
                            className={styles.appShowcase}
                        />
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                <section id="features" className={styles.featuresSection}>
                    <h2 className={styles.sectionTitle}>Warum SimpleCards?</h2>

                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                            </div>
                            <h3>Intuitive Decks</h3>
                            <p>Erstelle organisierte Kartensammlungen für verschiedene Lernbereiche</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="9" y1="3" x2="9" y2="21"></line>
                                </svg>
                            </div>
                            <h3>Minimalistisches Design</h3>
                            <p>Klare, ablenkungsfreie Oberfläche für fokussiertes Lernen</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                                </svg>
                            </div>
                            <h3>Lernalgorithmus</h3>
                            <p>Intelligente Wiederholung für langfristigen Lernerfolg</p>
                        </div>
                    </div>
                </section>

                <section id="screenshots" className={styles.screenshotSection}>
                    <h2 className={styles.sectionTitle}>App Screenshots</h2>

                    <div className={styles.screenshotContainer}>
                        <div className={styles.screenshot}>
                            <Image src="/screenshot1.png" alt="Deck Übersicht" width={250} height={450} className={styles.screenshotImage} />
                            <p>Deck Übersicht</p>
                        </div>
                        <div className={styles.screenshot}>
                            <Image src="/screenshot2.png" alt="Kartenansicht" width={250} height={450} className={styles.screenshotImage} />
                            <p>Lernmodus</p>
                        </div>
                        <div className={styles.screenshot}>
                            <Image src="/screenshot3.png" alt="Karten erstellen" width={250} height={450} className={styles.screenshotImage} />
                            <p>Karten erstellen</p>
                        </div>
                    </div>
                </section>

                <section className={styles.downloadSection}>
                    <div className={styles.downloadContent}>
                        <h2>Bereit zum Lernen?</h2>
                        <p>Lade SimpleCards jetzt herunter und verbessere deine Lernroutine</p>
                        <a href="https://github.com/LlynBaum/simple-cards/releases/latest/download/simple-cards.apk" download className={styles.downloadButton}>
                            APK herunterladen
                        </a>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>
                        <Image src="/logo.png" alt="SimpleCards Logo" width={30} height={30} />
                        <span>SimpleCards</span>
                    </div>
                    <div className={styles.footerLinks}>
                        <a href="https://github.com/LlynBaum/simple-cards" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="#datenschutz">Datenschutz</a>
                        <a href="#impressum">Impressum</a>
                    </div>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} SimpleCards. Alle Rechte vorbehalten.</p>
                </div>
            </footer>
        </div>
    );
}
