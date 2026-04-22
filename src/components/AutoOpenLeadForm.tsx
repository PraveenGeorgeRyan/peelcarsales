"use client";

import { useEffect } from "react";
import { useLeadForm } from "./LeadFormContext";

const INITIAL_DELAY_MS = 3000;   // First auto-open 3s after page load
const REOPEN_INTERVAL_MS = 10000; // Re-open every 10s after close

export default function AutoOpenLeadForm() {
  const { isOpen, open } = useLeadForm();

  // Initial pop-up after page load
  useEffect(() => {
    const t = setTimeout(() => {
      open();
    }, INITIAL_DELAY_MS);
    return () => clearTimeout(t);
  }, [open]);

  // Re-open on an interval when the modal is closed
  useEffect(() => {
    if (isOpen) return; // Don't schedule while open

    const t = setTimeout(() => {
      open();
    }, REOPEN_INTERVAL_MS);

    return () => clearTimeout(t);
  }, [isOpen, open]);

  return null;
}
