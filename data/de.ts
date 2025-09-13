import {
    HeaderSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
} from '@/lib/contentTypes';

const header: HeaderSection = {
    title: 'Hallo, ich bin Andi, ein Frontend Entwickler.',
    claim: 'Meine Leidenschaft ist die Verbindung von Technik und Gestaltung. Ich entwickle innovative Frontend-Lösungen, die sowohl technisch ausgereift als auch intuitiv zu bedienen sind.',
};

const about: AboutSection = {
    topics: [
        {
            id: 'a1',
            icon: '🚀',
            title: 'Damit unterstütze ich',
            items: [
                'Aufbau und Weiterentwicklung komplexer Frontends',
                'Einführung von Designsystemen und Komponentenbibliotheken',
                'Technische UX-Optimierung & Refactoring',
                'Koordination von UX-Design, Frontend und Backend',
            ],
        },
        {
            id: 'a2',
            icon: '💪🏻',
            title: 'So arbeite ich',
            items: [
                'Überblick & Fokus: das Ganze im Blick, Details im Griff',
                'Struktur & Innovation: Ordnung schaffen, neue Wege gehen',
                'Vernetzen & Zusammenbringen: Synergien entdecken und nutzen',
                'Sauberer, wartbarer Code: skalierbare und übersichtliche Lösungen',
            ],
        },
        {
            id: 'a3',
            icon: '🛠',
            title: 'Das kann ich',
            items: [
                'HTML (Twig), CSS (SCSS), JavaScript, TypeScript, React',
                'Drupal, PHP, Git',
                'Komponentenbasiertes Arbeiten & Code-Abstraktion',
                'Strukturierung grosser Frontend-Projekte',
            ],
        },
        {
            id: 'a4',
            icon: '🙋',
            title: 'Das bin ich',
            items: [
                'verheiratet, 3 Kinder',
                'Musik machen',
                'Wandern/Hochtouren',
            ],
        },
    ],
};

const experience: ExperienceSection = {
    title: 'Meine Erfahrung',
    jobs: [
        {
            id: 'j1',
            company: 'Helga Digitalagentur',
            period: [2019, 2025],
            location: 'Bern',
            jobTitle: 'Frontend Entwickler',
            tasks: [
                'Umsetzung von Frontends gemäss Designvorgaben mit HTML (Twig), SCSS, JS/TypeScript',
                'selbständiges Vorantreiben von Projekten, sowie Absprachen mit Backend- und UX-Team',
                'Code Reviews, Issue Management',
                'Weiterentwicklung der firmeninternen Strukturierung von Drupal Themes',
                'Drupal Konfiguration und Preprocessing mit PHP',
            ],
        },
        {
            id: 'j2',
            company: 'kirchenweb',
            period: [2017, 2019],
            location: 'Remote',
            jobTitle: 'Web Entwickler',
            tasks: [
                'PHP und Frontend Entwicklung',
                'Neuinstallation und Unterhalt des kirchenweb Systems',
            ],
        },
        {
            id: 'j3',
            company: 'zeberliEDV',
            period: [2015, 2027],
            location: 'Kleindietwil',
            jobTitle: 'Web Entwickler',
            tasks: [
                'Frontend Entwicklung mit HTML (Twig), CSS/LESS, JavaScript/jQuery',
                'Drupal Installation und Konfiguration',
                '1st Level Support',
            ],
        },
    ],
};

const projects: ProjectsSection = {
    title: 'Projekte',
    lead: 'Projekte, bei denen ich massgeblich im Frontend mitgwirkt habe. Alles bei Helga.',
    items: [
        {
            id: 'p1',
            name: 'Bystronic',
            type: 'Website',
            image: 'bystronic.png',
            linkTitle: 'bystronic.com',
            linkURL: 'https://www.bystronic.com',
        },
        {
            id: 'p2',
            name: 'Rondo',
            type: 'Website',
            image: 'rondo.png',
            linkTitle: 'rondo-online.com',
            linkURL: 'https://rondo-online.com',
        },
        {
            id: 'p3',
            name: 'UBS Football Skills',
            type: 'Mobile Webapp',
            image: 'ubs-football-skills.png',
            linkTitle: 'ubs-football-skills.ch',
            linkURL: 'https://www.ubs-football-skills.ch',
        },
    ],
};

export default { header, about, experience, projects };
