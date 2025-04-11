# ERP-SYS

A modern Enterprise Resource Planning (ERP) system built with **Next.js**, featuring a **monorepo structure** powered by **Turborepo**. This project includes a frontend application, a backend API server, and shared packages for UI components and database access.

---

## Project Structure

```
ERP-SYS/
├── apps/
│   ├── web/           # Frontend application (Next.js)
│   └── server/        # Backend API server (Node.js/Express or similar)
├── packages/          # Shared packages
│   ├── ui/            # Shared UI components
│   └── db/            # Shared database access (Prisma)
```

---

## Features

- **Frontend**: Built with Next.js 13+ using the App Router and React Server Components.
- **Backend**: API server for handling business logic and database interactions.
- **Database**: Prisma ORM with PostgreSQL.
- **Authentication**: Powered by NextAuth.js (Auth.js).
- **Monorepo**: Managed with Turborepo for efficient builds and dependency sharing.
- **UI Components**: Shared UI components using `shadcn/ui` and Tailwind CSS.
- **Drag-and-Drop**: Form builder with `@dnd-kit`.

---

## Getting Started

### Prerequisites

- **Node.js**: v18+ (LTS recommended)
- **pnpm**: v8+ (for monorepo dependency management)

---

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ERP-SYS.git
   cd ERP-SYS
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```
   
4. **Set up the database**:
   - Apply Prisma migrations:
     ```bash
     pnpm --filter db prisma migrate dev
     ```
   - (Optional) Open Prisma Studio to explore the database:
     ```bash
     pnpm --filter db prisma studio
     ```

5. **Start the development servers**:
   - Start all apps:
     ```bash
     pnpm dev
     ```
   - Or start specific apps:
     ```bash
     pnpm --filter web dev
     pnpm --filter server dev
     ```

---

## Development

### Adding UI Components

To add new components from `shadcn/ui` to the frontend:

```bash
pnpm dlx shadcn@latest add [component-name] -c apps/web
```


## Database

- **ORM**: Prisma
- **Database**: PostgreSQL

---

## ER Diagram

Below is the high-level Entity-Relationship Diagram (ERD) for the database:

![ER Diagram](apps/web/public/images/erd.png)

--- 

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

