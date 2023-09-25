import { addPageContent } from "../model/model.js";

addPageContent("home");

$("nav a").on("click", (e) => {
    let btnID = e.currentTarget.id;
    addPageContent(btnID);
});

$("nav .links .log span").on("click", (e) => {
    setLoggedInOut();
});

function route(){
    hashTag = window.location.hash;
    console.log(hashTag);
}

$(window.on('hashchange', route));