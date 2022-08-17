import React from 'react';
import styled from 'styled-components';
import { City } from '../../types/city';

const TableHeader = styled.tr`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 1rem;
  display: grid;
  gap: 0.25rem;
  grid-template-columns: 1fr 1fr 3fr;
  text-align: left;
`;

const TableRow = styled.tr`
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  display: grid;
  gap: 0.25rem;
  grid-template-columns: 1fr 1fr 3fr;
`;

const Table: React.FC<{ capitais: Array<City> }> = ({ capitais }) => (
  <table>
    <thead>
      <TableHeader>
        <th>Min</th>
        <th>Max</th>
      </TableHeader>
    </thead>
    <tbody>
      {capitais.map(({ min, max, name }) => (
        <TableRow>
          <td>{min}°</td>
          <td>{max}°</td>
          <td>{name}</td>
        </TableRow>
      ))}
    </tbody>
  </table>
);

export default Table;
