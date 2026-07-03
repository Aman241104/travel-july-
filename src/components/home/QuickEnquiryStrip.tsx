"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function QuickEnquiryStrip() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ service: "cabs" });
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (date) params.set("date", date);
    router.push(`/enquiry?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 rounded-2xl border border-sand/10 bg-ink-soft/90 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end sm:p-5"
    >
      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-xs font-medium uppercase tracking-wide text-sand/50">
          From
        </span>
        <input
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="Pune"
          className="rounded-lg border border-sand/15 bg-transparent px-3 py-2.5 text-sm text-sand placeholder:text-sand/30 focus:border-ember-400 focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-xs font-medium uppercase tracking-wide text-sand/50">
          To
        </span>
        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Goa"
          className="rounded-lg border border-sand/15 bg-transparent px-3 py-2.5 text-sm text-sand placeholder:text-sand/30 focus:border-ember-400 focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-left">
        <span className="text-xs font-medium uppercase tracking-wide text-sand/50">
          Date
        </span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded-lg border border-sand/15 bg-transparent px-3 py-2.5 text-sm text-sand focus:border-ember-400 focus:outline-none [color-scheme:dark]"
        />
      </label>
      <button
        type="submit"
        className="rounded-lg bg-ember-600 px-5 py-2.5 text-sm font-semibold text-sand transition-colors hover:bg-ember-400"
      >
        Get a Quote
      </button>
    </form>
  );
}
