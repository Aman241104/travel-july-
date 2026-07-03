"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  travellers: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const PHONE_PATTERN = /^[6-9]\d{9}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EnquiryForm({
  defaultService = "",
  defaultDetails = "",
}: {
  defaultService?: string;
  defaultDetails?: string;
}) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    date: "",
    travellers: "1",
    details: defaultDetails,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!PHONE_PATTERN.test(form.phone.trim()))
      next.phone = "Enter a valid 10-digit mobile number.";
    if (!EMAIL_PATTERN.test(form.email.trim()))
      next.email = "Enter a valid email address.";
    if (!form.service) next.service = "Choose what you need help with.";
    if (!form.travellers || Number(form.travellers) < 1)
      next.travellers = "At least 1 traveller.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    // TODO: replace with real submit — POST to /api/enquiry or an email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ember-600/20 bg-ember-600/5 p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ember-600 text-sand">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10.5l3.5 3.5L16 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className="mt-4 font-display text-xl font-semibold text-ink">
          Thanks, {form.name.split(" ")[0]} — we&apos;ve got it.
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          Your enquiry has been received. Our travel desk will reach out
          within 24 hours on {form.phone}.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({
              name: "",
              phone: "",
              email: "",
              service: "",
              date: "",
              travellers: "1",
              details: "",
            });
          }}
          className="mt-6 text-sm font-semibold text-ember-600 hover:text-ember-800"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <Field label="Full Name" error={errors.name}>
        <input
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Aman Patel"
          className={inputClasses(!!errors.name)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" error={errors.phone}>
          <input
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="98200 11234"
            inputMode="numeric"
            className={inputClasses(!!errors.phone)}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
            type="email"
            className={inputClasses(!!errors.email)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service Interest" error={errors.service}>
          <select
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClasses(!!errors.service)}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </Field>
        <Field label="Number of Travellers" error={errors.travellers}>
          <input
            type="number"
            min={1}
            value={form.travellers}
            onChange={(e) => update("travellers", e.target.value)}
            className={inputClasses(!!errors.travellers)}
          />
        </Field>
      </div>

      <Field label="Preferred Travel Date">
        <input
          type="date"
          value={form.date}
          onChange={(e) => update("date", e.target.value)}
          className={inputClasses(false)}
        />
      </Field>

      <Field label="Additional Details (optional)">
        <textarea
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
          rows={4}
          placeholder="Route, budget, group size — anything that helps us plan."
          className={inputClasses(false)}
        />
      </Field>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-ember-600 px-6 py-3 text-sm font-semibold text-sand transition-colors hover:bg-ember-400"
      >
        Send Enquiry
      </button>
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return [
    "w-full rounded-lg border bg-white/60 px-4 py-2.5 text-sm text-ink placeholder:text-stone-400 focus:outline-none",
    hasError
      ? "border-ember-600 focus:border-ember-600"
      : "border-ink/15 focus:border-ember-600",
  ].join(" ");
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="text-xs text-ember-600">{error}</span>}
    </label>
  );
}
