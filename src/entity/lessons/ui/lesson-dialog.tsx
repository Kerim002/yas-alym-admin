import useQueryParam from "@/shared/hook/useQueryParam";
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
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

const formSchema = z.object({
  lessonname: z.string().min(2, {
    message: "Course name must be at least 2 characters.",
  }),
});

const LessonDialog = () => {
  const { deleteQuery } = useQueryParam();
  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    // defaultValues: {
    //   username: "",
    // },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    deleteQuery(["isDialog", "id"]);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="lessonname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lesson name</FormLabel>
              <FormControl>
                <Input placeholder="Lesson name" {...field} />
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

export default LessonDialog;
