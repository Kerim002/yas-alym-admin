interface UnitItemSchema {
  id: string;
  pk: number;
  section_id: string;
  section_pk: number;
  name: string;
  display_order: number;
  created_at: string;
  updated_at: string;
  metadata: {
    lessons: [];
  };
}

type UnitListResponse = UnitItemSchema[];
