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


<!--
README: Summary of All Concepts Used in the Extended React Router Project

1. BrowserRouter — Enabling Routing in the Application
- Use the BrowserRouter component to enable client-side routing for the React SPA.
- It monitors URL changes and renders matching components without full page reloads.
- Wrap the app root so routing hooks and components are available throughout the component tree.

2. Defining and Mapping Routes (Routes, Route, Link, NavLink)
- Define a set of routes that map URL paths to specific components.
- Use Link for basic in-app navigation and NavLink when you need automatic "active" styling for navigation items.
- These constructs together provide smooth, SPA-style navigation without page refreshes.

3. Dynamic Routing With URL Parameters
- Create parameterized routes to accept dynamic values in the path (for example a profile route with an ID segment).
- Inside the routed component, read path parameters via the route-params hook to access those dynamic values.
- Use the search-params hook to read query string parameters (e.g., ?showDetails=true).
- These mechanisms allow components to respond to variable URL data (IDs, filters, pagination, etc.).

4. Handling Unknown Routes (404 Page)
- Add a catch-all fallback route to render a Not Found page when no defined route matches.
- This ensures users see a friendly 404-like message within the SPA and improves UX for mistyped or obsolete URLs.

5. Programmatic Navigation Using useNavigate
- Use the navigation hook to perform route changes from code (no link click required).
- Common uses: redirect after login, conditional routing, navigation inside event handlers or after form submission.
- The hook returns a navigate function you can call with a target path to perform client-side redirects.

Notes and Best Practices
- Centralize and organize route definitions for easier maintenance and clearer app structure.
- Prefer NavLink for navigation menus to show active state and improve UX.
- Always validate or handle missing/invalid route parameters to prevent runtime errors.
- Use programmatic navigation judiciously to keep application flow predictable and user-friendly.
-->