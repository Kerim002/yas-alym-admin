import useQueryParam from "@/shared/hook/useQueryParam";
import { Button } from "@/shared/ui/button";
import { ReactNode, Suspense } from "react";

type Props = {
  queries: {
    key: string;
    value: any;
  }[];
  children: ReactNode;
};
const AddButton = ({ queries, children }: Props) => {
  const { setQuery } = useQueryParam();
  const handleAdd = () => {
    setQuery(queries);
  };
  return <Button onClick={handleAdd}>{children}</Button>;
};

const QueryAddBtn = ({ queries, children }: Props) => {
  return (
    <Suspense>
      <AddButton queries={queries}>{children}</AddButton>
    </Suspense>
  );
};

export default QueryAddBtn;
