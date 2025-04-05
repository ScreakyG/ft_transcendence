const routes = {
    home : "/",
    works : "/works",
    contact : "/contact"
}

const app = document.getElementById("app");

function handleLinks() {
    const links = document.querySelectorAll("a");
    console.log(links);

    for (let idx = 0; idx < links.length; idx++)
    {
        links[idx].addEventListener("click", (event) => {
            event.preventDefault(); // Evite le rechargement de la page lorsque click sur lien.
            window.history.pushState({}, "", event.target.href) //Recupere le href du <a> et permet de le mette dans l'url du navigateur.
            router();
        })
    }
}

async function router() {
    console.log(location.pathname);
    switch (location.pathname) {
        case routes.home:
            app.innerHTML = await (await fetch("./pages/works.html")).text();
            break;

        case routes.works:
            app.innerHTML = await (await fetch("./pages/works.html")).text();
            break;

        case routes.contact:
            app.innerHTML = await (await fetch("./pages/contact.html")).text();
            break;
        default:
            break;
    }

}

router();
handleLinks();
