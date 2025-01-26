import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import React from "react";
import { Control, useForm } from "react-hook-form";

import { z } from "zod";
import TestInput from "./test-input";
type ControlForForm = Control<{
  unitname: string;
  displaynumber: string;
}>;
const formSchema = z.object({
  unitname: z.string().min(2, {
    message: "Course name must be at least 2 characters.",
  }),
  displaynumber: z.string().min(1, {
    message: "Course name must be at least 2 characters.",
  }),
});
export type DialogSchema = z.infer<typeof formSchema>;
const UnitsDialog = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    // defaultValues: {
    //   username: "",
    // },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
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
        <FormField
          control={form.control}
          name="displaynumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display order</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Display order" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default UnitsDialog;
