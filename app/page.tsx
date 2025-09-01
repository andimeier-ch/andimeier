import Hero from '@/components/blocks/hero/Hero';
import Claim from '@/components/blocks/claim/Claim';
import { getDictionary } from '@/lib/i18n';

export default function Home() {
    const { header } = getDictionary('de');

    return (
        <header>
            <Hero>{header.title}</Hero>
            <Claim>{header.claim}</Claim>
        </header>
    );
}
