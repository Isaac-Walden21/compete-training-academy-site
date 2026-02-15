"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { trackEvent } from "@/lib/analytics";
import { leadSchema, type LeadInput } from "@/lib/validation/lead";
import type { LeadResponse, PricingOption } from "@/types";
import { Button } from "@/components/ui/Button";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { InputField } from "@/components/ui/InputField";
import { RadioGroup } from "@/components/ui/RadioGroup";
import { TextAreaField } from "@/components/ui/TextAreaField";

interface LeadFormProps {
  sourcePage: string;
  defaultSubject?: string;
  formId?: string;
}

const options: { value: PricingOption; label: string }[] = [
  { value: "full_price_100", label: "I WANT FULL PRICE $100" },
  { value: "discount_70", label: "I WANT DISCOUNT $70 + FREE BOOK" }
];

export function LeadForm({ sourcePage, defaultSubject = "", formId }: LeadFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);

  const defaultValues = useMemo<LeadInput>(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      subject: defaultSubject,
      message: "",
      newsletter: false,
      pricingOption: "full_price_100",
      sourcePage,
      honeypot: ""
    }),
    [defaultSubject, sourcePage]
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues
  });

  useEffect(() => {
    setValue("subject", defaultSubject || "", { shouldValidate: true });
  }, [defaultSubject, setValue]);

  useEffect(() => {
    setValue("sourcePage", sourcePage, { shouldValidate: false });
  }, [setValue, sourcePage]);

  useEffect(() => {
    const subjectFromQuery = searchParams.get("subject");
    if (subjectFromQuery) {
      setValue("subject", subjectFromQuery, { shouldValidate: true });
    }
  }, [searchParams, setValue]);

  const selectedPricing = watch("pricingOption");

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    const payload = (await response.json()) as LeadResponse;

    if (!response.ok || !payload.ok) {
      setServerError(payload.message || "We could not submit the form right now.");
      return;
    }

    trackEvent("lead_submit", {
      source: sourcePage,
      pricing_option: values.pricingOption,
      newsletter: values.newsletter
    });

    router.push("/thank-you");
  });

  return (
    <form id={formId} className="space-y-5 rounded-3xl border border-navy/10 bg-white p-6 shadow-lg" onSubmit={onSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          label="First Name"
          requiredLabel
          autoComplete="given-name"
          error={errors.firstName?.message}
          {...register("firstName")}
        />
        <InputField
          label="Last Name"
          requiredLabel
          autoComplete="family-name"
          error={errors.lastName?.message}
          {...register("lastName")}
        />
      </div>

      <InputField
        label="Email"
        type="email"
        requiredLabel
        autoComplete="email"
        error={errors.email?.message}
        {...register("email")}
      />

      <CheckboxField label="Sign Up For News And Updates" {...register("newsletter")} />

      <InputField label="Subject" requiredLabel error={errors.subject?.message} {...register("subject")} />

      <TextAreaField
        label="Message"
        requiredLabel
        rows={6}
        maxLength={1000}
        error={errors.message?.message}
        {...register("message")}
      />

      <RadioGroup
        name="pricingOption"
        options={options}
        selected={selectedPricing}
        onChange={(value) => setValue("pricingOption", value as PricingOption, { shouldValidate: true })}
        error={errors.pricingOption?.message}
      />

      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      <input type="hidden" readOnly {...register("sourcePage")} />

      {serverError ? <p className="rounded-md bg-red-100 px-3 py-2 text-sm text-red-700">{serverError}</p> : null}

      <Button type="submit" loading={isSubmitting} size="lg" className="w-full sm:w-auto">
        Submit
      </Button>
    </form>
  );
}
