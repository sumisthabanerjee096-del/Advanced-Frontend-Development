import {
  Pencil,
  Trash2,
  Phone,
  MapPin,
  Building2,
  UserRound,
} from "lucide-react";

function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <article className="employee-card">

      <div className="employee-top">
        <div className="avatar">
          {employee.name.charAt(0).toUpperCase()}
        </div>

        <div className="employee-info">
          <h3>{employee.name}</h3>
          <p>{employee.employeeId}</p>
        </div>
      </div>

      <div className="employee-details">

        <div className="detail-item">
          <Building2 size={15} />
          <div>
            <span>Department</span>
            <strong>{employee.department}</strong>
          </div>
        </div>

        <div className="detail-item">
          <UserRound size={15} />
          <div>
            <span>Gender</span>
            <strong>{employee.gender}</strong>
          </div>
        </div>

        <div className="detail-item">
          <Phone size={15} />
          <div>
            <span>Phone</span>
            <strong>{employee.phone}</strong>
          </div>
        </div>

        <div className="detail-item">
          <MapPin size={15} />
          <div>
            <span>Local Address</span>
            <strong>{employee.localAddress}</strong>
          </div>
        </div>

        <div className="detail-item full-detail">
          <MapPin size={15} />
          <div>
            <span>Permanent Address</span>
            <strong>{employee.permanentAddress}</strong>
          </div>
        </div>

      </div>

      <div className="card-actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(employee)}
        >
          <Pencil size={14} />
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(employee.id)}
        >
          <Trash2 size={14} />
          Delete
        </button>

      </div>

    </article>
  );
}

export default EmployeeCard;
