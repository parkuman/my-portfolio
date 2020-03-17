import React from 'react';
import ProjectContent from './project-content';
import ProjectList from '../components/ProjectList';

const ProjectListPage = () => (
    <>
        <h1>Projects</h1>
        <ProjectList projects={ProjectContent} />
    </>
);

export default ProjectListPage;