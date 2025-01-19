import { formatTimestamp } from "@/shared";
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
    id: "c8487dc8-9005-44da-b00e-452ab40ee336",
    pk: 1,
    course_id: "29b1337c-a983-4c64-b06f-a0c5bac4221e",
    course_pk: 1,
    name: "The Building Blocks of Life (Cells)",
    display_order: 1,
    created_at: "2025-01-16T05:46:09.380698",
    updated_at: "2025-01-16T05:46:09.380698",
  },
  {
    id: "aca8d113-e996-4a8d-aa8e-304a9d1d80d2",
    pk: 2,
    course_id: "29b1337c-a983-4c64-b06f-a0c5bac4221e",
    course_pk: 1,
    name: "The Chemistry of Life (Biochemistry)",
    display_order: 2,
    created_at: "2025-01-16T05:46:09.391675",
    updated_at: "2025-01-16T05:46:09.391675",
  },
  {
    id: "85ced400-be37-49e0-8bcd-9ac8e256ec05",
    pk: 3,
    course_id: "29b1337c-a983-4c64-b06f-a0c5bac4221e",
    course_pk: 1,
    name: "From One Cell to Many (Cell Division and Genetics)",
    display_order: 3,
    created_at: "2025-01-16T05:46:09.394406",
    updated_at: "2025-01-16T05:46:09.394406",
  },
];
const SectionTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">No</TableHead>
          <TableHead className="">Name</TableHead>
          <TableHead>Display order</TableHead>
          <TableHead>Created at</TableHead>
          <TableHead className="text-right">Updated at</TableHead>
          <TableHead className="flex justify-end">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fakeData.map((section, index) => (
          <TableRow key={section.id}>
            <TableCell className="">{index + 1}</TableCell>
            <TableCell>{section.name}</TableCell>
            <TableCell>{section.display_order}</TableCell>
            <TableCell>{formatTimestamp(section.created_at)}</TableCell>
            <TableCell className="text-right">
              {formatTimestamp(section.updated_at)}
            </TableCell>
            <TableCell className="gap-2 flex justify-end">
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

export default SectionTable;
