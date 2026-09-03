# Bapu Gujarat Knowledge Village

Public website for Bapu Gujarat Knowledge Village (BapuGKV), including institutional information, academic programmes, campus resources, student activities, events, placements, and an online enquiry form.

The repository contains two independently deployable applications:

- `frontend/` — React 19 single-page application built with Vite, Tailwind CSS, and React Router.
- `backend/` — Express API that stores enquiries in MongoDB through Mongoose.

## Status

This repository is suitable for continued development and deployment preparation. Before a public production launch, configure the backend connection and frontend API URL, provide the ignored website assets, restrict CORS, add health monitoring, and enable HTTPS. The current code uses development defaults for several of these concerns; the deployment notes below call them out explicitly.

## Features

- Responsive institutional website with shared navigation and footer components.
- Routed pages for:
  - About, admissions, programmes, campus, careers, contact, and enquiries.
  - Diploma, B.E., and postgraduate programme information.
  - Affiliations, events, achievements, faculty, laboratories, innovation, training and placement, and startup initiatives.
  - Library, NSS, NCC, counselling, grievance redressal, anti-ragging, women development, sports, and downloads.
- Enquiry form with a simple client-side arithmetic challenge.
- REST endpoint for persisting enquiries to MongoDB.
- Static production build suitable for GitHub Pages or another static host.

## Technology stack

| Area | Technology |
| --- | --- |
| UI | React 19, React DOM, React Router 7 |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 with the Vite plugin |
| Icons | Hugeicons React |
| Linting | Oxlint |
| API | Node.js, Express 5, CORS |
| Database | MongoDB with Mongoose 9 |
| Static deployment | GitHub Pages via `gh-pages` |

## Repository layout

```text
.
├── backend/
│   ├── models/Enquiry.js    # Mongoose enquiry schema
│   ├── server.js            # Express application and API route
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Page and shared UI components
│   │   ├── App.jsx          # Client-side route definitions
│   │   ├── main.jsx         # React entry point and router basename
│   │   └── index.css
│   ├── public/asset/        # Local/ignored image and document assets
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## Prerequisites

- Node.js 22.x or a compatible current LTS release.
- npm 10.x or newer.
- MongoDB 7.x or a compatible MongoDB deployment for the enquiry API.
- The website asset set expected by the components under `frontend/public/asset/`.

The asset directory is ignored by Git. A fresh clone therefore needs the approved image/PDF assets copied into that directory before the website can display its complete content.

```text
http://localhost:5173/bapuclg/
```

When running the Vite development server, use the URL printed by Vite if the root path redirects or differs from the production base path.

## Environment and configuration

There is currently no environment-variable loader or `.env.example` in the repository. The following values are hard-coded and should be externalized before production:

| Setting | Current value | Production action |
| --- | --- | --- |
| MongoDB URI | `mongodb://localhost:27017/bapu` | Use a secret-managed MongoDB URI in `backend/server.js`. |
| API port | `3000` | Read from `process.env.PORT` with a safe default. |
| CORS policy | All origins | Restrict to the deployed frontend origin. |
| Enquiry API URL | `http://localhost:3000/api/enquiries` | Configure a deploy-time frontend API base URL. |
| Frontend base path | `/bapuclg` | Keep for the current GitHub Pages path, or change both Vite and Router configuration when using a custom-domain root. |

Do not commit database credentials, API keys, or other secrets. For a production implementation, document variables such as `MONGODB_URI`, `PORT`, `CORS_ORIGIN`, and `VITE_API_BASE_URL` in a local `.env.example` while storing their real values in the hosting provider's secret configuration.

## Production build and preview

Build the frontend:

```bash
cd frontend
npm run build
```

The generated static files are written to `frontend/dist/`. Preview the build locally with:

```bash
npm run preview
```

Run the available checks with:

```bash
npm run lint
```

The backend currently has no automated test suite. `npm test` intentionally exits with a placeholder failure until API tests are added.


## API reference

### Create an enquiry

`POST /api/enquiries`

Request body:

```json
{
  "name": "Asha Patel",
  "email": "asha@example.com",
  "number": 987654XXXX,
  "city": "Gandhinagar",
  "state": "Gujarat",
  "institute": "Technology",
  "question": "Please share the admission process."
}
```

`institute` must be one of:

```text
Technology
Pharmacy
Science & Commerce
Law
Nursing
```

Successful response: `201 Created`

```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "Asha Patel",
    "email": "asha@example.com",
    "number": 9876543210,
    "city": "Gandhinagar",
    "state": "Gujarat",
    "institute": "Technology",
    "question": "Please share the admission process.",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

Validation or persistence errors currently return `400 Bad Request` with `{ "success": false, "message": "..." }`.

## Frontend routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/admission` | Admission |
| `/programs` | Programs |
| `/campus` | Campus |
| `/career` | Career |
| `/contact` | Contact |
| `/enquiry` | Enquiry |
| `/diploma`, `/be`, `/pg` | Academic programmes |
| `/affiliation`, `/events`, `/achievement`, `/faculty` | Institutional information |
| `/laboratory`, `/mobinnovation`, `/itp`, `/techviden`, `/toppers`, `/placement`, `/startup` | Innovation, placement, and activities |
| `/library`, `/nss`, `/ncc`, `/counsel`, `/grievance`, `/anti`, `/wdc`, `/sports`, `/download` | Campus resources and student support |


## Asset management

Media is referenced from `frontend/public/asset/` and is intentionally excluded from version control by `.gitignore`. Keep the filenames and formats expected by the components when syncing approved assets. If the asset source changes, update the component references and verify both local development and the built `frontend/dist/` output.

Do not use unlicensed third-party photographs, logos, PDFs, or student information. Confirm usage rights and accessibility text before publishing assets.

## Security and privacy checklist

The enquiry form collects personal information. Before production launch:

- Add server-side validation for name, email, phone number, city, state, institute, and question length.
- Avoid storing unnecessary personal data and define a retention/deletion policy.
- Publish a privacy notice and explain how enquiry data is used.
- Restrict CORS to the real frontend origin.
- Add rate limiting and abuse protection to `POST /api/enquiries`.
- Add HTTPS, security headers, request-size limits, and safe error responses.
- Protect MongoDB with authentication, least-privilege access, backups, and firewall/network rules.
- Remove sensitive values from logs and monitor failed requests.
- Replace the client-only arithmetic challenge with server-verifiable anti-abuse protection if the endpoint is exposed publicly.

## Troubleshooting

**The enquiry form cannot submit.** Confirm that MongoDB is running, the backend is listening on port `3000`, and the frontend's API URL points to the deployed backend rather than `localhost`.

**Images or downloads are missing.** Restore the approved files to `frontend/public/asset/`. The directory is ignored and is not included in a fresh clone.

**A nested GitHub Pages URL returns 404.** Enable SPA fallback to `index.html` and confirm the `/bapuclg` base path is present in both Vite and React Router configuration.

**The API starts but the database is unavailable.** Check the MongoDB URI, credentials, network allowlist, and deployment logs. The current server logs a connection failure but does not expose a health endpoint.

## License

This project is proprietary software and is not free or open-source software.

Copyright © 2026 the repository owner. All rights reserved.

No person or organization may copy, reproduce, modify, adapt, publish, distribute, sublicense, sell, commercially exploit, or create derivative works from this project or any part of it without the copyright owner's prior written permission. This restriction applies to the source code, design, branding, content, media, documents, and associated assets.

Unauthorized use, modification, or redistribution is strictly prohibited. See [`LICENSE`](LICENSE) for the full proprietary license terms.
