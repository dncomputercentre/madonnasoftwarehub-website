import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import menu from "../../data/menu";
import logo from "../../assets/logo/logo.png";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
            <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

                {/* Logo */}

                <NavLink
                    to="/"
                    className="flex items-center gap-3"
                >
                    <img
                        src={logo}
                        alt="Madonna Software HUB"
                        className="h-14 w-auto object-contain"
                    />

                    <div>
                        <h2 className="text-xl font-bold text-white">
                            Madonna Software HUB
                        </h2>

                        <p className="text-xs text-slate-400">
                            Business Software
                        </p>
                    </div>
                </NavLink>

                {/* Desktop Menu */}

                <nav className="hidden lg:flex gap-10">

                    {menu.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-500 font-semibold"
                                    : "text-slate-300 hover:text-white duration-300"
                            }
                        >
                            {item.title}
                        </NavLink>
                    ))}

                </nav>

                {/* Right Side */}

                <div className="hidden lg:flex gap-4">

                    <button className="px-5 py-3 rounded-xl border border-slate-700 hover:border-blue-500 transition">
                        Login
                    </button>

                    <button className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold">
                        Get Started
                    </button>

                </div>

                {/* Mobile Button */}

                <button
                    className="lg:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <X size={28} />
                    ) : (
                        <Menu size={28} />
                    )}
                </button>

            </div>

            {/* Mobile Menu */}

            {open && (
                <div className="lg:hidden bg-slate-950 border-t border-slate-800">

                    <div className="flex flex-col p-6 gap-5">

                        {menu.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className="text-slate-300 hover:text-white"
                            >
                                {item.title}
                            </NavLink>
                        ))}

                        <button className="w-full py-3 rounded-xl border border-slate-700">
                            Login
                        </button>

                        <button className="w-full py-3 rounded-xl bg-blue-600">
                            Get Started
                        </button>

                    </div>

                </div>
            )}
        </header>
    );
}