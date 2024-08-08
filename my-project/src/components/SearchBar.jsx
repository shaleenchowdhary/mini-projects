const SearchBar = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." />
        <br />
        <label htmlFor="">
          <input type="checkbox" /> Only show products in stock
        </label>
      </form>
    </div>
  );
};
export default SearchBar;
