"use client";

import { useLeadForm } from "./LeadFormContext";
import styles from "./Financing.module.css";

const features = [
  { label: "150+ Vehicles in Stock", highlight: true },
  { label: "Two GTA Locations", highlight: true },
  { label: "Free CarFax Reports", highlight: false },
  { label: "Certified Pre-Owned", highlight: false },
  { label: "Trade-Ins Welcome", highlight: false },
  { label: "Same-Day Delivery", highlight: false },
  { label: "Transparent Pricing", highlight: false },
];

const steps = [
  { num: "01", title: "Tell us what you're looking for", desc: "Share your vehicle preferences and we'll help you find the right match from our inventory." },
  { num: "02", title: "Visit our showroom", desc: "Come see the vehicles in person at our Mississauga or Oakville location — no appointment needed." },
  { num: "03", title: "Take a test drive", desc: "Try before you buy. We'll answer any questions you have about the vehicle." },
  { num: "04", title: "Drive home today", desc: "Complete the paperwork and drive away — same-day delivery available at both locations." },
];

export default function Financing() {
  const { open } = useLeadForm();

  return (
    <section className={styles.financing} id="how-it-works" aria-label="How to buy a used car at Peel Car Sales Mississauga and Oakville">
      <div className={styles.financingBg}>SHOP</div>

      <div className={styles.content}>
        <div className="section-eyebrow">How It Works — Mississauga &amp; Oakville</div>
        <h2 className="section-h2" style={{ color: "var(--white)" }}>
          Find Your Next Car
          <br />
          In Four Easy Steps
        </h2>

        <p className={styles.body}>
          Shopping for a <strong>used car in the GTA</strong>? At Peel Car Sales, we make the car-buying experience
          straightforward and stress-free. Browse our inventory of <strong>150+ quality pre-owned vehicles</strong>,
          take a test drive at our Mississauga or Oakville showroom, and drive home the same day. Serving Toronto,
          Brampton, Burlington, Etobicoke, and the entire Greater Toronto Area.
        </p>

        <div className={styles.creditTags}>
          {features.map((t) => (
            <button key={t.label} onClick={open} className={`${styles.creditTag} ${t.highlight ? styles.creditTagHighlight : ""}`}>
              {t.label}
            </button>
          ))}
        </div>

        <ul className={styles.stepsList}>
          {steps.map((s) => (
            <li key={s.num} className={styles.stepItem}>
              <div className={styles.stepNum}>{s.num}</div>
              <div className={styles.stepText}>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <button
          onClick={open}
          className="btn btn-primary"
          style={{ padding: "16px 36px", fontSize: "15px" }}
        >
          Browse Our Inventory
        </button>
      </div>

      <div>
        <div className={styles.calc}>
          <div className={styles.calcTitle}>Why Shop With Peel Car Sales</div>

          <div className={styles.infoList}>
            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <div>
                <div className={styles.infoTitle}>150+ Vehicles in Stock</div>
                <div className={styles.infoDesc}>Sedans, SUVs, trucks — find the right fit for your lifestyle and budget.</div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <div>
                <div className={styles.infoTitle}>Free CarFax Reports</div>
                <div className={styles.infoDesc}>Every vehicle comes with a complete history report at no cost to you.</div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <div>
                <div className={styles.infoTitle}>Award-Winning Service</div>
                <div className={styles.infoDesc}>AutoTrader Best Priced Dealer 2024 &amp; 2025. CarGurus Top Rated Dealer.</div>
              </div>
            </div>

            <div className={styles.infoRow}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <div>
                <div className={styles.infoTitle}>Trade-Ins Welcome</div>
                <div className={styles.infoDesc}>Get a fair market value for your current vehicle when you upgrade.</div>
              </div>
            </div>
          </div>

          <button onClick={open} className={styles.calcCta}>
            Contact Our Team
            <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor" }}>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
