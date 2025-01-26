import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import React from "react";
import { Control } from "react-hook-form";
import { DialogSchema } from "./units-dialog";
type Props = {
  control: Control<DialogSchema>;
  name: string;
  placeholder?: string;
};
const TestInput = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="unitname"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Unit name</FormLabel>
          <FormControl>
            <Input placeholder="Unit name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TestInput;
