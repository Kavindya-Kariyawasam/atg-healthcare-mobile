# 🏥 ATG Healthcare Care Plan Manager (Mobile App)

The ATG Healthcare Care Plan Manager is a mobile-first digital platform designed to address the growing need for accessible, efficient, and personalized healthcare services. Modern healthcare faces challenges in care coordination, medication tracking, and patient engagement, especially for chronic conditions, elderly care, and post-hospitalization recovery. Traditional systems, often reliant on paper records or fragmented digital tools, struggle to support collaborative and adaptive care management.

This application bridges the gap between patients (clients), care navigators (non-clinical caregivers), and administrators, enabling real-time collaboration in a secure and user-friendly environment. Key modules include care plan management, medication tracking with reminders, appointment scheduling, document upload, and secure chat. Unique features such as readiness-based appointment scheduling (where clients complete a questionnaire before booking consultations) and Google Calendar integration for care navigators add intentionality and efficiency to the care journey.

By providing intuitive mobile interfaces for clients and care navigators, alongside an administrative dashboard, the platform empowers all stakeholders to deliver and receive high-quality, consistent, and personalized care. The goal is to reimagine care delivery through digital empowerment, automation, and seamless coordination, especially in community and non-hospital settings where structured care is often lacking.

## 🌟 Background & Motivation

Many healthcare interactions outside hospital settings lack structure and visibility, relying on paper tracking, disconnected spreadsheets, and informal communication channels. This leads to missed medications, delayed interventions, and inconsistent care. Existing digital solutions are often too generic or complex for community healthcare environments.

Key challenges addressed by this platform:

- Medication tracking difficulties: missed doses
- Document and care plan management: risk of loss or improper sharing
- Appointment coordination: time-consuming, not integrated into care journey
- Lack of accountability: hard for admins to monitor progress
- Security concerns: sensitive data on non-secure platforms

Healthcare today requires coordination, continuity, and patient empowerment. Our motivation is to deliver digital infrastructure that supports seamless care intake, personalized care plan creation, task scheduling, real-time alerts, and progress tracking for all stakeholders. Aging populations, chronic illness, and overburdened systems make structured, accessible, and collaborative care management more important than ever.

## 🚩 Problem Statement

Despite advances in medical science, the administrative and communication side of patient care remains inefficient and disconnected. Most organizations rely on fragmented systems for managing care plans, appointments, and communication, leading to redundant work, increased risk of error, and poorer outcomes.

Core problems addressed:

- Fragmented systems: medication, scheduling, and documentation handled separately
- Appointment barriers: lack of streamlined scheduling
- Medication non-adherence: forgotten doses, misinterpreted instructions
- Communication gaps: care navigators lack timely access to information
- Security and privacy concerns: sensitive data on unregulated platforms

The ATG Healthcare Care Plan Manager provides a unified, secure solution integrating all critical aspects of healthcare management into a single mobile and web platform.

## 👤 Roles & Navigation

- **Client:** Access care plans, medication reminders, appointments, and readiness questionnaires.
- **Care Navigator:** Manage assigned clients, view care plans, handle appointments, and monitor medication adherence.
- **Role-based navigation:** UI and features adapt based on user type and status.

## 🔑 Key Features

### Authentication & Security

- Signup, login, logout, password reset, and multi-factor authentication (AWS Cognito).
- Role and status based navigation (Client, Care Navigator).

### Dashboards

- **Client Dashboard:** Upcoming appointments, notifications, care plans, medication adherence, and readiness questionnaire.
- **Care Navigator Dashboard:** Navigation to appointment history, readiness details, care plans.

### Care Plan Management

- Clients view care plans created by their CN.
- CNs manage and update care plans for assigned clients.

### Medication Adherence

- Add prescription details, drugs, and dosages.
- Receive reminders and notifications for medication times and refills.
- CNs can monitor client medication adherence.

### Appointment Scheduling

- Integrated with Calendly (WebView) for booking.
- Appointment countdown notifications.
- CNs can view/cancel appointments for assigned clients.

### Readiness Questionnaire

- Determines consultation need; answers saved only if consultation is confirmed.

### Profile Management

- Edit personal details, change avatar, view privacy policy, and contact support.

### Notifications

- Local and in-app notifications for appointments, medication, and system events.
- Notification history (cleared on logout).

## 🏗️ Architecture & Tech Stack

- **Frontend:** React Native (Expo)
- **Backend:** AWS Lambda (Python/Nodejs), AWS API Gateway
- **Authentication:** AWS Cognito
- **Database:** AWS RDS (MySQL), Firebase
- **Other:** Calendly (appointments), AWS Amplify, CloudWatch

## 📦 Installation

### 1. Standard Installation

```bash
npm install
```

### 2. Custom Installation (Optional)

- **Windows (PowerShell):**
  ```powershell
  .\install-deps.ps1
  ```
- **macOS/Linux:**
  ```bash
  bash install-deps.sh
  ```

Both methods will set up all required dependencies.

## 🚀 Usage

Start the development server:

```bash
npx expo start
```

- Scan the QR code with Expo Go (iOS/Android)
- Press 'w' for web preview
- Press 'i' for iOS Simulator
- Press 'a' for Android Emulator

> **Note:** Install Expo Go on your device for mobile testing. For simulators/emulators, ensure you have the necessary tools installed.

## 🧪 Testing

- Automated tests for authentication, medication, and care plan features are in the `AuthTests/` folder.
- Medication notification system can be tested via the Medication Management screen (see `MEDICATION_TESTING_GUIDE.md`).

## 📁 Project Structure

- `App.js`, `index.js`: Entry points
- `screens/`: All main app screens (dashboard, care plans, medication, appointments, profile, etc.)
- `Components/`: Reusable UI components
- `utils/`: Notification and medication services
- `services/`: API integration
- `DB_Handling/`, `LambdaFuncCare/`, `LambdaFuncsAuth/`: AWS Lambda functions (Python)
- `assets/`: Images and avatars

## 🛡️ Security & Privacy

- All authentication and sensitive data handled via AWS Cognito and encrypted storage.
- Role and status based navigation ensures privacy and data segregation.

## 👥 Team & Credits

- Developed by Vortexa - a team of 5 (University of Moratuwa, Faculty of IT)
- Mentorship: Ayman Tech Global (UK)
- Lead Mobile Developer & Backend Integrator: [Kavindya-Kariyawasam]

## 📄 License

**Proprietary Project – All Rights Reserved**

This project and its source code are protected and may not be copied, reproduced, or distributed without explicit permission from the author. Unauthorized use is strictly prohibited.
