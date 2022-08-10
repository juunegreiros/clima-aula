import React from 'react';
import Title from '../../components/Title';

import config from './config';
import {
  Container,
  ProjectsList,
  ProjectContainer,
  ProjectDescription,
  ProjectDescriptionContainer,
  ProjectImage,
  ProjectLink,
  ProjectTitle,
} from './Projects.styles';

const Projects: React.FC = () => (
  <Container>
    <Title>Projetos</Title>

    <ProjectsList>
      {config.map((project) => (
        <ProjectContainer>
          <ProjectLink href={project.link} download={project.download} target='_blank'>
            <ProjectImage src={project.image} />
            <ProjectDescriptionContainer>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectDescriptionContainer>
          </ProjectLink>
        </ProjectContainer>
      ))}
    </ProjectsList>
  </Container>
);

export default Projects;
