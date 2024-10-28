import styles from "./page.module.css";

import HeroBanner from "./components/hero-banner";

export default function Home() {
  return (
    <main className={styles.page}>
      <HeroBanner />
    </main>
  );
}
