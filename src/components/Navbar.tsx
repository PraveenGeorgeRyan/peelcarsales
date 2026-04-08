import styles from "./Navbar.module.css";

export default function Navbar() {

  return (
    <nav className={styles.nav} aria-label="Main navigation — Peel Car Sales used car dealership Mississauga Oakville">
      {/* Logo */}
      <a href="/" className={styles.logoWrap} aria-label="Peel Car Sales — Used Cars Mississauga & Oakville">
        <img src="/images/Logo.png" alt="Peel Car Sales — Used Car Dealership Mississauga & Oakville" className={styles.logoImg} />
      </a>

      {/* Center: Call Now buttons */}
      <div className={styles.center}>
        <a href="tel:9056780048" className={styles.callBtn} aria-label="Call Peel Car Sales Mississauga now at 905-678-0048">
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.callIcon}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Speak to a Car Expert — 905-678-0048
        </a>

        <a href="tel:6476787778" className={styles.callBtn} aria-label="Call or WhatsApp Peel Car Sales at 647-678-7778">
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.callIcon}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Get Approved in 5 Min — 647-678-7778
        </a>
      </div>

      {/* Awards */}
      <div className={styles.awards}>
        <img src="/images/award1.png" alt="AutoTrader Best Priced Dealer 2024" className={styles.awardImg} />
        <img src="/images/award2.png" alt="AutoTrader Best Priced Dealer 2025" className={styles.awardImg} />
        <img src="/images/award3.png" alt="CarGurus Top Rated Dealer 2024" className={styles.awardImg} />
        <img src="/images/award4.png" alt="CarGurus Top Rated Dealer 2025" className={styles.awardImg} />
      </div>
    </nav>
  );
}
