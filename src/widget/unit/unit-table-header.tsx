"use client";
import { TableHead, TableHeader, TableRow } from "@/shared/ui/table";

const UnitTableHeader = () => {
  return (
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
  );
};

export default UnitTableHeader;
