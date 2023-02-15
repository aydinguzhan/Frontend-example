async function getData() {
    let response = await fetch("../public/js/data.json");
    let data = await response.json();


  
    for( let i = 0 ; i < data.title.length; i++){

        let contentbox = document.createElement("div");
        contentbox.setAttribute("class","content-box")
        let subbox = document.createElement("div");
        subbox.setAttribute("class","subbox");
        let img =  document.createElement("img");
        img.setAttribute("src", `${data.src[i]}`)
        let textcontent =document.createElement("div");
        textcontent.setAttribute("class","text-content");
        let paragraf = document.createElement("a");
        paragraf.setAttribute("href", `${data.link[i]}`)
        paragraf.setAttribute("class","text")
        paragraf.textContent = data.title[i]
        contentbox.appendChild(subbox);
        subbox.appendChild(img);
        contentbox.appendChild(textcontent);
        textcontent.appendChild(paragraf);
        document.querySelector("aside").append(contentbox);
        

    }
}
getData()
