import de from '@/data/de';

export type Locale = 'de' | 'en';

export function getDictionary(locale: Locale) {
    switch (locale) {
        // case 'en':
        //     return null;
        case 'de':
            return de;
        default:
            return de;
    }
}
