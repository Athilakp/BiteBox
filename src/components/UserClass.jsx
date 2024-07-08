import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userinfo: {
        name: "dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://userDTA");
    const json = await data.json();
    this.setState({
      userinfo: json,
    });
  }
  componentDidUpdate(){


  }
  componentWillUnmount(){

  }
  render() {
    const { name, location } = this.state;
    return (
      <div className="user-card">
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h4>Contact: kpathila@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
