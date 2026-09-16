import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  UserRoundPlus,
  Users,
} from "lucide-react";

import Header from "./components/Header";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeForm from "./components/EmployeeForm";

import "./App.css";

const initialEmployees = [
  {
    id: 1,
    name: "Ananya Sharma",
    employeeId: "EMP001",
    department: "HR",
    gender: "Female",
    phone: "9876543210",
    localAddress: "Salt Lake, Kolkata",
    permanentAddress: "Howrah, West Bengal",
  },
  {
    id: 2,
    name: "Rahul Das",
    employeeId: "EMP002",
    department: "IT",
    gender: "Male",
    phone: "9830123456",
    localAddress: "New Town, Kolkata",
    permanentAddress: "Durgapur, West Bengal",
  },
  {
    id: 3,
    name: "Priya Sen",
    employeeId: "EMP003",
    department: "Finance",
    gender: "Female",
    phone: "9123456789",
    localAddress: "Park Street, Kolkata",
    permanentAddress: "Siliguri, West Bengal",
  },
];

const emptyForm = {
  name: "",
  employeeId: "",
  department: "",
  gender: "",
  phone: "",
  localAddress: "",
  permanentAddress: "",
};

function App() {
  const [employees, setEmployees] = useState(initialEmployees);

  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("All");

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState(emptyForm);

  const filteredEmployees = employees.filter((employee) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      employee.name.toLowerCase().includes(searchText) ||
      employee.employeeId.toLowerCase().includes(searchText);

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setEmployees(
        employees.map((employee) =>
          employee.id === editingId
            ? {
                ...employee,
                ...formData,
              }
            : employee
        )
      );
    } else {
      const newEmployee = {
        id: Date.now(),
        ...formData,
      };

      setEmployees([...employees, newEmployee]);
    }

    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (employee) => {
    setFormData({
      name: employee.name,
      employeeId: employee.employeeId,
      department: employee.department,
      gender: employee.gender,
      phone: employee.phone,
      localAddress: employee.localAddress,
      permanentAddress: employee.permanentAddress,
    });

    setEditingId(employee.id);
    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    setEmployees(
      employees.filter(
        (employee) => employee.id !== id
      )
    );
  };

  const handleCancel = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleAddEmployee = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      <Header />

      <main className="dashboard">

        {/* Hero Section */}
        <section className="overview">

          <div className="welcome">
            <p className="eyebrow">
              WORKFORCE MANAGEMENT
            </p>

            <h2>
              Employee Management
            </h2>

            <p>
              Manage, search and organize your
              employee directory from one place.
            </p>
          </div>

          <div className="count-card">

            <div className="count-icon">
              <Users size={20} />
            </div>

            <div>
              <span>Total Employees</span>
              <strong>{employees.length}</strong>
            </div>

          </div>

        </section>

        {/* Search & Filter */}
        <section className="controls">

          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search employee name or ID..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <div className="filter-box">

            <SlidersHorizontal size={16} />

            <select
              value={department}
              onChange={(e) =>
                setDepartment(e.target.value)
              }
            >
              <option value="All">
                All Departments
              </option>

              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Finance">
                Finance
              </option>
              <option value="Marketing">
                Marketing
              </option>
              <option value="Sales">
                Sales
              </option>
            </select>

          </div>

          <button
            className="primary-btn add-btn"
            onClick={handleAddEmployee}
          >
            <UserRoundPlus size={17} />
            Add Employee
          </button>

        </section>

        {/* Add/Edit Form */}
        {showForm && (
          <EmployeeForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            editingId={editingId}
            onCancel={handleCancel}
          />
        )}

        {/* Employee Directory */}
        <section className="employee-section">

          <div className="section-heading">

            <div>
              <p className="section-label">
                DIRECTORY
              </p>

              <h2>Employees</h2>

              <p>
                Showing {filteredEmployees.length} of{" "}
                {employees.length} employees
              </p>
            </div>

          </div>

          {filteredEmployees.length > 0 ? (

            <div className="employee-grid">

              {filteredEmployees.map((employee) => (
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}

            </div>

          ) : (

            <div className="empty-state">

              <div className="empty-icon">
                <Search size={25} />
              </div>

              <h3>
                No employees found
              </h3>

              <p>
                Try changing your search or
                department filter.
              </p>

            </div>

          )}

        </section>

      </main>

      <footer className="footer">
        <p>
          Employee Directory • React Assignment 3
        </p>
      </footer>

    </div>
  );
}

export default App;
