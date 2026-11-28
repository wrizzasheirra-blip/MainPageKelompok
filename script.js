
/* =================================
   GROUP DIRECTORY - MEMBER DATABASE
================================= */

const members = {

    rizza: {
        name: "RIZZA NABILA SHEIRRA",
        initial: "RN",
        username: "issacnewton",
        password: "3007gdmn",
        theme: "winter",
        destination: "https://wrizzasheirra-blip.github.io/Halaman-Utama-Rizza-CV/"
    },

    fitri: {
        name: "FITRI APRILIA RAHAYU",
        initial: "FA",
        username: "ririjeno",
        password: "riripetshop",
        theme: "autumn",
        destination: "https://wrizzasheirra-blip.github.io/Halaman-Utama-Fitri/"
    },

    salwa: {
        name: "SALWA ABIRA",
        initial: "SA",
        username: "sabira44",
        password: "aj4ima3ar",
        theme: "summer",
        destination: "https://bayamhijau294-sudo.github.io/mainpagesalwa"
    },

    sifa: {
        name: "SIFA FAUZIAH",
        initial: "SF",
        username: "sifauziah",
        password: "mawarmelati",
        theme: "spring",
        destination: "https://wrizzasheirra-blip.github.io/Halaman-Utama-Sifa/"
    },

    fabian: {
        name: "MUHAMMAD FABIAN NURHAKIM",
        initial: "FN",
        username: "januastra",
        password: "kemaraumelanda",
        theme: "desert",
        destination: "https://okta59-hakimm.github.io/Halaman-utama-Fabian-/"
    },

    aryo: {
        name: "ARYO MOCHAMAD ALRAFIF",
        initial: "AA",
        username: "nnn8282",
        password: "bbb9292",
        theme: "rainy",
        destination: "https://aryokof-creator.github.io/Tugas-Aryo-infor-portofolio-/"
    }

};


/* =================================
   GET MEMBER FROM URL
================================= */

const params = new URLSearchParams(window.location.search);

const memberID = params.get("member")?.toLowerCase();

const member = members[memberID];


/* =================================
   HTML ELEMENTS
================================= */

const initial = document.getElementById("initial");

const memberName = document.getElementById("memberName");

const unavailable = document.getElementById("unavailable");

const loginForm = document.getElementById("loginForm");

const message = document.getElementById("message");


/* =================================
   CHECK MEMBER & APPLY THEME
================================= */

if (member) {

    // Apply member theme
    document.body.className = member.theme;

    // Display member initial
    initial.textContent = member.initial;

    // Display member name
    memberName.textContent = member.name;

    // Show login form
    unavailable.hidden = true;

} else {

    // Default theme
    document.body.className = "winter";

    // Show unavailable message
    unavailable.hidden = false;

    // Hide login form
    loginForm.hidden = true;

    // Change member information
    initial.textContent = "--";

    memberName.textContent = "MEMBER NOT AVAILABLE";

}


/* =================================
   LOGIN SYSTEM
================================= */

if (member) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get input values
        const username = document
            .getElementById("username")
            .value.trim();

        const password = document
            .getElementById("password")
            .value;

        // Check username and password
        if (
            username === member.username &&
            password === member.password
        ) {

            // Success message
            message.textContent = "LOGIN SUCCESSFUL!";

            // Redirect to member destination
            window.location.href = member.destination;

        } else {

            // Error message
            message.textContent =
                "INVALID USERNAME OR PASSWORD!";

        }

    });

}
