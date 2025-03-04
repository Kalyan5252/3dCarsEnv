// import Users from '@/models/userModel';
// import { stat } from 'fs';
// import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
// import { promisify } from 'util';
// import { verify } from 'jsonwebtoken';

export async function GET(req) {
  const response = NextResponse.json({ status: 200 });
  response.cookies.set('JWTkey', '');
  return response;
}
