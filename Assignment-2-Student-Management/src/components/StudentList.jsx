import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          student={student}
        />
      ))}
    </div>
  );
}

export default StudentList;
