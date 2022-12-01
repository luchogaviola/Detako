class Turno{
    constructor(dni,nombre,telefono,horarioInicio,horarioFinal,cancha){
        this.dni = dni;
        this.nombre = nombre;
        this.telefono = telefono;
        this.horarioInicio = horarioInicio;
        this.horarioFinal = horarioFinal;
        this.canchas = canchas;
    }
}


const horariosDisponiblesPadel = [
    {
        horarioInicio:'9',
        horarioFinal: '10',
        disponibilidad: true,
        cancha: 'padel',
        id: 1
    },
    {
        horarioInicio:'10',
        horarioFinal: '11',
        disponibilidad: true,
        cancha: 'padel',
        id: 2
    },
    {
        horarioInicio:'11',
        horarioFinal: '12',
        disponibilidad: true,
        cancha: 'padel',
        id: 3
    },
    {
        horarioInicio:'12',
        horarioFinal: '13',
        disponibilidad: true,
        cancha: 'padel',
        id: 4
    },
    {
        horarioInicio:'13',
        horarioFinal: '14',
        disponibilidad: true,
        cancha: 'padel',
        id: 5
    },
    {
        horarioInicio:'14',
        horarioFinal: '15',
        disponibilidad: true,
        cancha: 'padel',
        id: 6
    },
    {
        horarioInicio:'15',
        horarioFinal: '16',
        disponibilidad: true,
        cancha: 'padel',
        id: 7
    },
    {
        horarioInicio:'16',
        horarioFinal: '17',
        disponibilidad: true,
        cancha: 'padel',
        id: 8
    },
    {
        horarioInicio:'17',
        horarioFinal: '18',
        disponibilidad: true,
        cancha: "padel",
        id: 9
    },
    {
        horarioInicio:'18',
        horarioFinal: '19',
        disponibilidad: true,
        cancha: "padel",
        id: 10
    },
    {
        horarioInicio:'19',
        horarioFinal: '20',
        disponibilidad: true,
        cancha: "padel",
        id: 11
    },
    {
        horarioInicio:'20',
        horarioFinal: '21',
        disponibilidad: true,
        cancha: "padel",
        id: 12
    },
    {
        horarioInicio:'21',
        horarioFinal: '22',
        disponibilidad: true,
        cancha: "padel",
        id: 13
    },
    {
        horarioInicio:'22',
        horarioFinal: '23',
        disponibilidad: true,
        cancha: "padel",
        id: 14
    },
    {
        horarioInicio:'23',
        horarioFinal: '00:00',
        disponibilidad: true,
        cancha: "padel",
        id: 15
    }
]

const horariosDisponiblesFutbol = [
    {
        horarioInicio:'9',
        horarioFinal: '10',
        disponibilidad: true,
        cancha: 'futbol',
        id: 16
    },
    {
        horarioInicio:'10',
        horarioFinal: '11',
        disponibilidad: true,
        cancha: 'futbol',
        id: 17
    },
    {
        horarioInicio:'11',
        horarioFinal: '12',
        disponibilidad: true,
        cancha: 'futbol',
        id: 18
    },
    {
        horarioInicio:'12',
        horarioFinal: '13',
        disponibilidad: true,
        cancha: 'futbol',
        id: 19
    },
    {
        horarioInicio:'13',
        horarioFinal: '14',
        disponibilidad: true,
        cancha: 'futbol',
        id: 20
    },
    {
        horarioInicio:'14',
        horarioFinal: '15',
        disponibilidad: true,
        cancha: 'futbol',
        id: 21
    },
    {
        horarioInicio:'15',
        horarioFinal: '16',
        disponibilidad: true,
        cancha: 'futbol',
        id: 22
    },
    {
        horarioInicio:'16',
        horarioFinal: '17',
        disponibilidad: true,
        cancha: 'futbol',
        id: 23
    },
    {
        horarioInicio:'17',
        horarioFinal: '18',
        disponibilidad: true,
        cancha: "futbol",
        id: 24
    },
    {
        horarioInicio:'18',
        horarioFinal: '19',
        disponibilidad: true,
        cancha: "futbol",
        id: 25
    },
    {
        horarioInicio:'19',
        horarioFinal: '20',
        disponibilidad: true,
        cancha: "futbol",
        id: 26
    },
    {
        horarioInicio:'20',
        horarioFinal: '21',
        disponibilidad: true,
        cancha: "futbol",
        id: 27
    },
    {
        horarioInicio:'21',
        horarioFinal: '22',
        disponibilidad: true,
        cancha: "futbol",
        id: 28
    },
    {
        horarioInicio:'22',
        horarioFinal: '23',
        disponibilidad: true,
        cancha: "futbol",
        id: 29
    },
    {
        horarioInicio:'23',
        horarioFinal: '00:00',
        disponibilidad: true,
        cancha: "futbol",
        id: 30
    }
]
 



const mostrarHorarios = (element, arr) => {
    document.querySelector(element).innerHTML = "";
    for (i = 0 ; i<arr.length ; i++ ){
        document.querySelector(element).innerHTML += 
        `
        <div class="disponible">
            <p class="horariosIndividuales">${arr[i].horarioInicio}hs ${arr[i].horarioFinal}hs</p> <button value = "${arr[i].cancha}" id = "${arr[i].id}" class='botonReservar' onclick = "abreModal(${arr[i].id})" onclick = "abreModal(${arr[i].cancha})" id="botonReservar">Reservar</button>
        </div>
        `
        ;
    }
}

mostrarHorarios("#containerTurnosPadel",horariosDisponiblesPadel);
mostrarHorarios("#containerTurnosFutbol",horariosDisponiblesFutbol);


// MOSTRAR RESERVAR TURNO? -------

const botonReservar = document.querySelector("button");
const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");


const abreModal = (id, value) => {
    localStorage.setItem('id',id)
    localStorage.setItem('value',value)
    modalCentro.classList.add("active");
}


botonReservar.addEventListener("click", () => {
    modalCentro.classList.add("active");
}) 

cerrarModalCentro.addEventListener("click", () => {
    modalCentro.classList.remove("active");
})


const botonReservarCancha = document.querySelector("#botonReservarCancha");

botonReservarCancha.addEventListener("click", () => {
    const id = localStorage.getItem('id')
    const value = localStorage.getItem('value')

    if (value == 'futbol') {
        horariosDisponiblesFutbol[id].disponibilidad = false
    if (horariosDisponiblesFutbol[id].disponibilidad === false) {
        const botonReservado = document.getElementById(id);
        botonReservado.classList.add("active");
        botonReservado.innerHTML = 'Reservado';
    }} else {
        horariosDisponiblesPadel[id].disponibilidad = false
        if (horariosDisponiblesPadel[id].disponibilidad === false) {
            const botonReservado = document.getElementById(id);
            botonReservado.classList.add("active");
            botonReservado.innerHTML = 'Reservado';
        }
    }
})

