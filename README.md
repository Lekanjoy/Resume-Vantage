# Resume Vantage Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Key Components](#key-components)
4. [Styling](#styling)
5. [State Management](#state-management)
6. [API Integration](#api-integration)
7. [Routing](#routing)
8. [Authentication](#authentication)
9. [Resume Building Process](#resume-building-process)
10. [AI Integration](#ai-integration)
11. [Deployment](#deployment)

## Introduction

Resume Vantage is a Next.js-based web application that allows users to create, customize, and manage professional resumes. The application features AI-powered content optimization, multiple resume templates, and a user-friendly interface for building and editing resumes.

## Project Structure

The project follows a typical Next.js structure with some custom organization:

- `app/`: Contains the main application pages and layouts
- `components/`: Reusable React components
- `public/`: Static assets like images and SVGs
- `styles/`: Global CSS and Tailwind configuration
- `lib/`: Utility functions and helpers
- `types/`: TypeScript type definitions
- `features/`: Redux slices for state management
- `hooks/`: Custom React hooks

## Key Components

### Landing Page Components
- `Hero`: Main landing page component
- `Perks`: Displays key features of the application
- `Discover`: Showcases resume templates
- `Steps`: Explains the resume creation process
- `Testimonials`: Displays user testimonials
- `CTA`: Call-to-action section
- `Footer`: Site footer with links and information

### Dashboard Components
- `Sidebar`: Navigation for the resume building process
- `DashboardContent`: Main content area for resume editing
- `Experiences`: Component for adding and editing work experiences
- `Education`: Component for adding educational background
- `Skills`: Component for adding skills
- `Summary`: Component for writing resume summary
- `AdditionalDetails`: Component for adding extra information

### Resume Preview
- `ResumePreview`: Displays a live preview of the resume being built
- `PreviewHeader`, `SkillsPreview`, `ExperiencePreview`, `EducationPreview`, `CertificationPreview`: Subcomponents for different sections of the resume preview

## Styling

The project uses Tailwind CSS for styling, with custom configurations in `tailwind.config.ts`. Global styles are defined in `app/globals.css`.

## State Management

Redux is used for state management, with slices defined in the `features/` directory:
- `resumeSlice`: Manages the state of the resume being built
- `AISuggestionsSlice`: Handles AI-generated content suggestions

## API Integration

Axios is used for making API calls, with a custom hook `useAxios` for handling requests. Server-side API calls are made using `getServerAxiosInstance`.

## Routing

Next.js App Router is used for routing. Key routes include:
- `/`: Landing page
- `/dashboard`: Resume building dashboard
- `/templates`: Resume template selection
- `/auth`: Authentication pages (login, signup, password reset)

## Authentication

Authentication is implemented using JWT tokens. The `middleware.ts` file handles route protection for authenticated areas.

## Resume Building Process

The resume building process is broken down into steps, managed by the `Sidebar` component. Users progress through these steps:
1. Choose a template
2. Add personal information
3. Add work experiences
4. Add education
5. Add skills
6. Write summary
7. Add additional details

## AI Integration

AI is integrated for content optimization and suggestions. The `ExperienceDescription` component uses AI to help users write better job descriptions.

## Deployment

The project is configured for deployment on Vercel, with environment variables set for production use.

---

This documentation provides an overview of the Resume Vantage project structure and key features. For more detailed information on specific components or functionalities, refer to the inline comments and TypeScript types within the codebase.