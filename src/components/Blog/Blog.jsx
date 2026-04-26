import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { initialBlogs } from "../../data/blogData";
import { Link } from "react-router-dom";

const Blog = () => {
    const [blogs, setBlogs] = useState(initialBlogs);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Hardcoded auth — replace with your real auth later
    const isLoggedIn = false;

    const categories = ["All", "HTML", "CSS", "JavaScript", "Next.js"];

    const filtered =
        selectedCategory === "All"
            ? blogs
            : blogs.filter((b) => b.category === selectedCategory);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            setBlogs(blogs.filter((b) => b.id !== id));
        }
    };

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 mb-20 mt-10">
            {/* Section Header */}
            <div className="mb-12 flex flex-col items-center gap-3">
                <span className="text-xs uppercase tracking-[4px] text-gray-400 font-medium">
                    My Writings
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Latest <span className="text-[#02bfbf]">Blogs</span>
                </h2>
                <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-[#02bfbf]"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-sm text-center max-w-md mt-1">
                    Thoughts and tutorials on HTML, CSS, JavaScript, and
                    Next.js.
                </p>
            </div>

            {/* Top bar — filter + create button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                {/* Category filters */}
                <div className="flex flex-wrap gap-2 justify-center mx-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                                ${
                                    selectedCategory === cat
                                        ? "bg-[#02bfbf] text-gray-900"
                                        : "bg-gray-800 text-gray-400 hover:text-[#02bfbf] border border-gray-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Create button — only visible when logged in */}
                {/* {isLoggedIn && ( */}
                {/* <Link
                        to="/blog/create"
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#02bfbf] text-gray-900 font-bold text-sm rounded-xl hover:bg-[#02bfbf]/80 transition-all duration-300 shadow-[0_0px_20px_rgba(2,191,191,0.3)]"
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
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                        Create Blog
                    </Link> */}
                {/* )}  */}
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((blog) => (
                    <div
                        key={blog.id}
                        className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] transition-all duration-300 hover:-translate-y-2 flex flex-col"
                    >
                        {/* Top image/icon area */}
                        <div className="relative h-44 bg-gray-800 flex items-center justify-center overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.category}
                                className="w-24 h-24 opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
                                style={
                                    blog.category === "Next.js"
                                        ? { filter: "invert(1)" }
                                        : {}
                                }
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

                            {/* Category badge */}
                            <div className="absolute top-3 left-3">
                                <span
                                    className={`text-xs px-2 py-1 rounded-full font-medium ${blog.categoryColor}`}
                                >
                                    {blog.category}
                                </span>
                            </div>

                            {/* Edit/Delete — only when logged in */}
                            {/* {isLoggedIn && ( */}
                            <div className="absolute top-3 right-3 flex gap-2">
                                {/* <Link
                                        to={`/blog/edit/${blog.id}`}
                                        className="w-8 h-8 bg-gray-700 hover:bg-[#02bfbf] rounded-lg flex items-center justify-center transition-all duration-200"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                    </Link> */}
                                {/* <button
                                        onClick={() => handleDelete(blog.id)}
                                        className="w-8 h-8 bg-gray-700 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-200"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button> */}
                            </div>
                            {/* )} */}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col gap-3 flex-1">
                            <div className="flex items-center gap-3 text-gray-500 text-xs">
                                <span>{blog.date}</span>
                                <span>•</span>
                                <span>{blog.readTime}</span>
                            </div>

                            <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#02bfbf] transition-colors duration-300">
                                {blog.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                {blog.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-700">
                                {blog.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full border border-gray-700"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Read more */}
                            <Link
                                to={`/blog/${blog.id}`}
                                className="flex items-center gap-1 text-sm text-[#02bfbf] hover:text-white font-medium transition-colors duration-200 mt-1"
                            >
                                Read More
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
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">
                        No blogs found in this category.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Blog;
