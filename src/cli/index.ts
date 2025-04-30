#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const args = process.argv.slice(2);
const command = args[0];
const component = args[1];
const customDir = args[2] || "components";

if (command !== "add" || !component) {
  console.error("Usage: ginui add <component> [folder]");
  process.exit(1);
}

const availableComponents = ["button", "input", "card"];

if (!availableComponents.includes(component)) {
  console.error(`Component "${component}" not found.`);
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.resolve(__dirname, `../components/${component}.tsx`);
const destDir = path.resolve(process.cwd(), customDir, "GinUI");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const dest = path.resolve(destDir, `${capitalize(component)}.tsx`);

fs.copyFileSync(source, dest);

console.log(
  `✅ Successfully added ${capitalize(component)} to /${customDir}/GinUI`
);

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
