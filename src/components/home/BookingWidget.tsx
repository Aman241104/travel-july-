"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";

type TripType = "oneway" | "round-trip" | "local";

const tabs: { key: TripType; label: string }[] = [
  { key: "oneway", label: "One-Way" },
  { key: "round-trip", label: "Round Trip" },
  { key: "local", label: "Local" },
];

export default function BookingWidget() {
  const router = useRouter();
  const [trip, setTrip] = useState<TripType>("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ service: trip === "local" ? "local" : trip });
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (date) params.set("date", date);
    if (trip === "round-trip" && returnDate) params.set("returnDate", returnDate);
    router.push(`/enquiry?${params.toString()}`);
  }

  return (
    <div className="rounded-2xl border border-sand/10 bg-ink-soft/90 shadow-2xl shadow-black/30 backdrop-blur">
      <div className="flex gap-1 border-b border-sand/10 p-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setTrip(tab.key)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
              trip === tab.key
                ? "bg-ember-600 text-sand"
                : "text-sand/60 hover:text-sand",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className={cn(
          "grid gap-3 p-4 sm:items-end sm:p-5",
          trip === "round-trip"
            ? "sm:grid-cols-[1fr_1fr_1fr_1fr_auto]"
            : "sm:grid-cols-[1fr_1fr_1fr_auto]",
        )}
      >
        <label className="flex flex-col gap-1.5 text-left">
          <span className="text-xs font-medium uppercase tracking-wide text-sand/50">
            {trip === "local" ? "Pickup Location" : "From"}
          </span>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Pune"
            className="rounded-lg border border-sand/15 bg-transparent px-3 py-2.5 text-sm text-sand placeholder:text-sand/30 focus:border-ember-400 focus:outline-none"
          />
        </label>

        {trip !== "local" && (
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
        )}

        <label className="flex flex-col gap-1.5 text-left">
          <span className="text-xs font-medium uppercase tracking-wide text-sand/50">
            {trip === "round-trip" ? "Departure Date" : "Date"}
          </span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded-lg border border-sand/15 bg-transparent px-3 py-2.5 text-sm text-sand focus:border-ember-400 focus:outline-none [color-scheme:dark]"
          />
        </label>

        {trip === "round-trip" && (
          <label className="flex flex-col gap-1.5 text-left">
            <span className="text-xs font-medium uppercase tracking-wide text-sand/50">
              Return Date
            </span>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="rounded-lg border border-sand/15 bg-transparent px-3 py-2.5 text-sm text-sand focus:border-ember-400 focus:outline-none [color-scheme:dark]"
            />
          </label>
        )}

        <button
          type="submit"
          className="rounded-lg bg-ember-600 px-5 py-2.5 text-sm font-semibold text-sand transition-colors hover:bg-ember-400"
        >
          Get a Quote
        </button>
      </form>
    </div>
  );
}
