import { Result } from 'postcss';

const SearchResults = ({ data }) => {
  return (
    <div className="bg-customBlack rounded-md shadow-md shadow-fuchsia-500 max-h-32 overflow-y-scroll">
      {data.map((result, i) => {
        return (
          <div
            key={i}
            className="py-1"
            onClick={() => alert(`You selected ${result.name}`)}
          >
            {result.name}
          </div>
        );
      })}
    </div>
  );
};
export default SearchResults;
