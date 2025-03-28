const axios = require('axios');

// Función para actualizar el estado de un pedido
async function actualizarEstadoPedido(pedidoId, nuevoEstado) {
  // Obtener el pedido primero para recalcular el total
  const pedidoUrl = `http://127.0.0.1:8090/api/collections/pedidos/records/${pedidoId}`;
  
  try {
    // Obtener el pedido
    const response = await axios.get(pedidoUrl);
    const pedido = response.data;

    // Calcular el nuevo total basándonos en los items
    const total = pedido.items.reduce((acc, item) => acc + (item.cantidad * item.precio), 0);
    
    // Crear el objeto con el estado actualizado y el total recalculado
    const pedidoActualizado = {
      estado: nuevoEstado,
      total: total  // Aquí se actualiza el total
    };

    // Realizar la solicitud PATCH a la API para actualizar el pedido
    const updateResponse = await axios.patch(pedidoUrl, pedidoActualizado, {
      headers: { 'Content-Type': 'application/json' }
    });

    // Mostrar la respuesta
    console.log(`Pedido ${pedidoId} actualizado a "${nuevoEstado}" con total ${total}:`, updateResponse.data);
  } catch (error) {
    console.error("Error al obtener o actualizar el pedido:", error.response?.data || error.message);
  }
}

// Llamada a la función de actualización con un ejemplo de pedido
const pedidoId = 'ku1000u2o7zp498';  // ID del pedido a actualizar
const nuevoEstado = 'En preparación';  // El estado que se quiere poner

actualizarEstadoPedido(pedidoId, nuevoEstado);
