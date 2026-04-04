"use client";

import { useLeadForm } from "./LeadFormContext";
import styles from "./Awards.module.css";

const awards = [
  { name: "Best Priced Dealer 2024", source: "AutoTrader Canada", type: "price" },
  { name: "Best Priced Dealer 2025", source: "AutoTrader Canada", type: "price" },
  { name: "Top Rated Dealer 2024", source: "CarGurus", type: "rating" },
  { name: "Top Rated Dealer 2025", source: "CarGurus", type: "rating" },
];

function PriceIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M21.54 11.46l-9 9a1.5 1.5 0 0 1-2.12 0l-5.66-5.66a1.5 1.5 0 0 1 0-2.12l9-9A2 2 0 0 1 15.17 3H20a2 2 0 0 1 2 2v4.83a2 2 0 0 1-.46 1.63z" />
      <circle cx="16.5" cy="7.5" r="1.5" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }}>
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10" />
      <path d="M17 4v8a5 5 0 0 1-10 0V4" />
      <circle cx="5" cy="9" r="2" />
      <circle cx="19" cy="9" r="2" />
    </svg>
  );
}

export default function Awards() {
  const { open } = useLeadForm();

  return (
    <div className={styles.awards}>
      {awards.map((a, i) => (
        <div key={a.name} className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.icon}>
              {a.type === "price" ? <PriceIcon /> : <TrophyIcon />}
            </div>
            <div className={styles.text}>
              <div className={styles.name}>{a.name}</div>
              <div className={styles.source}>{a.source}</div>
            </div>
          </div>
          {i < awards.length - 1 && <div className={styles.divider} />}
        </div>
      ))}
      <div className={styles.divider} />
      <button onClick={open} className={styles.awardCta}>
        Talk to Our Award-Winning Team
        <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "currentColor" }}>
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </button>
    </div>
  );
}
