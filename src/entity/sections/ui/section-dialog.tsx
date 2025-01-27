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
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { useAddSection } from "../api/useAddSection";

const formSchema = z.object({
  sectionname: z.string().min(2, {
    message: "Course name must be at least 2 characters.",
  }),
  displaynumber: z.string().min(1, {
    message: "Course name must be at least 2 characters.",
  }),
});

const SectionDialog = () => {
  const { mutate } = useAddSection();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      course_id: sessionStorage.getItem("courseid") ?? "",
      display_order: Number(values.displaynumber),
      name: values.sectionname,
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="sectionname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Section name</FormLabel>
              <FormControl>
                <Input placeholder="Section name" {...field} />
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

export default SectionDialog;
