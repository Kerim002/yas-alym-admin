"use client";
import { useUnitQuery } from "@/entity/units";
import { Button } from "@/shared/ui/button";
import { TableBody, TableCell, TableRow } from "@/shared/ui/table";
import { Edit, Trash } from "lucide-react";
import { useParams } from "next/navigation";

const UnitTableBody = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useUnitQuery(id);
  return (
    <TableBody>
      {data.map((unit, index) => (
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
  );
};

export default UnitTableBody;
