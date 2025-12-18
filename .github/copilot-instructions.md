# DAT-101 AI Coding Guidelines

## Project Overview
DAT-101 is a JavaScript fundamentals course with modular HTML/JS examples and student tasks. Each module contains lecture demonstrations and coding exercises that run directly in the browser.

## Architecture
- **Common utilities**: `common/script/utils.mjs` provides `printOut()` for DOM output to `#txtOut` element
- **Module structure**: Each module has `lecture.html/.mjs` for demos and `task_X-Y/` folders for exercises
- **No build system**: Files run directly in browser with ES6 modules (`<script type="module">`)

## Key Patterns
- **Output method**: Always use `import { printOut, newLine } from "../../common/script/utils.mjs"` and `printOut()` instead of `console.log`
- **Task structure**: Tasks divided into numbered parts with section headers:
  ```javascript
  printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
  // Code here
  printOut(newLine);
  ```
- **HTML setup**: Include `<div id="txtOut">` for output; link `../common/style/lecture.css` or inline styles
- **Strict mode**: All JS files start with `"use strict"`

## Development Workflow
- **Running code**: Open HTML files directly in browser (no server needed)
- **File paths**: Use relative paths like `..\common\style\lecture.css` and `../../common/script/utils.mjs`
- **Task completion**: Replace placeholder text like `"Replace this with you answer!"` with actual code/output

## Examples
- **Basic import and output**: See `module-1/example_01.mjs`
- **Task template**: See `module-4/task_4-1/task_4-1.mjs` for multi-part exercise structure
- **Lecture demo**: See `module-4/lecture.html` for standard HTML setup

## Conventions
- Use Norwegian text for UI elements (e.g., "Forelesning", "Bestill!")
- Tasks often involve conditional logic, loops, and basic object/array manipulation
- Focus on educational code clarity over optimization</content>
<parameter name="filePath">c:\Users\artem\VSCode made\UiA\DAT-101\.github\copilot-instructions.md