'use server';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST() {
  revalidatePath('/');
  revalidatePath('/home');
  return NextResponse.json({ message: 'Successfully revalidated / and /home', status: 200 });
}
