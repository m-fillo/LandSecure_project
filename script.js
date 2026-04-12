// Register user
function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    localStorage.setItem(user, pass);
    alert("Account created!");
}

// Login
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedPass = localStorage.getItem(user);

    if (storedPass === pass) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid login");
    }
}

// Save land
function saveLand() {
    let land = {
        owner: document.getElementById("owner").value,
        location: document.getElementById("location").value,
        survey: document.getElementById("survey").value,
        id: document.getElementById("landId").value
    };

    localStorage.setItem(land.id, JSON.stringify(land));
    alert("Land Registered Successfully!");
}

// Verify land
function checkLand() {
    let id = document.getElementById("searchId").value;
    let data = localStorage.getItem(id);

    let box = document.getElementById("resultBox");

    if (data) {
        let land = JSON.parse(data);

        box.innerHTML = `
            <h3>Land Found ✅</h3>
            <p><strong>Owner:</strong> ${land.owner}</p>
            <p><strong>Location:</strong> ${land.location}</p>
            <p><strong>Survey:</strong> ${land.survey}</p>
        `;
    } else {
        box.innerHTML = "<p style='color:red;'>Land not found ❌</p>";
    }
}