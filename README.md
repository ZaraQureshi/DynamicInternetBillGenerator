🧾 Dynamic Internet Bill Generator

A frontend-focused invoice generator built to explore real-world UI architecture, state management, and PDF generation using modern React tooling.

This project allows users to create, preview, and download internet bills with dynamic data, clean design, and smooth animations — all without a backend.

🔗 Live Demo:
https://zaraqureshi.github.io/DynamicInternetBillGenerator

💡 Why I Built This

I wanted to build a project that goes beyond CRUD forms and focuses on:

State flow across components

Reusable UI patterns

Reliable PDF generation

Smooth user experience

Clean, professional UI design

This project simulates a real ISP billing workflow, making it a strong portfolio piece.

✨ Key Highlights

⚛️ Built with React 19 + Vite

🧠 Global state management using Context API

🎨 Tailwind CSS + shadcn/ui for consistent design

🎥 Smooth animations using Framer Motion

📄 Live PDF preview & download using @react-pdf/renderer

🧩 Component-driven architecture

📱 Fully responsive layout

🚫 No backend dependency

🧠 State Management (Context API)

The Context API is used to manage invoice data globally.

Why Context API?

Avoids prop drilling

Keeps form data and preview in sync

Simple, predictable state flow

Ideal for medium-scale apps

How it works:

Invoice form updates global context

Preview and PDF components consume the same data

Any change reflects instantly across the UI


📄 PDF Generation Strategy

Initially explored html2canvas + jsPDF, but switched to:

✅ @react-pdf/renderer
