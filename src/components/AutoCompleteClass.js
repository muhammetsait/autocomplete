import { Component } from "react";
import filterByName from "../helpers/filter";

class AutoCompleteClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      users: [],
      error: null,
    }
  }

  filterUsers = async (e) => {
    const word = e.target.value;

    this.setState({ keyword: word });

    if (!word) {
      this.setState({ users: [], error: null });
      return;
    }

    try {
      const results = await filterByName(word);
      this.setState({ users: results, error: null });
    } catch {
      this.setState({ error: "Oops! An unexpected error has occurred!" });
    }
  }

  render() {
    return (
      <div className="flex-item">
        <h1>Class Component</h1>

        <div className="autocomplete">
          <label htmlFor="mainInput">Filter by user name:</label>
          <input id="mainInput" onChange={this.filterUsers} value={this.state.keyword} data-testid="mainInput-class" />

          {this.state.error && <div className="error">{this.state.error}</div>}

          {Boolean(this.state.users.length) &&
            <div style={{ border: "solid 1px #e6e6e6" }} data-testid="results-div">
              {this.state.users.map(({ id, name }) => {
                const reg = new RegExp(`(${this.state.keyword})`, 'ig');

                return (
                  <div
                    key={id}
                    dangerouslySetInnerHTML={{ __html: name.replace(reg, '<span class="highlight">$1</span>') }}
                  />
                );
              })}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default AutoCompleteClass;