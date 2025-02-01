# Dynamic & Interactive Portfolio Website

This project is a personal portfolio website built using Angular, designed to showcase my skills and experience as a software engineer with a focus on web development. It provides a dynamic and interactive experience for visitors to explore my projects, skills, and qualifications.

## Table of Contents

- [Project Description](#project-description)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Development Approach](#development-approach)
- [Setup](#setup)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Further Development](#further-development)
- [License](#license)

## Project Description

This portfolio website is a modern, responsive, and highly interactive platform designed to demonstrate my proficiency in frontend development, modern web technologies, and user-centered digital experiences. It provides a dynamic and engaging way for potential employers, collaborators, and clients to get to know me.

## Key Features

- **Modular Architecture:** Built with Angular using feature modules to enhance scalability and maintainability.
- **Responsive Design:** Implemented with a mobile-first approach, using CSS variables and media queries to ensure a seamless experience across various devices.
- **Interactive Elements:** Integrates a variety of elements for enhanced user engagement, including:
  - Smooth Gradient Background
  - Mobile Navigation Toggle
  - Customizable "Personality Reveal" Tablet effect (using JavaScript and CSS)
  - Sticky Header
  - Micro-interactions
- **Reusable Components:** Leverages shared components for common elements like the header, footer, and social share icons, promoting code reusability and maintainability.
- **Custom Animations:** Includes custom CSS animations that creates a rich and dynamic user experience, including the bouncing arrow on the home page and transitions on hover.
- **Dynamic Content:** The application loads project information using JSON-based API (placeholder for now), and it uses reusable components.
- **Semantic HTML:** Implements appropriate HTML5 tags to create a well-structured and accessible website, focusing on screen reader compatibility.

## Technologies Used

- **Frontend:** Angular, TypeScript, HTML5, CSS3.
- **Styling:** CSS variables, Flexbox, CSS Grid, Transitions, Animations, Media Queries.
- **Build Tools:** pnpm, Angular CLI
- **Other:** JSON-based API, that fetches using HTTP service

## Development Approach

- **Mobile-First:** The application is designed with mobile devices in mind first and then scaled up.
- **Component-Based:** The application is developed with a component-based architecture where HTML, CSS and TypeScript are bundled together to maximize reusability.
- **Code Organization**: A modular approach using different modules such as core, shared and feature modules for scalability.
- **Accessibility**: All projects have considered best practices for a11y

## Setup

1.  **Clone the Repository:**

    ```bash
    git clone <repository-url>
    cd portfolio-angular
    ```

2.  **Install Dependencies with pnpm:**

    ```bash
     pnpm install
    ```

3.  **Use pnpm as the package manager**:

    ```bash
    ng config cli.packageManager pnpm
    ```

## Development

1.  **Start the development server:**

    ```bash
    ng serve
    ```

2.  Navigate to `http://localhost:4200/` in your browser to view the site.
3.  Make changes as required and use the browser to check for the changes.

## Build

1.  **Build the application:**

    ```bash
    ng build --configuration production
    ```

2.  The built application will be placed in the `dist/portfolio-angular` directory.

## Deployment

1.  Copy the contents of the `dist/portfolio-angular` directory to your hosting provider.
2.  Configure your hosting to redirect all requests to the `index.html` file if you have dynamic routing.

## Project Structure

```shell
portfolio-angular/
├── src/
│ ├── app/
│ │ ├── core/ # Core module (services, etc.)
│ │ │ ├── core.module.ts
│ │ │ ├── interceptors/ # For HTTP interceptors (if needed)
│ │ │ └── services/
│ │ │ └── api.service.ts # Example service for API calls
│ │ ├── shared/ # Shared module (components, pipes, directives)
│ │ │ ├── shared.module.ts
│ │ │ ├── components/
│ │ │ │ ├── header/
│ │ │ │ ├── footer/
│ │ │ │ └── social-share/
│ │ │ ├── directives/
│ │ │ └── pipes/
│ │ ├── features/ # Feature modules
│ │ │ ├── about/
│ │ │ │ ├── about.module.ts
│ │ │ │ ├── about-routing.module.ts
│ │ │ │ └── components/
│ │ │ │ └── about/
│ │ │ │ ├── about.component.html
│ │ │ │ ├── about.component.css
│ │ │ │ └── about.component.ts
│ │ │ ├── contact/
│ │ │ │ ├── contact.module.ts
│ │ │ │ ├── contact-routing.module.ts
│ │ │ │ └── components/
│ │ │ │ └── contact/
│ │ │ │ ├── contact.component.html
│ │ │ │ ├── contact.component.css
│ │ │ │ └── contact.component.ts
│ │ │ ├── home/
│ │ │ │ ├── home.module.ts
│ │ │ │ ├── home-routing.module.ts
│ │ │ │ └── components/
│ │ │ │ └── home/
│ │ │ │ ├── home.component.html
│ │ │ │ ├── home.component.css
│ │ │ │ └── home.component.ts
│ │ │ ├── projects/
│ │ │ │ ├── projects.module.ts
│ │ │ │ ├── projects-routing.module.ts
│ │ │ │ └── components/
│ │ │ │ ├── project-card/
│ │ │ │ │ ├── project-card.component.html
│ │ │ │ │ ├── project-card.component.css
│ │ │ │ │ └── project-card.component.ts
│ │ │ │ └── project-list/
│ │ │ │ ├── project-list.component.html
│ │ │ │ ├── project-list.component.css
│ │ │ │ └── project-list.component.ts
│ │ │ └── testimonials/
│ │ │ ├── testimonials.module.ts
│ │ │ ├── testimonials-routing.module.ts
│ │ │ └── components/
│ │ │ └── testimonials/
│ │ │ ├── testimonials.component.html
│ │ │ ├── testimonials.component.css
│ │ │ └── testimonials.component.ts
│ │ ├── app.module.ts
│ │ ├── app-routing.module.ts
│ │ ├── app.component.html
│ │ ├── app.component.css
│ │ └── app.component.ts
│ ├── assets/ # Images, fonts, etc.
│ │ ├── images/
│ │ └── fonts/
│ ├── environments/
│ │ ├── environment.ts # Development environment
│ │ └── environment.prod.ts # Production environment
│ ├── index.html
│ ├── main.ts
│ ├── polyfills.ts
│ ├── styles.css # Global styles
│ ├── test.ts
├── .angular/
├── angular.json
├── pnpm-lock.yaml
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Further Development

- **Content:** The next thing to do is to replace all the placeholder content with real content.
- **Project Details Pages:** Each project should have its own detail page.
- **Dynamic Content:** Create a REST API and retrieve the project information via an API service instead of hardcoding.
- **Performance:** Optimize for better loading times, and consider implementing techniques like lazy loading and tree-shaking.
- **Testing:** Write Unit tests to ensure the code runs as expected.
- **More Interactions:** Add further interactive elements, and enhance existing animations for a rich experience.
- **SEO:** Implement Angular Universal for server-side rendering (SSR) to improve SEO and make the website indexable.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
