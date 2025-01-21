import { useQuery } from "@tanstack/react-query";
import { unitService } from "./unit.service";
const initialData = [
  {
    id: "5d552549-ce8e-41f8-a471-69cde4236c16",
    pk: 1,
    section_id: "d03c865e-ba50-444c-b51a-8b273d3b74d2",
    section_pk: 1,
    name: "Introduction to Cells",
    display_order: 1,
    created_at: "2025-01-19T08:56:19.956965",
    updated_at: "2025-01-19T08:56:19.956965",
    metadata: {
      lessons: [],
    },
  },
  {
    id: "93d659fa-377c-42e6-b9fe-d123d2bd643b",
    pk: 2,
    section_id: "d03c865e-ba50-444c-b51a-8b273d3b74d2",
    section_pk: 1,
    name: "Cell City: Organelles",
    display_order: 2,
    created_at: "2025-01-19T08:56:19.969851",
    updated_at: "2025-01-19T08:56:19.969851",
    metadata: {
      lessons: [],
    },
  },
  {
    id: "18058138-0b99-417b-b72f-f8733031cd07",
    pk: 3,
    section_id: "d03c865e-ba50-444c-b51a-8b273d3b74d2",
    section_pk: 1,
    name: "Cell Transport: Moving In and Out",
    display_order: 3,
    created_at: "2025-01-19T08:56:19.973857",
    updated_at: "2025-01-19T08:56:19.973857",
    metadata: {
      lessons: [],
    },
  },
  {
    id: "ff39d8c2-4f4a-4c13-8b6a-8d7f3b6ba0ea",
    pk: 4,
    section_id: "f1a4f4fc-87ee-4d90-8d70-1ee374361016",
    section_pk: 2,
    name: "Water: The Elixir of Life",
    display_order: 1,
    created_at: "2025-01-19T08:56:19.977218",
    updated_at: "2025-01-19T08:56:19.977218",
    metadata: {
      lessons: [],
    },
  },
  {
    id: "bb12b81b-fc2a-4828-a6db-5e641b5b2f72",
    pk: 5,
    section_id: "f1a4f4fc-87ee-4d90-8d70-1ee374361016",
    section_pk: 2,
    name: "Macromolecules: Building Big Structures",
    display_order: 2,
    created_at: "2025-01-19T08:56:19.979204",
    updated_at: "2025-01-19T08:56:19.979204",
    metadata: {
      lessons: [],
    },
  },
  {
    id: "e1545991-16ec-4a1b-846b-fcc6b903790b",
    pk: 6,
    section_id: "f1a4f4fc-87ee-4d90-8d70-1ee374361016",
    section_pk: 2,
    name: "Enzymes: The Catalysts of Life",
    display_order: 3,
    created_at: "2025-01-19T08:56:19.981109",
    updated_at: "2025-01-19T08:56:19.981109",
    metadata: {
      lessons: [],
    },
  },
  {
    id: "5980f4bf-c3ff-4678-9b4d-013790d1f970",
    pk: 7,
    section_id: "16ade6cf-e901-4bb8-b5be-3b9d18b996a3",
    section_pk: 3,
    name: "Cell Division: Making New Cells",
    display_order: 1,
    created_at: "2025-01-19T08:56:19.982870",
    updated_at: "2025-01-19T08:56:19.982870",
    metadata: {
      lessons: [],
    },
  },
  {
    id: "527785b1-01a4-4543-9277-85640f4f0954",
    pk: 8,
    section_id: "16ade6cf-e901-4bb8-b5be-3b9d18b996a3",
    section_pk: 3,
    name: "DNA: The Blueprint of Life",
    display_order: 2,
    created_at: "2025-01-19T08:56:19.984695",
    updated_at: "2025-01-19T08:56:19.984695",
    metadata: {
      lessons: [],
    },
  },
  {
    id: "74ab3520-957b-4825-9641-3fac63492a20",
    pk: 9,
    section_id: "16ade6cf-e901-4bb8-b5be-3b9d18b996a3",
    section_pk: 3,
    name: "Genetics: Passing on Traits",
    display_order: 3,
    created_at: "2025-01-19T08:56:19.987476",
    updated_at: "2025-01-19T08:56:19.987476",
    metadata: {
      lessons: [],
    },
  },
];
const useUnitQuery = (id?: string) => {
  return useQuery({
    queryKey: ["unit", "list", id && id],
    queryFn: () => unitService.list(id),
    initialData,
  });
};

export default useUnitQuery;
