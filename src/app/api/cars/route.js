import startDb from '@/app/lib/db';
import Cars from '@/app/models/design';
import { NextResponse } from 'next/server';

await startDb();

export async function GET(req) {
  try {
    const data = await Cars.find().sort({ createdAt: -1 });
    if (!data) throw new Error('Data not Found');
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Error Occured',
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const email = `${data.clientName}@gmail.com`;
    // console.log(email);
    const newCar = await Cars.create({
      ...data,
      email,
    });
    if (!newCar) throw new Error('Cannot add Model');
    return NextResponse.json(
      { message: 'Added Model Successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error Occured', error: error.message },
      { status: 404 }
    );
  }
}
