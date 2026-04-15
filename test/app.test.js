import { saludar, despedir, estadoSistema, healthcheck } from "../src/app.js";

function ejecutarPruebas() {
  let pasadas = 0;
  let fallidas = 0;

  // ✅ Test 1: saludar
  const r1 = saludar("Juliana");
  if (r1.includes("Juliana")) {
    console.log("Test 1 pasado: función saludar correcta");
    pasadas++;
  } else {
    console.log("Test 1 fallido:", r1);
    fallidas++;
  }

  // ✅ Test 2: estadoSistema
  const actualEstado = estadoSistema();
  if (actualEstado.estado === "activo") {
    console.log("Test 2 pasado: estadoSistema() funciona correctamente");
    pasadas++;
  } else {
    console.log("Test 2 fallido:", actualEstado);
    fallidas++;
  }

  // ✅ Test 3: healthcheck
  const health = healthcheck();
  if (health.status === "ok") {
    console.log("Test 3 pasado: healthcheck correcto");
    pasadas++;
  } else {
    console.log("Test 3 fallido:", health);
    fallidas++;
  }

  // ✅ Resultados
  console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);

  if (fallidas > 0) {
    process.exit(1);
  }
}

ejecutarPruebas();

  


