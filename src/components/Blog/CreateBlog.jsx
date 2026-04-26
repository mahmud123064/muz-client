import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate, Link } = from "react-router-dom";

const CreateBlog = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        category: "HTML",
        excerpt: "",
        content: "",
        tags: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your save logic here — API call or localStorage
        console.log("New Blog:", form);
        navigate("/blog");
    };

    const inputClass =
        "bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#02bfbf] transition-all duration-300 placeholder-gray-500 w-full";
    const labelClass = "text-gray-400 text-xs uppercase tracking-wider mb-1";

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 mb-20 mt-10 max-w-3xl mx-auto">
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

            <div className="bg-gray-900 rounded-2xl p-6 md:p-10 shadow-[0_0px_30px_rgba(8,112,184,0.3)]">
                <h2 className="text-2xl font-bold text-white mb-8">
                    Create New <span className="text-[#02bfbf]">Blog</span>
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter blog title"
                            value={form.title}
                            onChange={handleChange}
                            required
                            className={inputClass}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>Category</label>
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className={inputClass}
                        >
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Next.js">Next.js</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>
                            Excerpt (short description)
                        </label>
                        <textarea
                            name="excerpt"
                            placeholder="Short description of your blog..."
                            value={form.excerpt}
                            onChange={handleChange}
                            required
                            rows={3}
                            className={`${inputClass} resize-none`}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>Content</label>
                        <textarea
                            name="content"
                            placeholder="Write your full blog content here..."
                            value={form.content}
                            onChange={handleChange}
                            required
                            rows={10}
                            className={`${inputClass} resize-none`}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>
                            Tags (comma separated)
                        </label>
                        <input
                            type="text"
                            name="tags"
                            placeholder="e.g. HTML, Semantic, Accessibility"
                            value={form.tags}
                            onChange={handleChange}
                            className={inputClass}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#02bfbf] text-gray-900 font-bold rounded-xl hover:bg-[#02bfbf]/80 transition-all duration-300 text-sm shadow-[0_0px_20px_rgba(2,191,191,0.3)] flex items-center justify-center gap-2 mt-2"
                    >
                        Publish Blog
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
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
