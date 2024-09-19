import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing page',
  description: 'SEO Description for Pricing Page',
  keywords: ['pricing', 'devtalles', 'Jesus Aristigueta'],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing page</span>
    </>
  )
}