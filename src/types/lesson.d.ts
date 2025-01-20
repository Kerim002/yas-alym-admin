interface LessonItemSchema {
  id: string;
  name: string;
  level: number;
  display_order: number;
  type: string;
  created_at: string;
  updated_at: string;
}

type LessonListResponse = LessonItemSchema[];
