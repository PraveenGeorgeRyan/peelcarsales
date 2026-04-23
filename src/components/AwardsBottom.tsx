"use client";

import { useLeadForm } from "./LeadFormContext";
import styles from "./AwardsBottom.module.css";

export default function AwardsBottom() {
  const { open } = useLeadForm();

  return (
    <section className={styles.section} aria-label="Peel Car Sales awards — AutoTrader Best Priced Dealer and CarGurus Top Rated Dealer">
      <div className={styles.label}>Award-Winning Dealership</div>
      <h2 className={styles.heading}>
        Recognized as the Best Used Car Dealer in Mississauga &amp; Oakville
      </h2>

      <div className={styles.grid}>
        <div className={styles.badge}>
          <img src="/images/award1.png" alt="AutoTrader Best Priced Dealer 2024" className={styles.badgeImg} />
          <div className={styles.badgeName}>Best Priced Dealer 2024</div>
          <div className={styles.badgeSource}>AutoTrader Canada</div>
        </div>
        <div className={styles.badge}>
          <img src="/images/award2.png" alt="AutoTrader Best Priced Dealer 2025" className={styles.badgeImg} />
          <div className={styles.badgeName}>Best Priced Dealer 2025</div>
          <div className={styles.badgeSource}>AutoTrader Canada</div>
        </div>
        <div className={styles.badge}>
          <img src="/images/award3.png" alt="CarGurus Top Rated Dealer 2024" className={styles.badgeImg} />
          <div className={styles.badgeName}>Top Rated Dealer 2024</div>
          <div className={styles.badgeSource}>CarGurus</div>
        </div>
        <div className={styles.badge}>
          <img src="/images/award4.png" alt="CarGurus Top Rated Dealer 2025" className={styles.badgeImg} />
          <div className={styles.badgeName}>Top Rated Dealer 2025</div>
          <div className={styles.badgeSource}>CarGurus</div>
        </div>
      </div>

      <button onClick={open} className={styles.cta}>
        Visit Our Award-Winning Showroom
        <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor" }}>
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </button>
    </section>
  );
}
