const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const profileDiv = document.getElementById("profile");
const errorDiv = document.getElementById("error");
const loadingDiv = document.getElementById("loading");
const reposDiv = document.getElementById("repos");

searchBtn.addEventListener("click",()=>{
    const username = searchInput.value.trim();

    if(!username){
        alert("Enter username");
        return;
    }

    fetchUser(username);
});

async function fetchUser(username) {
  try {
    showLoading();
    const res = await fetch(`https://api.github.com/users/${username}`);
     if (!res.ok) {
      showError("User not found");
      return;
    }
    const data = await res.json();
    
    showProfile(data);
    fetchRepos(data.repos_url);
    console.log(data); 
  } catch (error) {
    console.log(error);
    showError("Something went wrong");
  }finally {
    loadingDiv.style.display = "none";
    searchInput.value="";
  }
}

function showProfile(user) {
  profileDiv.innerHTML = `
    <div class="profile-card">
      <img src="${user.avatar_url}" />

      <div class="profile-info">
        <h2>${user.name || user.login}</h2>
        <p>${user.bio || "No bio available"}</p>
        <p>Joined: ${formatDate(user.created_at)}</p>

        <a href="${user.html_url}" target="_blank">
          View Profile
        </a>
      </div>
    </div>
  `;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
function showError(msg) {
  errorDiv.textContent = msg;
  profileDiv.innerHTML = "";
}

function showLoading(){
    loadingDiv.style.display = "block";
    errorDiv.textContent = "";
    profileDiv.innerHTML = "";
    reposDiv.innerHTML= "";
}


async function fetchRepos(url) {
  try {
    console.log(`repo fetching url: ${url}`);
    
    const res = await fetch(url);
    const repos = await res.json();

    showRepos(repos);
  } catch (error) {
    console.log(error);
  }
}

function showRepos(repos) {
  reposDiv.innerHTML = "<h3>Top Repositories</h3>";

  // take top 5 latest repos
  const topRepos = repos.slice(0, 5);

  topRepos.forEach(repo => {
    const div = document.createElement("div");

    div.classList.add("repo-card");

    div.innerHTML = `
      <a href="${repo.html_url}" target="_blank">
        ${repo.name}
      </a>
    `;

    reposDiv.appendChild(div);
  });
}