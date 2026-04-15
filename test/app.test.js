<<<<<<< HEAD
import { saludar, despedir, estadoSistema, healthcheck, suma, factorial } from "../src/app.js";
=======
import { saludar, despedir, estadoSistema, healthcheck } from "../src/app.js";
>>>>>>> hotfix/fix-healthcheck

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
<<<<<<< HEAD
    console.log("Test 2 pasado: estadoSistema correcto");
=======
    console.log("Test 2 pasado: estadoSistema() funciona correctamente");
>>>>>>> hotfix/fix-healthcheck
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

<<<<<<< HEAD
  // ✅ Test 4: suma
  const rSuma = suma(2, 3);
  if (rSuma === 5) {
    console.log("Test 4 pasado: suma correcta");
    pasadas++;
  } else {
    console.log("Test 4 fallido:", rSuma);
    fallidas++;
  }

  // ✅ Test 5: factorial
  const rFactorial = factorial(4);
  if (rFactorial === 24) {
    console.log("Test 5 pasado: factorial correcto");
    pasadas++;
  } else {
    console.log("Test 5 fallido:", rFactorial);
    fallidas++;
  }

  // ✅ Resultados finales
=======
  // ✅ Resultados
>>>>>>> hotfix/fix-healthcheck
  console.log(`\nResultados: ${pasadas} pasadas, ${fallidas} fallidas`);

  if (fallidas > 0) {
    process.exit(1);
  }
}

ejecutarPruebas();
