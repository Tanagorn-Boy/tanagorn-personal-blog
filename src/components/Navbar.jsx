import { Linkedin, Github, Mail } from "lucide-react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center bg-white py-4 px-8  h-20 border-b">
      <h1 className="text-2xl font-bold">hh.</h1>
      <div className="hidden md:flex space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="border rounded-full px-10 py-2"
        >
          log in
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="text-white bg-[#26231E] rounded-full px-10 py-2"
        >
          Sign up
        </button>
      </div>
      <button className="md:hidden">
        <Menu />
      </button>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className=" bg-[#EFEEEB] flex flex-col py-4 sm:flex-row  justify-between  items-center">
      <div className="flex flex-col sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-6 px-4">
        <span className="font-medium">Get in touch</span>
        <div className="flex space-x-4">
          <Linkedin />
          <Github />
          <Mail />
        </div>
      </div>
      <div className="flex items-center px-4">Home page</div>
    </footer>
  );
}

export default Footer;
