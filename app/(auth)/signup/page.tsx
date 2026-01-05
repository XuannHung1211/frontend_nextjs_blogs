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
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "sonner"

export default function SignInForm() {

     const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")
     const [name, setName] = useState("")

     const route = useRouter()

     const handleSubmit = async () => {
          try {
               await axios.post("http://localhost:5001/api/auth/signup", {
                    username,
                    password,
                    name
               })
               toast.success("Dang ky thanh cong")
               route.push("/signin")
          } catch (error) {
               console.log("Loi dang ky", error)
               toast.error("Dang ky that bai")
          }

     }


     const handleSubmitSigin = () => {
        try {
          route.push("/signin")
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
                                        placeholder="@username"
                                        className="mt-1"
                                        value={username}
                                        onChange={(u) => setUsername(u.target.value)}
                                   />
                                   <FieldDescription>
                                        Tên đăng nhập của bạn
                                   </FieldDescription>
                              </Field>

                              {/* Name */}
                              <Field>
                                   <FieldLabel htmlFor="username">Tên hiển thị</FieldLabel>
                                   <Input
                                        id="name"
                                        type="text"
                                        placeholder="Vd: Hưng Nè"
                                        className="mt-1"
                                        value={name}
                                        onChange={(name) => setName(name.target.value)}
                                   />
                                   <FieldDescription>
                                        Tên hiển thị của bạn
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
                                        onChange={(p) => setPassword(p.target.value)}
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
                         Đăng Ký
                    </Button>

                    <Button
                    className="mt-6 w-full"
                    onClick={handleSubmitSigin}
                    >
                         Đăng Nhập
                    </Button>

                    </div>
                    

               </div>
          </div>
     )
}
