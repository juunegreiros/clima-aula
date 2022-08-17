import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

type SearchProps = {
  label: string;
  name: string;
  id: string;
  type?: string;
  submitSearch: (term: string) => void;
};

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.25rem;
  width: 400px;
  border-radius: 0;
  border: none;
`;

const Form = styled.form`
  margin-top: 1rem;
  position: relative;
`;

export const Icon = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: black;
  position: absolute;
  top: calc(50% - 8px);
  right: 0.5rem;
`;

const Search: React.FC<SearchProps> = ({ label, name, id, type = 'text', submitSearch }) => {
  const [value, setValue] = React.useState('');
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    submitSearch(value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={label}
        aria-label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Icon />
    </Form>
  );
};

export default Search;
