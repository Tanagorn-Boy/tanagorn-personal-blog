function NavBar() {
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

function HeroSection() {
  return (
    <main className="container px-4 py-8 lg:py-16 mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Stay <br />
            Informed,
            Informed,
            <br />
            Stay Inspired
          </h1>
          <p className="text-lg text-gray-500">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="Person with a black cat"
          className="h-[530px] object-cover rounded-lg shadow-lg lg:w-1/3 mx-4 mb-8 lg:mb-0"
        />
        <div className="lg:w-1/3 lg:pl-8">
          <h2 className="text-xl font-semibold mb-2">-Author</h2>
          <h3 className="text-2xl font-bold mb-3">Thompson P.</h3>
          <p className="text-gray-500 mb-4">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="text-gray-500">
            When i’m not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}

export default App;
