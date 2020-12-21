import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
    users: [],
    text: "",
    val: [],
    trigger: "",
    searchtext: "",
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
      this.setState({
        ...this.state,
        users: res.data,
      })
    );
  }

  changehandler = (e) => {
    console.log(e.target.value);
    this.setState({
      ...this.state,
      text: e.target.value,
      searchtext: e.target.value,
      trigger: "",
    });
  };

  clickhandler = () => {
    this.setState({
      ...this.state,
      trigger: this.state.text,
      text: " ",
    });
  };

  render() {
    console.log(this.state.users);
    console.log(this.state.text);
    return (
      <>
        <input
          onChange={this.changehandler}
          value={this.state.text}
          type="search"
        ></input>

        <button onClick={this.clickhandler}>Submit</button>
        <p key={this.state.val.id}>{this.state.val.name}</p>

        {/* search based */}
        {this.state.text
          ? this.state.users
              .filter((user) =>
                user.name.toUpperCase().includes(this.state.text.toUpperCase())
              )
              .map((Name) => <div>{Name.name}</div>)
          : ""}

        {/* on submit based */}
        {/* {this.state.trigger ? this.state.users
          .filter((user) => user.name.toUpperCase().includes(this.state.searchtext.toUpperCase()))
          .map((Name) => (
            <div>{Name.name}</div>
          )) : ""} */}
      </>
    );
  }
}
export default App;
