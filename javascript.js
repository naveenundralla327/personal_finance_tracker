document.addEventListener('DOMContentLoaded', function () {
    const loginPage = document.getElementById('login');
    const dashboardPage = document.getElementById('dashboard');
    const loginForm = document.getElementById('loginForm');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        // You might want to implement proper authentication logic here
        // For simplicity, using local storage to store the logged-in user
        localStorage.setItem('username', username);
        showDashboard();
    });

    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('username');
        showLogin();
    });

    function showLogin() {
        loginPage.style.display = 'block';
        dashboardPage.style.display = 'none';
    }

    function showDashboard() {
        const username = localStorage.getItem('username');
        if (username) {
            usernameDisplay.textContent = username;
            loginPage.style.display = 'none';
            dashboardPage.style.display = 'block';
            // Initialize and display recent transactions and reports here
        }
    }

    // You can continue by adding functionality for adding transactions and generating reports
});

