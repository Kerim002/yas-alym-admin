import { useMutation } from "@tanstack/react-query";
import { sectionService } from "./section.service";
import { queryClient } from "@/shared/api";

export const useAddSection = () =>
  useMutation({
    mutationFn: (body: SectionMutation) => sectionService.addSection(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["section"] });
    },
  });
