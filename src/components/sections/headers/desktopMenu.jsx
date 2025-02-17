"use client"
import React from "react";
import Link from "next/link";
import {FaAngleDown} from "react-icons/fa6";
import {menuList} from "@/lib/fackdata/menuList";
import {usePathname} from "next/navigation";

const DesktopMenu = () => {
    const pathname = usePathname();

    return (
        <nav className="xl:block hidden">
            <ul className="flex items-center gap-[25px]">
                {menuList.map(({dropDownMenu, id, label, path}) => {
                    // Check if this menu item has a dropdown
                    const hasDropdown =
                        Array.isArray(dropDownMenu) && dropDownMenu.length > 0;

                    // 1. For "Home" => highlight only if pathname === "/"
                    if (path === "/") {
                        const isHomeActive = pathname === "/";
                        return (
                            <li key={id} className="leading-[164%] relative group">
                                <Link
                                    href={path}
                                    className={`font-semibold text-lg font-jost group-hover:text-primary-foreground transition-all duration-500 py-5 flex items-center gap-1 ${
                                        isHomeActive ? "text-primary" : ""
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    }

                    // 2. For other links => highlight if pathname starts with the parent path
                    //    OR if any child path is active (to highlight the parent too)
                    const isChildActive = hasDropdown
                        ? dropDownMenu.some((child) => pathname.startsWith(child.path))
                        : false;

                    const isParentActive = pathname.startsWith(path) || isChildActive;

                    return (
                        <li key={id} className="leading-[164%] relative group">
                            {/* Parent Link */}
                            <Link
                                href={path}
                                className={`font-semibold text-lg font-jost group-hover:text-primary-foreground transition-all duration-500 py-5 flex items-center gap-1 ${
                                    isParentActive ? "text-primary" : ""
                                }`}
                            >
                                {label}
                                {hasDropdown && <FaAngleDown className="text-sm"/>}
                            </Link>

                            {/* Child Dropdown */}
                            {hasDropdown && (
                                <ul className="absolute top-full z-10 bg-background shadow-sm min-w-56 transition-all duration-500 opacity-0 invisible translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                                    {dropDownMenu.map(({id: subId, label: subLabel, path: subPath}) => {
                                        // Highlight child if the current route starts with this subPath
                                        const isThisChildActive = pathname.startsWith(subPath);

                                        return (
                                            <li key={subId}>
                                                <Link
                                                    href={subPath}
                                                    className={`font-semibold font-jost hover:text-cream-foreground hover:bg-primary transition-all duration-500 py-3 px-2.5 block border-b border-b-slate-300 ${
                                                        isThisChildActive ? "text-primary" : ""
                                                    }`}
                                                >
                                                    {subLabel}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default DesktopMenu;
