"use client";

import { useLeadForm } from "./LeadFormContext";
import styles from "./StatsBar.module.css";

const stats = [
  { num: "150+", label: "Vehicles In Stock" },
  { num: "5 min", label: "Loan Approval" },
  { num: "2", label: "GTA Locations" },
  { num: "4.8\u2605", label: "Google Rating" },
];

export default function StatsBar() {
  const { open } = useLeadForm();

  return (
    <div className={styles.bar}>
      <div className={styles.grid}>
        {stats.map((s) => (
          <div key={s.label} className={styles.item}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
        <div className={styles.ctaItem}>
          <button onClick={open} className={styles.ctaBtn}>
            Get Your Free Quote
            <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "currentColor" }}>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
