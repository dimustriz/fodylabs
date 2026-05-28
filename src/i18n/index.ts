import en from './en.json';
import de from './de.json';
import ru from './ru.json';
import uk from './uk.json';
import es from './es.json';
import it from './it.json';
import fr from './fr.json';

const translations: Record<string, typeof en> = { en, de, ru, uk, es, it, fr };

const defaultLocale = 'en';
const locales = Object.keys(translations);

const localeNames: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский',
  uk: 'Українська',
  es: 'Español',
  it: 'Italiano',
  fr: 'Français',
};

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  if (lang && locales.includes(lang)) return lang;
  return defaultLocale;
}

export function t(lang: string): typeof en {
  return translations[lang] || translations[defaultLocale];
}

export function localePath(lang: string, path: string): string {
  const cleanPath = path.replace(/^\//, '');
  if (lang === defaultLocale) return "/" + cleanPath;
  return "/" + lang + "/" + cleanPath;
}

export { locales, localeNames, defaultLocale };
