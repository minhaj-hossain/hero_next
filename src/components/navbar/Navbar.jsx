"use client";

import { Check, Moon, Power, Sun } from "@gravity-ui/icons";
import { Switch, useTheme } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import {
    FiSearch,
    FiBell,
    FiMenu,
    FiX,
    FiSun,
    FiMoon,
    FiUser,
} from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const { theme, setTheme } = useTheme();

    return (
        <nav className="w-full sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-white"
                    >
                        Task<span className="text-indigo-600">Fly</span>
                    </Link>

                    {/* Center Links (Desktop) */}
                    <div className="hidden md:flex items-center gap-10 text-sm font-medium">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>

                    {/* Right Section */}
                    <div className="hidden md:flex items-center gap-5">
                        {/* Search */}
                        <div className="relative">
                            <FiSearch className="absolute left-3 top-2.5 text-zinc-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-9 pr-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm outline-none focus:ring-2 ring-indigo-500 transition w-40 focus:w-56"
                            />
                        </div>

                        {/* Icons */}
                        <IconButton>
                            <FiBell />
                        </IconButton>

                        {/* Theme Toggle */}
                        {/* <IconButton onClick={() => setDark(!dark)}>
                            {dark ? <FiSun /> : <FiMoon />}
                        </IconButton> */}

                        {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            Toggle {theme === "dark" ? "Light" : "Dark"} Mode
                        </button> */}

                        <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {({ isSelected }) => (
                                <>
                                    <Switch.Control
                                        className={`h-7.75 w-12.75 bg-blue-500 ${isSelected ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
                                    >
                                        <Switch.Thumb
                                            className={`size-6.75 bg-white shadow-sm ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
                                        >
                                            <Switch.Icon>
                                                {isSelected ? (
                                                    <Moon className="size-4 text-cyan-600" />
                                                ) : (
                                                    <Sun className="size-4 text-blue-600" />
                                                )}
                                            </Switch.Icon>
                                        </Switch.Thumb>
                                    </Switch.Control>
                                </>
                            )}
                        </Switch>

                        {/* Profile */}
                        <div className="relative group">
                            <IconButton>
                                <FiUser />
                            </IconButton>

                            <div className="absolute right-0 mt-3 w-44 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                                <DropdownItem href="/profile">Profile</DropdownItem>
                                <DropdownItem href="/settings">Settings</DropdownItem>
                                <DropdownItem href="/logout">Logout</DropdownItem>
                            </div>
                        </div>

                        {/* Auth Buttons */}
                        <Link
                            href="/login"
                            className="text-sm font-medium hover:text-indigo-600 transition"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-6 pb-6 space-y-4 text-sm font-medium bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>

                    <div className="flex gap-4 pt-4">
                        <Link
                            href="/login"
                            className="w-full text-center py-2 border rounded-lg"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="w-full text-center py-2 bg-indigo-600 text-white rounded-lg"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className="relative text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all hover:after:w-full"
        >
            {children}
        </Link>
    );
}

function IconButton({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-lg"
        >
            {children}
        </button>
    );
}

function DropdownItem({ href, children }) {
    return (
        <Link
            href={href}
            className="block px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
            {children}
        </Link>
    );
}