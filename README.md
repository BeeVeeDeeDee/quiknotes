# QuickNotes – README

[EXAMPLE] [DO-NOT-EXPECT-APP-TO-WORK] [IT-DOES-NOTHING] [PLACEHOLDER-CODE]

## Overview
QuickNotes is a small web app for creating, editing and sharing short notes.  
It is designed to load fast, work across devices and keep personal notes private unless shared.

## Features
• Create, edit and delete short notes  
• Automatic syncing across devices  
• Read-only share links  
• Privacy by default  
• Basic offline safety through local drafts

## Tech Stack
**Frontend:** React  
**Backend:** Node.js + Express  
**Database:** MongoDB  
**Hosting:** Vercel (frontend) + Render (backend)

## Getting Started

### Requirements
• Node.js 16+  
• npm or yarn  
• A MongoDB connection string  
• Optional: an email service API key for verification mails

### Installation
    git clone https://github.com/yourname/quicknotes.git
    cd quicknotes
    npm install

### Environment Variables
Create a `.env` file inside the backend folder with:

    MONGO_URL=your-mongo-url
    SESSION_SECRET=your-secret
    EMAIL_API_KEY=your-key

Create a `.env` file in the frontend if you need custom API endpoints:

    REACT_APP_API_URL=https://your-api-url.com

### Running Locally
Start the backend:

    cd backend
    npm start

Start the frontend:

    cd frontend
    npm start

The app runs at:  
**Frontend:** http://localhost:3000  
**Backend:** http://localhost:5000

## Project Structure
    /frontend      React UI
    /backend       Node.js + Express API
    README.md

## Development Notes
• Keep commits small and descriptive.  
• Use feature branches when adding new behaviour.  
• Write comments only where logic is not immediately obvious.  
• Test flows that match real scenarios: quick capture, device switching, sharing, privacy.

## Deployment
Frontend can be deployed to Vercel by connecting the repository.  
Backend can be deployed to Render as a Node service.  
Update environment variables on both platforms before deploying.

## Troubleshooting
If the frontend cannot reach the backend, check the `REACT_APP_API_URL`.  
If notes do not save, verify the MongoDB connection string.  
If share links fail, check whether tokens are generated in the backend logs.

## License
MIT License.

## Maintainer
Your Name – your.email@example.com
