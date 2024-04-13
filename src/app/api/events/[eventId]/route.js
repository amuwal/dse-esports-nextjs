import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { doc, getDoc } from "firebase/firestore";

export async function GET(req, context) {
  try {
    const { eventId } = context.params;
    const eventDoc = doc(db, "events", eventId);
    const eventSnapshot = await getDoc(eventDoc);

    if (!eventSnapshot.exists()) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(eventSnapshot.data());
  } catch (error) {
    console.error("Error fetching event:", error);
    return NextResponse.error();
  }
}
