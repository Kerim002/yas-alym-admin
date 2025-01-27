import { useQuery } from "@tanstack/react-query";
import { coursesService } from "./courses.service";

const useCourse = () => {
  return useQuery({
    queryKey: ["course", "list"],
    queryFn: () => coursesService.getCourses(),
  });
};

export default useCourse;
