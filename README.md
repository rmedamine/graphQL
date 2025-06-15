# Zone01 GraphQL 

## Overview
This project is a personal profile page built using GraphQL, designed to interface seamlessly with the Zone01 platform's GraphQL API. It empowers students to authenticate securely using JWT, retrieve their academic and progress data, and visualize key statistics through interactive and dynamic SVG graphs.

## Table of Contents
- Project Objectives
- Features
- Getting Started
- Authentication
- GraphQL API
- UI Design
- Graph Visualizations
- Hosting
- Technologies Used
- Contributing
- License

## Project Objectives
- Master the GraphQL query language by developing a dynamic and personalized profile page.
- Implement secure user authentication using JWT tokens provided by the Zone01 API.
- Query and display personalized data including XP, grades, skills, and audit information.
- Develop at least two distinct SVG-based statistical graphs to illustrate academic progress.
- Deliver a responsive and user-friendly interface emphasizing strong UI/UX design principles.
- Deploy the profile page on a static hosting platform of your choice (e.g., GitHub Pages, Netlify).

## Features
- **Login Page:** Supports authentication using either username/email and password, with JWT-based security.
- **Profile Dashboard:** Presents comprehensive user details such as identification info, XP totals, grades, skills, and audits.
- **Interactive SVG Graphs:** Visualizes important statistics including XP progression over time, pass/fail project ratios, and audit completion rates.
- **Secure Data Access:** All GraphQL queries require JWT Bearer tokens to ensure data privacy and security.
- **Logout Functionality:** Enables users to safely terminate their sessions.

## Getting Started

### Prerequisites
- A modern web browser with JavaScript enabled.
- Network connectivity to the following Zone01 endpoints:
  - `https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql`
  - `https://learn.zone01oujda.ma/api/auth/signin`

### Installation
```bash
git clone https://learn.zone01oujda.ma/git/rmohamme/graphql.git
cd graphql
Open index.html in your preferred web browser to launch the login interface.

Authentication
Obtain JWT tokens by sending a POST request to the signin endpoint:
https://learn.zone01oujda.ma/api/auth/signin

Use Basic Authentication with base64-encoded credentials (username/email + password).

Include the retrieved JWT token as a Bearer token in the Authorization header for all subsequent GraphQL API requests.

Display clear error messages for invalid login attempts.

GraphQL API
Interact with the Zone01 GraphQL API at:
https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql

Query user details, XP transactions, progress grades, project results, and more.

Utilize arguments, nested queries, and filtering for precise data retrieval.

Explore the API schema conveniently via GraphiQL for enhanced development.

UI Design
Clean, modern, and responsive design prioritizing usability and clarity.

Customizable profile sections include:

Basic user information

XP summary

Grades overview

Audit ratios

Skills inventory

Integrated loading indicators and error handling for a smooth user experience.

Graph Visualizations
Implemented with scalable and performant SVG elements.

Graph types featured include:

XP earned over time (progression charts)

Project pass/fail distribution (pie and bar charts)

Audit completion statistics

Supports animations and interactivity to engage users with their data insights.

Hosting
Easily deployable on popular static hosting platforms such as:

GitHub Pages

Netlify

Vercel

Simply upload the project files and ensure API access for full functionality.

Technologies Used
JavaScript (ES6+)

GraphQL

JWT Authentication

SVG for Data Visualization

HTML5 & CSS3

Contributing
Contributions, bug reports, and feature requests are highly welcome. Please check the issues page for existing reports or submit new ones. Pull requests for improvements are appreciated.

License
This project is licensed under the MIT License. See the LICENSE file for full details.

For questions or support, please open an issue or submit a pull request.

Happy coding! 🚀