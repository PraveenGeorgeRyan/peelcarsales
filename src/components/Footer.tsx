"use client";

import { useLeadForm } from "./LeadFormContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { open } = useLeadForm();

  return (
    <>
      <footer className={styles.footer} aria-label="Peel Car Sales — used car dealership serving Mississauga, Oakville, and the GTA">
        <div className={styles.brand}>
          <div className={styles.logoWrap} style={{ marginBottom: "24px" }}>
            <img src="/images/Logo.png" alt="Peel Car Sales" style={{ height: "80px", maxWidth: "100%", objectFit: "contain" }} />
          </div>
          <p>
            Used car dealership serving Mississauga, Oakville, Brampton, Toronto, Etobicoke, North York, Burlington,
            and the Greater Toronto Area. AutoTrader Best Priced Dealer 2024 &amp; 2025. Bad credit car loans, vehicle
            trade-ins, and affordable used cars, SUVs, and trucks for sale in Ontario.
          </p>
        </div>

        <div>
          <div className={styles.contactTitle}>Contact Us</div>
          <a href="tel:9056780048" className={styles.callNowBtn}>
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            Call Now — 905-678-0048
          </a>
          <a href="tel:6476787778" className={styles.callNowBtn}>
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            Call Now — 647-678-7778
          </a>
          <div className={styles.contactItem}>
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /></svg>
            2701 Derry Rd E, Mississauga, ON
          </div>
          <div className={styles.contactItem}>
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /></svg>
            333 Wyecroft Rd, Unit 11, Oakville, ON
          </div>
          <button onClick={open} className={styles.callbackBtn}>
            Request a Callback
            <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "currentColor" }}>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </div>

      </footer>

      <div className={styles.bottom}>
        <div className={styles.copy}>&copy; 2026 Peel Car Sales. All rights reserved. Serving the Greater Toronto Area.</div>
        <div className={styles.links}>
          <a href="https://www.peelcarsales.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://www.peelcarsales.com/contact-us" target="_blank" rel="noopener noreferrer">Contact</a>
          <a href="https://www.peelcarsales.com/about-us" target="_blank" rel="noopener noreferrer">About Us</a>
        </div>
      </div>
    </>
  );
}
