"use client";

import { useLeadForm } from "./LeadFormContext";
import styles from "./Inventory.module.css";

const cars = [
  { name: "2022 Hyundai Sonata Hybrid", image: "/images/sonata_hybrid_new_1775161832259.png" },
  { name: "2019 Mercedes-Benz E-Class Sedan", image: "/images/e_class_sedan_new_1775161850426.png" },
  { name: "2019 Ram 1500 Truck", image: "/images/ram_truck_new_1775161867437.png" },
  { name: "2017 Ford Explorer SUV", image: "/images/explorer_suv_new_1775161884846.png" },
  { name: "2021 Honda Accord Sport", image: "/images/accord_sport_new_1775161900805.png" },
  { name: "2020 Toyota RAV4 AWD", image: "/images/rav4_awd_new_1775161918943.png" },
];

export default function Inventory() {
  const { open } = useLeadForm();

  // Duplicate the list so the marquee loops seamlessly
  const track = [...cars, ...cars];

  return (
    <section className={styles.section} id="inventory" aria-label="Browse used cars for sale in Mississauga and Oakville">
      <div className={styles.header}>
        <div className="section-eyebrow">Browse used cars for sale in Mississauga &amp; Oakville</div>
        <h2 className="section-h2">
          Used Cars, SUVs &amp; Trucks
          <br />
          for Sale Near You
        </h2>
      </div>

      {/* Scrolling marquee */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {track.map((car, i) => (
            <div key={`${car.name}-${i}`} className={styles.slide}>
              <img
                src={car.image}
                alt={`${car.name} — used car for sale at Peel Car Sales Mississauga Oakville`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <button onClick={open} className={styles.viewAll}>
          View All 150+ Vehicles
          <svg style={{ width: 16, height: 16, fill: "white" }} viewBox="0 0 24 24">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
