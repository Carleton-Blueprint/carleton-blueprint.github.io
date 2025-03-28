'use server';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST() {
  revalidatePath('/projects');
  return NextResponse.json({ message: 'Successfully revalidated /projects', status: 200 });
}
