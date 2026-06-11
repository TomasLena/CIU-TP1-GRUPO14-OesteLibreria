import FormularioCompraComponente from '../components/FormularioCompra';

export default function FormularioCompra() {
    return (
    <main className="min-h-[80vh] bg-[#ebebeb] py-12 flex flex-col items-center justify-center px-4 font-sans">
        <div className="max-w-xl w-full text-center">
        
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2 uppercase">
            Datos de Envío y Pago
        </h1>
        <p className="text-slate-600 mb-6 font-medium">
            Por favor, completá tus datos para finalizar la reserva de tus libros en Oeste Librería.
        </p>
        
        <FormularioCompraComponente />
    
    </div>
    </main>
);
}
