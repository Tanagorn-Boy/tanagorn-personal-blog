import { blogPosts } from "@/data/blogPosts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function BlogCard({ image, category, title, description, author, date }) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt={title}
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {category}
          </span>
        </div>
        <a href="#">
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {title}
          </h2>
        </a>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt={author}
          />
          <span>{author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

export function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
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

            {categories.slice(1).map((cat) => {
              return (
                <button
                  key={cat}
                  className="px-4 py-3 transition-colors rounded-sm text-sm text-muted-foreground font-medium hover:bg-muted
              "
                >
                  {cat}
                </button>
              );
            })}
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
          <Select value="Highlight">
            <SelectTrigger className="w-full py-3 rounded-sm text-muted-foreground focus:ring-0 focus:ring-offset-0 focus:border-muted-foreground">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => {
                return (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
        {blogPosts.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              image={blog.image}
              category={blog.category}
              title={blog.title}
              description={blog.description}
              author={blog.author}
              date={blog.date}
            />
          );
        })}
      </article>
    </div>
  );
}
