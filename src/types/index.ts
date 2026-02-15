export type PricingOption = "full_price_100" | "discount_70";

export interface LeadRequest {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  newsletter: boolean;
  pricingOption: PricingOption;
  sourcePage: string;
  honeypot?: string;
}

export interface LeadResponse {
  ok: boolean;
  message: string;
  requestId?: string;
  fieldErrors?: Partial<Record<keyof LeadRequest, string>>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PageSEO {
  title: string;
  description: string;
  ogImage: string;
}

export interface PlaceholderAsset {
  id: string;
  current: string;
  futureTarget: string;
  alt: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "past";
  description: string;
}
