import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import { Header } from "@/components";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Faan Zone",
  description: "Collect and match coins to win big",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
  }
  return (
    <html lang={locale}>
      <body className={`${roboto.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          <main className="min-h-[100%]">{children}</main>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
