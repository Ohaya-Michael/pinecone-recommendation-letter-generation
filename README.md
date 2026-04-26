# Sovereign Intelligence — Email Recommendation System

> AI-powered personalized email recommendation engine for banking customers.

---

## Overview

Sovereign Intelligence is a full-stack web application that generates personalized email recommendations for bank customers based on their financial profile. By analyzing key customer data such as credit score, account balance, tenure, and activity, the system produces tailored email content that can be sent directly to customers.

---

## Features

- **Customer Profile Intake** — Multi-step form to capture customer demographics, financial details, and engagement history
- **AI Email Generation** — Automatically generates personalized email recommendations based on customer profile
- **Recommendation Viewer** — Browse and review all previously generated email recommendations
- **Real-time Processing** — Live feedback while the AI model processes the customer data
- **Structured JSON Output** — View raw recommendation data alongside the formatted email

---

## Tech Stack

### Frontend
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Lucide React](https://lucide.dev/) — icons
- [Axios](https://axios-http.com/) — HTTP client

### Backend
- [FastAPI](https://fastapi.tiangolo.com/) — REST API
- SQLite — local database (`sql_app.db`)

---

## Project Structure

```
src/
├── components/
│   ├── api/
│   │   └── client.js            # Axios instance
│   ├── layout/
│   │   └── Navigation.tsx       # Top navigation bar
│   └── pages/
│       ├── LandingPage.tsx      # Home / marketing page
│       ├── IntakePage.tsx       # Customer profile intake form
│       ├── ProcessingPage.tsx   # Loading screen while generating
│       ├── JsonViewer.tsx       # Structured JSON result display
│       └── AllRecommendationViewer.tsx  # All recommendations list
├── App.tsx
├── main.tsx
└── index.css
```

---

## Getting Started

### Prerequisites
- Node.js >= 18
- Python >= 3.9
- pip

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sovereign-intelligence.git
cd sovereign-intelligence
```

### 2. Set up the frontend

```bash
npm install
```

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Start the development server:

```bash
npm run dev
```

### 3. Set up the backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.

---

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Base URL for the FastAPI backend (e.g. `http://localhost:8000`) |

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/email_recommendation` | Generate a new email recommendation |
| `GET` | `/email_recommendation` | Fetch all recommendations |

---

## Input Data Fields

| Field | Description |
|---|---|
| `CreditScore` | Customer credit score (300–850) |
| `Age` | Customer age in years |
| `Tenure` | Years with the bank |
| `Balance` | Account balance |
| `NumOfProducts` | Number of banking products held |
| `HasCrCard` | Whether the customer has a credit card (0/1) |
| `IsActiveMember` | Whether the customer is an active member (0/1) |
| `EstimatedSalary` | Estimated annual salary |
| `Exited` | Whether the customer has churned (0/1) |
| `Complain` | Whether the customer has filed a complaint (0/1) |
| `SatisfactoryScore` | Customer satisfaction score |
| `CardType` | Type of card held (e.g. DIAMOND CARD) |
| `PointsEarned` | Loyalty points earned |

---

## License

MIT