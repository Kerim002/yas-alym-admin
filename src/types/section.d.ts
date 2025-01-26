interface SectionItemSchema {
  id: string;
  pk: number;
  course_id: string;
  course_pk: number;
  name: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

type SectionListResponse = SectionItemSchema[];

interface SectionMutation {
  course_id: string;
  name: string;
  display_order: number;
}
