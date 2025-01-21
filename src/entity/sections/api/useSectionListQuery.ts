import { useQuery } from "@tanstack/react-query";
import React from "react";
import { sectionService } from "./section.service";
const initialData = [
  {
    id: "d03c865e-ba50-444c-b51a-8b273d3b74d2",
    pk: 1,
    course_id: "512b1089-78bc-4db9-8610-2b0b5324d2ee",
    course_pk: 1,
    name: "The Building Blocks of Life (Cells)",
    display_order: 1,
    created_at: "2025-01-19T08:56:19.935825",
    updated_at: "2025-01-19T08:56:19.935825",
  },
  {
    id: "f1a4f4fc-87ee-4d90-8d70-1ee374361016",
    pk: 2,
    course_id: "512b1089-78bc-4db9-8610-2b0b5324d2ee",
    course_pk: 1,
    name: "The Chemistry of Life (Biochemistry)",
    display_order: 2,
    created_at: "2025-01-19T08:56:19.948680",
    updated_at: "2025-01-19T08:56:19.948680",
  },
  {
    id: "16ade6cf-e901-4bb8-b5be-3b9d18b996a3",
    pk: 3,
    course_id: "512b1089-78bc-4db9-8610-2b0b5324d2ee",
    course_pk: 1,
    name: "From One Cell to Many (Cell Division and Genetics)",
    display_order: 3,
    created_at: "2025-01-19T08:56:19.951798",
    updated_at: "2025-01-19T08:56:19.951798",
  },
];
const useSectionListQuery = () => {
  return useQuery({
    queryKey: ["section", "list"],
    queryFn: () => sectionService.getSections(),
    initialData,
  });
};

export default useSectionListQuery;
