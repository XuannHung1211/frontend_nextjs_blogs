import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
    const token = request.cookies.get("refreshToken")?.value

    // Nếu chưa đăng nhập → đá sang /signin
    if (!token) {
        return NextResponse.redirect(
            new URL("/signin", request.url)
        )
    }

    return NextResponse.next()
}

// Chỉ bảo vệ các route cần login
export const config = {
    matcher: [
        "/((?!_next|signin|favicon.ico).*)"
    ]
}
