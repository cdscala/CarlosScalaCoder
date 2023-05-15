let productos = [
    {  Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    {  Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    {  Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    {  Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    {  Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    {  Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    {  Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
    {  Image: '../assets/products/tabla1.webp',Nombre: "Tabla Snowboard Iniciacion 1,26 Mts", Cantidad: 25, Tipo: "Base", Precio:29990},
    {  Image: '../assets/products/tabla2.webp',Nombre: "Tabla Nitro Prime", Cantidad: 25, Tipo: "Standard", Precio:181990},
    {  Image: '../assets/products/tabla3.webp',Nombre: "Roxy Breeze Snowboard 2023", Cantidad: 25, Tipo: "Premium", Precio:400990},
];


function generateTable(container, data) {

    for (let element of data) {
        let cardCol = document.createElement('div')
        cardCol.className = 'col-lg-3 col-md-6 col-sm-6 d-flex'
        let node = null
        let childnode = null
        let childnode2 = null
        let card = document.createElement('div')
        card.className = 'card w-100 my-2 shadow-2-strong'
        //imagen
        node = document.createElement('img')
        node.alt = element.Nombre
        node.className = 'card-img-top'
        node.src = element['Image']
        card.appendChild(node)
        //resto
        node = document.createElement('div')
        node.className = 'card-body d-flex flex-column'
        //titulo
        childnode = document.createElement('h3')
        childnode.className = 'card-title'
        childnode.appendChild(document.createTextNode(element.Nombre))
        node.appendChild(childnode)
        //texto
        childnode = document.createElement('h4')
        childnode.className = 'card-subtitle mb-2 text-body-secondary'
        childnode.appendChild(document.createTextNode('Disponibles: '+element.Cantidad + ' Clase: '+ element.Tipo))
        node.appendChild(childnode)
        //precio
        childnode = document.createElement('p')
        childnode.className = 'card-text'
        childnode.appendChild(document.createTextNode('$'+element.Precio))
        node.appendChild(childnode)
        
        //boton
        childnode2 = document.createElement('div')
        childnode.className = 'card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto'
        childnode = document.createElement('a')
        childnode.className = 'btn btn-primary'
        childnode.href = "./error.html"
        childnode.appendChild(document.createTextNode('Agregar al carro'))
        childnode2.appendChild(childnode)
        node.appendChild(childnode2)
        //
        card.appendChild(node)
        cardCol.appendChild(card)
        container.appendChild(cardCol)
    }
  }
  
  let lista = document.querySelector("#lista-de-productos");
  let data = Object.keys(productos[0]);
  generateTable(lista, productos);