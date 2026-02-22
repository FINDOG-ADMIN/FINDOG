import { getRequestContext } from '@cloudflare/next-on-pages';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  try {
    const db = getRequestContext().env.DB;
    
    if (!db) {
      return NextResponse.json({ error: "База не найдена" }, { status: 500 });
    }

    const { results } = await db.prepare("SELECT * FROM pets").all();
    return NextResponse.json(results);
    
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}