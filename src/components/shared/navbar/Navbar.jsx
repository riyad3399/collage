import { MdEmail, MdLogin } from "react-icons/md";
import Container from "../Container";
import NavbarMenuList from "./NavbarMenuList";

const Navbar = () => {
  return (
    <div className="bg-red-500 border-t-4 border-b-4 border-red-800">
      <Container>
        <div>
          <div className="flex justify-between font-semibold text-white p-2 ">
            <span className="flex items-center gap-2 ">
              <MdEmail /> college@gmail.com
            </span>
            <button className="flex items-center gap-2">
              Login <MdLogin />
            </button>
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
