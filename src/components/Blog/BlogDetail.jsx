import { useParams, Link } from "react-router-dom";
import { initialBlogs } from "../../data/blogData";

const BlogDetail = () => {
    const { id } = useParams();
    const blog = initialBlogs.find((b) => b.id === parseInt(id));

    if (!blog)
        return (
            <div className="text-center py-32 text-gray-400">
                <p className="text-2xl mb-4">Blog not found</p>
                <Link to="/blog" className="text-[#02bfbf] hover:underline">
                    ← Back to Blogs
                </Link>
            </div>
        );

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 mb-20 mt-10 max-w-4xl mx-auto">
            {/* Back button */}
            <Link
                to="/blog"
                className="flex items-center gap-2 text-gray-400 hover:text-[#02bfbf] transition-colors duration-200 mb-8 text-sm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                Back to Blogs
            </Link>

            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-[0_0px_30px_rgba(8,112,184,0.3)]">
                {/* Header */}
                <div className="relative h-52 bg-gray-800 flex items-center justify-center">
                    <img
                        src={blog.image}
                        alt={blog.category}
                        className="w-28 h-28 opacity-20"
                        style={
                            blog.category === "Next.js"
                                ? { filter: "invert(1)" }
                                : {}
                        }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                        <span
                            className={`text-xs px-2 py-1 rounded-full font-medium ${blog.categoryColor}`}
                        >
                            {blog.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 flex flex-col gap-5">
                    <div className="flex items-center gap-3 text-gray-500 text-xs">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                        {blog.title}
                    </h1>

                    <p className="text-gray-400 text-sm leading-relaxed italic border-l-2 border-[#02bfbf] pl-4">
                        {blog.excerpt}
                    </p>

                    <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {blog.content}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
                        {blog.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full border border-gray-700"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
