import React from 'react';

function App() {
  const users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 32 },
    { id: 3, name: 'Charlie', age: 25 },
    { id: 4, name: 'Diana', age: 30 }
  ];

  

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2> 
          <h3>{user.age}</h3>
        </div>
      ))}

    </div>
  );
}




export default App;

