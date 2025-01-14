# Šprotify APP

Šprotify is a web app that uses Spotify Web API.
This app search for tracks and albums, manage your favorites.

Site is available at: https://sprotify.netlify.app/

## Technologies Used

- **Frontend**: React, Redux, Material-UI
- **Backend**: Spotify Web API
- **State Management**: Redux Toolkit
- **Authentication**: OAuth 2.0 with Spotify
- **Other Tools**: Jest for testing, React Testing Library

## Getting Started
### Prerequisites

- Node.js (v18.20.5) and npm (10.8.2) installed on your machine. 
- A Spotify Developer account with an app set up in the
[Spotify Developer Dashboard](https://developer.spotify.com/dashboard)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/esenge/sprotify.git
   cd sprotify
   ```
2. **Install dependencies**:
    ```bash
   npm install
   ```
3. **Create a .env file with your Spotify credentials**:
    ```js
   VITE_CLIENT_ID=your-client-id
   VITE_CLIENT_SECRET=your-client-secret
   VITE_URI_REDIRECT=your-redirect-uri
   ```
4. **Start the development server**:
    ```bash
   npm run dev
   ```
5. **Open the app in your browser**:
   [http://localhost:5173/](http://localhost:5173/)
