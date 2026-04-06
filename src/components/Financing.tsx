"use client";

import { useState, useCallback } from "react";
import { useLeadForm } from "./LeadFormContext";
import styles from "./Financing.module.css";

const creditTags = [
  { label: "Bad Credit", highlight: true },
  { label: "No Credit", highlight: true },
  { label: "New to Canada", highlight: false },
  { label: "First-Time Buyer", highlight: false },
  { label: "Self-Employed", highlight: false },
  { label: "Student", highlight: false },
  { label: "Bankruptcy", highlight: false },
];

const steps = [
  { num: "01", title: "Fill out our 60-second form", desc: "Name, phone, and vehicle preference — that's all we need to get started." },
  { num: "02", title: "Get approved in 5 minutes", desc: "Our finance team works fast. We call you back with your approval the same day." },
  { num: "03", title: "Pick your vehicle", desc: "Choose from 150+ vehicles in Mississauga and Oakville, or use our Car Finder." },
  { num: "04", title: "Drive home today", desc: "Sign the paperwork and drive away — same day delivery available at both locations." },
];

function calcMonthly(price: number, down: number, term: number, rate: number) {
  const principal = price - down;
  const monthlyRate = rate / 100 / 12;
  if (monthlyRate === 0) return principal / term;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
}

export default function Financing() {
  const [price, setPrice] = useState(25000);
  const [down, setDown] = useState(2500);
  const [term, setTerm] = useState(60);
  const [rate, setRate] = useState(8.9);

  const { open } = useLeadForm();
  const monthly = useCallback(() => Math.round(calcMonthly(price, down, term, rate)), [price, down, term, rate]);

  return (
    <section className={styles.financing} id="financing" aria-label="Bad credit car loans and auto financing in Mississauga, Oakville, and GTA">
      <div className={styles.financingBg}>FINANCE</div>

      <div className={styles.content}>
        <div className="section-eyebrow">Bad Credit Car Loans — Any Credit Welcome</div>
        <h2 className="section-h2" style={{ color: "var(--white)" }}>
          Bad Credit Car Loans
          <br />
          Approved in 5 Minutes
        </h2>

        <p className={styles.body}>
          Whether you have <strong>perfect credit</strong>, <strong>bad credit</strong>, or{" "}
          <strong>no credit history</strong> — we work with lenders across Ontario to get you a{" "}
          <strong>car loan</strong> and behind the wheel today.
          New to Canada? Self-employed? First-time buyer? Student? We specialize in{" "}
          <strong>bad credit auto financing in Mississauga, Oakville, Toronto, Brampton</strong>, and across the GTA.
        </p>

        <div className={styles.creditTags}>
          {creditTags.map((t) => (
            <div key={t.label} className={`${styles.creditTag} ${t.highlight ? styles.creditTagHighlight : ""}`}>
              {t.label}
            </div>
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
          Apply for Financing Now
        </button>
      </div>

      <div>
        <div className={styles.calc}>
          <div className={styles.calcTitle}>Estimate Your Payment</div>

          <div className={styles.calcRow}>
            <div className={styles.calcLabel}>
              Vehicle price <span>${price.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={5000}
              max={60000}
              step={500}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.calcRow}>
            <div className={styles.calcLabel}>
              Down payment <span>${down.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={0}
              max={20000}
              step={250}
              value={down}
              onChange={(e) => setDown(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.calcRow}>
            <div className={styles.calcLabel}>
              Loan term <span>{term} months</span>
            </div>
            <input
              type="range"
              min={24}
              max={84}
              step={12}
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.calcRow}>
            <div className={styles.calcLabel}>
              Interest rate <span>{rate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={4.9}
              max={24.9}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.calcResult}>
            <div>
              <div className={styles.calcResultLabel}>Est. monthly payment</div>
              <div className={styles.calcResultNote}>Estimate only — subject to credit approval</div>
            </div>
            <div className={styles.calcResultValue}>${monthly().toLocaleString()}/mo</div>
          </div>

          <button onClick={open} className={styles.calcCta}>
            Check My Eligibility
            <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor" }}>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
