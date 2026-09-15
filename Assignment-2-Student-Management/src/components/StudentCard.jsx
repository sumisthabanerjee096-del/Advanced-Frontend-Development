function StudentCard({ student }) {
  return (
    <div className="card">
      <img
        src={student.photo}
        alt={student.name}
        width="120"
      />

      <h3>{student.name}</h3>

      <p>Roll: {student.roll}</p>

      <p>Department: {student.department}</p>

      <p>Semester: {student.semester}</p>

      <p>CGPA: {student.cgpa}</p>
    </div>
  );
}

export default StudentCard;
