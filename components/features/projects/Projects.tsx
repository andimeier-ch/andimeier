'use client';

import { StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import { viewportContainerVariants } from '@/lib/motion';
import { Project } from '@/data/de';
import Heading from '@/components/elements/heading/Heading';
import ProjectTeaser from '@/components/blocks/projects/ProjectTeaser';
import './projects.scss';

import BystronicScreenshot from '@/assets/images/bystronic.png';
import RondoScreenshot from '@/assets/images/rondo.png';
import UBSFootballSkillsScreenshot from '@/assets/images/ubs-football-skills.png';
import Paragraph from '@/components/elements/paragraph/Paragraph';

const images: Record<string, StaticImageData> = {
    'bystronic.png': BystronicScreenshot,
    'rondo.png': RondoScreenshot,
    'ubs-football-skills.png': UBSFootballSkillsScreenshot,
};

export default function Projects({
    title,
    lead,
    projects,
}: {
    title: string;
    lead: string;
    projects: Project[];
}) {
    return (
        <>
            <div className="section__title">
                <Heading tag="h2" designLevel={2}>
                    {title}
                </Heading>

                <Paragraph>{lead}</Paragraph>
            </div>

            <motion.div
                className="projects__list"
                variants={viewportContainerVariants}
                initial="hidden"
                whileInView="visible"
            >
                {projects.map((project) => (
                    <ProjectTeaser
                        key={project.id}
                        image={images[project.image]}
                        title={project.name}
                        subtitle={project.type}
                        linkTitle={project.linkTitle}
                        linkURL={project.linkURL}
                    />
                ))}
            </motion.div>
        </>
    );
}
