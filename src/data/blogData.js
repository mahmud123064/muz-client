export const initialBlogs = [
    {
        id: 1,
        title: "HTML Fundamentals Every Developer Should Know",
        category: "HTML",
        date: "2024-01-15",
        readTime: "5 min read",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        excerpt:
            "HTML is the backbone of every web page. Learn the essential tags, semantic elements, and best practices that make your markup clean and accessible.",
        content: `HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using a series of elements and tags.

Semantic HTML is one of the most important concepts — using the right tags like <header>, <main>, <article>, <section>, and <footer> makes your code more readable and improves SEO.

Key concepts every developer should know:
- Semantic elements (header, nav, main, footer, article)
- Forms and input types
- Accessibility with ARIA labels
- Meta tags for SEO
- HTML5 APIs like localStorage and Canvas`,
        tags: ["HTML", "Semantic", "Accessibility", "SEO"],
        categoryColor: "bg-orange-500/20 text-orange-400",
    },
    {
        id: 2,
        title: "CSS Grid vs Flexbox — When to Use Which",
        category: "CSS",
        date: "2024-02-10",
        readTime: "7 min read",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        excerpt:
            "Both CSS Grid and Flexbox are powerful layout tools. Understanding their differences helps you choose the right one for every layout challenge.",
        content: `CSS Grid and Flexbox are both excellent layout tools but serve different purposes.

Flexbox is one-dimensional — it works along either a row or a column. It's perfect for navigation bars, button groups, and centering elements.

CSS Grid is two-dimensional — it works with both rows and columns simultaneously. It's ideal for full page layouts, card grids, and complex UI structures.

When to use Flexbox:
- Navigation menus
- Aligning items in a single row or column
- Distributing space between items

When to use Grid:
- Full page layouts
- Card/gallery grids
- Complex two-dimensional layouts`,
        tags: ["CSS", "Flexbox", "Grid", "Layout"],
        categoryColor: "bg-blue-500/20 text-blue-400",
    },
    {
        id: 3,
        title: "JavaScript ES6+ Features You Must Know",
        category: "JavaScript",
        date: "2024-03-05",
        readTime: "8 min read",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        excerpt:
            "ES6 introduced many powerful features to JavaScript. From arrow functions to destructuring, these features make your code cleaner and more efficient.",
        content: `ES6 (ECMAScript 2015) and beyond brought massive improvements to JavaScript.

Arrow Functions: Shorter syntax and lexical this binding.
const add = (a, b) => a + b;

Destructuring: Extract values from arrays and objects easily.
const { name, age } = person;

Spread Operator: Copy and merge arrays/objects.
const newArr = [...arr1, ...arr2];

Template Literals: Embed expressions in strings.
const msg = Hello, my name is name;

Promises & Async/Await: Handle asynchronous code cleanly.
const data = await fetchData();

Modules: Import and export code between files.
import { useState } from 'react';`,
        tags: ["JavaScript", "ES6", "Arrow Functions", "Async"],
        categoryColor: "bg-yellow-500/20 text-yellow-400",
    },
    {
        id: 4,
        title: "Getting Started with Next.js 14",
        category: "Next.js",
        date: "2024-04-20",
        readTime: "10 min read",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        excerpt:
            "Next.js 14 brings the App Router, Server Components, and many performance improvements. Here's everything you need to get started quickly.",
        content: `Next.js is a React framework that enables server-side rendering, static site generation, and much more out of the box.

Key features of Next.js 14:
- App Router (stable) — file-based routing with layouts
- Server Components — render on the server for better performance
- Server Actions — run server-side code directly from components
- Turbopack — ultra-fast bundler (in beta)
- Image Optimization — automatic image optimization with next/image

Getting started:
npx create-next-app@latest my-app

The App Router uses a folder-based structure where each folder represents a route segment, and page.js files define the UI for that route.

Server Components vs Client Components:
Server Components run on the server and reduce JavaScript sent to the browser.
Client Components use the 'use client' directive and handle interactivity.`,
        tags: ["Next.js", "React", "SSR", "App Router"],
        categoryColor: "bg-gray-500/20 text-gray-300",
    },
];
