import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { CourseRow } from "@/widget";
import React from "react";
import useCourse from "../api/useCourse";
import dynamic from "next/dynamic";
import { QueryAddBtn } from "@/features";
const DialogWrapper = dynamic(() =>
  import("@/widget").then((mod) => mod.DialogWrapper)
);
const CourseDialog = dynamic(() => import("./course-dialog"));

const CoursesTable = () => {
  const { data } = useCourse();
  if (!data) {
    return <div className="p-4"></div>;
  }
  return (
    <div className="p-4">
      <div className="flex justify-end w-full">
        <QueryAddBtn queries={[{ key: "isDialog", value: "true" }]}>
          Add
        </QueryAddBtn>
      </div>
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
          {data.map((item, index) => (
            <CourseRow key={item.id} index={index} item={item} />
          ))}
        </TableBody>
      </Table>

      <DialogWrapper>
        <CourseDialog />
      </DialogWrapper>
    </div>
  );
};

export default CoursesTable;
