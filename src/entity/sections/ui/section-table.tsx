"use client";
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
import { Trash } from "lucide-react";
import React from "react";
import useSectionListQuery from "../api/useSectionListQuery";
import { DialogWrapper } from "@/widget";
import SectionDialog from "./section-dialog";
import { QueryAddBtn, QueryEditBtn } from "@/features";

const SectionTable = () => {
  const { data } = useSectionListQuery();
  if (!data) return;
  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <QueryAddBtn queries={[{ key: "isDialog", value: "true" }]}>
          Add section
        </QueryAddBtn>
      </div>
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
          {data.map((section, index) => (
            <TableRow key={section.id}>
              <TableCell className="">{index + 1}</TableCell>
              <TableCell>{section.name}</TableCell>
              <TableCell>{section.display_order}</TableCell>
              <TableCell>{formatTimestamp(section.created_at)}</TableCell>
              <TableCell className="text-right">
                {formatTimestamp(section.updated_at)}
              </TableCell>
              <TableCell className="gap-2 flex justify-end">
                <QueryEditBtn
                  queries={[
                    { key: "isDialog", value: "true" },
                    { key: "id", value: section.id },
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
        <SectionDialog />
      </DialogWrapper>
    </div>
  );
};

export default SectionTable;
