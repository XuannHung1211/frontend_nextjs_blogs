"use client"

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Blog from "@/types/blog";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";


export default function CreateBlogPage() {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  
    const createBlog = async () => {
      try {
        const res = await axios.post("http://localhost:5001/api/blogs", {
          title,
          content
        })

        setTitle("")
        setContent("")
        toast.success("Tạo blog mới thành công")
      } catch (error) {
        console.log("Lỗi tạo blog mới",error)
        toast.error("Tạo blog thất bại")
      }
    }
    


  return (
    <div className="flex justify-center mt-20 px-4">
      <Card className="w-full max-w-2xl shadow-lg">

        {/* HEADER */}
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Tạo bài viết mới ✍️</CardTitle>
          <CardDescription>
            Chia sẻ suy nghĩ, kiến thức hoặc câu chuyện của bạn
          </CardDescription>
        </CardHeader>

        {/* CONTENT */}
        <CardContent className="space-y-6">

          {/* TITLE */}
          <div className="space-y-2">
            <Label htmlFor="title">Tiêu đề</Label>
            <Input
              id="title"
              value={title}
              placeholder="Nhập tiêu đề bài viết..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-2">
            <Label htmlFor="content">Nội dung</Label>
            <Textarea
              id="content"
              value={content}
              placeholder="Viết nội dung blog của bạn ở đây..."
              className="min-h-[180px]"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

        </CardContent>

        {/* FOOTER */}
        <CardFooter className="flex justify-between border-t pt-4">
          <Link
            href="/blogs"
            className="text-sm text-muted-foreground hover:underline"
          >
            ← Quay lại danh sách blog
          </Link>

          <Button 
          onClick={createBlog}
          >
            Đăng bài
          </Button>
        </CardFooter>

      </Card>
    </div>
  );
}
