export function ArticleSection() {
  return (
    <div className=" w-full max-w-7xl mx-auto md:px-6 lg:px-8 mb-10">
      <h2 className="text-xl font-bold mb-4 px-4">Latest articles</h2>
      <div className="bg-[#EFEEEB] px-4 py-4 md:py-3 md:rounded-sm flex flex-col space-y-4  md:space-y-0 md:justify-between">
        <div className="flex md:justify-between">
          <div className="hidden md:flex space-x-2">
            <button
              className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[#DAD6D1]
            "
            >
              Highlight
            </button>
            <button
              className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[muted]
            "
            >
              Cat
            </button>
            <button
              className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[muted]
            "
            >
              Inspiration
            </button>
            <button
              className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium bg-[muted]
            "
            >
              General
            </button>
          </div>

          <div className="form-control w-full md:max-w-sm">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered "
            />
          </div>
        </div>

        <div className="md:hidden w-full">
          <select className="w-full py-3 rounded-sm text-muted-foreground">
            <option value="highlight">Highlight</option>
            <option value="cat">Cat</option>
            <option value="inspiration">Inspiration</option>
            <option value="general">General</option>
          </select>
        </div>
      </div>
      {/* Layout box  */}
    </div>
  );
}
