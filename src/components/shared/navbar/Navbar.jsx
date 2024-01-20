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
          <nav className="bg-red-700">
            <div className="flex items-center gap-5">
              <img
                className="h-32 w-32"
                src="./college-logo.png"
                alt="college logo"
              />
              <div className="text-center text-white font-semibold ">
                <h2 className="text-7xl ">Example School & College</h2>
                <h4 className="text-4xl p-2">Estd: 2000</h4>
              </div>
            </div>
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
