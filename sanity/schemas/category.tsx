import { defineField, defineType, validation } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category Title",
      type: "string",
      // validation: '',
    }),
  ],
});
