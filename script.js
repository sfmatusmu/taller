function desplegarResultado() {
    const artista = JSON.parse(this.responseText);
    const img = document.createElement("img");
    img.src = artista.artists[0].strArtistThumb;
    img.style = "width:100%"
    const imagen = document.getElementById("imagen");
    imagen.innerHTML = "";
    imagen.appendChild(img);

    const nombreBanda = document.createElement("h1")
    nombreBanda.textContent = artista.artists[0].strArtist
    banda.innerHTML = "";
    document.getElementById("banda").appendChild(nombreBanda)

    const estiloBanda = document.createElement("h3")
    estiloBanda.textContent = artista.artists[0].strStyle
    estilo.innerHTML = "";
    document.getElementById("estilo").appendChild(estiloBanda)

    const generoBanda = document.createElement("h3")
    generoBanda.textContent = artista.artists[0].strGenre
    genero.innerHTML = "";
    document.getElementById("genero").appendChild(generoBanda)

    const linkBanda = document.createElement("h3")
    linkBanda.textContent = artista.artists[0].strWebsite
    link.innerHTML = "";
    document.getElementById("link").appendChild(linkBanda)

    const logoBanda = document.createElement("img")
    logoBanda.src = artista.artists[0].strArtistLogo
    logoBanda.style = "width:100%"
    logo.innerHTML = "";
    document.getElementById("logo").appendChild(logoBanda)

    const biografiaBanda = document.createElement("p")
    biografiaBanda.textContent = artista.artists[0].strBiographyEN
    biografia.innerHTML = "";
    document.getElementById("biografia").appendChild(biografiaBanda)

    const discografiaBanda = document.createElement("p")
    discografiaBanda.textContent = artista.artists[0].strDiscography
    discografia.innerHTML = "";
    document.getElementById("discografia").appendChild(discografiaBanda)
}

function desplegarDiscografia() {
    const discografia = JSON.parse(this.responseText);


    let discografiaBanda = document.getElementById("album");
    discografiaBanda.innerHTML = "";
    discografia.album.forEach(disc => {
        const fila = document.createElement("div")
        fila.className = "row"
        const disco = document.createElement("div")
        disco.className = "col-4"
        disco.innerHTML = disc.strAlbum
        const anno = document.createElement("div")
        anno.className = "col-4"
        anno.innerHTML = disc.intYearReleased
        fila.appendChild(disco)
        fila.appendChild(anno)
        discografiaBanda.appendChild(fila)
    });

}

function buscar() {
    const busqueda = document.getElementById("encontrar").value
    const request = new XMLHttpRequest();
    request.addEventListener('load', desplegarResultado);
    request.open('GET', 'https://www.theaudiodb.com/api/v1/json/2/search.php?s=' + busqueda);
    request.send();
    const request2 = new XMLHttpRequest();
    request2.addEventListener('load', desplegarDiscografia);
    request2.open('GET', 'https://theaudiodb.com/api/v1/json/2/discography.php?s=' + busqueda);
    request2.send();
}