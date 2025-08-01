import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query || query.trim() === "") {
      return NextResponse.json({ suggestions: [] });
    }

    await connectDB();

    const products = await Product.find(
      { name: { $regex: query, $options: "i" } },
      "name"
    ).limit(5);

    const suggestions = products.map((p) => p.name);

    return NextResponse.json({ suggestions });
  } catch (error: unknown) {
    console.error("Suggestion API error:", error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
