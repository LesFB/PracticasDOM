class empleado {
    nombre = "";
    edad = 0;
    RFC ="";
    noDiasTrabajados = 0;


    constructor(nombre,edad,RFC,noDiasTrabajados){
        this.nombre = nombre;
        this.edad = edad;
        this.RFC = RFC;
        this.noDiasTrabajados = noDiasTrabajados;
    }


    quincena(){
        let sueldo = 156.78;
        let dinerilloQuincenalBruto = 0;
        if (this.noDiasTrabajados>15){
            dinerilloQuincenalBruto = sueldo*15;
        }else{
            dinerilloQuincenalBruto = sueldo*this.noDiasTrabajados;
        }

        let dinerilloQuincenalNeto = .69*dinerilloQuincenalBruto
        let A = [dinerilloQuincenalBruto,dinerilloQuincenalNeto]
        return A
    }

    mensual(){
        let sueldo = 156.78;
        let dinerilloMensualBruto = 0
        if (this.noDiasTrabajados>30){
            dinerilloMensualBruto = sueldo*30;
        }else{
            dinerilloMensualBruto = sueldo*this.noDiasTrabajados;
        }
        
        let dinerilloMensualNeto = .69*dinerilloMensualBruto
        let A = [dinerilloMensualBruto,dinerilloMensualNeto]
        return A

    }
}

let empleado1 = new empleado("Diana",32,"ABDE234829V28",25);
let empleado2 = new empleado("Leslie",28,"asdf",15);
let empleado3 = new empleado("José", 25, "asdfsd",30);
let empleado4 = new empleado("Pablo", 33, "asdfsd",120);
let empleado5 = new empleado("Karla", 50, "asdfsd",5);




console.log("Hola "+ empleado1.nombre +" con RFC:"+empleado1.RFC+" tu quincena queda en "+empleado1.quincena()[0]+" netos y "+empleado1.quincena()[1]+" brutos.");
console.log("Hola "+ empleado2.nombre +" tu quincena queda en "+empleado2.quincena()[0]+" netos y "+empleado2.quincena()[1]+" brutos.");
console.log("Hola "+ empleado3.nombre +" tu quincena queda en "+empleado3.quincena()[0]+" netos y "+empleado3.quincena()[1]+" brutos.");
console.log("Hola "+ empleado4.nombre +" tu quincena queda en "+empleado4.quincena()[0]+" netos y "+empleado4.quincena()[1]+" brutos.");
console.log("Hola "+ empleado5.nombre +" tu quincena queda en "+empleado5.quincena()[0]+" netos y "+empleado5.quincena()[1]+" brutos.");

console.log("-----------------------******************************--------------------------")
console.log("Hola "+ empleado4.nombre +" tu quincena queda en "+empleado4.quincena()[0]+" netos y "+empleado4.quincena()[1]+" brutos.");
console.log("Hola "+ empleado4.nombre +" tu mensual queda en "+empleado4.mensual()[0]+" netos y "+empleado4.mensual()[1]+" brutos.");