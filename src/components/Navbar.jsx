export function NavBar() {
    return (
      <nav className="flex justify-between items-center bg-white py-4 px-8  h-20 border-b">
        <h1 className="text-2xl font-bold">hh.</h1>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="border rounded-full px-10 py-2">
            log in
          </a>
          <a href="#" className="text-white bg-[#26231E] rounded-full px-10 py-2">
            Sign up
          </a>
        </div>
        <button className="md:hidden">Menu</button>
      </nav>
    );
  }

 