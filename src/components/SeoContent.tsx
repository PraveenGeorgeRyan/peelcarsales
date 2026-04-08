"use client";

import { useLeadForm } from "./LeadFormContext";
import styles from "./SeoContent.module.css";

export default function SeoContent() {
  const { open } = useLeadForm();

  return (
    <section className={styles.section} aria-label="About Peel Car Sales — used cars Mississauga, Oakville, and GTA">
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Your Trusted Used Car Dealership in Mississauga &amp; Oakville
        </h2>

        <p className={styles.text}>
          Looking for <strong>used cars in Mississauga</strong> or <strong>used cars in Oakville</strong>? Peel Car Sales
          is the GTA&apos;s <strong>best priced used car dealership</strong>, proudly serving Brampton, Toronto, Etobicoke,
          North York, Burlington, and the entire Greater Toronto Area. Browse our lot of <strong>150+ quality used cars,
          SUVs, and trucks for sale</strong> — from <strong>cheap used SUVs in Mississauga</strong> to{" "}
          <strong>affordable used trucks in Oakville</strong>, <strong>used sedans for sale in the GTA</strong>, and
          popular brands like <strong>used Honda in Mississauga</strong> and <strong>used Toyota in Oakville</strong>.
          Whether you need a <strong>used car under $15,000 in Mississauga</strong> or a <strong>used car under $10,000
          in the GTA</strong>, we have the inventory and the prices to match.
        </p>

        <div className={styles.ctaRow}>
          <button onClick={open} className={styles.ctaPrimary}>
            Find Your Perfect Car
            <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor" }}>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
          <button onClick={open} className={styles.ctaOutline}>
            Get Pre-Approved Today
          </button>
        </div>

        <p className={styles.text}>
          We specialize in <strong>bad credit car loans in Mississauga</strong>,{" "}
          <strong>bad credit auto financing in Ontario</strong>, and <strong>no credit car loans</strong> — because
          everyone deserves a second chance. Our finance team works with all credit situations:{" "}
          <strong>bad credit car dealership</strong> approvals, <strong>subprime auto loans in Ontario</strong>,{" "}
          <strong>bankruptcy car loans in the GTA</strong>, and <strong>car loan approval for bad credit</strong>. Are
          you <strong>new to Canada</strong>? We offer <strong>newcomer car financing in Ontario</strong>,{" "}
          <strong>first-time car buyer programs in Mississauga</strong>,{" "}
          <strong>student car loans in Ontario</strong>, and <strong>self-employed car financing</strong>. Get approved
          for a <strong>car loan in as little as 5 minutes</strong> — apply online or visit our showrooms on Derry Road
          in Mississauga or Wyecroft Road in Oakville.
        </p>

        <p className={styles.text}>
          Want to <strong>sell your car in Mississauga</strong> or <strong>trade in your car in Oakville</strong>? Peel
          Car Sales also buys used cars across the GTA — get a fair <strong>car trade-in value</strong> today. As
          an <strong>AutoTrader Best Priced Dealer 2024 &amp; 2025</strong> and{" "}
          <strong>CarGurus Top Rated Dealer in Ontario</strong>, we&apos;re proud to be recognized as
          the <strong>best used car dealer in Mississauga</strong>. Visit us at our{" "}
          <strong>Derry Road Mississauga</strong> or <strong>Wyecroft Road Oakville</strong> location, or start your
          search online for <strong>used cars near me</strong>. We serve customers from{" "}
          <strong>Etobicoke, North York, Burlington</strong>, and communities across Ontario — your next car is waiting.
        </p>

        <div className={styles.ctaRow}>
          <button onClick={open} className={styles.ctaPrimary}>
            Get a Free Trade-In Quote
            <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor" }}>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
          <button onClick={open} className={styles.ctaOutline}>
            Talk to Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
