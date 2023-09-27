import "./App.css";
import { useState } from "react";

function App() {
  const [userEmails, setUserEmails] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map((user) => {
      return user.email;
    });

    setUserEmails(userEmailArray);
  };

  const handleButtonClick = () => {
    getAllUserEmails();
    if (userEmails.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % userEmails.length);
    }
  };

  return (
    <>
      <h1>API learnings</h1>
      <button onClick={handleButtonClick}>Show next Email</button>
      {userEmails.length > 0 && (
        <p>Email: {userEmails[currentIndex]}</p>
      )}
    </>
  );
}

export default App;
