export function saludar(nombre) {
  return `Hola ${nombre}, bienvenido a la aplicación de Juliana.`;
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
    status: "ok"
  };
}

