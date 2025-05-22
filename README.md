# 📝 Task Manager — React + TypeScript + Tailwind + Firebase

![Task Manager Preview](https://via.placeholder.com/800x400?text=Task+Manager+Preview) <!-- Replace with actual screenshot -->

A sleek and modern **Task Manager** app with smooth animations, due dates, and Google authentication. Built with cutting-edge web technologies for optimal performance and developer experience.

## 🚀 Features

- ✅ **CRUD Operations**: Add, edit, delete tasks with intuitive UI
- 📅 **Due Dates**: Visual warnings for overdue tasks
- 🔄 **Completion Toggle**: Mark tasks as done/undone
- ✨ **Animations**: Framer Motion for polished interactions
- 🔐 **Google Auth**: Secure login via Firebase
- 💾 **Offline Support**: LocalStorage persistence
- ☁️ **Firebase Sync**: Real-time cloud backup (coming soon!)
- 🌙 **Responsive Design**: Works on all devices

## 🛠️ Tech Stack

| Technology       | Purpose                          |
|------------------|----------------------------------|
| ⚛️ React         | Component-based UI               |
| 🟦 TypeScript    | Type safety & better developer experience |
| 🎨 Tailwind CSS  | Utility-first CSS framework      |
| 🎞 Framer Motion | Smooth animations               |
| 🔥 Firebase      | Authentication & backend services |
| 💾 LocalStorage  | Client-side data persistence     |

## 📸 Demo

![Task Manager Demo](https://via.placeholder.com/600x300?text=Animated+GIF+Demo) <!-- Replace with GIF -->

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Firebase account (for authentication)

### Installation

### Firebase Setup

1. Create a new project in Firebase Console
2. Enable Google Authentication
3. Replace the placeholder config in src/firebase.ts with your credentials:

``` bash
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ... other config values
};
```

### 🧠 What I Learned

- TypeScript Integration: Strong typing for props and state
- Animation Patterns: Framer Motion for declarative animations
- Auth Flow: Implementing Google Sign-In with Firebase
- State Management: LocalStorage persistence techniques
- Responsive Design: Tailwind's mobile-first approach

### 🌟 Roadmap

 Firebase Firestore integration

- Dark mode toggle
- PWA support for mobile
- Due date notifications
- Task categories/filtering

---

### 🤝 Contributing

 Contributions are welcome! Please open an issue or submit a PR for any improvements.

- Fork the project
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some amazing feature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## 📜 License

Distributed under the MIT License. See LICENSE for more information.
