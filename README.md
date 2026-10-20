# SnapMap AI 📍
### See your campus come alive.

SnapMap AI is a map-based campus discovery platform that helps students explore campus activities through location-tagged photos. It aims to transform individual photo uploads into meaningful campus events using AI-powered photo grouping and automatic event summaries.

> Built for **GLITCHATHON 2026** — exploring how AI can make campus life more connected, discoverable, and engaging.

---

## ✨ Overview

Campus activities, spontaneous gatherings, cultural events, and student communities are often discovered through scattered messages and word of mouth. SnapMap AI brings campus activity into one interactive, location-aware experience.

Students can share photos, explore activity on a live map, and discover possible events happening around campus.

### Key Features

- 🗺️ **Interactive Campus Map** — Explore photo uploads through map markers and clustered bubbles.
- 📸 **Location-Based Photo Sharing** — Capture or upload photos with location information.
- 🎯 **Event Discovery** — Group nearby photo activity to help surface possible campus events.
- 🤖 **AI-Powered Event Intelligence** — Planned AI-assisted grouping of related photos and automatic event summaries.
- 👤 **Student Authentication** — Authentication through Clerk, with campus-email restrictions where configured.
- 🖼️ **Photo Galleries** — Browse personal uploads and event-related photos.
- ☁️ **Cloud Image Storage** — Store uploaded images using Azure Blob Storage.
- 🗑️ **Photo Management** — Allow users to delete their own photos.

*Feature availability depends on the current implementation. AI features should be marked complete only after they work in the submitted build.*

---

## 🧠 How the AI Feature Works

The planned AI workflow converts individual photo uploads into useful campus activity information.

1. **Photo analysis:** Extract semantic information from images using an appropriate vision model.
2. **Context collection:** Use available timestamps and approximate location data.
3. **Event grouping:** Combine semantic similarity with geographic and temporal proximity to identify potentially related uploads.
4. **Event summarization:** Generate a concise description of the likely activity from the grouped photos and available evidence.
5. **Map integration:** Present the resulting event cards or clusters on the campus map.

AI-generated event labels and summaries may be incorrect. They should be treated as suggestions, not verified facts.

**AI model/API:** To be specified once integrated.  
**Current AI status:** Update to `Implemented`, `In Progress`, or `Planned` before submission.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Mobile application | React Native, Expo |
| Camera and location | Expo Camera, Expo Location |
| Maps | Mapbox / react-native-maps |
| Authentication | Clerk |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Image storage | Azure Blob Storage |
| AI integration | Vision model and/or embedding model — specify the actual service used |

---

## 🏛️ Architecture

```text
React Native / Expo App
          |
          ├── Clerk Authentication
          ├── Camera & Location
          └── Interactive Campus Map
                    |
                    v
             Express API
                    |
          ┌─────────┴─────────┐
          v                   v
    MongoDB Atlas       Azure Blob Storage
    Photo metadata      Uploaded images
          |
          v
    AI Processing Layer
    (when integrated)
          |
          ├── Photo understanding
          ├── Event grouping
          └── Event summaries
                    |
                    v
           Campus Event Discovery
```

---

## 📂 Project Structure

```text
SnapMap/
├── frontend/
│   ├── app/
│   ├── components/
│   ├── screens/
│   ├── services/
│   └── assets/
├── backend/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── models/
│   ├── services/
│   └── server.js
├── UI-UX/
├── README.md
└── .gitignore
```

*Adjust the tree to match the actual repository. Directory names may differ.*

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Expo-compatible development environment
- MongoDB Atlas account or accessible MongoDB instance
- Clerk application credentials
- Azure Blob Storage account
- Map provider credentials, if required
- AI provider credentials, if AI functionality is enabled

### 1. Clone the repository

```bash
git clone <YOUR_PUBLIC_GITHUB_REPOSITORY_URL>
cd SnapMap
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file using the environment variables required by your backend.

Example placeholders:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
AZURE_STORAGE_CONNECTION_STRING=your_azure_connection_string
AZURE_STORAGE_CONTAINER_NAME=your_container_name
AI_API_KEY=your_ai_provider_api_key
```

`AI_API_KEY` is required only if your chosen AI integration uses it. Use the actual variable names expected by your code.

Start the backend using the script configured in `package.json`, for example:

```bash
npm run dev
```

### 3. Set up the frontend

Open another terminal:

```bash
cd frontend
npm install
```

Configure the frontend environment variables for Clerk, your API URL, and your map provider as required by the project.

Start Expo:

```bash
npx expo start
```

Follow the Expo instructions to run the app on a compatible device or emulator.

### 4. Verify the application

- Confirm that the backend starts successfully.
- Verify authentication.
- Test photo upload and image retrieval.
- Confirm that location permissions work.
- Test map markers and photo galleries.
- If AI features are implemented, test event grouping and summaries with real sample uploads.

**Note:** The commands and environment variables above are templates. Check the existing `package.json`, application configuration, and backend code before using them.

---

## 🔐 Security and Privacy

- Never commit `.env` files, private API keys, database credentials, or storage connection strings.
- Use server-side authentication checks for protected API routes.
- Verify that users can modify or delete only their own content.
- Request location permissions transparently and only when needed.
- Avoid exposing precise location information unnecessarily.
- Do not use AI to identify people in uploaded photographs.
- Explain how photo and location data are used.

---

## 🧪 Testing

Recommended checks before submission:

- [ ] User can authenticate successfully.
- [ ] Photo uploads are stored and retrieved correctly.
- [ ] Location data is handled correctly when permission is granted.
- [ ] Map markers and clusters display correctly.
- [ ] Photo galleries load and deletion works.
- [ ] Unauthorized API requests are rejected.
- [ ] AI groups related photos reasonably, if implemented.
- [ ] AI summaries are grounded in available photo evidence, if implemented.
- [ ] Invalid or unrelated photos do not automatically become confirmed events.

---

## 🏆 Hackathon Submission

**Event:** GLITCHATHON 2026  
**Category:** Open Track  
**Project:** SnapMap AI  
**Tagline:** See your campus come alive.

### Problem

Students often miss campus events because updates are spread across group chats, social media, and word of mouth.

### Solution

SnapMap AI provides a map-based way to share campus photos and discover nearby activities, with AI-assisted event grouping and summaries as its intended differentiator.

### Use of AI

Describe the actual model, API, or algorithm used, what data it receives, what it produces, and how the results are validated. Do not claim AI capabilities that are not implemented.

### Demo

- **Live Demo:** Add your deployed application URL.
- **Demo Video:** Add your YouTube or Vimeo URL.
- **Screenshots:** Add at least two genuine screenshots of the working application.

### What Was Built During the Hackathon

Clearly distinguish newly developed hackathon features from the pre-existing SnapMap codebase. Confirm that extending an existing project is permitted by the organizers before submitting.

---

## 🛣️ Future Roadmap

- More reliable semantic photo grouping.
- Better event summaries and activity categorization.
- User feedback for correcting incorrect event groupings.
- Campus-specific discovery filters.
- Privacy controls for location and photo visibility.
- Improved event recommendations.

---

## 🤝 Contributing

Contributions are welcome. Open an issue to discuss a bug or improvement, or submit a pull request following the project's contribution guidelines.

## 📄 License

Add a license file before publishing the repository. Choose a license that matches how you want others to use and distribute the project.

---

**SnapMap AI — turning campus moments into discoverable experiences.**
