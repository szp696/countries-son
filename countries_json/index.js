function displayinfo() {
        let name = peru[0].name.common;
        let nameh1 = document.createElement("h1");
        nameh1.textContent = name;
        document.body.append(nameh1);
    }
window.addEventListener("load", displayinfo)