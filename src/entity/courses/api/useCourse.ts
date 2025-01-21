import { useQuery } from "@tanstack/react-query";
import { coursesService } from "./courses.service";
const initialData = [
  {
    id: "512b1089-78bc-4db9-8610-2b0b5324d2ee",
    pk: 1,
    name: "Biology",
    created_at: "2025-01-19T08:56:19.915293",
    updated_at: "2025-01-19T08:56:19.915293",
  },
  {
    id: "4be987d5-38b1-4956-b447-a43576c7dd30",
    pk: 2,
    name: "Geography",
    created_at: "2025-01-19T08:56:19.927335",
    updated_at: "2025-01-19T08:56:19.927335",
  },
  {
    id: "f7edd3c6-d599-4e85-aae8-ca172c354163",
    pk: 3,
    name: "Physics",
    created_at: "2025-01-19T08:56:19.930067",
    updated_at: "2025-01-19T08:56:19.930067",
  },
];
const useCourse = () => {
  return useQuery({
    queryKey: ["course", "list"],
    queryFn: () => coursesService.getCourses(),
    initialData,
  });
};

export default useCourse;
