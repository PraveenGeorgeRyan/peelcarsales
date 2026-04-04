"use client";

import { useLeadForm } from "./LeadFormContext";
import styles from "./Locations.module.css";

function LocationIcon() {
  return (
    <svg className={styles.detailIcon} viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className={styles.detailIcon} viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg style={{ width: 14, height: 14, fill: "currentColor" }} viewBox="0 0 24 24">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
    </svg>
  );
}

const hours = [
  { day: "Mon – Thu", time: "10:00 AM – 8:00 PM" },
  { day: "Fri – Sat", time: "10:00 AM – 6:30 PM" },
  { day: "Sunday", time: "12:00 PM – 5:00 PM" },
];

export default function Locations() {
  const { open } = useLeadForm();

  return (
    <section className={styles.locations} id="locations" aria-label="Peel Car Sales dealership locations — Mississauga and Oakville, Ontario">
      {/* Mississauga */}
      <div className={`${styles.card} ${styles.dark}`}>
        <div className={styles.num}>01</div>
        <div className={styles.locationLabel}>Used car dealership — Location 01</div>
        <h3 className={`${styles.locationName} ${styles.nameLight}`}>Mississauga</h3>

        <div className={`${styles.detail} ${styles.detailLight}`}>
          <LocationIcon />
          2701 Derry Road East, Mississauga, Ontario L4T 1A2
        </div>
        <div className={`${styles.detail} ${styles.detailLight}`}>
          <PhoneIcon />
          905-678-0048
        </div>

        <div className={styles.hoursGrid}>
          {hours.map((h) => (
            <div key={h.day} className={styles.hoursRow}>
              <span className={`${styles.hoursDay} ${styles.hoursDayLight}`}>{h.day}</span>
              <span className={`${styles.hoursTime} ${styles.hoursTimeLight}`}>{h.time}</span>
            </div>
          ))}
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=2701+Derry+Road+East+Mississauga+Ontario"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.directionsBtn} ${styles.directionsBtnLight}`}
        >
          Get Directions <ArrowIcon />
        </a>
        <button onClick={open} className={`${styles.visitBtn} ${styles.visitBtnLight}`}>
          Book a Visit
        </button>
      </div>

      {/* Oakville */}
      <div className={`${styles.card} ${styles.light}`}>
        <div className={`${styles.num} ${styles.numDark}`}>02</div>
        <div className={styles.locationLabel}>Used car dealership — Location 02</div>
        <h3 className={`${styles.locationName} ${styles.nameDark}`}>Oakville</h3>

        <div className={`${styles.detail} ${styles.detailDark}`}>
          <LocationIcon />
          333 Wyecroft Road, Unit 11, Oakville, ON L6K 2H2
        </div>
        <div className={`${styles.detail} ${styles.detailDark}`}>
          <PhoneIcon />
          905-678-0048
        </div>

        <div className={styles.hoursGrid}>
          {hours.map((h) => (
            <div key={h.day} className={styles.hoursRow}>
              <span className={`${styles.hoursDay} ${styles.hoursDayDark}`}>{h.day}</span>
              <span className={`${styles.hoursTime} ${styles.hoursTimeDark}`}>{h.time}</span>
            </div>
          ))}
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=333+Wyecroft+Road+Oakville+Ontario"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.directionsBtn} ${styles.directionsBtnDark}`}
        >
          Get Directions <ArrowIcon />
        </a>
        <button onClick={open} className={`${styles.visitBtn} ${styles.visitBtnDark}`}>
          Book a Visit
        </button>
      </div>
    </section>
  );
}
