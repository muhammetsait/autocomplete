import { useState } from "react";
import AutocompleteResults from "./AutocompleteResults";

const Autocomplete = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="flex-item">
      <h1>Functional Autocomplete</h1>

      <div className="autocomplete">
        <label htmlFor="mainInput">Filter by user name:</label>
        <input id="mainInput" onChange={e => setKeyword(e.target.value)} value={keyword} />
        <AutocompleteResults keyword={keyword} />
      </div>
    </div>
  );
}

export default Autocomplete;