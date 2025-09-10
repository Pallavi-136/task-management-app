A full-stack **Task Management Web Application** where users can register, log in, and manage their own tasks.  
Built with **Next.js / React**, **Node.js/Express**, and **MongoDB**, this app allows users to efficiently create, view, update, and delete their own tasks.

---

## Features / Requirements

### 1. Authentication
- Sign Up and Login with **email & password**  
- Passwords are **securely hashed** using bcrypt  
- JWT-based authentication (or NextAuth)  
- Users can **only access their own tasks**

### 2. Task Management (CRUD)
- Each task includes: `title`, `description`, `status` (pending/done), `createdAt`  
- Users can **create, view, update, and delete** their own tasks  
- Only the **task creator** can update or delete their tasks

### 3. Search, Filter & Pagination
- Search tasks by **title** or **description**  
- Filter tasks by status: All / Pending / Done  
- Search and filter work **together seamlessly**  
- Implement **pagination** or **infinite scroll** for task lists

### 4. Frontend
- Built with **Next.js 13/14 (App Router)** or React  
- Pages include: Login/Register, Dashboard (task list), Task Form (create/edit task)  
- Proper **loading** and **error** states handled  
- Uses **TailwindCSS** or **Shadcn UI** for a clean, minimal UI

### 5. Bonus (Optional)
- Deploy on **Vercel** with **MongoDB Atlas**  
- Use **React Query** or **SWR** for data fetching  
- Implement **optimistic UI updates** for task actions

---

## Technologies Used

- **Frontend:** Next.js / React, TailwindCSS / Shadcn UI  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT or NextAuth  

---
