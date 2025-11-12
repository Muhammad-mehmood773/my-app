import React from "react";
import { EmployeeDisplay } from "./employee";

interface EmployeeDetailProps {
  data: EmployeeDisplay[];
}

const EmployeeDetail: React.FC<EmployeeDetailProps> = ({ data }) => {
  if (!data.length) return <p>No employees found.</p>;

  return (
    <div className="card">
      <div className="card-header">
        <h3>Employee List</h3>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((emp, index) => (
              <tr key={emp.id || index}>
                <td>{index + 1}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDetail;
