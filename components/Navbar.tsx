"use client";

import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "./ui/navigation-menu";
import AvatarBlog from "./Avatar";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ck } from "@/utils/cookie";

export default function MainMenu() {
    const route = useRouter()
    async function handleLogout(e: any) {
        try {
            e.preventDefault()
            await axios.post("http://localhost:5001/api/auth/signout")
            toast.success("Dang xuat thanh cong")
            ck.remove("refreshToken")
             ck.remove("token")
            route.replace("/signin")


        } catch (error) {
            console.log(error)
            toast.success("Dang xuat that bai")
        }
    }

    return (
        <div className="flex justify-center ">
            <NavigationMenu className="border-b bg-white px-6 py-2 ">
                <NavigationMenuList className="gap-6 ">

                    {/* HOME */}
                    <NavigationMenuItem className="px-4 py-2 font-medium">
                        <Link href="/"  >                 
                                Home
                        </Link>
                    </NavigationMenuItem>

                    {/* BLOGS DROPDOWN */}
                    <NavigationMenuItem className="font-medium">
                        <NavigationMenuTrigger >
                            Blogs
                        </NavigationMenuTrigger>

                        <NavigationMenuContent>
                            <ul className="w-48 p-2 space-y-1">
                                <li>
                                    <Link href="/blogs"  className="px-3 py-2 rounded hover:bg-accent">
                                        
                                            Danh sách blog
                                       
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/blogs/create"   className="px-3 py-2 rounded hover:bg-accent">
                                      
                                            Viết blog
                                       
                                    </Link>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* ABOUT */}
                    <NavigationMenuItem>
                        <Link href="/about"   className="px-4 py-2 font-medium">
                           
                                About
                           
                        </Link>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            <AvatarBlog />
            <Button
                variant={"outline"}
                onClick={(e) => handleLogout(e)}

            >
                <LogOut /></Button>
        </div>
    );


}
