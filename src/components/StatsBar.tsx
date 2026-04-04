import styles from "./StatsBar.module.css";

const stats = [
  { num: "150+", label: "Vehicles In Stock" },
  { num: "5 min", label: "Loan Approval" },
  { num: "2", label: "GTA Locations" },
  { num: "4.8\u2605", label: "Google Rating" },
];

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.grid}>
        {stats.map((s) => (
          <div key={s.label} className={styles.item}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
