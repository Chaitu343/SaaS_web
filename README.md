# SaaS Platform
Welcome to SaaS platform that allows users to browse, subscribe to plans, and manage their subscriptions seamlessly.

## Technologies Used

### Frontend
- React
- React Router Dom
- Tailwind CSS
- Firebase Authentication

### Backend
- Node.js
- Express
- Firebase (Realtime Database)
- Stripe API

## Getting Started

1. Clone the repository.
2. Set up your Firebase project and obtain API keys.
3. Set up your Stripe account for testing.
4. Install dependencies using `npm install`.
5. Run the frontend using `npm run dev` and backend using `npm start`.

## Configuration

### Frontend
- Update Firebase configuration in `frontend/src/firebase/firebaseConfig.js`.
- Set Stripe public key in the frontend components where required.

### Backend
- Create a `.env` file in the `backend` directory and set `STRIPE_PRIVATE_KEY` with your secret key.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add a new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.
