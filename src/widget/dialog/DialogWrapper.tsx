"use client";
import useQueryParam from "@/shared/hook/useQueryParam";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { useQueries } from "@tanstack/react-query";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const DialogWrapper = ({ children }: Props) => {
  const { getQuery, deleteQuery } = useQueryParam();
  return (
    <Dialog
      open={getQuery("isDialog") == "true"}
      onOpenChange={() => deleteQuery(["isDialog", "id"])}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle hidden={true} />
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
