import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'About page',
  description: 'SEO Description for About Page',
  keywords: ['about', 'devtalles', 'Jesus Aristigueta'],
};

export default function AboutPage() {
  return (
    <span className="text-7xl">About page</span>
  )
}