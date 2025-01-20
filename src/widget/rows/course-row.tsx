import { Button } from "@/shared/ui/button";
import { TableCell, TableRow } from "@/shared/ui/table";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  item: CourseItemSchema;
  index: number;
};

const CourseRow = ({ item, index }: Props) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push("/sections");
    sessionStorage.setItem("courseid", id);
  };
  return (
    <TableRow onClick={() => handleClick(item.id)}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.created_at}</TableCell>
      <TableCell>{item.updated_at}</TableCell>
      <TableCell className="flex gap-2 justify-end">
        <Button
          onClick={(e) => {
            e.stopPropagation();
          }}
          size="sm"
        >
          <Edit />
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
          }}
          danger="danger"
          size="sm"
        >
          <Trash />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CourseRow;
