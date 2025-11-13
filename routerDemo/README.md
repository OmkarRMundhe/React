# Router Demo

## Overview
This project demonstrates React Router implementation and navigation patterns.

## Features
- Client-side routing setup
- Multi-page navigation
- Route parameters and dynamic routing
- Navigation components

## Project Structure
```
routerDemo/
├── src/
│   ├── styles/
│   ├── pages/
│   └── App.js
└── package.json
```

## Getting Started

### Installation

```bash
npm install
```

### Running the Project
```bash
npm start
```

## Technologies Used
- React
- React Router

## Learning Outcomes
This project covers fundamental React Router concepts for building single-page applications with multiple views.

## Summary of All Concepts Used

1. **BrowserRouter** — Enabling Routing in the Application
   - Use `BrowserRouter` to enable client-side routing for the React SPA.
   - It listens to URL changes and renders components without reloading the page.
   - Wrap the app root so routing hooks and components are available throughout the component tree.

2. **Defining and Mapping Routes** (`Routes`, `Route`, `Link`, `NavLink`)
   - Use `Routes` and `Route` to map paths to components.
   - Use `Link` for basic in-app navigation and `NavLink` when you need automatic "active" styling.
   - Together they provide smooth SPA navigation without full page reloads.

3. **Dynamic Routing With URL Parameters**
   - Define parameterized routes to accept dynamic values in the path, e.g.:
     ```js
     <Route path="/profile/:id" element={<UserDetails />} />
     ```
   - Inside the routed component, extract params with:
     ```js
     import { useParams } from "react-router-dom";
     const { id } = useParams();
     ```
   - For query strings use `useSearchParams()` to read values like `?showDetails=true`.

4. **Handling Unknown Routes** (404 Page)
   - Add a fallback route to render a Not Found page when no defined route matches:
     ```js
     <Route path="*" element={<NotFound />} />
     ```
   - This shows a friendly 404 message inside the SPA.

5. **Programmatic Navigation Using** `useNavigate`
   - Use the `useNavigate` hook to perform route changes from code:
     ```js
     import { useNavigate } from "react-router-dom";
     const navigate = useNavigate();
     navigate("/profile/1");
     ```
   - Useful for redirects after login, conditional navigation, and navigation after form submission.

### Notes and Best Practices
- Centralize and organize route definitions for easier maintenance.
- Prefer `NavLink` for navigation menus to show active state.
- Validate or handle missing/invalid route parameters to avoid runtime errors.
- Use programmatic navigation judiciously to keep app flow predictable.

