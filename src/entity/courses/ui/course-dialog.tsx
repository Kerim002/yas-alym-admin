"use client";
import useQueryParam from "@/shared/hook/useQueryParam";
import { Button } from "@/shared/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { useForm } from "react-hook-form";

import { z } from "zod";
import { useAddCourse } from "../api/useAddCourse";
import { queryClient } from "@/shared/api";

const formSchema = z.object({
  coursename: z.string().min(2, {
    message: "Course name must be at least 2 characters.",
  }),
});

const CourseDialog = () => {
  const list = queryClient.getQueryData([
    "course",
    "list",
  ]) as CourseListResponse;
  const { deleteQuery, getQuery } = useQueryParam();
  const { mutate } = useAddCourse();
  const course = list.find((course) => course.id === getQuery("id"));
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coursename: course?.name,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({ name: values.coursename });
    deleteQuery(["isDialog", "id"]);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="coursename"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course name</FormLabel>
              <FormControl>
                <Input placeholder="Course name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CourseDialog;
