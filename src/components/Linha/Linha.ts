import styled from 'styled-components';

const Linha = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.light};
  margin: 1rem 0;
`;

export default Linha;
