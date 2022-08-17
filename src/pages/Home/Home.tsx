import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Title';
import Search from '../../components/Search';
import Linha from '../../components/Linha';
import Table from '../../components/Table';
import Card from '../../components/Card';
import { City } from '../../types/city';

const cities = [
  {
    location: 'Niterói, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: false,
    min: 18,
    max: 27,
    name: 'Niterói',
  },
  {
    location: 'Rio de Janeiro, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 18,
    max: 27,
    name: 'Rio de Janeiro',
  },
  {
    location: 'São Paulo, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 11,
    max: 22,
    name: 'São Paulo',
  },
  {
    location: 'São Paulo, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 11,
    max: 22,
    name: 'São Paulo',
  },
  {
    location: 'São Paulo, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 11,
    max: 22,
    name: 'São Paulo',
  },
  {
    location: 'São Paulo, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 11,
    max: 22,
    name: 'São Paulo',
  },
  {
    location: 'São Paulo, RJ - Brasil',
    temperature: 20,
    weather: 'Nublado',
    sensation: 19,
    wind: 18,
    humidity: 89,
    capital: true,
    min: 11,
    max: 22,
    name: 'São Paulo',
  },
];

const TableWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Home = () => {
  const [selectedCity, setSelectedCity] = React.useState<City | undefined>(undefined);
  const [searchTerm, setSearchTerm] = React.useState('');
  const capitais = cities.filter((city) => city.capital);
  const halfLength = capitais.length / 2;

  React.useEffect(() => {
    if (searchTerm) {
      const lowercaseSearchTerm = searchTerm.toLowerCase();
      const newCity = cities.filter((city) => {
        const lowercaseName = city.name.toLowerCase();
        return lowercaseName.includes(lowercaseSearchTerm);
      });
      setSelectedCity(newCity[0]);
    }
  }, [searchTerm]);

  return (
    <div>
      <Title>Previsão do tempo</Title>
      {selectedCity && <Card city={selectedCity} />}
      <Search
        label='Insira aqui o nome da cidade'
        name='search'
        id='search'
        submitSearch={setSearchTerm}
      />
      <Linha />

      <Title>Capitais</Title>
      <TableWrapper>
        <Table capitais={capitais.slice(0, halfLength)} />
        <Table capitais={capitais.slice(halfLength, capitais.length)} />
      </TableWrapper>
    </div>
  );
};

export default Home;
