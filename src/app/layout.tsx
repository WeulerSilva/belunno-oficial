import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {


  viewport: "width=device-width, initial-scale=1.0",
  title: "Belunno - Qualidade, Sabor e Tradição",
  description: "Desde 2007, a Belunno é sinônimo de excelência na produção de embutidos de carne suína. Nosso compromisso com a qualidade e tradição faz de cada produto uma experiência única. Certificados pelo SIF (Selo de Inspeção Federal), nossos produtos são rigorosamente inspecionados para garantir a segurança e a satisfação dos nossos consumidores.",
  keywords: 'Embutidos de Carne Suína, Qualidade, Tradição, SIF, Segurança Alimentar, Produção Sustentável, Produtos Certificados, Belunno, Embutido cozido de suíno, linguiça toscana,linguiça para churrasco, linguiça fininha,linguiça toscana apimentada, calabresa, lombo suino, salaminho, copa defumada',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    url: "https://belunno.com.br",
    title: "Belunno - Qualidade, Sabor e Tradição",
    description: "Desde 2007, a Belunno é sinônimo de excelência na produção de embutidos de carne suína. Nosso compromisso com a qualidade e tradição faz de cada produto uma experiência única. Certificados pelo SIF (Selo de Inspeção Federal), nossos produtos são rigorosamente inspecionados para garantir a segurança e a satisfação dos nossos consumidores.",
    siteName: "Belunno",
    images: [{
      url: "/images/pig2.png",
      alt: "Belunno - Qualidade, Sabor e Tradição"
    }],
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    site: "@belunno",
    creator: "@belunno",
    title: "Belunno - Qualidade, Sabor e Tradição",
    description: "Descubra como a Waveseg® está revolucionando o mercado de piscinas de ondas com tecnologia sustentável e personalizável, proporcionando experiências de surf únicas e inovadoras.",
    images: [{
      url: "/images/pig2.png",
      alt: "Belunno - Qualidade, Sabor e Tradição®"
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
