# Language Exchange

An Online Tutor Booking Platform designed to connect users with tutors across various languages and subjects. The platform simplifies the process of finding, reviewing, and booking tutors through an interactive and user-friendly interface. It promotes accessible learning opportunities globally and streamlines the tutor hiring process.

## Live Site Link:https://assignment-eleven-568c6.web.app/

## Project Purpose
The purpose of this platform is to provide a convenient and secure way for users to:
- Browse and select tutors based on language and expertise.
- Book sessions and manage bookings.
- Add tutorials and reviews.

## Key Features
- **User Authentication**: Secure login and registration using email/password and Google Sign-in.
- **Dynamic Routing**: Users can navigate through various pages like "Find Tutors", "Add Tutorials", "My Tutorials", and "My Booked Tutors".
- **Private Routes**: Only logged-in users can access certain pages.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Dark/Light Theme**: Users can toggle between light and dark modes.
- **Tutor Management**: Add, update, and delete tutorials with ease.
- **Search Functionality**: Search for tutors based on language.
- **JWT Authentication**: Secure user data and verify routes.
- **Error Handling**: Includes loading states, error pages, and relevant messages.


## NPM Packages Used
- **React.js**: Framework for building user interfaces.
- **Tailwind CSS**: For responsive and modern styling.
- **DaisyUI**: Pre-styled components.
- **Axios**: For API calls.
- **Firebase**: Authentication and hosting.
- **Express.js**: Server framework.
- **MongoDB**: Database for storing tutor and user information.
- **Jsonwebtoken (JWT)**: Token-based authentication.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Ashimkayal4/language-exchange-client-side.git
```

Go to the project directory

```bash
  cd language-exchange-client-side
```

Install dependencies

```bash
  npm install
```
## Environment Variables
To run this project, you will need to add the following environment variables to your .env file
- **VITE_apiKey**
- **VITE_authDomain**
- **VITE_projectId**
- **VITE_storageBucket**
- **VITE_messagingSenderId**
- **VITE_appId**

Start the server

```bash
  npm run dev
```

