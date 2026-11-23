"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Modal from "@/components/ui/Modal";

export default function ReserveModal({ open, onClose, title, dict }) {
  const [sent, setSent] = useState(false);

  const close = () => {
    onClose();
    setSent(false);
  };

  return (
    <Modal open={open} onClose={close} label={dict.reserve}>
      <div className="relative p-6 sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label={dict.close}
          className="absolute end-3.5 top-3.5 grid size-11 place-items-center rounded-full bg-pale"
        >
          <Icon name="close" className="size-5" />
        </button>

        {sent ? (
          <div className="py-8 text-center">
            <Icon name="ok" strokeWidth={2} className="mx-auto mb-4 size-14 text-gold" />
            <h2 className="mb-2 text-2xl font-extrabold">{dict.okTitle}</h2>
            <p className="text-sm leading-7 text-muted">{dict.okText}</p>
          </div>
        ) : (
          <>
            <h2 className="pe-12 text-2xl font-extrabold">{dict.reserve}</h2>
            <p className="mt-1 text-sm text-muted">{title}</p>
            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="grid gap-1.5 text-sm font-medium">
                {dict.name}
                <input
                  required
                  autoComplete="name"
                  className="min-h-12 rounded-xl border border-line bg-bg px-4 text-base"
                />
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                {dict.phone}
                <input
                  required
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className="min-h-12 rounded-xl border border-line bg-bg px-4 text-base"
                />
              </label>
              <button
                type="submit"
                className="min-h-12 rounded-2xl bg-ink px-6 text-sm font-semibold text-bg transition hover:-translate-y-0.5"
              >
                {dict.send}
              </button>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
}
