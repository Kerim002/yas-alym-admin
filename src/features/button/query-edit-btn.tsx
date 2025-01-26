import useQueryParam from "@/shared/hook/useQueryParam";
import { Button } from "@/shared/ui/button";
import { EditIcon } from "lucide-react";
import { MouseEvent, Suspense } from "react";

type Props = {
  queries: {
    key: string;
    value: any;
  }[];
};
const EditButton = ({ queries }: Props) => {
  const { setQuery } = useQueryParam();
  const handleClick = (e: any) => {
    e.stopPropagation();
    setQuery(queries);
  };
  return (
    <Button size="sm" onClick={handleClick}>
      <EditIcon />
    </Button>
  );
};

const QueryEditBtn = ({ queries }: Props) => {
  return (
    <Suspense>
      <EditButton queries={queries} />
    </Suspense>
  );
};

export default QueryEditBtn;
