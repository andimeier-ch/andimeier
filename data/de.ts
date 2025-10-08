import {
    HeaderSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
} from '@/lib/contentTypes';

const header: HeaderSection = {
    title: 'Hallo, ich bin Andi, ein Frontend Entwickler.',
    claim: 'Meine Leidenschaft ist die Verbindung von Technik und Gestaltung. Ich entwickle moderne Frontend-Lösungen, die sowohl technisch ausgereift als auch intuitiv zu bedienen sind.',
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
                'Abstimmung zwischen UX, Frontend und Backend',
            ],
        },
        {
            id: 'a2',
            icon: '💪🏻',
            title: 'So arbeite ich',
            items: [
                'Den Überblick behalten und auf das Wesentliche fokussieren.',
                'Struktur geben und offen für neue Wege bleiben.',
                'Klare, wartbare und skalierbare Lösungen schaffen.',
                'Eigenverantwortlich arbeiten und aktiv mitdenken.',
                'Menschen vernetzen und Zusammenarbeit stärken.',
            ],
        },
        {
            id: 'a3',
            icon: '🛠',
            title: 'Das kann ich',
            items: [
                'HTML, Twig, CSS/SCSS, JavaScript, TypeScript, React, Vue.js',
                'PHP, Drupal, Kirby, Git',
                'Komponentenbasiertes Arbeiten & DRY Code',
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
                'Wandern und Hochtouren',
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
                'Selbständiges Vorantreiben von Projekten, sowie Absprachen mit Backend- und UX-Team',
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
                'PHP- und Frontend-Entwicklung',
                'Neuinstallation und Unterhalt des kirchenweb-Systems',
            ],
        },
        {
            id: 'j3',
            company: 'zeberliEDV',
            period: [2015, 2027],
            location: 'Kleindietwil',
            jobTitle: 'Web Entwickler',
            tasks: [
                'Frontend-Entwicklung mit HTML (Twig), CSS (LESS), JS/jQuery',
                'Drupal Installation und Konfiguration',
                '1st Level Support',
            ],
        },
    ],
};

const largeProjects: ProjectsSection = {
    title: 'Projekte',
    lead: 'Projekte von Helga Digitalagentur, bei denen ich im Frontend massgeblich beteiligt war. (Twig, SCSS, JavaScript/TypeScript, Drupal)',
    items: [
        {
            id: 'p1',
            name: 'Bystronic',
            type: 'Corporate Website',
            image: 'bystronic.png',
            linkTitle: 'bystronic.com',
            linkURL: 'https://www.bystronic.com',
        },
        {
            id: 'p2',
            name: 'Rondo',
            type: 'Corporate Website',
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

const privateProjects: ProjectsSection = {
    lead: 'Private Projekte, die ich von A-Z selbst umgesetzt habe. (Konzeption, Design, Twig, SCSS, JavaScript, Kirby CMS, Hosting)',
    items: [
        {
            id: 'p4',
            name: 'Bösch Holzbau',
            type: 'Website',
            image: 'boesch-holzbau.png',
            linkTitle: 'boesch-holzbau.ch',
            linkURL: 'https://boesch-holzbau.ch/',
        },
        {
            id: 'p5',
            name: 'Rahel Schmid Art',
            type: 'Website',
            image: 'rahelschmidart.png',
            linkTitle: 'rahelschmid.ch',
            linkURL: 'https://rahelschmid.ch/',
        },
    ],
};

export default { header, about, experience, privateProjects, largeProjects };
