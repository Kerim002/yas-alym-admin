"use client";
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
import { Trash } from "lucide-react";
import React from "react";
import useUnitQuery from "../api/useUnitQuery";
import { DialogWrapper } from "@/widget";
import UnitsDialog from "./units-dialog";
import { QueryEditBtn } from "@/features";

const UnitsTable = () => {
  const { data } = useUnitQuery();
  return (
    <div className="w-full">
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
                <QueryEditBtn
                  queries={[
                    { key: "isDialog", value: "true" },
                    { key: "id", value: unit.id },
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
        <UnitsDialog />
      </DialogWrapper>
    </div>
  );
};

export default UnitsTable;
