import React from "react";
import { EmployeeDisplay } from "./employee";

interface EmployeeDetailProps {
  data: EmployeeDisplay[];
   onDelete: (id?: number) => void;
    onEdit?: (emp: EmployeeDisplay) => void;
}

const EmployeeDetail: React.FC<EmployeeDetailProps> = ({ data, onEdit, onDelete }) => {
  if (!data.length) return <div className="card"><div className="card-body"> <p>No employees found. </p></div></div>;

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((emp, index) => (
              <tr key={emp.id || index}>
                <td>{emp.id}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
                 <td className="text-center">
                  <i
                    className="bi bi-pencil btn btn-info btn-sm"
                    onClick={() => onEdit?.(emp)}
                  >
                  </i>
                </td>
                <td className="text-center">
                  <i
                    className="bi bi-trash btn btn-danger btn-sm"
                    onClick={() => onDelete(emp.id)}
                  >
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDetail;
