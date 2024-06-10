"use client"
import Link from 'next/link';
import NavLinks from '@/app/protected/dashboard/navLinks';
import { PowerIcon } from '@heroicons/react/24/outline';
import SupabaseLogo from "@/components/atoms/SupabaseLogo";
import React from "react";

export default function SideNav() {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <div className="flex h-full">
            <Link
                className="rounded-sm bg-slate-900"
                href="/"
            >
                <div className="w-32 text-white md:w-40">
                    <SupabaseLogo />
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <form>
                    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <PowerIcon className="w-6" />
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
}