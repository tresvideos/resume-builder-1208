
import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ url: '/success' });
  res.cookies.set('entitled', 'true', { maxAge: 172800, path: '/' });
  return res;
}
