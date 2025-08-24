"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  MonitorSmartphone,
  Server,
  GitBranch,
  Cloud,
  Bug,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const points = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    label: "Full-stack development",
    text: "React, TypeScript, and Node.js for scalable, maintainable apps.",
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8 text-purple-600" />,
    label: "Responsive UI design",
    text: "Modern, accessible web interfaces with Tailwind CSS.",
  },
  {
    icon: <GitBranch className="h-8 w-8 text-pink-600" />,
    label: "State management",
    text: "Predictable architectures with Redux Toolkit & Zustand.",
  },
  {
    icon: <Server className="h-8 w-8 text-indigo-600" />,
    label: "API development",
    text: "Robust REST & GraphQL integrations, secure backend.",
  },
  {
    icon: <Bug className="h-8 w-8 text-orange-500" />,
    label: "Quality & testing",
    text: "TypeScript safety, unit tests, and CI/CD pipelines.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-green-600" />,
    label: "Cloud deployment",
    text: "AWS, Vercel, Netlify, Docker — globally available.",
  },
];

export default function ITPageEN() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-16 relative overflow-hidden">
      {/* Animated Gradient Blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
          bg-gradient-to-tr from-blue-200 via-purple-200 to-transparent 
          rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, 15, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-24 right-10 w-60 h-60 bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto bg-white/80 backdrop-blur p-8 md:p-16 rounded-2xl shadow-2xl ring-1 ring-blue-50">
        {/* Headline Section */}
        <section className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-500 to-pink-600 bg-clip-text text-transparent"
          >
            Modern Web Development & IT Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 my-5"
          >
            From scalable APIs to pixel-perfect UI — world-class digital
            products built fast, right, and secure.
          </motion.p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <span className="inline-flex items-center px-4 py-1 text-sm rounded-full font-semibold bg-blue-100 text-blue-700">
              React.js
            </span>
            <span className="inline-flex items-center px-4 py-1 text-sm rounded-full font-semibold bg-purple-100 text-purple-700">
              Next.js
            </span>
            <span className="inline-flex items-center px-4 py-1 text-sm rounded-full font-semibold bg-purple-200 text-purple-800">
              TypeScript
            </span>
            <span className="inline-flex items-center px-4 py-1 text-sm rounded-full font-semibold bg-pink-100 text-pink-700">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center px-4 py-1 text-sm rounded-full font-semibold bg-green-100 text-green-700">
              Node.js
            </span>
            <span className="inline-flex items-center px-4 py-1 text-sm rounded-full font-semibold bg-yellow-100 text-yellow-800">
              Jest
            </span>
            <span className="inline-flex items-center px-4 py-1 text-sm rounded-full font-semibold bg-sky-100 text-sky-700">
              AWS
            </span>
          </div>
        </section>

        {/* Feature Grid */}
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {points.map((point, i) => (
            <motion.li
              key={i}
              variants={item}
              whileHover={{
                scale: 1.07,
                y: -4,
                boxShadow: "0 8px 32px 0 rgba(99,102,241,0.12)",
              }}
              className="flex flex-col items-center bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl cursor-pointer group"
              tabIndex={0}
            >
              <span
                className="mb-4 flex items-center justify-center rounded-full p-4 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {point.icon}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">
                {point.label}
              </h3>
              <p className="text-sm text-gray-700 text-center">{point.text}</p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Outro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mt-14 mb-12"
        >
          Whether it’s creating modern websites, developing APIs, or enhancing
          applications — We provide practical web solutions that fit your
          business needs.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.4 }}
          className="text-center mt-6 flex flex-col items-center gap-4"
        >
          <Link
            href="/en/contact"
            className="inline-flex items-center px-7 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 text-base hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
