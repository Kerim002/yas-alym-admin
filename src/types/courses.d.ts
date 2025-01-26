interface CourseItemSchema {
  id: string;
  pk: number;
  name: string;
  created_at: string;
  updated_at: string;
}

type CourseListResponse = CourseItemSchema[];

interface AddCourseRequest {
  name: string;
}
