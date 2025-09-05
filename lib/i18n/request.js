import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) throw new Error(`Invalid locale: ${locale}`);

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
