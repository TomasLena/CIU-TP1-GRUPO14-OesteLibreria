import { useState } from 'react';

export default function FormularioCompra() {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        metodoEntrega: 'sucursal',
        mensaje: ''
    });

    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
        
        if (errores[e.target.name]) {
            setErrores({ ...errores, [e.target.name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevosErrores = {};

        if (!datos.nombre.trim()) nuevosErrores.nombre = 'El nombre y apellido son obligatorios';
        
        if (!datos.email.trim()) {
            nuevosErrores.email = 'El email es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(datos.email)) {
            nuevosErrores.email = 'El formato del email no es válido';
        }

        if (!datos.telefono.trim()) nuevosErrores.telefono = 'El teléfono es obligatorio';
        if (!datos.direccion.trim()) nuevosErrores.direccion = 'La dirección o localidad es obligatoria';

        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores);
            return;
        }

        setEnviado(true);
        setErrores({});
        
        console.log("Datos de la compra enviados con éxito:", datos);
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100 my-8 font-sans text-left">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Finalizar Compra</h2>
        
        {enviado ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-5 rounded-xl text-center shadow-sm">
            <p className="font-extrabold text-lg">¡Muchas gracias por tu compra, {datos.nombre}!</p>
            <p className="text-sm mt-1.5 text-green-600">Te enviamos los detalles del pedido y la confirmación a <strong>{datos.email}</strong></p>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1 tracking-wide">Nombre y Apellido *</label>
                <input
                type="text"
                name="nombre"
                value={datos.nombre}
                onChange={handleInputChange}
                className={`w-full border p-2.5 rounded-lg focus:outline-none focus:border-orange-500 transition-colors ${errores.nombre ? 'border-red-500 bg-red-50/50' : 'border-slate-300'}`}
                placeholder="Juan Pérez"
                />
                {errores.nombre && <p className="text-red-500 text-xs font-bold mt-1">{errores.nombre}</p>}
            </div>

            <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1 tracking-wide">Email *</label>
                <input
                type="text"
                name="email"
                value={datos.email}
                onChange={handleInputChange}
                className={`w-full border p-2.5 rounded-lg focus:outline-none focus:border-orange-500 transition-colors ${errores.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'}`}
                placeholder="juan@email.com"
                />
                {errores.email && <p className="text-red-500 text-xs font-bold mt-1">{errores.email}</p>}
            </div>

            <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1 tracking-wide">Teléfono *</label>
                <input
                type="tel"
                name="telefono"
                value={datos.telefono}
                onChange={handleInputChange}
                className={`w-full border p-2.5 rounded-lg focus:outline-none focus:border-orange-500 transition-colors ${errores.telefono ? 'border-red-500 bg-red-50/50' : 'border-slate-300'}`}
                placeholder="11 2345-6789"
                />
                {errores.telefono && <p className="text-red-500 text-xs font-bold mt-1">{errores.telefono}</p>}
            </div>

            <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1 tracking-wide">Dirección o Localidad *</label>
                <input
                type="text"
                name="direccion"
                value={datos.direccion}
                onChange={handleInputChange}
                className={`w-full border p-2.5 rounded-lg focus:outline-none focus:border-orange-500 transition-colors ${errores.direccion ? 'border-red-500 bg-red-50/50' : 'border-slate-300'}`}
                placeholder="Av. de Mayo 1234, Ramos Mejía"
                />
                {errores.direccion && <p className="text-red-500 text-xs font-bold mt-1">{errores.direccion}</p>}
            </div>

            <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1 tracking-wide">Método de Entrega</label>
                <select
                name="metodoEntrega"
                value={datos.metodoEntrega}
                onChange={handleInputChange}
                className="w-full border border-slate-300 p-2.5 rounded-lg bg-white focus:outline-none focus:border-orange-500 text-slate-700 transition-colors"
                >
                <option value="sucursal">Retiro en sucursal (OesteLibrería)</option>
                <option value="domicilio">Envío a domicilio</option>
                </select>
            </div>

            <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1 tracking-wide">Aclaración opcional</label>
                <textarea
                name="mensaje"
                value={datos.mensaje}
                onChange={handleInputChange}
                rows="3"
                className="w-full border border-slate-300 p-2.5 rounded-lg focus:outline-none focus:border-orange-500 text-slate-700 transition-colors"
                placeholder="Horarios de entrega, indicaciones de la casa, etc..."
                />
            </div>

            <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-orange-500 transition-all shadow-sm mt-4 text-sm"
            >
                Confirmar Pedido
            </button>

            </form>
        )}
        </div>
    );
}
