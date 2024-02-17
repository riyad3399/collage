import { Link, Outlet } from "react-router-dom";
import DashboardHeader from "../components/Dashboard/Common/DashboardHeader";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data.data);
      });
  }, [user]);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <DashboardHeader />
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200  text-base-content ">
          <li>
            <Link to="add-student-info">Add Student Info</Link>
          </li>
          <li>
            <Link to='showAllStudents'>All Students</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
