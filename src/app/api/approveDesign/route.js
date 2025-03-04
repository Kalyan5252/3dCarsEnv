import startDb from '@/app/lib/db';
import Cars from '@/app/models/design';
import { NextResponse } from 'next/server';

await startDb();

export async function POST(req) {
  try {
    console.log('kalyan post');
    const { email, model, approved } = await req.json();
    console.log(email, model);
    const proposal = await Cars.findOne({ email, carModel: model });
    const updatedData = await Cars.updateOne(
      { email, carModel: model },
      { status: approved === true ? 'approved' : 'rejected' },
      { new: true }
    );
    return NextResponse.json(
      { message: 'Request processed successfully', updatedData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error Occured', error: error.message },
      { status: 500 }
    );
  }
}
