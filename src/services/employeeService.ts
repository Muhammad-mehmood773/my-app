// src/services/employeeService.ts
import axios from "axios";
import { EmployeeDisplay, EmployeeForm } from "../components/employee";

const API_URL = "http://localhost:3001/employees";

export const getEmployees = async (): Promise<EmployeeDisplay[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addEmployee = async (data: EmployeeForm) => {
  const payload = { ...data, role: data.role?.value };
  const res = await axios.post(API_URL, payload);
  return res.data;
};

export const updateEmployee = async (id: number, data: EmployeeForm) => {
  const payload = { ...data, role: data.role?.value };
  const res = await axios.put(`${API_URL}/${id}`, payload);
  return res.data;
};

export const deleteEmployee = async (id: number) => { debugger
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
