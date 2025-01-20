import { axiosWithAuth } from "@/shared/api/interceptor";

class CoursesService {
  async getCourses() {
    const res = await axiosWithAuth.get("/courses");
  }
}

export const coursesService = new CoursesService();
