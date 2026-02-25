# ITPE4 NeDB Full-Stack Project

This folder is now a single combined project that runs:

- `server/` -> Express + NeDB backend (`http://localhost:5000`)
- `client/` -> React + MUI frontend (`http://127.0.0.1:3000`)

The frontend uses Vite proxy so requests to `/api` are forwarded to the backend.

## Run as one project

From the root (`my-fullstack-project`):

```bash
npm install
npm run install:all
npm run dev
```

## Useful commands

- `npm run dev` -> start backend + frontend together
- `npm run dev:server` -> backend only
- `npm run dev:client` -> frontend only
- `npm run build` -> build frontend
- `npm start` -> start backend (production-style)

## API endpoints

- `GET /api/tasks`
- `GET /api/tasks/:id`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`
