import { deletePost, getById, updatePost } from "@/lib/data"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: string } }) {
   try {
      const post = getById(params.id)
      return NextResponse.json({ post }, { status: 200 })
   } catch (error) {
      return NextResponse.json({ message: 'Error', error }, { status: 404 })
   }
}
export async function PUT(req: Request, { params }: { params: { id: string } }) {
   try {
      const { title, desc } = await req.json();
      updatePost(params.id, title, desc);
      return NextResponse.json({ message: "update success" }, { status: 200 })
   } catch (error) {
      return NextResponse.json({ message: 'Error', error }, { status: 404 })
   }
}
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
   try {
      const post = getById(params.id)
      deletePost(params.id);
      return NextResponse.json({ message: "Delete success", post }, { status: 200 })

   } catch (error) {
      return NextResponse.json({ message: 'Error', error }, { status: 404 })
   }
}

