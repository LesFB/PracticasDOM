const casa = {numHabitaciones:3, numBanios:2, numPisos:4, color:"Naranja"};

console.log("El color de tu casa es "+ casa.color);




class casaPlantilla {


    numHabitaciones = 0;
    numBanios = 0;
    numPisos = 0;
    color = "";

    diana(){
        console.log("YA BAÑATE")
    }


    constructor(numHabitaciones,numBanios,numPisos,color) {
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.numPisos = numPisos;
        this.color = color;
    }    
}

let casaDeLeslie = new casaPlantilla(3,1,1,"azul")
casaDeLeslie.diana();


class gatitos{

    nombre = "";
    edad = 0;
    tamanio = ""; 
    caracter= "";
    numeroVidas = 0;
    color ="";
    raza = "";
    vacunas = false;


    constructor(nombre,edad,tamanio,caracter,numeroVidas,color,raza,vacunas){
        this.nombre = nombre;
        this.edad = edad;
        this.tamanio = tamanio;
        this.caracter = caracter;
        this. numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;
    }    


    imprimirInfo(){
        console.log("A");
    };

    maullar(){
        console.log("Miauuu");
    };

    rasguniar(){
        console.log("kiiiiiiiughghghh");
    };

    ronronear(){
        console.log("Purrrrr");
    };

    cuidarGato(){
        if(this.numeroVidas==0){
            console.log("Ya fue :(")
        }else if(this.numeroVidas<3){
            console.log("Cuida a tu gatiño")
        }
        
    }
}

let morenazo = new gatitos("Morenazo",12,"Inmenso","dócil",0,"Negro y blanco","Mestizo","todas")

morenazo.cuidarGato();