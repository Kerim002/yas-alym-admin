import { useQuery } from "@tanstack/react-query";
import { unitService } from "./unit.service";
import { fakeTable } from "@/shared/constants";

const useUnitQuery = (id?: string) => {
  return useQuery({
    queryKey: ["unit", "list", id && id],
    queryFn: () => unitService.list(id),
    initialData: fakeTable,
  });
};

export default useUnitQuery;
