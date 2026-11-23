"use client";

import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, label, children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className={`m-auto max-h-[calc(100dvh-1.5rem)] w-[min(640px,calc(100vw-1.5rem))] overflow-auto rounded-[26px] bg-panel p-0 text-ink shadow-2xl ${className}`}
    >
      {open && children}
    </dialog>
  );
}
