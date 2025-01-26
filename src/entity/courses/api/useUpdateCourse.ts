// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { coursesService } from "./courses.service";
// import { queryClient } from "@/shared/api";
// export const useAddCourse = () => {
//   return useMutation({
//     mutationFn: (body: AddCourseRequest) => coursesService.addCourse(body),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["course"] });
//     },
//   });
// };
