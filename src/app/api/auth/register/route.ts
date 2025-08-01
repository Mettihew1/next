import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { hashPassword } from "@/lib/hash";

export async function POST(req: Request) {
  try {
    const { email, password, username } = await req.json();
    await connectDB();

    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    const hashed = await hashPassword(password);
    const user = await User.create({ email, password: hashed, username });

    return NextResponse.json({ userId: user._id.toString() });
  } catch (err) {
    // return NextResponse.json({ error: err }, { status: 500 });
    console.error(err);
return NextResponse.json({ error: "Internal server error" }, { status: 500 });

  }
}
