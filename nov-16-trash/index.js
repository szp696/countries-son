function log(msg) {
    let div = document.createElement("div");
    div.innerText = msg;
    document.body.append(div);
}

function main() {

    log("Practice JS");
    let age = 17;
    log ("type of age is " + typeof age);

    let male = true;
    log("Type of male is " + typeof male);

    let favLanguage = "JavaScript";
    log("Type of favLanguage " + typeof favLanguage);

    {
        let name;
        log("Type of name is "+ typeof name);
        name = "Ádám";
        log("Type of name is "+ typeof name);
    }

    log("Ádám ihat?");
    if (age>=18){
        log("Igen");
    } else {
        log("Nem");
        return;
    }
    let beers = Number(window.prompt("Hány sört innál?", 5));
    if(isNaN(beers)){
        log("Ez nem egy szám");
        return;
    }
    for (let i = 0; i<beers; i++) {
        log(i + ". sör");//tipuskényszerítés
    }

}
window.addEventListener("load", main);