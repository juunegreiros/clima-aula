import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 80vw;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    gap: 4rem;
  }
`;

export const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const ProjectContainer = styled.li``;

export const ProjectLink = styled.a`
  align-items: center;
  color: inherit;
  text-decoration: none;
  display: flex;
  gap: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  border-radius: 1.875rem;
  overflow: hidden;
  &:hover {
    opacity: 0.8;
  }
  padding-right: 1rem;
`;

export const ProjectImage = styled.img`
  height: 250px;
  width: 220px;
  object-fit: contain;
  padding: 1rem;
`;

export const ProjectDescriptionContainer = styled.div`
  flex: 1;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
`;
