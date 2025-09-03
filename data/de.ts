export interface HeaderContent {
    title: string;
    claim: string;
}

export interface AboutTopic {
    icon: string;
    title: string;
    items: string[];
}

export interface About {
    topics: AboutTopic[];
}

interface Section {
    title: string;
    lead?: string;
}

export interface Job {
    company: string;
    period: [number, number];
    location: string;
    jobTitle: string;
    tasks: string[];
}

interface Experience extends Section {
    jobs: Job[];
}

export interface Project {
    name: string;
    type: string;
    image: string;
    description: string;
}

interface Projects extends Section {
    items: Project[];
}

const header: HeaderContent = {
    title: 'Hallo, ich bin Andi, ein Frontend Entwickler.',
    claim: 'Meine Leidenschaft ist die Verbindung von Technik und Gestaltung. Ich entwickle innovative Frontend-Lösungen, die sowohl technisch ausgereift als auch intuitiv zu bedienen sind.',
};

const about: About = {
    topics: [
        {
            icon: '🚀',
            title: 'Dabei unterstütze ich',
            items: [
                'Aufbau und Weiterentwicklung komplexer Frontends',
                'Einführung von Designsystemen und Komponentenbibliotheken',
                'Technische UX-Optimierung & Refactoring',
                'Enge Zusammenarbeit mit UX, Design & Backend',
            ],
        },
        {
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

const experience: Experience = {
    title: 'Meine Erfahrung',
    jobs: [
        {
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

const projects: Projects = {
    title: 'Projekte',
    lead: 'Projekte, bei denen ich massgeblich mitgwirkt habe. Alles bei Helga.',
    items: [
        { name: 'Bystronic', type: 'Website', image: '', description: '' },
        { name: 'Rondo', type: 'Website', image: '', description: '' },
        {
            name: 'UBS Football Skills',
            type: 'Mobile Webapp',
            image: '',
            description: '',
        },
    ],
};

export default { header, about, experience, projects };
