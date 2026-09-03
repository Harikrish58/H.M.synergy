# H&M Synergy — Recruitment Platform

A multilingual recruitment and employment agency platform developed for H&M Synergy in Poland.

The platform connects employers and job seekers and provides an administrative workflow for reviewing, translating, and publishing job vacancies.

## Overview

The application provides three main areas:

- Public recruitment website
- Employer vacancy submission
- Protected administration dashboard

The public website supports English, Polish, and Ukrainian.

## Features

### Job Seekers

- Browse available job vacancies
- View detailed job information
- View salary, working conditions, and requirements
- Submit job applications
- Upload CVs
- Receive application confirmation by email

### Employers

- Submit job vacancies online
- Provide company and contact information
- Specify job requirements and working conditions
- Receive confirmation and administrative processing

### Administration

- Secure administrator authentication
- Review employer submissions
- Approve or reject vacancies
- Convert approved submissions into public jobs
- Create and edit job information
- Save jobs as drafts
- Publish jobs
- Manage multilingual job content

### AI-Assisted Translation

The administration dashboard includes an AI-assisted translation workflow using the OpenAI API.

An administrator can create a vacancy in one language and generate the missing English, Polish, and Ukrainian versions.

Translations can be reviewed and edited before publication.

## Technology Stack

### Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Lucide React

### Backend

- Next.js API Routes
- Supabase
- PostgreSQL
- Supabase Authentication
- PostgreSQL Row Level Security

### Integrations

- OpenAI API
- SMTP email

### Deployment

- Netlify

## Architecture

The application uses the Next.js App Router with server and client components.

Main application areas:

```text
Public Website
    |
    +-- English
    +-- Polish
    +-- Ukrainian
    |
    +-- Job Listings
    +-- Job Details
    +-- Job Applications

Employer
    |
    +-- Vacancy Submission
    |
    +-- Supabase
            |
            +-- Admin Review

Admin
    |
    +-- Authentication
    +-- Submission Management
    +-- Job Publishing
    +-- AI Translation


## Architecture

- This project was developed with assistance from OpenAI Codex and ChatGPT.

- AI tools were used for code generation, debugging, refactoring, technical problem solving, documentation, and development guidance.

- The resulting application was integrated, configured, tested, and reviewed as part of the development process.
