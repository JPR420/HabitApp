# HabitApp

HabitApp is a cross-platform mobile application built with React Native that helps users track daily habits, visualize progress, and gain insights into their behavioral patterns over time.

The app is designed to support any type of habit (e.g. reading, gym, meditation, learning) and focuses on simplicity, consistency, and data-driven improvement. Future versions will include AI-powered insights and recommendations.

---

## 🚀 Features

- User authentication (login & registration)
- Create, update, delete habits
- Log habit completion
- View habit progress and streaks
- Data-driven habit insights (basic analytics)
- Secure API communication with backend
- Scalable architecture for future AI features

---

## 🧱 Tech Stack

- **React Native**
- **Expo**
- **JavaScript**
- **React Navigation**
- **Axios**
- **JWT-based authentication**
- **Spring Boot backend API**

---

## 🧭 App Navigation Flow

- Splash / Loading
- Authentication
  - Login
  - Register
- Main App
  - Dashboard
  - Habit List
  - Habit Details
  - Add / Edit Habit
  - Analytics
  - Settings

Navigation is guarded by authentication state to prevent unauthorized access.

---

## 🧠 State Management

- Local state for UI behavior
- Centralized auth state (JWT handling)
- API logic abstracted into a dedicated service layer
- Tokens stored securely and injected automatically into API requests

---

## 🌐 API Integration

The app communicates with a Spring Boot REST API.

- All requests are made through a centralized API service
- JWT tokens are attached via Authorization headers
- Error handling is standardized for user feedback

