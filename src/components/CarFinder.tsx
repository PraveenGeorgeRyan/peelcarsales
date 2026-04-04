"use client";

import { useLeadForm } from "./LeadFormContext";
import styles from "./CarFinder.module.css";

export default function CarFinder() {
  const { open } = useLeadForm();

  return (
    <section className={styles.carFinder} id="car-finder" aria-label="Car Finder service — find your next used car in Mississauga or Oakville">
      <div className={styles.text}>
        <h2>
          Can&apos;t Find the
          <br />
          Used Car You Want?
        </h2>
        <p>
          Use our <strong>Car Finder tool</strong> — tell us what vehicle you&apos;re looking for and we&apos;ll alert you the moment it arrives
          at our Mississauga or Oakville lot. Serving the entire GTA. No commitment required.
        </p>
      </div>
      <div className={styles.cta}>
        <button onClick={open} className={styles.btnWhite}>
          Use the Car Finder
        </button>
        <button onClick={open} className={styles.btnGhost}>
          Earn Cash — Refer a Friend
        </button>
      </div>
    </section>
  );
}
