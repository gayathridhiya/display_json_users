import React from "react";

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          users: data
        })
      );
  }
  render() {
    const data = this.state.users;
    // console.log(data);
    return (
      <>
        <div>App Component</div>
        {data && data.map((usr, idx) => <li key={idx}>{usr.username}</li>)}
      </>
    );
  }
}

export default AppComponent;
