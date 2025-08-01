import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { comparePasswords } from "@/lib/hash";

export async function POST(req: Request) {
  
  try {
    const { email, password } = await req.json();
    await connectDB();
    
    const user = await User.findOne({ email });

    console.log(user, email, password);
    
if (!user || !(await comparePasswords(password, user.password))) {
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}

    return NextResponse.json({ message: "Login success", userId: user._id.toString() });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
