# Expense Tracker App Documentation
Use "npm install" command to install the node_modules for the React project.

## Technologies Used

### Backend (Spring Boot)
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven

### Frontend (React)
- React
- React Router
- Axios (for HTTP requests)
- Bootstrap (for styling)

## How to Run Locally

### Prerequisites
- Java Development Kit (JDK) installed
- Node.js and npm installed

### Backend (Spring Boot)

1. Clone the repository:
   ```bash
      git clone https://github.com/umair-666/Expense-Tracker.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd expense-tracker/backend
   ```

3. Build and run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

   The backend server will start at `http://localhost:8080`.

### Frontend (React)

1. In a new terminal, navigate to the frontend directory:
   ```bash
   cd expense-tracker/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   The frontend will be accessible at `http://localhost:3000`.

### Access the Application

Visit `http://localhost:3000` in your web browser to access the Expense Tracker application. The frontend will communicate with the backend at `http://localhost:8080`.

## Additional Notes

- The backend and frontend should be run in separate terminals or command prompt windows.
- Ensure that the backend server is running before accessing the frontend.
- Customize the database configurations in the `application.properties` file in the backend directory if needed.
