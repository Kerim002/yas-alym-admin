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

  async addCourse(body: AddCourseRequest) {
    await axiosWithAuth.post(`${this.url}/courses`, body);
  }
}

export const coursesService = new CoursesService();
