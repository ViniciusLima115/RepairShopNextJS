import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "../db/schema";
import { z } from "zod";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: () => z.string().min(1, "First name is required"),
  lastName: () => z.string().min(1, "Last name is required"),
  address1: () => z.string().min(1, "Address is required"),
  city: () => z.string().min(1, "City is required"),
  state: () => z.string().length(2, "State must be 2 characters"),
  email: () => z.string().email("Invalid email address"),
  zip: () => z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
  phone: () => z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
});

export const selectCustomerSchema = createSelectSchema(customers);

// ✅ Tipos inferidos corretamente a partir dos schemas
export type InsertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type SelectCustomerSchemaType = z.infer<typeof selectCustomerSchema>;