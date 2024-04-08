import { NextResponse } from "next/server";
import firebase from "@/lib/db";

db = firebase.firestore();

export async function GET(req) {
  try {
    const homepageEventsRef = db.collection("events");
    const snapshot = await homepageEventsRef
      .where("displaySections", "array-contains", "home")
      .get();
    const homepageEvents = snapshot.docs.map((doc) => doc.data());
    return NextResponse.json(homepageEvents);
  } catch (error) {
    console.error("Error fetching homepage events:", error);
    return NextResponse.serverError();
  }
}
