import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Footer from './components/Footer';
import Carrito from './pages/Carrito';
import Confirmacion from './pages/Confirmacion';
import BotonWhatsApp from './components/BotonWhatsApp';
import Nosotros from './pages/Nosotros';
import FormularioCompraPage from './pages/FormularioCompra';

function App() {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  //. Funciones del carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        if (existe.cantidad < producto.stock) {
          return prev.map((item) => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item);
        }
        return prev;
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    setCarrito((prev) => prev.map((item) => (item.id === id ? { ...item, cantidad: nuevaCantidad } : item)));
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header carrito={carrito} />
      <Navbar />
      
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
          
          <Route 
            path="/carrito" 
            element={
              <Carrito 
                carrito={carrito} 
                actualizarCantidad={actualizarCantidad} 
                eliminarDelCarrito={eliminarDelCarrito}
                vaciarCarrito={vaciarCarrito}
              />
            } 
          />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route path="/finalizar-compra" element={<FormularioCompraPage />} />
        </Routes>
      </main>
      
      <Footer />
      <BotonWhatsApp />
    </div>
  )
}

export default App;