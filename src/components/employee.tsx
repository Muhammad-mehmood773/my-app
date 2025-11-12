import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import EmployeeDetail from "./empDetail";
import Select from "react-select";
import "./employee.css";
import { addEmployee, getEmployees } from "../services/employeeService";

export type EmployeeForm = {
    firstName: string;
    lastName: string;
    email: string;
    role: { value: string; label: string } | null;
};
export type EmployeeDisplay = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
};

const roleOptions = [
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "Employee", label: "Employee" },
];

export default function AddEmployee() {
    const [employeeList, setEmployeeList] = useState<EmployeeDisplay[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            role: null,
        },
    });

    const fetchEmployees = async () => {
        try {
            const data = await getEmployees();
            setEmployeeList(data);
        } catch (err) {
            console.error("Error fetching employees:", err);
        }
    };



    useEffect(() => {
        fetchEmployees();
    }, []);

    const onSubmit = async (data: EmployeeForm) => {
        try {
            setIsLoading(true);
            await addEmployee(data); 
            alert("Employee saved successfully!");

            reset({
                firstName: "",
                lastName: "",
                email: "",
                role: null,
            });

            fetchEmployees();
        } catch (error) {
            console.error("Error saving employee:", error);
            alert("Failed to save employee!");
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <div className="container-fuild mt-4 p-2">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-primary">Add Employee</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)} className="p-3 border rounded bg-light">

                                {/* First Name */}
                                <div className="mb-3">
                                    <label className="form-label">First Name <span className="text-danger fs-5 fw-bolder">*</span></label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                                        placeholder="Enter first name"
                                        {...register("firstName", { required: "First name is required" })}
                                    />
                                    {errors.firstName && (
                                        <div className="invalid-feedback">{errors.firstName.message}</div>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div className="mb-3">
                                    <label className="form-label">Last Name <span className="text-danger fs-5 fw-bolder">*</span></label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                                        placeholder="Enter last name"
                                        {...register("lastName", { required: "Last name is required" })}
                                    />
                                    {errors.lastName && (
                                        <div className="invalid-feedback">{errors.lastName.message}</div>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="mb-3">
                                    <label className="form-label">Email <span className="text-danger fs-5 fw-bolder">*</span></label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        placeholder="Enter email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid email address",
                                            },
                                        })}
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                </div>

                                {/* Role Dropdown */}
                                <div className="mb-3">
                                    <label className="form-label">Role <span className="text-danger fs-5 fw-bolder">*</span></label>
                                    <Controller
                                        name="role"
                                        control={control}
                                        rules={{ required: "Role is required" }}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={roleOptions}
                                                placeholder="Select role..."
                                                isClearable
                                                styles={{
                                                    control: (base, state) => ({
                                                        ...base,
                                                        borderColor: errors.role ? "red" : base.borderColor,
                                                        "&:hover": { borderColor: errors.role ? "red" : base.borderColor },
                                                        boxShadow: state.isFocused
                                                            ? errors.role ? "0 0 0 1px red" : base.boxShadow
                                                            : base.boxShadow,
                                                    }),
                                                }}
                                            />
                                        )}
                                    />
                                    {errors.role && (
                                        <div className="invalid-feedback" style={{ display: "block" }}>
                                            {errors.role.message}
                                        </div>
                                    )}
                                </div>

                                <div className="text-end">
                                    <div className="text-end">
                                        <button
                                            type="submit"
                                            className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span
                                                        className="spinner-border spinner-border-sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    ></span>
                                                    Saving...
                                                </>
                                            ) : (
                                                "Save Employee"
                                            )}
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Employee List */}
                <div className="col-md-6">
                    <EmployeeDetail data={employeeList} />
                </div>
            </div>
        </div>
    );
}
