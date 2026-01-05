"use client"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"


export default function SignInForm() {

     const [username , setUsername] = useState("")
     const [password , setPassword] = useState("")

     const route = useRouter()

     const handleSubmit = async  ()=> {
          try {
               const res = await axios.post("http://localhost:5001/api/auth/signin" , {
                    username ,
                    password
               })
               toast.success("Dang nhap thanh cong")
               route.push("/")
               
          } catch (error) {
               console.log("Thong tin tai khoan hoac mat khau khong chinh xac" , error)
               toast.error("Sai thong tin dang nhap")
          }
     }

     const handleSubmitSignup = () => {
        try {
          route.push("/signup")
        } catch (error) {
          console.log(error)
        }
     }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-sm">
        
        {/* TITLE */}
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Đăng nhập
        </h1>

        <FieldSet>
          <FieldGroup className="space-y-4">

            {/* USERNAME */}
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                type="text"
                placeholder="Max Leiter"
                className="mt-1"
                value={username}
                onChange={(u) => setUsername(u.target.value)}
              />
              <FieldDescription>
                Tên đăng nhập của bạn
              </FieldDescription>
            </Field>

            {/* PASSWORD */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1"
                value={password}
                onChange={(u) => setPassword(u.target.value)}
              />
              <FieldDescription>
                Ít nhất 8 ký tự
              </FieldDescription>
            </Field>

          </FieldGroup>
        </FieldSet>

        {/* BUTTON */}
        <div>
          <Button 
        className="mt-6 w-full"
        onClick={handleSubmit}

        >
          Đăng nhập
        </Button>

        <Button 
        className="mt-6 w-full"
       onClick={handleSubmitSignup}
        >
          Đăng Ký
        </Button>
        </div>
        


      </div>
    </div>
  )
}
