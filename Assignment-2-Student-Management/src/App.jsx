import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";

function App() {

  const [students, setStudents] = useState([
    {
      name: "Sumistha Banerjee",
      roll: "2263",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 8.5,
      photo: "https://via.placeholder.com/120"
    },

    {
      name: "Rahul Das",
      roll: "2394",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 8.0,
      photo: "https://via.placeholder.com/120"
    },

    {
      name: "Partha chakraborty",
      roll: "2264",
      department: "Computer Applications",
      semester: "6th",
      cgpa: 8.2,
      photo: "https://via.placeholder.com/120"
    }
  ]);

  const sortByCGPA = () => {
    const sorted = [...students].sort(
      (a, b) => b.cgpa - a.cgpa
    );

    setStudents(sorted);
  };

  return (
    <>
      <Header />

      <button onClick={sortByCGPA}>
        Sort by CGPA
      </button>

      <StudentList students={students} />

      <Footer />
    </>
  );
}

export default App;
