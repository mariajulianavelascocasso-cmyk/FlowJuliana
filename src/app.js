import { version } from "react";

export function saludar(nombre){
return "hola" + nombre + ", bienvenido aplicacion de Juliana";
}

export function despedir (nombre){
return "hasta pronto," + nombre + "Juliana";
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
status:'ok',
timestamp: new Date().toISOString(),
servicio: 'streamFlow API',
version: '1.0.0'
};
}
