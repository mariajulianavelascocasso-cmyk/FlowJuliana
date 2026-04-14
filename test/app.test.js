import {saludar, despedir,estadoSistema} from "../src/app.js"

function ejecutarPruebas(){
let pasadas =0;
let fallidas = 0;

const r1 = Saludar("Juliana")
if (r1.includes("Juliana")){
console.log ("test 1 pasado: funcion saludar en juliana es correcto")
pasadas++;
} else{
console.log ("test 1 fallido:", r1);
fallidas++;
}


const actualEstado = estadoSistema();
if(actualEstado.estado === "activo"){
console.log ("test 2: pasado: estadoSistema() funciona en Juliana");
pasadas++;
} else {
console.log ("test 2 fallido: ", estado, "en Juliana ");
fallidas++;
}
console.log("\nResultados;"+ pasadas + "pasadas,", + fallidas +"fallidas")
if (fallidas > 0)  Process.exit(1); "fallidas"
}

const health = healthcheck();
if (health.status==='ok'){
console.log('test healthcheck pasado');
pasadas++;
}else{
console.log('test healthcheck fallido');
fallidas++;
}

ejecutarPruebas();

  


