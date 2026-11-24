# FAST DATA GH backend starter

This is a starter scaffold, not a complete live ordering system. Supplier purchases are deliberately disabled until secure payment verification, persistent order storage, duplicate-request protection, and supplier status updates are implemented.

## Requirements
- Node.js 20 or newer

## Setup
1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env`.
3. Put your EliteDataGh API token in `.env` as `ELITEDATAGH_API_TOKEN`.
4. Start with `npm start`.
5. Test `GET /health`.

Never upload `.env` or expose the real API token in frontend JavaScript or a public repository.

## Routes
- `GET /health`
- `GET /api/supplier/balance`
- `GET /api/bundles` (currently sends an empty JSON body to the supplier; confirm required request fields with EliteDataGh)
- `POST /api/orders` (intentionally disabled until payment and order safeguards are complete)
