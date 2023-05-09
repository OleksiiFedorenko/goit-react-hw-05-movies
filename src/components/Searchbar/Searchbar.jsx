import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Form, Input, Button, ButtonLabel } from './Searchbar.styled';

const Searchbar = ({ fetchData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(
    () => searchParams.get('query') ?? ''
  );

  function onSubmit(e) {
    e.preventDefault();
    const query = e.target.input.value.trim();
    const newSearchParams = query ? { query } : {};
    setSearchParams(newSearchParams);

    if (!query) return toast.warn('Query cannot be empty.');
    fetchData(query);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        autoFocus
        placeholder="Search movies"
      ></Input>
      <Button>
        <ButtonLabel>Search</ButtonLabel>
      </Button>
    </Form>
  );
};

Searchbar.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default Searchbar;
