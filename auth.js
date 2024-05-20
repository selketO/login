document.addEventListener('DOMContentLoaded', function() {
    const msalConfig = {
        auth: {
            clientId: "18b8f381-f92f-443e-a20b-bf239a6c7383",
            authority: "https://login.microsoftonline.com/016f1fbb-81bd-443c-b692-6792805d21ec",
            redirectUri: "https://100d-189-203-106-88.ngrok-free.app"
        }
    };

    const myMSALObj = new msal.PublicClientApplication(msalConfig);
    const loginRequest = {
        scopes: ["User.Read"]
    };

    function handleResponse(response) {
        if (response !== null) {
            localStorage.setItem("msalIdToken", response.idToken);
            localStorage.setItem("username", response.account.name);
            updateUsernameDisplay();
            if (window.location.pathname !== '/menu.html') {
                window.location.href = 'menu.html';
            }
        } else {
            redirectToLogin();
        }
    }

    function updateUsernameDisplay() {
        const username = localStorage.getItem("username");
        if (username) {
            document.getElementById('username').innerText = username;
        }
    }

    function redirectToLogin() {
        // Redireccionar a la página de inicio de sesión o mostrar mensaje
        alert('Por favor, inicie sesión para acceder a esta página.');
        window.location.href = 'index.html'; // Asumiendo que 'index.html' es tu página de inicio de sesión
    }

    window.signIn = function () {
        myMSALObj.loginPopup(loginRequest)
            .then(handleResponse)
            .catch(error => {
                console.log("Error during login:", error);
            });
    };

    window.signOut = function () {
        myMSALObj.logout();
        localStorage.clear();
    };

    if (!localStorage.getItem("msalIdToken")) {
        redirectToLogin();
    } else {
        updateUsernameDisplay(); // Asegúrate de llamar esto al cargar la página si ya está autenticado
    }
});
