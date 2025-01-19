import { fakeTable } from "@/shared/constants";
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

const UnitsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Display order</TableHead>
          <TableHead>Create at</TableHead>
          <TableHead>Update at</TableHead>
          <TableHead className="w-20 text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fakeTable.map((unit, index) => (
          <TableRow key={unit.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{unit.name}</TableCell>
            <TableCell>{unit.display_order}</TableCell>
            <TableCell>{unit.created_at}</TableCell>
            <TableCell>{unit.updated_at}</TableCell>
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

export default UnitsTable;
