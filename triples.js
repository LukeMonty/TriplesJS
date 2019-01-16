function check() {
    // This gets rid of the Number of triples: so it can place the other
    if(document.getElementById("newNode") != null){
        let element = document.getElementById("newNode");
        element.parentNode.removeChild(element);
    }


    let strings = document.getElementById("string").value;
    let counter = 0;
    strings.replace(/\s/g,'');

    let s = strings.split("");

    for (let i = 0; i < s.length; i++){
        if (s[i] == s[i+1] && s[i] == s[i+2]){
            counter++;
        }
    }

    let a = document.createTextNode("Number of triples: " + counter);
    let p = document.createElement("p");
    p.appendChild(a);
    document.getElementById("result").appendChild(p);
    p.setAttribute("id", "newNode");

}
