import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'SEO Description for Contact Page',
  keywords: ['contact', 'devtalles', 'Jesus Aristigueta'],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact page</span>
    </>
  )
}