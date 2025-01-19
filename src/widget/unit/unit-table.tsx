"use client";

import { Table } from "@/shared/ui/table";
import UnitTableHeader from "./unit-table-header";
import UnitTableBody from "./unit-table-body";

const UnitTable = () => {
  return (
    <Table>
      <UnitTableHeader />
      <UnitTableBody />
    </Table>
  );
};

export default UnitTable;
