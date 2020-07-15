function teste(e) {
    e = e || window.event;
    var target = e.target.className
    console.log(target);
    i=0;
    count=0
    for(i;i<10;i++){
        count++
    }

    var node = document.createElement("p");
    var textnode = document.createTextNode("none");
    node.appendChild(textnode);
    var clase = document.querySelector(`.${target}`);
    clase.insertAdjacentText("afterend", count);
}