"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Can I get approved with bad credit?",
    a: 'Yes — we work with all credit situations including new immigrants, students, first-time buyers, self-employed individuals, and those who have filed for bankruptcy. Our finance team gets most customers approved in as little as 5 minutes.',
  },
  {
    q: "Do you have vehicles under $15,000?",
    a: "Yes! We carry value deals starting well under $15,000. Our 2017 Ford Explorer is currently listed at $8,991. Browse our full inventory and filter by price to find options in your budget.",
  },
  {
    q: "Can I sell my car without buying one from you?",
    a: "Absolutely. We buy cars outright and will give you a cash offer within 24 hours with no obligation to purchase anything from us. Text us a photo of your car on WhatsApp at 647-678-7778 to get started.",
  },
  {
    q: "Do you serve Brampton, Toronto, and Oakville?",
    a: "Yes — our two locations in Mississauga (2701 Derry Road East) and Oakville (333 Wyecroft Road, Unit 11) serve the entire GTA including Brampton, Etobicoke, North York, Toronto, and Burlington.",
  },
  {
    q: "Do your vehicles come with a warranty?",
    a: "Yes, warranty options are available on most vehicles. Our service centre also provides ongoing maintenance. Ask our sales team for specific warranty details on the vehicle you're interested in.",
  },
  {
    q: "Can I view or buy a car virtually?",
    a: "Yes! We offer virtual test drives and vehicle walkarounds via FaceTime, WhatsApp video, or Zoom. Call or text 647-678-7778 to book a virtual tour of any vehicle in our inventory.",
  },
  {
    q: "What is the referral program?",
    a: "Refer a friend or family member who buys a car from us and earn cash. Visit our referral program page for current details and how to participate.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className={styles.faq} id="faq" aria-label="Frequently asked questions about buying used cars and bad credit car loans in Mississauga and Oakville">
      <div>
        <div className="section-eyebrow">Used car buying &amp; financing FAQ</div>
        <h2 className="section-h2" style={{ color: "var(--white)" }}>
          Used Car Buying
          <br />
          Questions
        </h2>
        <p className={styles.contactNote}>
          Still have questions? Call us at{" "}
          <a href="tel:9056780048">905-678-0048</a> or WhatsApp{" "}
          <a href="https://wa.me/16476787778">647-678-7778</a>.
        </p>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, i) => (
          <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ""}`}>
            <div className={styles.question} onClick={() => toggle(i)}>
              {faq.q}
              <div className={`${styles.icon} ${openIndex === i ? styles.iconOpen : ""}`}>
                {openIndex === i ? "\u2212" : "+"}
              </div>
            </div>
            <div className={`${styles.answer} ${openIndex === i ? styles.answerOpen : ""}`}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
