'use server';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST() {
  revalidatePath('/students');
  return NextResponse.json({ message: 'Successfully revalidated /', status: 200 });
}
