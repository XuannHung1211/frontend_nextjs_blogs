
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import Blog from "@/types/blog";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailBlog() {

    const [blog, setBlog] = useState <Blog|null>(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchDetailBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5001/api/blogs/${id}`)
                setBlog(res.data)
            } catch (error) {
                console.log("Lỗi hiển thị blog" , error)
            }
        }

        fetchDetailBlog()
    }, [id])

    if(!blog) return <p>Không tìm thấy blog</p>

    return (    
        <div className=" flex items-center justify-center mt-5">
             <Card key={blog._id} className="w-100 hover:shadow-md transition">

                        <CardHeader>
                            <CardTitle className="text-xl">
                                {blog.title}
                            </CardTitle>

                            <CardDescription>
                                Ngày tạo: {blog?.createdAt}
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <p className="text-muted-foreground line-clamp-3">
                                {blog.content}
                            </p>
                        </CardContent>


                    </Card>  

            <Pagination
            
            />
        </div>
        
                       
    )
}