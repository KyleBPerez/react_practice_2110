export default function Search({ originalCountries, setCountries }) {

  const searchUpdate = (searchParam) => {
    const newCountries = originalCountries.filter((ele) => ele.name.official.toLowerCase().includes(searchParam.toLowerCase()));
    setCountries(newCountries);
  }

  return (
    <form action="submit" onClick={(e) => {
      e.preventDefault();
    }}>
      <input
        type="text"
        placeholder="Search Country..."
        onChange={e => searchUpdate(e.target.value)}
      />
    </form>
  )
};
