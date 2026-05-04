const searchBtn = document.getElementById("searchBtn");
const usernameInput = document.getElementById("username");

const profileDiv = document.getElementById("profile");
const reposDiv = document.getElementById("repos");

const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");



searchBtn.addEventListener("click", handleSearch);

usernameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        handleSearch();
    }
});



async function handleSearch() {
    const username = usernameInput.value.trim();

    if (!username) { // if username is null, empty, or false
        showError("Please enter a username");
        return;
    }

    clearUI();
    showLoader();

    try {
        const userData = await fetchUser(username);
        displayProfile(userData);

        const reposData = await fetchRepos(username);
        displayRepos(reposData);

    } catch (err) {
        showError(err.message);
    } finally {
        hideLoader();
    }
}


async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
        throw new Error("User not found");
    }

    return await response.json();
}


async function fetchRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!response.ok) {
        throw new Error("Failed to fetch repositories");
    }

    return await response.json();
}


function displayProfile(user) {
    profileDiv.innerHTML = `
        <img src="${user.avatar_url}" width="100">
        <h2>${user.name || "No Name"}</h2>
        <p>@${user.login}</p>
        <p>${user.bio || "No bio available"}</p>
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
        <p>Public Repos: ${user.public_repos}</p>
    `;
}


function displayRepos(repos) {
    reposDiv.innerHTML = "<h3>Repositories</h3>";

    repos.forEach(repo => {
        const repoEl = document.createElement("div");
        repoEl.classList.add("repo");

        repoEl.innerHTML = `
            <h4><a href="${repo.html_url}" target="_blank">${repo.name}</a></h4>
            <p>${repo.description || "No description"}</p>
            <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
        `;

        reposDiv.appendChild(repoEl);
    });
}


function showLoader() {
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}


function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
}


function clearUI() {
    errorDiv.classList.add("hidden");
    profileDiv.innerHTML = "";
    reposDiv.innerHTML = "";
}