import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Confirmacion() {
  const navigate = useNavigate();

  useEffect(() => {
    const temporizador = setTimeout(() => {
      navigate('/finalizar-compra');
    }, 5000);

    return () => clearTimeout(temporizador);
  }, [navigate]);

  return (
    <main className="min-h-[80vh] bg-[#ebebeb] py-12 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 max-w-lg w-full p-8 md:p-12 text-center">
        
        {/*Círculo de carga*/}
        <div className="flex justify-center mb-10">
          <div className="relative w-24 h-24">
            
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              
              <path
                className="text-slate-100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              
              <path
                className="text-orange-500"
                strokeDasharray="100, 100"
                strokeDashoffset="100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"

                style={{
                  animation: 'completarProgreso 5s linear forwards'
                }}
              />
            </svg>

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-sm font-black text-slate-400"></span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-4 uppercase">
          Subiendo Carrito...
        </h1>
        
        <p className="text-slate-600 text-lg mb-3 font-medium">
          Estamos confirmando tu pedido.
        </p>

        <p className="text-slate-400 text-sm font-medium">
          No cierres esta pestaña. Serás redirigido automáticamente para completar el formulario de compra.
        </p>
        
      </div>

    </main>
  );
}