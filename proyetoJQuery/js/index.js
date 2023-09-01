$(document).ready(function () {
    let rooms = [
        {title : 'Habitacion Normal', desc : 'Habitación bien situada con tele y wifi' ,nPersonas : 2, price : 75, stars: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>', img : './img/habitacionprasiempre.jpg', reserva : false},
        {title : 'Habitacion Premium', desc : 'Habitación bien situada con tele, wifi y desayuno gratis' ,nPersonas : 1, price : 150, stars: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half"></i>' , img : './img/habitacionprasiempre.jpg', reserva : false},
        {title : 'Habitacion Presidencial', desc : 'Habitación bien situada con tele, wifi, desayuno gratis y acceso a la piscina' ,nPersonas : 2, price : 300, stars: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>', img : './img/habitacionprasiempre.jpg', reserva : false},
        {title : 'Habitacion Normal', desc : 'Habitación bien situada con tele y wifi' ,nPersonas : 1, price : 65, stars: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half"></i> <i class="fa-regular fa-star"></i>', img : './img/habitacionprasiempre.jpg', reserva : false},
        {title : 'Habitacion Premium', desc : 'Habitación bien situada con tele, wifi y desayuno gratis' ,nPersonas : 2, price : 170, stars: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>', img : './img/habitacionprasiempre.jpg', reserva : false},
        {title : 'Habitacion Presidencial', desc : 'Habitación bien situada con tele, wifi, desayuno gratis y acceso a la piscina' ,nPersonas : 1, price : 270, stars: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>', img : './img/habitacionprasiempre.jpg', reserva : false}
    ];

    $('[value = inicio]').click(function (e) { 
        mostrarHabitacion(rooms);
    });

    $('[value = 3estrellas]').click(function (e) {
        mostrarHabitacionesPrecio(rooms,0,80);
    });

    $('[value = 4estrellas]').click(function (e) { 
        mostrarHabitacionesPrecio(rooms,80,200)
    });

    $('[value = 5estrellas]').click(function (e) { 
        mostrarHabitacionesPrecio(rooms,200,400)
    });

    $('#btnFiltro').click(function(e){
        let habitacionSelect = $('#tipoHabitaciones').val();
        let nPersonas = parseInt($('#nPersonasHabitaciones').val());
        let minPrice = parseInt($('#minPrice').val());
        let maxPrice = parseInt($('#maxPrice').val());
        console.log(habitacionSelect);
        console.log(nPersonas);
        console.log(minPrice);
        console.log(maxPrice);
        habitacionFiltros(rooms, habitacionSelect, nPersonas, minPrice, maxPrice);
    });

    function mostrarHabitacion(rooms){
        $('.container').empty();
        rooms.forEach((info, i) => {
            let room = 
            `
            <div class="container-rooms">
                <div class="room">
                    <h2 class="title">${info.title}</h2>
                    <p class="desc">${info.desc}</p>
                    <p class="pers">${info.nPersonas} Personas</p>
                    <p class="price">${info.price}$ por noche</p>
                    <p class="stars">${info.stars}</p>
                    <div class="book-button">
                        <div id="ex1" class="modal">
                            <h1>${info.title}</h1>
                            <p>Descripción: ${info.desc}</p>
                            <p>Nº Personas: ${info.nPersonas}</p>
                            <p>Precio por noche: ${info.price}</p>
                            <p>Valoración: ${info.stars}</p>
                            <a href="#" rel="modal:close" id="modalClose">Close</a>
                            <a href="#formUser" rel="modal:open" id="modalPay">Reserva</a>
                        </div>
                        <p><a href="#ex1" rel="modal:open">Ver más</a></p>
                        <div id="formUser" class="modal">
                        <h1>Datos del Huesped</h1>
                        <label>Nombre: </label>
                        <input type="text" name="" id="nameUser">
                        <label>Email: </label>
                        <input type="email" name="" id="emailUser">
                        <label>Número de Huesped: </label>
                        <input type="number" name="" id="numberUserHotel">
                        <a href="#" rel="modal:close" id="modalClose">Close</a>
                        <a href="#formUser" rel="modal:open" id="modalPay">Pagar</a>
                    </div>
                </div>
            </div>
            <img class="room-image" src="${info.img}" alt="Habitación de Hotel">
        </div>
            `;
            $('.container').append(room);
        });
    }

    function mostrarHabitacionesPrecio(rooms, min, max){
        $('.container').empty();
        rooms.forEach((info, i) => {
            if (info.price > min && info.price < max && info.reserva == false) {
                let room = `
                <div class="container-rooms">
                    <div class="room">
                        <h2 class="title">${info.title}</h2>
                        <p class="desc">${info.desc}</p>
                        <p class="pers">${info.nPersonas} Personas</p>
                        <p class="price">${info.price}$ por noche</p>
                        <p class="stars">${info.stars}</p>
                        <div class="book-button">
                            <div id="ex1" class="modal">
                                <h1>${info.title}</h1>
                                <p>Descripción: ${info.desc}</p>
                                <p>Nº Personas: ${info.nPersonas}</p>
                                <p>Precio por noche: ${info.price}</p>
                                <p>Valoración: ${info.stars}</p>
                                <a href="#" rel="modal:close" id="modalClose">Close</a>
                                <a href="#formUser" rel="modal:open" id="modalReser">Reserva</a>
                            </div>
                            <p><a href="#ex1" rel="modal:open">Ver más</a></p>
                            <div id="formUser" class="modal">
                                <h1>Datos del Huesped</h1>
                                <label>Nombre: </label>
                                <input type="text" name="" id="nameUser">
                                <label>Email: </label>
                                <input type="email" name="" id="emailUser">
                                <label>Número de Huesped: </label>
                                <input type="number" name="" id="numberUserHotel">
                                <a href="#" rel="modal:close" id="modalClose">Close</a>
                                <a href="#formUser" rel="modal:open" id="modalPay">Pagar</a>
                            </div>
                        </div>
                    </div>
                    <img class="room-image" src="${info.img}" alt="Habitación de Hotel">
                </div>
                `;
                $('.container').append(room);
            }
        }); 
    }

    $('#filtrar').click(function (e) { 
        e.preventDefault();
        $('.filter').toggle('fold','slow');
    });

    function habitacionFiltros(rooms, habitacion, personas, min, max){
        $('.container').empty();
        rooms.forEach((info, i) => {
            console.log('olaFiltro1');
            if (info.price > min && info.price < max && info.nPersonas === personas && info.title === habitacion) {
                console.log('olaFiltro2');
                let room = `
                <div class="container-rooms">
                    <div class="room">
                        <h2 class="title">${info.title}</h2>
                        <p class="desc">${info.desc}</p>
                        <p class="pers">${info.nPersonas} Personas</p>
                        <p class="price">${info.price}$ por noche</p>
                        <p class="stars">${info.stars}</p>
                        <div class="book-button">
                            <div id="ex1" class="modal">
                                <h1>${info.title}</h1>
                                <p>Descripción: ${info.desc}</p>
                                <p>Nº Personas: ${info.nPersonas}</p>
                                <p>Precio por noche: ${info.price}</p>
                                <p>Valoración: ${info.stars}</p>
                                <a href="#" rel="modal:close" id="modalClose">Close</a>
                                <a href="#formUser" rel="modal:open" id="modalReser">Reserva</a>
                            </div>
                            <p><a href="#ex1" rel="modal:open">Ver más</a></p>
                            <div id="formUser" class="modal">
                                <h1>Datos del Huesped</h1>
                                <label>Nombre: </label>
                                <input type="text" name="" id="nameUser">
                                <label>Email: </label>
                                <input type="email" name="" id="emailUser">
                                <label>Número de Huesped: </label>
                                <input type="number" name="" id="numberUserHotel">
                                <a href="#" rel="modal:close" id="modalClose">Close</a>
                                <a href="#formUser" rel="modal:close" id="modalPay">Pagar</a>
                            </div>
                        </div>
                    </div>
                    <img class="room-image" src="${info.img}" alt="Habitación de Hotel">
                </div>
                `;
                $('.container').append(room);
            }
        });
    }
});