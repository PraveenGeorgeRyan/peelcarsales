"use client";

import { useState, useEffect, useRef } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { sendLeadNotification } from "@/lib/emailjs";
import { useLeadForm } from "./LeadFormContext";
import styles from "./LeadFormModal.module.css";

export default function LeadFormModal() {
  const { isOpen, close } = useLeadForm();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && nameRef.current) {
      nameRef.current.focus();
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, close]);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) close();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    setLoading(true);
    setError("");

    const leadData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || "",
      createdAt: serverTimestamp(),
      source: window.location.pathname,
    };

    try {
      await addDoc(collection(db, "leads"), leadData);

      // Send email notification (fire-and-forget — don't block if email fails)
      sendLeadNotification(leadData).catch((err) =>
        console.error("EmailJS failed:", err)
      );

      // Send to LeadsBridge → AutoRaptor CRM (fire-and-forget)
      const nameParts = name.trim().split(" ");
      fetch("https://webhooks.leadsbridge.com/api/6b40dac227f514ccc3922ed5aee79201", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: nameParts[0] || "",
          last_name: nameParts.slice(1).join(" ") || "",
          email: email.trim() || "",
          phone: phone.trim(),
          source: "Landing Page",
        }),
      }).catch((err) => console.error("LeadsBridge failed:", err));

      // Fire Google Ads "Button Clicks" conversion on successful submission
      if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "conversion", {
          send_to: "AW-946920610/s65pCKTurIoaEKK5w8MD",
        });
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Lead submission failed:", err);
      setError("Something went wrong. Please try again or call us at 905-678-0048.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    close();
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setEmail("");
      setError("");
    }, 300);
  }

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-label="Get a free car quote">
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close form">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h2 className={styles.heading}>Claim Your $1,000 Discount Now</h2>
            <p className={styles.sub}>
              Limited-time offer. Fill in your details and our team will reach out within 1 hour to lock in your savings.
            </p>

            <div className={styles.fieldWrap}>
              <label htmlFor="lead-name">Name</label>
              <input
                ref={nameRef}
                type="text"
                id="lead-name"
                name="name"
                placeholder="Your full name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className={styles.fieldWrap}>
              <label htmlFor="lead-phone">Phone Number</label>
              <input
                type="tel"
                id="lead-phone"
                name="phone"
                placeholder="(416) 555-0100"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className={styles.fieldWrap}>
              <label htmlFor="lead-email">Email</label>
              <input
                type="email"
                id="lead-email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                  Submit
                </>
              )}
            </button>

            <p className={styles.privacy}>
              By submitting, you agree to receive calls &amp; texts about vehicle deals. No spam — we respect your privacy.
            </p>
          </form>
        ) : (
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <h2 className={styles.heading}>We&apos;ve Got Your Details!</h2>
            <p className={styles.sub}>
              Our team will call or text you within 1 hour.
              <br />
              Questions? Call us at{" "}
              <a href="tel:9056780048" className={styles.phoneLink}>905-678-0048</a>
            </p>
            <a href="tel:+15799996006" className={styles.doneBtn}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Talk to an Agent
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
