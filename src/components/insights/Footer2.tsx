"use client";

import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-black pt-16 pb-10 border-t border-blue-900">
      {/* Newsletter Signup */}
      <div className="max-w-4xl mx-auto text-center px-4 space-y-6 mb-16">
        <h2 className="text-2xl font-bold">Stay informed as an indie hacker.</h2>
        <p className="text-gray-700 text-lg">
          Market insights that help you start and grow your business.
        </p>
        <div className="flex max-w-xl mx-auto overflow-hidden rounded-md border border-blue-700 bg-blue-900/30">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full bg-transparent px-4 py-3 text-black placeholder:text-red-600 outline-none"
          />
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 px-6">
            <span className="text-black text-xl font-bold">→</span>
          </button>
        </div>
      </div>

      <hr className="border-dashed border-blue-900 my-8 mx-6" />

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto grid gap-16 md:grid-cols-4 px-6 md:px-12 text-base">
        {/* Brand Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 font-bold text-xl">
            <span className="bg-white text-black px-2 py-1 rounded font-sans">IH</span>
            <span>INDIE HACKERS</span>
          </div>
          <p className="text-gray-700">
            Follow{" "}
            <span className="bg-blue-600 px-2 py-1 rounded text-black font-semibold">@IndieHackers</span> on X
            for stories, insights, and founder connections.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-red-600 text-sm pt-2">
            <span>© Indie Hackers, Inc.</span>
            <span>•</span>
            <a href="#" className="hover:underline">FAQ</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>•</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Cookie Settings</a>
          </div>
          <div className="flex gap-4 pt-4 text-2xl text-red-600">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Community Links */}
        <div>
          <h4 className="font-semibold mb-3">COMMUNITY</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-black">Groups</a></li>
            <li><a href="#" className="hover:text-black">Meetups</a></li>
            <li><a href="#" className="hover:text-black">Top Today</a></li>
            <li><a href="#" className="hover:text-black">Top This Week</a></li>
            <li><a href="#" className="hover:text-black">Top This Month</a></li>
            <li><a href="#" className="text-red-600 font-semibold hover:underline">Join →</a></li>
          </ul>
        </div>

        {/* Products Links */}
        <div>
          <h4 className="font-semibold mb-3">PRODUCTS</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-black">All Products</a></li>
            <li><a href="#" className="hover:text-black">Highest Revenue</a></li>
            <li><a href="#" className="hover:text-black">Side Projects</a></li>
            <li><a href="#" className="hover:text-black">Self-Funded</a></li>
            <li><a href="#" className="text-red-600 font-semibold hover:underline">Add Yours →</a></li>
          </ul>
        </div>

        {/* Database Links */}
        <div>
          <h4 className="font-semibold mb-3">DATABASES</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-black">Ideas</a></li>
            <li><a href="#" className="hover:text-black">Products</a></li>
            <li><a href="#" className="hover:text-black">Stories</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
