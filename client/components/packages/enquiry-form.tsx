import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ENQUIRY_PACKAGE_OPTIONS, ENQUIRY_REQUIREMENT_OPTIONS } from "@/lib/packages";
import { buildEnquiryUrl, type EnquiryValues } from "@/lib/enquiry";

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-[invalid=true]:border-red-500";

type FormErrors = Partial<Record<keyof EnquiryValues | "consent", string>>;

const emptyValues: EnquiryValues = {
  name: "",
  businessName: "",
  businessCategory: "",
  phone: "",
  email: "",
  serviceRequired: "",
  packageValue: "",
  projectRequirements: "",
};

function validate(values: EnquiryValues, consent: boolean): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!values.businessName.trim()) errors.businessName = "Please enter your business name.";
  if (!values.businessCategory.trim()) errors.businessCategory = "Please enter your business category.";
  if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a phone number with at least 10 digits.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.serviceRequired) errors.serviceRequired = "Please choose a service.";
  if (!values.packageValue) errors.packageValue = "Please choose a package.";
  if (!values.projectRequirements.trim()) {
    errors.projectRequirements = "Please describe your project requirements.";
  }
  if (!consent) errors.consent = "Please agree to be contacted to continue.";
  return errors;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

type EnquiryFormProps = {
  selectedPackage: string;
  onPackageChange: (value: string) => void;
};

export function EnquiryForm({ selectedPackage, onPackageChange }: EnquiryFormProps) {
  const [values, setValues] = useState<EnquiryValues>(emptyValues);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const update = (field: keyof EnquiryValues) => (value: string) =>
    setValues((current) => ({ ...current, [field]: value }));

  const inputValues = { ...values, packageValue: selectedPackage };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(inputValues, consent);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const url = buildEnquiryUrl(inputValues);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmittedUrl(url);
  };

  if (submittedUrl) {
    return (
      <div className="text-center py-10 space-y-4" role="status">
        <CheckCircle2 className="mx-auto h-14 w-14 text-tech-500" aria-hidden="true" />
        <h3 className="text-2xl font-poppins font-bold">Thank you! Your enquiry is ready.</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          WhatsApp should have opened with your details. Send the message there and we will reply
          shortly. If it did not open, use the button below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-semibold h-12">
            <a href={submittedUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" />
              Open WhatsApp again
            </a>
          </Button>
          <Button variant="outline" className="h-12" onClick={() => setSubmittedUrl(null)}>
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="enquiry-name" label="Full Name *" error={errors.name}>
          <Input
            id="enquiry-name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "enquiry-name-error" : undefined}
            value={values.name}
            onChange={(e) => update("name")(e.target.value)}
          />
        </Field>
        <Field id="enquiry-business" label="Business Name *" error={errors.businessName}>
          <Input
            id="enquiry-business"
            autoComplete="organization"
            aria-invalid={!!errors.businessName}
            aria-describedby={errors.businessName ? "enquiry-business-error" : undefined}
            value={values.businessName}
            onChange={(e) => update("businessName")(e.target.value)}
          />
        </Field>
        <Field id="enquiry-category" label="Business Category *" error={errors.businessCategory}>
          <Input
            id="enquiry-category"
            placeholder="e.g. hotel, clinic, retail store"
            aria-invalid={!!errors.businessCategory}
            aria-describedby={errors.businessCategory ? "enquiry-category-error" : undefined}
            value={values.businessCategory}
            onChange={(e) => update("businessCategory")(e.target.value)}
          />
        </Field>
        <Field id="enquiry-phone" label="Phone / WhatsApp *" error={errors.phone}>
          <Input
            id="enquiry-phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
            value={values.phone}
            onChange={(e) => update("phone")(e.target.value)}
          />
        </Field>
        <Field id="enquiry-email" label="Email Address *" error={errors.email}>
          <Input
            id="enquiry-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "enquiry-email-error" : undefined}
            value={values.email}
            onChange={(e) => update("email")(e.target.value)}
          />
        </Field>
        <Field id="enquiry-service" label="Service Required *" error={errors.serviceRequired}>
          <select
            id="enquiry-service"
            className={selectClass}
            aria-invalid={!!errors.serviceRequired}
            aria-describedby={errors.serviceRequired ? "enquiry-service-error" : undefined}
            value={values.serviceRequired}
            onChange={(e) => update("serviceRequired")(e.target.value)}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {ENQUIRY_REQUIREMENT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="enquiry-package" label="Preferred Website Package *" error={errors.packageValue}>
          <select
            id="enquiry-package"
            className={selectClass}
            aria-invalid={!!errors.packageValue}
            aria-describedby={errors.packageValue ? "enquiry-package-error" : undefined}
            value={selectedPackage}
            onChange={(e) => onPackageChange(e.target.value)}
          >
            <option value="" disabled>
              Choose a package
            </option>
            {ENQUIRY_PACKAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="enquiry-requirements" label="Project Requirements *" error={errors.projectRequirements}>
        <Textarea
          id="enquiry-requirements"
          rows={4}
          placeholder="Tell us about your business, the pages or features you need and your timeline."
          aria-invalid={!!errors.projectRequirements}
          aria-describedby={
            errors.projectRequirements ? "enquiry-requirements-error" : undefined
          }
          value={values.projectRequirements}
          onChange={(e) => update("projectRequirements")(e.target.value)}
        />
      </Field>

      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <Checkbox
            id="enquiry-consent"
            checked={consent}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "enquiry-consent-error" : undefined}
            onCheckedChange={(checked) => setConsent(checked === true)}
            className="mt-0.5"
          />
          <Label htmlFor="enquiry-consent" className="text-sm leading-relaxed font-normal">
            I agree to be contacted by Cloud Media Tech Solutions regarding my enquiry.
          </Label>
        </div>
        {errors.consent && (
          <p id="enquiry-consent-error" className="text-sm text-red-600 dark:text-red-400">
            {errors.consent}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-tech-500 hover:bg-tech-600 text-white font-semibold h-12 sm:h-14 text-sm sm:text-base"
      >
        <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" />
        Submit Enquiry via WhatsApp
      </Button>
      <p className="text-xs text-center text-muted-foreground">* Required fields</p>
    </form>
  );
}
