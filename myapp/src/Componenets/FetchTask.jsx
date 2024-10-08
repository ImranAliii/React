
import React, { useState, useEffect } from 'react';
import './FetchTask.css';

const UserData = () => {
  const [users, setUsers] = useState([]); // To store all the user data
  const [currentIndex, setCurrentIndex] = useState(0); // To keep track of which user to show
  const [displayedUsers, setDisplayedUsers] = useState([]); // To store the users that have been displayed

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  
  const handleClick = () => {
    if (currentIndex < users.length) {
      const newUser = users[currentIndex]; 
      setDisplayedUsers(prevDisplayedUsers => [...prevDisplayedUsers, newUser]);  
      setCurrentIndex(prevIndex => prevIndex + 1); 
    } else {
      console.log("No more users!"); 
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '50px',backgroundColor:'gray' }}>User Data Fetcher</h1>

      {displayedUsers.length > 0 && (
          <div>
          {displayedUsers.map((user, index) => (
              <div key={index} style={{ marginTop: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <h2>Title:{user.name}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          ))}
        </div>
      )}
      <button className='btn' onClick={handleClick}>Get Next User Data</button>
    </div>
  );
};

export default UserData;
