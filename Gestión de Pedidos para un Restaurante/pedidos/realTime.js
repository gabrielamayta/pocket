const PocketBase = require('pocketbase');

const pb = new PocketBase('http://127.0.0.1:8090');

// Escuchar cambios en la colección "pedidos"
pb.collection('pedidos').subscribe('*', (e) => {
    console.log("📢 Pedido actualizado:", e.record);
});

// Mantener el proceso corriendo
console.log("✅ Esperando cambios en los pedidos...");
