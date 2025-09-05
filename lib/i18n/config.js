import { notFound } from "next/navigation";
import { createRequestHandler } from "next-intl/server";

const locales = ["en", "es", "fr", "de", "pt", "ja", "ko", "zh"];

export default createRequestHandler({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",

  // When a user visits the root path
  localePrefix: "as-needed",

  // The path where the translation files are located
  messageNamespace: "common",

  // Pathnames configuration (optional)
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      es: "/acerca-de",
      fr: "/a-propos",
      de: "/uber-uns",
      pt: "/sobre",
      ja: "/会社概要",
      ko: "/회사소개",
      zh: "/关于我们",
    },
    "/hosting": {
      en: "/hosting",
      es: "/alojamiento",
      fr: "/hebergement",
      de: "/hosting",
      pt: "/hospedagem",
      ja: "/ホスティング",
      ko: "/호스팅",
      zh: "/托管",
    },
    "/contact": {
      en: "/contact",
      es: "/contacto",
      fr: "/contact",
      de: "/kontakt",
      pt: "/contato",
      ja: "/お問い合わせ",
      ko: "/연락처",
      zh: "/联系我们",
    },
    "/blog": {
      en: "/blog",
      es: "/blog",
      fr: "/blog",
      de: "/blog",
      pt: "/blog",
      ja: "/ブログ",
      ko: "/블로그",
      zh: "/博客",
    },
  },
});

export { locales };
