import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(req) {
  try {
    const eventsCollection = collection(db, "events");
    const q = query(
      eventsCollection,
      where("displaySections", "array-contains-any", [
        "featured",
        "top",
        "past",
      ])
    );
    const querySnapshot = await getDocs(q);
    const homePageEvents = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return { id: doc.id, ...data };
    });
    return NextResponse.json(homePageEvents);
  } catch (error) {
    console.error("Error fetching homepage events:", error);
    return NextResponse.error();
  }
}
