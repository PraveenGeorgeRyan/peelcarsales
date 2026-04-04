"use client";

import { createContext, useContext, useState, useCallback } from "react";

type LeadFormContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const LeadFormContext = createContext<LeadFormContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useLeadForm() {
  return useContext(LeadFormContext);
}

export function LeadFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <LeadFormContext.Provider value={{ isOpen, open, close }}>
      {children}
    </LeadFormContext.Provider>
  );
}
