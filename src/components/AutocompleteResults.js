import { useEffect, useState } from "react";
import filterByName from "../helpers/filter";

const AutocompleteResults = ({ keyword }) => {
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (!keyword) {
      setErrorMsg(null);
      setUsers([]);
      return;
    }

    filterByName(keyword).then(results => {
      setUsers(results);
      setErrorMsg(null);
    }).catch(() => {
      setErrorMsg("Oops! An unexpected error has occurred!");
    });
  }, [keyword]);

  if (errorMsg) return <div className="error">{errorMsg}</div>

  if (!users.length) return null;

  return (
    <div style={{
      border: "solid 1px #e6e6e6",
    }}>
      {users.map(({ id, name }) => {
        const reg = new RegExp(`(${keyword})`, 'ig');
        const highlightedName = name.replace(reg, '<span class="highlight">$1</span>');

        return (
          <div
            key={id}
            dangerouslySetInnerHTML={{ __html: highlightedName }}
          />
        );
      })}
    </div>
  )
}

export default AutocompleteResults;