//document.head.appendChild("https://www.google.com/jsapi");

var changeToggle = false;
var imgs;
var imgsNewSource = [];

function img_find() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {

        imgs[i].src = "https://www.fr.de/bilder/2020/11/23/90109471/24364600-praesident-wladimir-putin-verordnet-sich-zurueckhaltung-in-der-aussenpolitik-und-entdeckt-den-klimawandel-30GOozHsnbe9.jpg";
        imgsNewSource[i] = "https://www.fr.de/bilder/2020/11/23/90109471/24364600-praesident-wladimir-putin-verordnet-sich-zurueckhaltung-in-der-aussenpolitik-und-entdeckt-den-klimawandel-30GOozHsnbe9.jpg";
        console.log("Add Eventlistener on: " + imgs[i].na);
        imgs[i].addEventListener("load", function (event) {
            if (event.attrName == "src") {
                checkDomModified(i);
                // The `src` attribute changed!
            }
        });
    }
    return imgSrcs;
}

function checkDomModified(index) {
    if (imgs[index] == imgsNewSource[index]) {
        console.log("Not changed");
        return;
    }
    else {
        console.log("Changed");
        imgs[index] = imgsNewSource[index];
        return;
    }
}

function redo() {
    imgList = toString(img_find());
};

function start() {
    img_find();
};

start();