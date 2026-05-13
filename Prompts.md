# Prompts.md

This file contains the AI prompts used during the development of the Prodesk IT landing page.

---

## Prompt 1: Basic Layout Structure

**Prompt:**
"Give me a simple HTML structure for a digital agency landing page with navbar, hero section, services, and footer."

**Usage:**
Used to create the initial HTML skeleton of the project.

---

## Prompt 2: Navbar Styling with Flexbox

**Prompt:**
"How to create a responsive navbar using Flexbox with logo on left and links on right?"

**Usage:**
Helped in aligning navbar elements properly and understanding Flexbox layout.

---

## Prompt 3: Responsive Design

**Prompt:**
"How to make a website responsive using media queries for mobile and tablet?"

**Usage:**
Used to implement mobile view (stacked layout and grid changes).

---

## Prompt 4: Dark Mode Toggle

**Prompt:**
"How to implement dark mode toggle using JavaScript and CSS?"

**Usage:**
Used to toggle a class on body and apply dark theme styles.

---

## Prompt 5: Hover Animations

**Prompt:**
"How to add smooth hover effects on buttons and cards using CSS?"

**Usage:**
Used for micro-interactions like scaling buttons and lifting cards.

---

## Prompt 6: Hamburger Menu

**Prompt:**
"How to create a mobile hamburger menu using JavaScript?"

**Usage:**
Used to hide/show navigation links on smaller screens.

---

## Prompt 7: UI Improvements

**Prompt:**
"How to make a website look more modern and clean using CSS?"

**Usage:**
Helped improve spacing, typography, and overall UI polish.

---

## Note

All AI-generated suggestions were reviewed, understood, and modified before implementation.



# Prompts.md

This document lists the AI prompts used while building the Cash Flow Tracker (Mission 2).

---

## Prompt 1: Project Planning

**Prompt:**
"How should I structure a simple expense tracker app using HTML, CSS, and JavaScript without any framework?"

**Usage:**
Used to understand the overall structure and divide the project into sections like salary input, expense form, list, and balance.

---

## Prompt 2: Handling Form Inputs

**Prompt:**
"How to take input values from HTML input fields using JavaScript and validate them?"

**Usage:**
Used for reading salary and expense inputs and ensuring no empty or invalid values are submitted.

---

## Prompt 3: Working with Arrays

**Prompt:**
"How to store multiple objects (like expenses) in an array and loop through them to display in the UI?"

**Usage:**
Used to manage the expenses list and dynamically render them using JavaScript.

---

## Prompt 4: Updating the DOM Dynamically

**Prompt:**
"How to create elements using JavaScript and append them to a list?"

**Usage:**
Used to display expenses in the UI using `createElement` and `appendChild`.

---

## Prompt 5: Calculating Totals

**Prompt:**
"How to calculate the sum of values in an array of objects using reduce()?"

**Usage:**
Used to calculate total expenses and remaining balance.

---

## Prompt 6: Local Storage

**Prompt:**
"How to store and retrieve data (arrays/objects) using localStorage in JavaScript?"

**Usage:**
Used to persist salary and expense data even after page refresh using `JSON.stringify` and `JSON.parse`.

---

## Prompt 7: Delete Functionality

**Prompt:**
"How to delete an item from an array and update the UI in JavaScript?"

**Usage:**
Used to remove expenses from the list and update both UI and localStorage.

---

## Prompt 8: Chart Integration

**Prompt:**
"How to create a pie chart using Chart.js with dynamic data?"

**Usage:**
Used to visualize expenses vs remaining balance and update chart when data changes.

---

## Prompt 9: Handling Edge Cases

**Prompt:**
"What are common bugs in JavaScript when working with numbers from input fields?"

**Usage:**
Helped identify issues like string concatenation instead of numeric addition and fixed using Number().

---

## Prompt 10: General UI Improvements

**Prompt:**
"How to make a simple dashboard UI look clean and modern using CSS?"

**Usage:**
Used to improve spacing, card layout, and overall visual design.

---

## Note

All AI-generated suggestions were carefully reviewed and implemented with understanding. The logic and structure were manually developed and tested.


# Prompts.md

This document lists the AI prompts used during the development of the "Dev Detective" GitHub User Search application.

---

## Prompt 1: Project Understanding

