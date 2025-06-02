import React from 'react';

const students = [
  { id: 1, name: "Nour", age: 22 },
  { id: 2, name: "Ali", age: 21 },
  { id: 3, name: "Leila", age: 23 }
];

function App() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - Age: {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
