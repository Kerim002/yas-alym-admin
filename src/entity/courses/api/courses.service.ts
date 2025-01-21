import { axiosWithAuth } from "@/shared/api/interceptor";
import { API_VERSION } from "@/shared/config";

class CoursesService {
  private url = `/course/${API_VERSION}`;
  async getCourses() {
    const res = await axiosWithAuth.get<CourseListResponse>(
      `${this.url}/courses`
    );
    return res.data;
  }
}

export const coursesService = new CoursesService();
