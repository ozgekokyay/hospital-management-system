# Hospital Management System — Spring Boot & React

A full-stack hospital management web application for managing patients, admissions, and medical examinations with modular operations and cost tracking. Built using **Spring Boot**, **React**, and **PostgreSQL**, this system modernizes a classic file-based Java design by introducing REST APIs and a dynamic frontend interface.

---

## Tech Stack

| Layer       | Technology                      |
|-------------|----------------------------------|
| Backend     | Java 17, Spring Boot, Spring Data JPA |
| Frontend    | React, Axios, TailwindCSS (or Bootstrap) |
| Database    | PostgreSQL                       |
| Design      | Decorator Pattern, DAO Pattern   |

---

## Key Features

- **Patient Management**  
  Add, update, delete, and list patients via a clean UI.

- **Admissions & Medical History**  
  Record new admissions as either inpatient or outpatient.

- **Modular Examinations** *(Decorator Pattern)*  
  Add operations like:
  - Doctor Visit
  - Imaging
  - Tests
  - Measurements

- **Cost Calculation**  
  Total cost per admission is calculated dynamically based on operations performed.

- **RESTful API**  
  Secure and cleanly structured endpoints for all operations.

## API Endpoints
- `GET    /api/patients` — List all patients  
- `POST   /api/patients` — Add a new patient  
- `DELETE /api/patients/{id}` — Delete a patient by ID  
- `POST   /api/admissions` — Create a new admission  
- `POST   /api/admissions/{id}/examinations` — Add an examination to an admission  
- `GET    /api/admissions/{id}/cost` — Get total cost of all examinations in an admission  


## Software Design Highlights
- Decorator Pattern: Applied to dynamically chain examination operations and cost calculations.
- DAO Layer Abstraction: Clean separation of data persistence logic.
- Layered Architecture: Controller → Service → Repository pattern.
- Validation & Error Handling: Robust request validation & standardized responses.
