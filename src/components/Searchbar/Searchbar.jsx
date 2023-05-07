import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
    fetchData(query);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      ></input>
      <button>Search</button>
    </form>
  );
};

export default Searchbar;