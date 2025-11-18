import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import AddEmployee from './components/employee';
import Roles from './components/role';

export default function DetailEmployee() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg  sticky-top"   style={{ backgroundColor: "#e3f2fd" }} data-bs-theme="light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/employee">Employee</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/roles">Roles</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/employee" element={<AddEmployee />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/" element={<AddEmployee />} /> {/* Default route */}
        </Routes>
      </Router>
    </div>
  );
};
