"use client";
import CoursesTable from "@/entity/courses/ui/courses-table";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function Home() {
  return <CoursesTable />;
}
