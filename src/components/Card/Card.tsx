import React from 'react';
import styled from 'styled-components';
import { City } from '../../types/city';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.extraLightOrange};
  padding: 1rem 2rem;
`;

const Card: React.FC<{ city: City }> = ({ city }) => (
  <Container>
    <span>{city.location}</span>
    <span>20°C Nublado</span>
    <div>
      <span>16°</span>
      <span>25°</span>
      <span>
        Sensação
        <span>19°C</span>
      </span>
    </div>
    <div>
      <span>
        Vento
        <span>18km/h</span>
      </span>
      <span>
        Umidade
        <span>89%</span>
      </span>
    </div>
    <div>
      <div>
        <span>Terça</span>
        <div>
          <span>18°</span>
          <span>26°</span>
        </div>
      </div>
      <div>
        <span>Terça</span>
        <div>
          <span>18°</span>
          <span>26°</span>
        </div>
      </div>
      <div>
        <span>Terça</span>
        <div>
          <span>18°</span>
          <span>26°</span>
        </div>
      </div>
      <div>
        <span>Terça</span>
        <div>
          <span>18°</span>
          <span>26°</span>
        </div>
      </div>
      <div>
        <span>Terça</span>
        <div>
          <span>18°</span>
          <span>26°</span>
        </div>
      </div>
    </div>
  </Container>
);

export default Card;
