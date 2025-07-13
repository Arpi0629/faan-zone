import type { CollectionConfig } from "payload";

export const NewUsers: CollectionConfig = {
  slug: "new-users",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "password",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "userBalance",
      type: "number",
      required: true,
    },
    {
      name: "userRole",
      type: "select",
      options: [
        { label: "USER", value: "user" },
        { label: "ADMIN", value: "admin" },
      ],
    },
    {
      name: "userStatus",
      type: "select",
      options: [
        { label: "ACTIVE", value: "active" },
        { label: "INACTIVE", value: "inactive" },
      ],
    },
    {
      name: "userType",
      type: "select",
      options: [
        { label: "INDIVIDUAL ENTREPRENEUR", value: "individual" },
        { label: "COMPANY", value: "company" },
      ],
    },
  ],
};
