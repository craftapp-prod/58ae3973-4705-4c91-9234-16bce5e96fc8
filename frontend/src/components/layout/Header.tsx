"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { FiUser, FiLogOut, FiLogIn, FiUserPlus, FiHome, FiGrid, FiMail, FiInfo, FiFolder } from "react-icons/fi";
import Image from "next/image";
import { API_URL } from "@/utils/env";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <Image
                src={`${API_URL}/assets/default/craftapp-logo.svg`}
                alt="CreativePortfolio Logo"
                width={32}
                height={32}
                className="h-8 w-8"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <Link
                href="/"
                className="text-xl font-bold text-primary-600 hover:text-primary-500 transition"
              >
                CreativePortfolio
              </Link>
            </div>
          </div>

          <nav className="flex items-center space-x-1 md:space-x-4">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-2 rounded-md text-sm font-medium transition"
            >
              <FiHome className="mr-1" />
              <span className="hidden md:inline">Home</span>
            </Link>

            <Link
              href="/gallery"
              className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-2 rounded-md text-sm font-medium transition"
            >
              <FiGrid className="mr-1" />
              <span className="hidden md:inline">Gallery</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-2 rounded-md text-sm font-medium transition"
            >
              <FiInfo className="mr-1" />
              <span className="hidden md:inline">About</span>
            </Link>

            <Link
              href="/contact"
              className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-2 rounded-md text-sm font-medium transition"
            >
              <FiMail className="mr-1" />
              <span className="hidden md:inline">Contact</span>
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-2 rounded-md text-sm font-medium transition"
                >
                  <FiUser className="mr-1" />
                  <span className="hidden md:inline">Dashboard</span>
                </Link>
                <Link
                  href="/projects"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-2 rounded-md text-sm font-medium transition"
                >
                  <FiFolder className="mr-1" />
                  <span className="hidden md:inline">Projects</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-2 rounded-md text-sm font-medium transition"
                >
                  <FiLogOut className="mr-1" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <FiLogIn className="mr-1" />
                  Login
                </Link>
                <Link
                  href="/register"
                  className="flex items-center bg-primary-600 text-white hover:bg-primary-700 px-3 py-2 rounded-md text-sm font-medium transition"
                >
                  <FiUserPlus className="mr-1" />
                  Register
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;