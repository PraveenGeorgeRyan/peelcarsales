"use client";

import { useLeadForm } from "./LeadFormContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { open } = useLeadForm();

  return (
    <section className={styles.hero} id="hero" aria-label="Used cars for sale in Mississauga and Oakville — bad credit car loans available">
      <div className={styles.heroImage} />
      <div className={styles.heroOverlay} />
      <div className={styles.bgPattern} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          Used Car Dealership in Mississauga &amp; Oakville &middot; GTA&apos;s Best Priced Dealer
        </div>

        <h1 className={styles.h1}>
          Car Dealership
          <br />
          <span className={styles.accent}>Near Me</span>
          <br />
          Used Cars for Sale Toronto.
        </h1>

        <p className={styles.sub}>
          <strong>150+ quality used cars, SUVs, and trucks for sale</strong> at two GTA locations in Mississauga and Oakville.
          Bad credit, no credit, new to Canada — our finance team gets you{" "}
          <strong>approved for a car loan in as little as 5 minutes.</strong>
        </p>

        <div className={styles.ctaRow}>
          <button onClick={open} className="btn btn-primary" style={{ padding: "16px 32px", fontSize: "15px" }}>
            Get approved now
          </button>
          <button onClick={open} className="btn btn-outline" style={{ padding: "15px 28px", fontSize: "15px" }}>
            Browse inventory
          </button>
          <button onClick={open} className="btn btn-outline" style={{ padding: "15px 28px", fontSize: "15px" }}>
            Schedule a Test Drive
          </button>
        </div>

        <div className={styles.trustRow}>
          <div className={styles.trustBadge}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            AutoTrader Best Priced 2025
          </div>
          <div className={styles.trustBadge}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            CarGurus Top Rated 2025
          </div>
          <div className={styles.trustBadge}>
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            Any Credit Welcome
          </div>
        </div>
      </div>
    </section>
  );
}
