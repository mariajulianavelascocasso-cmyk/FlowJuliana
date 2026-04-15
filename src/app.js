export function saludar(nombre) {
  return `Hola ${nombre}, bienvenido a la aplicación de Juliana.`;
  //return Hola ${nombre}, bienvenido a la aplicación de Juliana.;
}

export function despedir(nombre) {
  return `Hasta pronto, ${nombre}. - Juliana`;
}

export function estadoSistema() {
  return {
    estado: "activo",
    version: "1.0.0",
    mensaje: "Sistema Juliana funcionando correctamente"
  };
}

export function healthcheck() {
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    servicio: "streamFlow API",
    version: "1.0.0"
  };
}

// ➕ FUNCIÓN SUMA
export function suma(a, b) {
  return a + b;
}

// ✖ FUNCIÓN FACTORIAL
export function factorial(n) {
  if (n < 0) {
    return "No se puede calcular factorial de números negativos";
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }

  return resultado;
}


