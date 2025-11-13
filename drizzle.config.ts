// Minimal ambient declaration to avoid needing @types/node for this config file
declare const process: {
  env: {
    DATABASE_URL?: string;
  };
};

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
});