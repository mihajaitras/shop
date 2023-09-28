import { addPost, getPost } from "@/lib/data"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const posts = getPost();
    return NextResponse.json({ message: 'ok', posts }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const { title, desc } = await request.json();
  try {
    const post = { title, desc, date: new Date, id: Date.now().toString() };
    addPost(post)
    return NextResponse.json({ message: 'ok', post }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 })
  }
}