import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu
} from "@/components/ui/sidebar";
import { CircleDollarSign, Paintbrush, AppWindow } from "lucide-react";

const items = [
    {
        title: "Workspace",
        url: "/dashboard",
        icon: Paintbrush,
    },
    {
        title: "Design",
        url: "/design",
        icon: AppWindow,
    },
    {
        title: "Credits",
        url: "/credits",
        icon: CircleDollarSign,
    },
];

export function AppSidebar() {
    const path = usePathname();
    
    return (
        <Sidebar>
            <SidebarHeader>
                <div className='p-4 flex flex-col items-center'>
                    <Image src='/logo.svg' alt='logo' width={100} height={100} />
                    <h2 className='text-sm text-gray-400 mt-2'>Build Awesome</h2>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className='mt-5'>
                            {items.map((item, index) => (
                                <Link href={item.url} key={index} 
                                    className={`p-2 text-lg flex gap-2 items-center rounded-lg transition-colors 
                                        hover:bg-gray-100 ${path === item.url ? 'bg-gray-200' : ''}`}>
                                    <item.icon className='h-5 w-5' />
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <h2 className='p-2 text-gray-400 text-sm text-center'>Copyright @Tubeguruji</h2>
            </SidebarFooter>
        </Sidebar>
    );
}
