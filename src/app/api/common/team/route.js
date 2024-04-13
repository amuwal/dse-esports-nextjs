import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { collection, getDocs, query } from "firebase/firestore";

export async function GET(req) {
  try {
    const teamCollection = collection(db, "team");
    const q = query(teamCollection);
    const querySnapshot = await getDocs(q);
    const team = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return { id: doc.id, ...data };
    });
    return NextResponse.json(team);
  } catch (error) {
    console.error("Error fetching team data:", error);
    return NextResponse.error();
  }
}
