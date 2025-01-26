"use client";
import { QueryEditBtn } from "@/features";
import { Button } from "@/shared/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { Edit, Trash } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
const DialogWrapper = dynamic(() =>
  import("@/widget").then((mod) => mod.DialogWrapper)
);
const LessonDialog = dynamic(() => import("./lesson-dialog"));
const fakeData = [
  {
    id: "006ed04c-704e-4012-979b-912b58d7155b",
    name: "What is a Cell?",
    display_order: 1,
    type: "lecture",
    created_at: "2025-01-16T05:46:09.507625",
    updated_at: "2025-01-16T05:46:09.507625",
  },
  {
    id: "9a9ae4a4-0a54-4878-b033-b8a70d43c9e0",
    name: "Exploring the Cell: A First Look",
    display_order: 2,
    type: "lecture",
    created_at: "2025-01-16T05:46:09.514459",
    updated_at: "2025-01-16T05:46:09.514459",
  },
  {
    id: "738060d7-6f80-4a46-a1c7-e76099109e5d",
    name: "Meet the Scientists: Cell Discoveries",
    display_order: 3,
    type: "lecture",
    created_at: "2025-01-16T05:46:09.517022",
    updated_at: "2025-01-16T05:46:09.517022",
  },
  {
    id: "451525a7-6740-454c-8d19-acb91def4c6a",
    name: "The Nucleus: The Control Center",
    display_order: 1,
    type: "lecture",
    created_at: "2025-01-16T05:46:09.519593",
    updated_at: "2025-01-16T05:46:09.519593",
  },
  {
    id: "bc63c319-b0ac-4b23-92fc-8ad264b48b96",
    name: "Energy Factories: Mitochondria and Chloroplasts",
    display_order: 2,
    type: "lecture",
    created_at: "2025-01-16T05:46:09.523303",
    updated_at: "2025-01-16T05:46:09.523303",
  },
  {
    id: "661e5c22-617e-4724-a461-fe8f217c66db",
    name: "The Protein Builders: Ribosomes and Endoplasmic Reticulum",
    display_order: 3,
    type: "lecture",
    created_at: "2025-01-16T05:46:09.525422",
    updated_at: "2025-01-16T05:46:09.525422",
  },
  {
    id: "590f0144-3799-4fcc-91ed-37def04f7d98",
    name: "Moving Across Membranes: Passive Transport",
    display_order: 1,
    type: "lecture",
    created_at: "2025-01-16T05:46:09.527308",
    updated_at: "2025-01-16T05:46:09.527308",
  },
  {
    id: "0e556b1f-56e0-4f2d-b9db-e7932bbacf37",
    name: "Active Transport: Using Energy to Move",
    display_order: 2,
    type: "lecture",
    created_at: "2025-01-16T05:46:09.529009",
    updated_at: "2025-01-16T05:46:09.529009",
  },
  {
    id: "2d8bed7c-0b1f-4215-b9a0-bfed3ea083ea",
    name: "Cell Communication: Sending and Receiving Signals",
    display_order: 3,
    type: "lecture",
    created_at: "2025-01-16T05:46:09.531180",
    updated_at: "2025-01-16T05:46:09.531180",
  },
];

const LessonTable = () => {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Display order</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="w-20 text-end">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fakeData.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.display_order}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <QueryEditBtn
                  queries={[
                    { key: "isDialog", value: "true" },
                    { key: "id", value: item.id },
                  ]}
                />
                <Button danger="danger" size="sm">
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DialogWrapper>
        <LessonDialog />
      </DialogWrapper>
    </div>
  );
};

export default LessonTable;
