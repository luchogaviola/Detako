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
        cancha: 'padel'
    },
    {
        horarioInicio:'10',
        horarioFinal: '11',
        disponibilidad: true,
        cancha: 'padel'
    },
    {
        horarioInicio:'11',
        horarioFinal: '12',
        disponibilidad: true,
        cancha: 'padel'
    },
    {
        horarioInicio:'12',
        horarioFinal: '13',
        disponibilidad: true,
        cancha: 'padel'
    },
    {
        horarioInicio:'13',
        horarioFinal: '14',
        disponibilidad: true,
        cancha: 'padel'
    },
    {
        horarioInicio:'14',
        horarioFinal: '15',
        disponibilidad: true,
        cancha: 'padel'
    },
    {
        horarioInicio:'15',
        horarioFinal: '16',
        disponibilidad: true,
        cancha: 'padel'
    },
    {
        horarioInicio:'16',
        horarioFinal: '17',
        disponibilidad: true,
        cancha: 'padel'
    },
    {
        horarioInicio:'17',
        horarioFinal: '18',
        disponibilidad: true,
        cancha: "padel"
    },
    {
        horarioInicio:'18',
        horarioFinal: '19',
        disponibilidad: true,
        cancha: "padel"
    },
    {
        horarioInicio:'19',
        horarioFinal: '20',
        disponibilidad: true,
        cancha: "padel"
    },
    {
        horarioInicio:'20',
        horarioFinal: '21',
        disponibilidad: true,
        cancha: "padel"
    },
    {
        horarioInicio:'21',
        horarioFinal: '22',
        disponibilidad: true,
        cancha: "padel"
    },
    {
        horarioInicio:'22',
        horarioFinal: '23',
        disponibilidad: true,
        cancha: "padel"
    },
    {
        horarioInicio:'23',
        horarioFinal: '00:00',
        disponibilidad: true,
        cancha: "padel"
    }
]

const horariosDisponiblesFutbol = [
    {
        horarioInicio:'9',
        horarioFinal: '10',
        disponibilidad: true,
        cancha: 'futbol'
    },
    {
        horarioInicio:'10',
        horarioFinal: '11',
        disponibilidad: true,
        cancha: 'futbol'
    },
    {
        horarioInicio:'11',
        horarioFinal: '12',
        disponibilidad: true,
        cancha: 'futbol'
    },
    {
        horarioInicio:'12',
        horarioFinal: '13',
        disponibilidad: true,
        cancha: 'futbol'
    },
    {
        horarioInicio:'13',
        horarioFinal: '14',
        disponibilidad: true,
        cancha: 'futbol'
    },
    {
        horarioInicio:'14',
        horarioFinal: '15',
        disponibilidad: true,
        cancha: 'futbol'
    },
    {
        horarioInicio:'15',
        horarioFinal: '16',
        disponibilidad: true,
        cancha: 'futbol'
    },
    {
        horarioInicio:'16',
        horarioFinal: '17',
        disponibilidad: true,
        cancha: 'futbol'
    },
    {
        horarioInicio:'17',
        horarioFinal: '18',
        disponibilidad: true,
        cancha: "futbol"
    },
    {
        horarioInicio:'18',
        horarioFinal: '19',
        disponibilidad: true,
        cancha: "futbol"
    },
    {
        horarioInicio:'19',
        horarioFinal: '20',
        disponibilidad: true,
        cancha: "futbol"
    },
    {
        horarioInicio:'20',
        horarioFinal: '21',
        disponibilidad: true,
        cancha: "futbol"
    },
    {
        horarioInicio:'21',
        horarioFinal: '22',
        disponibilidad: true,
        cancha: "futbol"
    },
    {
        horarioInicio:'22',
        horarioFinal: '23',
        disponibilidad: true,
        cancha: "futbol"
    },
    {
        horarioInicio:'23',
        horarioFinal: '00:00',
        disponibilidad: true,
        cancha: "futbol"
    }
]




const mostrarHorarios = (element, arr) => {
    document.querySelector(element).innerHTML = "";
    for (i = 0 ; i<arr.length ; i++ ){
        document.querySelector(element).innerHTML += 
        `
        <div class="disponible">
            <p class="horariosIndividuales">${arr[i].horarioInicio}hs ${arr[i].horarioFinal}hs</p> <button class="botonReservar" id="botonReservar">Reservar</button>
        </div>
        `
        ;
    }
}

mostrarHorarios("#containerTurnosPadel",horariosDisponiblesPadel);
mostrarHorarios("#containerTurnosFutbol",horariosDisponiblesFutbol);


// MOSTRAR RESERVAR TURNO? -------

const botonReservar = document.querySelector("#botonReservar");
const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");
const botonesReserva = document.querySelectorAll(".botonesReserva")

botonReservar.addEventListener("click", () => {
    modalCentro.classList.add("active");
}) 

cerrarModalCentro.addEventListener("click", () => {
    modalCentro.classList.remove("active");
})

// BOTON EN ROJO --------


const botonReservar2 = document.querySelectorAll("#botonReservar");

botonReservar2.forEach(boton => {
    boton.addEventListener("click", () => {
        
        


        // horariosDisponiblesPadel[0].disponibilidad = false
        // if (horariosDisponiblesPadel[0].disponibilidad === false) {
        //     const botonReservado = document.querySelector(".botonReservar");
        //     botonReservado.classList.add("active");
        //     botonReservado.innerHTML = 'Reservado';
        //     modalCentro.classList.remove("active");
        // }
    })
})



// const botonReservarCancha = document.querySelector("#botonReservarCancha");
// botonReservarCancha.addEventListener("click", () => {
    // horariosDisponiblesPadel[0].disponibilidad = false
    // if (horariosDisponiblesPadel[0].disponibilidad === false) {
    //     const botonReservado = document.querySelector(".botonReservar");
    //     botonReservado.classList.add("active");
    //     botonReservado.innerHTML = 'Reservado';
    //     modalCentro.classList.remove("active");
    // }
// })