"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import axios from "axios"
import Blog from "@/types/blog"
import { toast } from "sonner"
import { PaginationList } from "../../components/PaginationList"


export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const limit = 5

  const startPage = (page -1) * limit
  const endPage = startPage + limit 

  const blogInPage = blogs.slice(startPage , endPage )

  useEffect(() => {
    const fetchBlog = async () => {
      try {

        const res = await axios.get("http://localhost:5001/api/blogs")
        setBlogs(res.data)
        setTotalPage(Math.ceil(res.data.length / limit))
      } catch (error) {
        console.error("Lỗi fetch data", error)
      }

    }

    fetchBlog()
  }, [page])

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5001/api/blogs/${id}`)
      setBlogs((pre) => pre.filter((b) => b._id !== id))
      toast.success("Xóa blog thành công")
    } catch (error) {
      console.log("Lỗi xóa blog", error)
      toast.error("Xóa blog thất bại")
    }
  }



  return (
    <div className="container mx-auto max-w-4xl py-10 space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Danh sách Blogs</h1>

        <Link href="/blogs/create">
          <Button>Tạo blog mới</Button>
        </Link>
      </div>

      {/* LIST BLOG */}
      <div className="space-y-4">
        {blogInPage.map((blog) => (
          <Card key={blog._id} className="hover:shadow-md transition">

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

            <CardFooter className="flex justify-end gap-2">
              <Link href={`/blogs/${blog._id}`}>
                <Button variant="outline">Xem</Button>
              </Link>

              <Link href={`/blogs/${blog._id}/edit`}>
                <Button variant="secondary">Sửa</Button>
              </Link>

              <Button
                variant="destructive"
                onClick={() => handleDelete(blog._id)}
              >
                Xóa
              </Button>
            </CardFooter>

          </Card>


        ))}
        
        <PaginationList 
        page={page}
        totalPage={totalPage}
        onChangePage={setPage}
        />

      </div>
    </div>
  )
}