**Prompt:**
"How to build a GitHub user search app using HTML, CSS, and JavaScript without using any framework?"

**Usage:**
Used to understand the overall workflow of fetching user data from GitHub API and displaying it in a structured UI.

---

## Prompt 2: Fetch API Basics

**Prompt:**
"How to use fetch() with async/await to get data from an API in JavaScript?"

**Usage:**
Used to implement API calls for retrieving GitHub user data.

---

## Prompt 3: Handling API Responses

**Prompt:**
"How to check if an API response is successful and handle errors in fetch?"

**Usage:**
Used to implement error handling when a GitHub user is not found or API fails.

---

## Prompt 4: DOM Manipulation

**Prompt:**
"How to dynamically display API data in HTML using JavaScript?"

**Usage:**
Used to render user profile details like avatar, name, bio, and join date.

---

## Prompt 5: Date Formatting

**Prompt:**
"How to format a date string like '2023-01-25T12:00:00Z' into a readable format in JavaScript?"

**Usage:**
Used to display join date in a clean format like '25 Jan 2023'.

---

## Prompt 6: Loading State

**Prompt:**
"How to show a loading indicator while fetching data from an API?"

**Usage:**
Used to improve user experience by displaying a loading message during API calls.

---

## Prompt 7: Fetching Additional Data

**Prompt:**
"How to fetch related data from another API endpoint using data from the first API response?"

**Usage:**
Used to fetch repositories using the `repos_url` from the user object.

---

## Prompt 8: Array Sorting and Slicing

**Prompt:**
"How to sort an array of objects by date and get the latest 5 items in JavaScript?"

**Usage:**
Used to display the top 5 most recent repositories.

---

## Prompt 9: Creating Clickable Links

**Prompt:**
"How to create dynamic anchor tags in JavaScript that open in a new tab?"

**Usage:**
Used to make repository links clickable and open on GitHub.

---

## Prompt 10: UI Layout with Flexbox

**Prompt:**
"How to align two sections side by side using Flexbox?"

**Usage:**
Used to create a layout where profile and repositories appear side by side.

---

## Prompt 11: Card UI Design

**Prompt:**
"How to create a clean card layout using CSS with shadow and border-radius?"

**Usage:**
Used to style profile and repository sections into modern card components.

---

## Prompt 12: Debugging API Issues

**Prompt:**
"Why is my fetch request not returning expected data or showing undefined values?"

**Usage:**
Helped identify issues with incorrect data access and improved debugging skills.

---

## Note

All AI-generated suggestions were reviewed and understood before implementation. The application logic, API handling, and UI improvements were manually developed and tested.

# mission 4
# Prompts.md

This document contains the AI prompts and guidance used during the development of the AI Cover Letter Generator project.

---

## Prompt 1: Project Planning

**Prompt:**
"How should I structure a full-stack AI cover letter generator using HTML, CSS, JavaScript, Node.js, and Express?"

**Usage:**
Used to understand the overall architecture and divide the project into frontend and backend responsibilities.

---

## Prompt 2: Backend Setup

**Prompt:**
"How to create a simple Express server with CORS and JSON middleware?"

**Usage:**
Used to set up the backend server and create API endpoints for handling AI requests.

---

## Prompt 3: Environment Variables

**Prompt:**
"How to securely store API keys using .env in Node.js?"

**Usage:**
Used to securely manage API keys and prevent exposing sensitive information in frontend code or GitHub repositories.

---

## Prompt 4: AI API Integration

**Prompt:**
"How to send prompts to an AI model API from a Node.js backend?"

**Usage:**
Used to integrate AI-generated cover letter functionality through an external AI API.

---

## Prompt 5: Prompt Engineering

**Prompt:**
"How to write an effective AI prompt for generating professional cover letters?"

**Usage:**
Used to improve the quality and structure of generated cover letters.

---

## Prompt 6: Fetch API Communication

**Prompt:**
"How to send POST requests from frontend JavaScript to a backend API?"

**Usage:**
Used to connect the frontend form with the backend `/generate` endpoint.

---

## Prompt 7: Loading State

**Prompt:**
"How to show a loading indicator while waiting for an async API response?"

**Usage:**
Used to improve user experience during AI content generation.

---

## Prompt 8: Error Handling

**Prompt:**
"How to handle API errors gracefully in frontend and backend applications?"

