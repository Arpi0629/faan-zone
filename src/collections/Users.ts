import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "surname",
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
