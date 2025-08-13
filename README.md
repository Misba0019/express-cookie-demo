# 🍪 Express Cookie Demo

A backend learning project demonstrating how to set, read, verify, and clear both **regular** and **signed cookies** in an Express.js server using the `cookie-parser` middleware.

---

## Features

- Set and retrieve **regular cookies**
- Create and verify **signed cookies** (tamper detection)
- Clear cookies from the client
- Minimal, easy-to-run setup

---

## Routes & App Flow

- **GET** `/greet` – Greets the user using the `name` cookie (defaults to "User")
- **GET** `/setname` – Sets `name` and `fish` cookies
- **GET** `/getsignedcookie` – Sets a signed cookie `fruit`
- **GET** `/verifycookie` – Displays both signed and unsigned cookies in JSON format
- **GET** `/clearcookies` – Clears all cookies set in this demo

---

## Technologies Used

- Node.js
- Express.js
- cookie-parser
- dotenv

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Environment Variables
Create a `.env` file in the project root:
```bash
COOKIE_SECRET=your_cookie_secret_here
```

### 3. Start the Server
```bash
node index.js
```
The app will be available at [http://localhost:3000/products](http://localhost:3000/products).

## Learning Outcomes

- Understanding signed vs unsigned cookies
- Using Express middleware effectively
- Following best practices with environment variables