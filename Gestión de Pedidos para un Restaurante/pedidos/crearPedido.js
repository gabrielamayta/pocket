const axios = require('axios');

async function crearPedido(mesaId, items) {
  // Calcular el total del pedido sumando los precios de los items
  const total = items.reduce((acc, item) => acc + (item.cantidad * item.precio), 0);

  const pedido = {
    mesa_id: mesaId,
    items: items,
    estado: "Pendiente",
    total: total,  // Se agrega el total calculado
    timestamp: new Date().toISOString()  // Marca de tiempo del pedido
  };

  try {
    const response = await axios.post('http://127.0.0.1:8090/api/collections/pedidos/records', pedido, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log("Pedido registrado:", response.data);
  } catch (error) {
    console.error("Error al registrar el pedido:", error.response?.data || error.message);
  }
}

// Ejemplo de llamada para registrar un pedido
const mesaId = "3h838z462gab8d4";  // ID de la mesa
const items = [
  { nombre: "manzana", cantidad: 2, precio: 9200 },
  { nombre: "Coca", cantidad: 1, precio: 1500 }
];
crearPedido(mesaId, items);

//