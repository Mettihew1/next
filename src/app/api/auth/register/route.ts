// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { hashPassword } from "@/lib/hash";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  await connectDB();

  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json({ error: "Email already registered" }, { status: 400 });
  }

  const hashed = await hashPassword(password);
  const user = await User.create({ email, password: hashed });

  return NextResponse.json({ userId: user._id });
}
