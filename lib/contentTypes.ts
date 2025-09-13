export interface AboutTopic {
    id: string;
    icon: string;
    title: string;
    items: string[];
}

export interface Job {
    id: string;
    company: string;
    period: [number, number];
    location: string;
    jobTitle: string;
    tasks: string[];
}

export interface Project {
    id: string;
    name: string;
    type: string;
    image: string;
    description?: string;
    linkTitle?: string;
    linkURL?: string;
}

interface Section {
    title: string;
    lead?: string;
}

export interface HeaderSection {
    title: string;
    claim: string;
}

export interface AboutSection {
    topics: AboutTopic[];
}

export interface ExperienceSection extends Section {
    jobs: Job[];
}

export interface ProjectsSection extends Section {
    items: Project[];
}
