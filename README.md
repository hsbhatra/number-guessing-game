# Number Guessing Game 🎲

A fully functional and responsive number guessing game built with **ReactJS**.  
Users can sign up, log in, play the game, track their scores, and compete against their previous best attempts.

---

## Live Demo

[Play the Game on Netlify](https://boom-guess.netlify.app)

---

## Demo Video

Watch an explanatory walkthrough of the project:  
[Google Drive – Number Guessing Game Demo](https://drive.google.com/drive/folders/1musmQxv2KO7gQ-vGHuyJrpMJrGFZnchA)

---

## Features

- User authentication: Login, Signup, and Forgot Password (localStorage-based)
- Random number generation (1–100) for each game session
- Timer to track how long you take to guess correctly
- Tracks number of attempts per game
- High score is saved and displayed (using localStorage)
- Reset button to restart the game at any time
- Logout functionality and route protection for authenticated pages

---

## Tech Stack

- **Frontend:** ReactJS (CRA), JavaScript, CSS
- **Storage:** LocalStorage (for user data and game history)
- **Deployment:** GitHub & Netlify

---

## Project Structure

```
src/
├── pages/                # Login, Signup, Forgot Password, Game
├── styles/               # Auth.css, GamePage.css
├── App.js                # App router
└── index.js              # Main entry point
```

---

## How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/number-guessing-game.git

# 2. Navigate into the project directory
cd number-guessing-game

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributions

Contributions, issues, and feature requests are welcome!  

---

## Contact

For any questions or feedback, please reach out via [GitHub Issues](https://github.com/hsbhatra/number-guessing-game/issues).