**Usage:**
Used to display meaningful error messages when API requests fail or rate limits are exceeded.

---

## Prompt 9: Clipboard Functionality

**Prompt:**
"How to copy generated text to clipboard using JavaScript?"

**Usage:**
Used to implement the copy button functionality for generated cover letters.

---

## Prompt 10: Responsive Layout Design

**Prompt:**
"How to create a responsive two-column layout using Flexbox in CSS?"

**Usage:**
Used to design the side-by-side layout for the form section and generated output section.

---

## Prompt 11: Modern UI Styling

**Prompt:**
"How to make a clean modern SaaS-style UI using CSS?"

**Usage:**
Used to improve spacing, shadows, cards, buttons, and overall visual hierarchy of the application.

---

## Prompt 12: Debugging AI API Issues

**Prompt:**
"Why is my AI API returning quota errors or model not found errors?"

**Usage:**
Used to debug API integration issues, model compatibility, and request limits during development.

---

## Note

All AI-generated suggestions were reviewed, understood, and manually implemented. The application logic, backend integration, debugging, and UI improvements were tested and customized during development.


**mission5**

This document contains the prompts and questions used during the development of the Kanban Task Board project.

---

## Prompt 1: Project Planning

**Prompt:**
"How should I structure a Kanban Task Board in React using components and state?"

**Purpose:**
Used to understand how to divide the application into reusable components such as TaskForm, Column, and TaskCard.

---

## Prompt 2: React State Management

**Prompt:**
"How do I store and update an array of tasks using useState in React?"

**Purpose:**
Used to manage tasks and update them when adding, editing, deleting, and moving between columns.

---

## Prompt 3: Creating Reusable Components

**Prompt:**
"How do I pass data and functions between parent and child components using props in React?"

**Purpose:**
Used to pass tasks and action handlers from App.jsx to Column and TaskCard components.

---

## Prompt 4: Adding Tasks

**Prompt:**
"How do I create a form in React to add a new task with title and priority?"

**Purpose:**
Used to build the TaskForm component and add new tasks to the To Do column.

---

## Prompt 5: Filtering Tasks by Status

**Prompt:**
"How do I filter tasks into To Do, In Progress, and Done columns?"

**Purpose:**
Used to display tasks in the correct column based on their status.

---

## Prompt 6: Moving Tasks

**Prompt:**
"How do I update one property in an object inside a React state array?"

**Purpose:**
Used to change the task status when a user selects a different column.

---

## Prompt 7: Deleting Tasks

**Prompt:**
"How do I remove an item from an array in React state?"

**Purpose:**
Used to delete tasks using the `filter()` method.

---

## Prompt 8: Inline Editing

**Prompt:**
"How do I implement inline editing for task titles in React?"

**Purpose:**
Used to toggle between display mode and edit mode for each task.

---

## Prompt 9: Local Storage Persistence

**Prompt:**
"How do I save React state to localStorage and restore it on page load?"

**Purpose:**
Used to persist tasks after page refresh.

---

## Prompt 10: Priority Badge Colors

**Prompt:**
"How do I conditionally apply Tailwind CSS classes based on task priority?"

**Purpose:**
Used to display High, Medium, and Low priority badges with different colors.

---

## Prompt 11: Responsive Layout

**Prompt:**
"How do I create a responsive three-column layout using Tailwind CSS?"

**Purpose:**
Used to make the board stack on mobile and display side-by-side on larger screens.

---

## Prompt 12: UI Polish

**Prompt:**
"How can I design a modern Kanban board UI using Tailwind CSS?"

**Purpose:**
Used to improve spacing, colors, task counters, and card styling.

---

## Prompt 13: Debugging State Issues

**Prompt:**
"Why is my task not moving between columns in React?"

**Purpose:**
Used to debug issues related to status values and state updates.

---

## Prompt 14: Deployment

**Prompt:**
"How do I deploy a Vite React application to Vercel?"

**Purpose:**
Used to create a live demo link for project submission.

---

## Prompt 15: Git and Version Control

**Prompt:**
"How do I push my React project to GitHub and update changes safely?"

**Purpose:**
Used to manage commits and maintain the project repository.

---

## Note

All AI-generated suggestions were reviewed and manually implemented. The project structure, logic, debugging, and UI design were customized and tested during development.

