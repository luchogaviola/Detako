class Turno {
  constructor(dni, nombre, telefono, horarioInicio, horarioFinal, cancha) {
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
    horarioInicio: "9",
    horarioFinal: "10",
    disponibilidad: true,
    cancha: "padel",
    id: 1,
  },
  {
    horarioInicio: "10",
    horarioFinal: "11",
    disponibilidad: true,
    cancha: "padel",
    id: 2,
  },
  {
    horarioInicio: "11",
    horarioFinal: "12",
    disponibilidad: true,
    cancha: "padel",
    id: 3,
  },
  {
    horarioInicio: "12",
    horarioFinal: "13",
    disponibilidad: true,
    cancha: "padel",
    id: 4,
  },
  {
    horarioInicio: "13",
    horarioFinal: "14",
    disponibilidad: true,
    cancha: "padel",
    id: 5,
  },
  {
    horarioInicio: "14",
    horarioFinal: "15",
    disponibilidad: true,
    cancha: "padel",
    id: 6,
  },
  {
    horarioInicio: "15",
    horarioFinal: "16",
    disponibilidad: true,
    cancha: "padel",
    id: 7,
  },
  {
    horarioInicio: "16",
    horarioFinal: "17",
    disponibilidad: true,
    cancha: "padel",
    id: 8,
  },
  {
    horarioInicio: "17",
    horarioFinal: "18",
    disponibilidad: true,
    cancha: "padel",
    id: 9,
  },
  {
    horarioInicio: "18",
    horarioFinal: "19",
    disponibilidad: true,
    cancha: "padel",
    id: 10,
  },
  {
    horarioInicio: "19",
    horarioFinal: "20",
    disponibilidad: true,
    cancha: "padel",
    id: 11,
  },
  {
    horarioInicio: "20",
    horarioFinal: "21",
    disponibilidad: true,
    cancha: "padel",
    id: 12,
  },
  {
    horarioInicio: "21",
    horarioFinal: "22",
    disponibilidad: true,
    cancha: "padel",
    id: 13,
  },
  {
    horarioInicio: "22",
    horarioFinal: "23",
    disponibilidad: true,
    cancha: "padel",
    id: 14,
  },
  {
    horarioInicio: "23",
    horarioFinal: "00:00",
    disponibilidad: true,
    cancha: "padel",
    id: 15,
  },
];

const horariosDisponiblesFutbol = [
  {
    horarioInicio: "9",
    horarioFinal: "10",
    disponibilidad: true,
    cancha: "futbol",
    id: 16,
  },
  {
    horarioInicio: "10",
    horarioFinal: "11",
    disponibilidad: true,
    cancha: "futbol",
    id: 17,
  },
  {
    horarioInicio: "11",
    horarioFinal: "12",
    disponibilidad: true,
    cancha: "futbol",
    id: 18,
  },
  {
    horarioInicio: "12",
    horarioFinal: "13",
    disponibilidad: true,
    cancha: "futbol",
    id: 19,
  },
  {
    horarioInicio: "13",
    horarioFinal: "14",
    disponibilidad: true,
    cancha: "futbol",
    id: 20,
  },
  {
    horarioInicio: "14",
    horarioFinal: "15",
    disponibilidad: true,
    cancha: "futbol",
    id: 21,
  },
  {
    horarioInicio: "15",
    horarioFinal: "16",
    disponibilidad: true,
    cancha: "futbol",
    id: 22,
  },
  {
    horarioInicio: "16",
    horarioFinal: "17",
    disponibilidad: true,
    cancha: "futbol",
    id: 23,
  },
  {
    horarioInicio: "17",
    horarioFinal: "18",
    disponibilidad: true,
    cancha: "futbol",
    id: 24,
  },
  {
    horarioInicio: "18",
    horarioFinal: "19",
    disponibilidad: true,
    cancha: "futbol",
    id: 25,
  },
  {
    horarioInicio: "19",
    horarioFinal: "20",
    disponibilidad: true,
    cancha: "futbol",
    id: 26,
  },
  {
    horarioInicio: "20",
    horarioFinal: "21",
    disponibilidad: true,
    cancha: "futbol",
    id: 27,
  },
  {
    horarioInicio: "21",
    horarioFinal: "22",
    disponibilidad: true,
    cancha: "futbol",
    id: 28,
  },
  {
    horarioInicio: "22",
    horarioFinal: "23",
    disponibilidad: true,
    cancha: "futbol",
    id: 29,
  },
  {
    horarioInicio: "23",
    horarioFinal: "00:00",
    disponibilidad: true,
    cancha: "futbol",
    id: 30,
  },
];

