import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  justify-content: center;
  display: flex;
  flex-grow: 1;
  padding: 2.5rem 7.375rem;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    padding: 3.25rem 7.375rem;
  }
`;
