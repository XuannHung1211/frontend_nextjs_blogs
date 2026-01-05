import Link from "next/link";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import Container from "@/components/Container";



export default function HomePage() {


  return (
    <Container>
       <div className="flex justify-center mt-20">
      <Card className="w-full max-w-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-in fade-in zoom-in from-white to-gray-50">

        {/* HEADER */}
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">
            Viết một blog để chia sẻ cảm nhận của bạn ✍️
          </CardTitle>

          <CardDescription className="text-muted-foreground">
            Nơi bạn ghi lại suy nghĩ, kiến thức và trải nghiệm cá nhân
          </CardDescription>
        </CardHeader>

        {/* CONTENT */}
        <CardContent className="text-sm leading-relaxed text-gray-700">
          <p>
            Mỗi bài viết là một câu chuyện.
            Hãy bắt đầu hành trình chia sẻ kiến thức của bạn ngay hôm nay.
          </p>
        </CardContent>

        {/* FOOTER */}
        <CardFooter className="justify-center">
          <Link href="/blogs/create">
            <Button className="rounded-md bg-black text-white px-4 py-2 text-sm hover:bg-black/80">
              Viết blog ngay
            </Button>
          </Link>
        </CardFooter>

      </Card>
    </div>
    </Container>
   
  );
}