let canchasReservadas = JSON.parse(localStorage.getItem("Cancha-reservada"));

if (!canchasReservadas) {
  canchasReservadas = []
}

canchasReservadas.forEach(element => {
  if (element.value === "padel") {
    
    const horarioP = horariosDisponiblesPadel.find((el) => el.id == element.id);
    horarioP.disponibilidad = false;

  } else {
    const horarioF = horariosDisponiblesFutbol.find((el) => el.id == element.id);
    horarioF.disponibilidad = false;
  }

});

const mostrarHorarios = (element, arr) => {
  document.querySelector(element).innerHTML = "";
  for (i = 0; i < arr.length; i++) {
    document.querySelector(element).innerHTML += `
        <div class="disponible">
            <p class="horariosIndividuales">${arr[i].horarioInicio}hs ${arr[i].horarioFinal}hs</p> <button value = "${arr[i].cancha}" data-disponibilidad = "${arr[i].disponibilidad ? "disponible" : "Reservado"}" id = "${arr[i].id}" class='botonReservar ${arr[i].disponibilidad ? "" : 'active'}'>${arr[i].disponibilidad ? "Reservar" : 'Reservado'}</button>
        </div>
        `;
  }
};


mostrarHorarios("#containerTurnosPadel", horariosDisponiblesPadel);
mostrarHorarios("#containerTurnosFutbol", horariosDisponiblesFutbol);

// MOSTRAR RESERVAR TURNO? -------

const arrayBotones = document.querySelectorAll(".botonReservar");
const modalCentro = document.querySelector("#modal-centro");
const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");
const modalReservado = document.querySelector('#modal-turnos-reservados')
const cerrarModalReservado = document.querySelector('#cerrar-modal-reservado')


const abreModal = (id, value) => {
    localStorage.setItem('id',id)
    localStorage.setItem('value',value)
    modalCentro.classList.add("active");
}

for(let boton of arrayBotones){
    boton.addEventListener("click", (e) => {
        if(e.target.dataset.disponibilidad === "Reservado"){
            modalReservado.classList.add('active')

            cerrarModalReservado.addEventListener("click", () => {
                modalReservado.classList.remove("active");
            })

            

        } else {
            abreModal(e.target.id, e.target.value)
        }
    })
}



cerrarModalCentro.addEventListener("click", () => {
    modalCentro.classList.remove("active");
})

const reservadoTimer = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Se ha reservado el turno'
  })
}


const botonReservarCancha = document.querySelector("#botonReservarCancha");

botonReservarCancha.addEventListener("click", () => {
    const id = localStorage.getItem('id')
    const value = localStorage.getItem('value')

  if (value == "padel") {
    horariosDisponiblesPadel.find((el) => el.id == id);
    const botonReservado = document.getElementById(id);

    let canchasReservadas = JSON.parse(localStorage.getItem("Cancha-reservada"));

    if (!canchasReservadas) {
      canchasReservadas = []
    }

    const canchaEnStorage = {
      id,
      value,
    }

    canchasReservadas.push(canchaEnStorage);
  
    localStorage.setItem("Cancha-reservada", JSON.stringify(canchasReservadas));
    

    botonReservado.classList.add("active");
    botonReservado.innerHTML = "Reservado";
    botonReservado.dataset.disponibilidad = "Reservado"
    modalCentro.classList.remove("active");
    reservadoTimer();
    } else {
    horariosDisponiblesFutbol.find((el) => el.id == id);
    const botonReservado = document.getElementById(id);

    let canchasReservadas = JSON.parse(localStorage.getItem("Cancha-reservada"));

    if (!canchasReservadas) {
      canchasReservadas = []
    }

    const canchaEnStorage = {
      id,
      value,
    }

    canchasReservadas.push(canchaEnStorage);
  
    localStorage.setItem("Cancha-reservada", JSON.stringify(canchasReservadas));

    botonReservado.classList.add("active");
    botonReservado.innerHTML = "Reservado";
    botonReservado.dataset.disponibilidad = "Reservado"
    modalCentro.classList.remove("active");
    reservadoTimer();
  }

});









 


