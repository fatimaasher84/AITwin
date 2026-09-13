##AGENTS.md

## Project purpose
 This is my personal portfolio website showcasing my projects.

## Tech stack
-HTML
-CSS
-JS

## Folder structure 

The structure for the website should be
personal-website/ 
│
├── AGENTS.md 
├── README.md 
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
 │
 └── style.css 
 ├── js/
 │
 └── main.js 
 └── assets/
 ├── images/
 └── icons/

## Design Principles
The website should be:
- Modern
- Professional
- Responsive
- Accessible
- Fast-loading
- Easy to maintain
- Visually consistent

Use:
-	Clear typography
-	Consistent spacing
-	Strong visual hierarchy
-	Good contrast
-	Responsive layouts
-	Subtle animations where appropriate

## Coding conventions
-	Responsive design.
-	Design mobile-first where practical.
-	The website must adapt to 
o	Mobile phones
o	Tablets
o	Laptops
o	Large desktop screens

-	Do not rely on fixed widths that cause horizontal scrolling.
-	Before considering a feature complete, check the layout at approximately:
320px
375px
768px
1024px
1366px
1920px

## Accessibility
Follow basic accessibility practices.
Use:
•	Semantic HTML
•	Proper heading hierarchy
•	Descriptive link text
•	alt attributes for meaningful images
•	Keyboard-accessible navigation
•	Sufficient color contrast
•	Labels for form inputs
Do not use <div> elements when a semantic HTML element is more appropriate.

## Code Quality and Coding Conventions 
-	Write clean, readable, maintainable code.

HTML:
•	Use semantic elements.
•	Keep indentation consistent.
•	Avoid unnecessary markup.
CSS:
•	Avoid excessive duplication.
•	Use reusable classes.
•	Keep responsive rules organized.
•	Avoid unnecessary !important.
JavaScript:
•	Keep functions small and focused.
•	Use descriptive variable names.
•	Avoid global variables where possible.
•	Add comments only when they explain non-obvious logic.
-	Do not add unnecessary code.

## Component/Section Rules

-	Build the website in small sections.
-	Recommended sections:
1.	Navigation
2.	Hero
3.	About
4.	Skills
5.	Projects
6.	Experience
7.	AI Digital Twin / AI section
8.	Contact
9.	Footer
-	Do not build the entire website in one large change.
-	Implement one section at a time and verify it before moving to the next section.

## AI Digital Twin
The website should communicate the idea of an AI Digital Twin.
The Digital Twin section may explain:
•	Who the person is
•	Their skills
•	Their interests
•	Their working style
•	Their projects
•	Their goals
•	How AI represents or assists their professional identity
-	Do not invent personal information.
-	If information about the owner is missing, use clearly marked placeholders rather than making up facts.
-	Example:
[Your Name]
[Your Profession]
[Your Bio]
[Your Skills]

## Content Rules
-	Never fabricate:
•	Employment history
•	Education
•	Certifications
•	Clients
•	Companies
•	Awards
•	Project results
•	Personal achievements
-	If the user has not provided the information, ask for it or use a placeholder.
-	Keep professional claims accurate.

## Things the agent must avoid
-	Do not download random images or copyrighted assets without permission.
-	Prefer:
•	User-provided assets
•	Openly licensed assets
•	Simple CSS-based visuals
•	Appropriate icon libraries only when explicitly approved
-	Optimize images before using them when possible.
-	Use meaningful filenames.

## Forms

-For contact forms:
•	Use proper labels.
•	Validate required fields.
•	Provide useful error messages.
•	Do not pretend a message was sent if there is no backend.
-If there is no backend, clearly indicate that the form is frontend-only or provide a suitable alternative such as an email link.

## Development Workflow

Follow this workflow for every significant task:

Step 1 — Understand
Read:
•	AGENTS.md
•	Existing project files
•	Relevant HTML
•	Relevant CSS
•	Relevant JavaScript
Do not modify files before understanding the existing implementation.

Step 2 — Plan
Before making significant changes:
1.	Identify the files that need modification.
2.	Explain what will change.
3.	Identify possible side effects.
4.	Keep the plan small and testable.

Step 3 — Implement
Make the smallest changes necessary.
Do not rewrite unrelated code.

Step 4 — Test
After implementation:
•	Check for HTML errors.
•	Check JavaScript errors.
•	Check responsive behavior.
•	Check links.
•	Check navigation.
•	Check forms where applicable.

Step 5 — Review
Ask:
•	Does the implementation satisfy the requirement?
•	Did it introduce unnecessary complexity?
•	Did it break existing functionality?
•	Does it follow AGENTS.md?
•	Is the design consistent?

Step 6 — Report
Briefly report:
•	What changed
•	Which files changed
•	What was tested
•	Any remaining issues

##Error Handling
When an error occurs:
Do not immediately rewrite the project.
Instead:
1.	Read the error carefully.
2.	Identify the likely cause.
3.	Inspect the relevant code.
4.	Make a targeted fix.
5.	Test again.
-	If uncertain, explain the uncertainty instead of pretending the solution is correct.

## Security
Never expose:
•	API keys
•	Passwords
•	 Access tokens
•	Private credentials
•	Environment secrets
Do not hardcode secrets into HTML, CSS, or JavaScript.

##Agent Response Format

For significant tasks, respond using:
-	Plan
Briefly explain the intended changes.
-	Changes
List the files modified and what changed.
-	Verification
Explain what was tested.
-	Issues
Mention anything that could not be verified or requires user input.
Keep responses concise and avoid unnecessary explanations.

## Portfolio Owner Information

Name: Fatima Asher
 Role: Software Engineer 

Expertise:
 - Python
 - JavaScript 
 - Django

 Projects:
 - Blogging website 
 - Ecommerce website 
 - Amazon affiliate marketing website

##Cross-model Verification
-	For important architectural or implementation decisions: 

1. Ask another AI model to review the proposed solution.
2. Compare the responses.
3. Identify disagreements or potential mistakes.
4. Verify the claims before implementation.
5. Prefer evidence and testing over assumptions. Do not blindly accept AI-generated code.

## AGENTS.md Rules

- Read AGENTS.md before starting any task.
- Do not modify AGENTS.md unless the user explicitly requests it.
- If project requirements change, ask the user before changing these instructions.
