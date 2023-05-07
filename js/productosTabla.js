let productos = [
    { Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    { Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    { Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    { Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    { Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    { Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    { Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    { Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
];

function generateTable(container, data) {

    for (let element of data) {
        let cardCol = document.createElement('div')
        cardCol.className = 'col-md-8 col-lg-6 col-xl-4'
        let node = null
        let childnode = null
        let card = document.createElement('div')
        card.className = 'card overflow-hidden'
        card.style.width = "15rem"
        //imagen
        node = document.createElement('img')
        node.style.height = "200px"
        node.style.width = 'auto'
        node.className = 'card-img-top img-fluid img-thumbnail'
        node.src = element['Image']
        card.appendChild(node)
        //resto
        node = document.createElement('div')
        node.className = 'card-body'
        //titulo
        childnode = document.createElement('h5')
        childnode.className = 'card-text'
        childnode.appendChild(document.createTextNode(element.Nombre))
        node.appendChild(childnode)
        //precio
        childnode = document.createElement('h6')
        childnode.className = 'card-subtitle mb-2 text-body-secondary'
        childnode.appendChild(document.createTextNode('$'+element.Precio))
        node.appendChild(childnode)
        //texto
        childnode = document.createElement('p')
        childnode.className = 'card-text'
        childnode.appendChild(document.createTextNode('Disponibles: '+element.Cantidad + ' Clase: '+ element.Tipo))
        node.appendChild(childnode)
        //boton
        childnode = document.createElement('button')
        childnode.className = 'btn btn-primary'
        childnode.appendChild(document.createTextNode('Agregar'))
        node.appendChild(childnode)
        //
        card.appendChild(node)
        cardCol.appendChild(card)
        container.appendChild(cardCol)
    }
  }
  
  let lista = document.querySelector("#lista-de-productos");
  let data = Object.keys(productos[0]);
  generateTable(lista, productos);