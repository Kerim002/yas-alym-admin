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
import React from "react";

const fakeData = [
  {
    id: "29b1337c-a983-4c64-b06f-a0c5bac4221e",
    pk: 1,
    name: "Biology",
    created_at: "2025-01-16T05:46:09.362265",
    updated_at: "2025-01-16T05:46:09.362265",
  },
  {
    id: "d7f2b9a8-ffe4-450e-bf0c-1d76bc12392b",
    pk: 2,
    name: "Geography",
    created_at: "2025-01-16T05:46:09.373358",
    updated_at: "2025-01-16T05:46:09.373358",
  },
  {
    id: "cfffe3e8-1a1b-4630-bf1c-3b66d8ce90e6",
    pk: 3,
    name: "Physics",
    created_at: "2025-01-16T05:46:09.375857",
    updated_at: "2025-01-16T05:46:09.375857",
  },
  {
    id: "bf577f4f-b024-4277-89d3-4132ed406a8b",
    pk: 4,
    name: "Language",
    created_at: "2025-01-16T09:49:54.404904",
    updated_at: "2025-01-16T09:49:54.404904",
  },
];

const CoursesTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Created at</TableHead>
          <TableHead>Updated at</TableHead>
          <TableHead className="w-20 text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fakeData.map((item, index) => (
          <TableRow key={item.pk}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.created_at}</TableCell>
            <TableCell>{item.updated_at}</TableCell>
            <TableCell className="flex gap-2 justify-end">
              <Button size="sm">
                <Edit />
              </Button>
              <Button danger="danger" size="sm">
                <Trash />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CoursesTable;
