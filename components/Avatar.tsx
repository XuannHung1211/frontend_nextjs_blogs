import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AVatarBlog() {
  return (
    <Avatar className="mt-2">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}