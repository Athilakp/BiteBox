import { useEffect } from "react";

const User = ({ name }) => {
  useEffect(async () => {
   
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://userDTA");
    const json = await data.json();
  };
  return (
    <div className="user-card">
      <h4>Name: {name}</h4>
      <h4>Location: Hyderabad</h4>
      <h4>Contact: kpathila@gmail.com</h4>
    </div>
  );
};

export default User;
