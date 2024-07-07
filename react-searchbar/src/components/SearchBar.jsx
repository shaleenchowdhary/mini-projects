import { useState } from 'react';

const SearchBar = ({ setData }) => {
  const [input, setInput] = useState('');

  // .then .catch
  // const fetchData = (value) => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };

  // async await
  const fetchData = async (value) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const json = await response.json();
      const results = json.filter((user) => {
        return (
          value && user && user.name && user.name.toLowerCase().includes(value)
        );
      });
      setData(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    fetchData(e.target.value.toLowerCase());
  };

  return (
    <div className="bg-customBlack rounded-md shadow-md px-4 h-16 flex items-baseline shadow-fuchsia-500 mb-2">
      <i className="fa-solid fa-magnifying-glass mr-2 text-blue-600 text-xl"></i>
      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={handleChange}
        className="h-full border-none w-full text-xl focus:outline-none text-blue-300"
      />
    </div>
  );
};
export default SearchBar;
