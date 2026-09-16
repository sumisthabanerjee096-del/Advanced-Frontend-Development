import {
  UserPlus,
  Save,
  X,
} from "lucide-react";

function EmployeeForm({
  formData,
  setFormData,
  onSubmit,
  editingId,
  onCancel,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="form-panel">

      <div className="form-heading">

        <div className="form-title-icon">
          {editingId ? <Save size={20} /> : <UserPlus size={20} />}
        </div>

        <div>
          <h2>
            {editingId ? "Edit Employee" : "Add New Employee"}
          </h2>

          <p>
            {editingId
              ? "Update employee information"
              : "Enter employee information below"}
          </p>
        </div>

      </div>

      <form onSubmit={onSubmit}>

        <div className="form-grid">

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </div>

          <div className="input-group">
            <label>Employee ID</label>

            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              placeholder="EMP001"
              required
            />
          </div>

          <div className="input-group">
            <label>Department</label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select department</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className="input-group">
            <label>Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="input-group">
            <label>Local Address</label>

            <input
              type="text"
              name="localAddress"
              value={formData.localAddress}
              onChange={handleChange}
              placeholder="Enter local address"
              required
            />
          </div>

          <div className="input-group full-width">
            <label>Permanent Address</label>

            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              placeholder="Enter permanent address"
              rows="3"
              required
            />
          </div>

        </div>

        <div className="form-actions">

          {editingId && (
            <button
              type="button"
              className="cancel-btn"
              onClick={onCancel}
            >
              <X size={15} />
              Cancel
            </button>
          )}

          <button
            type="submit"
            className="primary-btn"
          >
            {editingId ? (
              <>
                <Save size={16} />
                Update Employee
              </>
            ) : (
              <>
                <UserPlus size={16} />
                Add Employee
              </>
            )}
          </button>

        </div>

      </form>

    </section>
  );
}

export default EmployeeForm;
