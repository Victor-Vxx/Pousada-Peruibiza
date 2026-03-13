import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const HOTEL_NAME = "Pousada Peruibiza";
const HOTEL_DESCRIPTION =
  "A Pousada Peruibiza em Peruíbe-SP oferece quartos confortáveis, piscina, Wi-Fi gratuito e estacionamento, a poucos passos da praia. Reserva direta com as melhores tarifas.";
const SITE_URL = "https://www.pousadaperuibiza.com.br";

export const metadata: Metadata = {
  title: `${HOTEL_NAME} | Hospedagem em Peruíbe-SP`,
  description: HOTEL_DESCRIPTION,
  keywords: [
    "pousada peruibiza",
    "hotel peruíbe",
    "hospedagem peruíbe sp",
    "pousada litoral sul",
    "praia peruíbe",
    "acomodação peruíbe",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${HOTEL_NAME} | Sua pousada na praia de Peruíbe`,
    description: HOTEL_DESCRIPTION,
    url: SITE_URL,
    siteName: HOTEL_NAME,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pousada Peruibiza - Peruíbe SP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${HOTEL_NAME} | Peruíbe SP`,
    description: HOTEL_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: HOTEL_NAME,
              description: HOTEL_DESCRIPTION,
              url: SITE_URL,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Erasmo Pinheiro Ribas, 33",
                addressLocality: "Peruíbe",
                addressRegion: "SP",
                postalCode: "11750-000",
                addressCountry: "BR",
              },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Piscina", value: true },
                { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuito", value: true },
                { "@type": "LocationFeatureSpecification", name: "Estacionamento", value: true },
                { "@type": "LocationFeatureSpecification", name: "Ar-condicionado", value: true },
                { "@type": "LocationFeatureSpecification", name: "Churrasqueira", value: true },
              ],
              telephone: "+55 11 99999-9999",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>{children}</body>
    </html>
  );
}
