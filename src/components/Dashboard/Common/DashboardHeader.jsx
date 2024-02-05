import { MdMenuOpen } from "react-icons/md";

const DashboardHeader = () => {

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
          <MdMenuOpen size={25} color="blue" />
        </label>
      </div>
      <div className="flex-none gap-2">
        <h3 className="text-lg font-bold text-blue-600">Name</h3>
        <div className="dropdown dropdown-hover dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar "
          >
            <div className="w-10 rounded-full ">
              <img
                alt="userPhoto"
                src="https://i.ibb.co/BGmbDFQ/assistant-teacher.jpg"
                loading="lazy"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
