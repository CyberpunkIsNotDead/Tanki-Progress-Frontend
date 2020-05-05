import React from 'react';

export const SearchField = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // logic
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input type='search' name='search' placeholder='search user' />
      <input type='submit' value='Search' />
    </form>
  );
};
