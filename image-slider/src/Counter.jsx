function Counter() {
  let count = 0;

  const increment = () => {
    count += 1;
    console.log(count); // This will log the updated count, but React won't re-render the component
  };

  return (
    <div>
      <p>Count: {count}</p> {/* This will always display 0 */}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
export default Counter;
