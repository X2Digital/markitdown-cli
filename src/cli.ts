#!/usr/bin/env node

import { MarkItDown } from "markitdown-ts";
import { writeFileSync } from "fs";

const args = process.argv.slice(2);
let inputPath: string | undefined;
let outputPath: string | undefined;

for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '-o' || a === '--output') {
    outputPath = args[++i];
  } else if (!inputPath && !a.startsWith('-')) {
    inputPath = a;
  }
}

if (!inputPath) {
  console.error('Usage: markitdown-cli <file.pdf> [-o <output.md>]');
  process.exit(1);
}

const filePath = inputPath;
const markitdown = new MarkItDown();

(async () => {
  try {
    const result = await markitdown.convert(filePath);
    if (!result) {
      console.error("Not able to convert the file.");
      process.exit(1);
    }

    const markdown = result.text_content;
   if (outputPath) {
     writeFileSync(outputPath, markdown, "utf-8");
     console.log(`File saved: ${outputPath}`);
   } else {
      console.log(markdown);
   }

  } catch (error) {
    console.error(`An error occurred: ${error}`);
    process.exit(1);
  }
})();
