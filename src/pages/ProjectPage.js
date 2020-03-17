import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';
import ProjectContent from './project-content';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

// match prop allows us to receive the name of the project it wants to display through URL
const ProjectPage = ({ match }) => {

    

    const name = match.params.name;
    const project = ProjectContent.find(project => project.name === name);

    const [projectInfo, setProjectInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() =>  {
        const fetchData = async () => {
            const result = await fetch(`/api/projects/${name}`); // auto proxied in package.json
            const body = await result.json();
            console.log(body);
            setProjectInfo(body);
        }
        fetchData();
        
    }, [name])
    // useEffect will get called whenever the variable in the array changes

    if (!project) return <NotFoundPage />;
    const otherProjects = ProjectContent.filter(project => project.name !== name);

    return (
        <>
            <h1>{project.title}</h1>
            <UpvotesSection projectName={name} upvotes={projectInfo.upvotes} setProjectInfo={setProjectInfo}/>
            {project.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={projectInfo.comments}></CommentsList>
            <AddCommentForm projectName={name} setProjectInfo={setProjectInfo}/>
            <h3>Other Projects</h3>
            <ProjectList projects={otherProjects} />
        </>
    );
}

export default ProjectPage;