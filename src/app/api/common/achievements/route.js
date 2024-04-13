import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(req) {
  try {
    const achievementsCollection = collection(db, "achievements");
    const q = query(achievementsCollection);
    const querySnapshot = await getDocs(q);
    const achievements = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return { id: doc.id, ...data };
    });
    return NextResponse.json(achievements);
  } catch (error) {
    console.error("Error fetching achievements:", error);
    return NextResponse.error();
  }
}
