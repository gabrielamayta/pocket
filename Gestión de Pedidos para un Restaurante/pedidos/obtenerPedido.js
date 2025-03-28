async function obtenerPedidosPendientes() {
  try {
    const response = await axios.get('http://127.0.0.1:8090/api/collections/pedidos/records', {
      params: { filter: 'estado="Pendiente"' }  // Filtro para obtener solo pedidos pendientes
    });

    if (response.data.items.length === 0) {
      console.log("No hay pedidos pendientes.");
      return;
    }

    console.log("Pedidos pendientes:", response.data.items);
    console.table(response.data.items);
  } catch (error) {
    console.error("❌ Error al obtener pedidos:", error.response?.data || error.message);
  }
}

obtenerPedidosPendientes();
