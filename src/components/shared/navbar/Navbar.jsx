import { MdEmail, MdLogin } from "react-icons/md";
import Container from "../Container";
import NavbarMenuList from "./NavbarMenuList";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaSignOutAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser } = useAuth();

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("Sign out Successfull !")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-red-500 border-t-4 border-b-4 border-red-800">
      <Container>
        <div>
          <div className="flex justify-between font-semibold text-white p-2 ">
            <span className="flex items-center gap-2 ">
              <MdEmail /> college@gmail.com
            </span>
            {user ? (
              <div className="flex gap-2 items-center">
                <img
                  className="object-fill h-10 w-10 rounded-full border-2 border-blue-300"
                  src={user.photoURL}
                  alt="user"
                />
                <button onClick={handleLogout} className="flex items-center gap-2 btn btn-sm">
                  Sign out <FaSignOutAlt size={22} />
                </button>
              </div>
            ) : (
              <Link to="/signin" className="flex items-center gap-2">
                Login <MdLogin />
              </Link>
            )}
          </div>
          <nav>
            <img
              className="w-full"
              src="https://cdagsc.edu.bd/images/top_banner.gif?p=31"
              alt="college logo"
            />

            <div>
              <NavbarMenuList />
            </div>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
