let productos = [
    {  Image: '../assets/img/taza1.webp',Nombre: "Taza De Cerámica - Hora De Aventura - Jake", Cantidad: 25, Tipo: "Tazas", Precio:2199},
    {  Image: '../assets/img/cafetera1.webp',Nombre: "Cafetera Nespresso Essenza Mini", Cantidad: 25, Tipo: "Cafeteras", Precio:79990},
    {  Image: '../assets/img/cafetera2.webp',Nombre: "Cafetera Express Roma Pro", Cantidad: 25, Tipo: "Cafeteras", Precio:78617},
    {  Image: '../assets/img/filtrocafe1.webp',Nombre: "Filtro De Café De Acero Inoxidable", Cantidad: 25, Tipo: "Filtros", Precio:6000},
    {  Image: '../assets/img/cafetera3.webp',Nombre: "Cafetera Chemex", Cantidad: 25, Tipo: "Cafeteras", Precio:38000},
    {  Image: '../assets/img/decantador1.webp',Nombre: "Decantador De Café Por Goteo", Cantidad: 25, Tipo: "Cafeteras", Precio:14999},
    {  Image: '../assets/img/cafetera4.webp',Nombre: "Cafetera Con Embolo", Cantidad: 25, Tipo: "Cafeteras", Precio:5299},
    {  Image: '../assets/img/taza2.webp',Nombre: "Taza De Cerámica Star Wars", Cantidad: 25, Tipo: "Tazas", Precio:1899},
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
        node.className = 'card-img-top'
        node.alt = element.Nombre
        node.title = element.Nombre
        node.src = element['Image']
        card.appendChild(node)
        //resto
        node = document.createElement('div')
        node.className = 'card-body d-flex flex-column'
        //titulo
        childnode = document.createElement('h4')
        childnode.className = 'card-title'
        childnode.appendChild(document.createTextNode(element.Nombre))
        node.appendChild(childnode)
        //texto
        childnode = document.createElement('h5')
        childnode.className = 'card-subtitle mb-2 text-body-secondary'
        childnode.appendChild(document.createTextNode('Disponibles: '+element.Cantidad + ' \nClase: '+ element.Tipo))
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