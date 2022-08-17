import styled from 'styled-components';
import circle from '../../assets/circle.png';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.light};
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export default Title;
