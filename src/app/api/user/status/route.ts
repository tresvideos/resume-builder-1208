
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieHeader = (request.headers.get('cookie') || '');
  const entitled = /(?:^|; )entitled=true/.test(cookieHeader);
  return NextResponse.json({ entitled });
}
