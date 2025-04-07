import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // const isAuthenticated = request.cookies.get('authToken'); // Example: Check for an auth token in cookies

    // if (!isAuthenticated) {
    //     // Redirect to the login page if the user is not authenticated
    //     return NextResponse.redirect(new URL('/login', request.url));
    // }

    // // Allow the request to proceed if authenticated
    // return NextResponse.next();
}
 

