const routes = {
    home : "/",
    dashboard : "/dashboard",
    game : "/game"
}

const app = document.getElementById("app");
const body = document.querySelector("body");
const presentationBox = document.querySelector(".presentation-box");
console.log(body);

function handleLinks() {
    const links = document.querySelectorAll("a");

    for (let idx = 0; idx < links.length; idx++)
    {
        links[idx].addEventListener("click", (event) => {
            event.preventDefault();
            window.history.pushState({}, "", event.target.href);
            router ();
        })
    }
}

async function router() {
    console.log(location.pathname);
    switch (location.pathname) {
        case routes.dashboard:
            presentationBox.innerHTML = await (await fetch("./pages/dashboard.html")).text();
            break;

        case routes.game:
            presentationBox.innerHTML = await (await fetch("./pages/game.html")).text();
            break;

        default:
            break;
    }
}

handleLinks();
