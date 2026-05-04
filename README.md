🚀 GitHub Profile Explorer

A responsive web application that allows users to search for GitHub profiles and explore their repositories using the GitHub REST API.

📌 Features

🔎 Search Functionality
Search GitHub users by username
Trigger search via button or Enter key
👤 User Profile Details
Avatar (Profile Picture)
Name & Username
Bio
Followers & Following count
Public repositories count

📦 Repository List
Repository name
Description
Stars ⭐
Forks 🍴
Direct link to GitHub repo

⚠️ Error Handling
User not found
API failure handling
Empty input validation

⏳ Loading State
Loader shown while fetching data

💡 Bonus Features (if implemented)
Pagination for repositories
Sorting (stars, forks, latest)
Recent searches (localStorage)
Dark mode toggle 🌙
Debounced search input

🛠️ Tech Stack
HTML5
CSS3
Vanilla JavaScript (ES6)
GitHub REST API

📂 Project Structure
/project-root
├── index.html
├── style.css
├── script.js
└── README.md

⚙️ Setup Instructions
Clone the repository
git clone https://github.com/your-username/github-profile-explorer.git
Open the project folder
cd github-profile-explorer
Run the project
Open index.html in browser
OR
Use Live Server in VS Code


🌐 API Endpoints Used

User Profile

https://api.github.com/users/{username}

User Repositories

https://api.github.com/users/{username}/repos
📸 Screenshots

Add screenshots here (VERY IMPORTANT for interview)

Example:

![Home Page](./screenshots/home.png)
![Profile View](./screenshots/profile.png)
🚧 Challenges Faced
Handling API errors properly
Managing async operations using async/await
Designing responsive UI
Handling empty and invalid inputs
📈 Future Improvements
Add infinite scrolling
Improve UI/UX animations
Add caching for faster results
Integrate GraphQL API
👨‍💻 Author
Shresht Gupta
GitHub: https://github.com/Shresht-Celestial
