import { Link } from 'react-router-dom';
import { Quote, ArrowRight, BookOpenCheck } from 'lucide-react';

export default function AutorDelMes({ libroRecomendado }) {
    return (
        <section className="w-full bg-slate-900 border-t border-b border-slate-800 mt-4 mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="relative p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center text-left lg:border-r border-slate-800 overflow-hidden">
            
            <div className="absolute inset-0 w-full h-full opacity-50 pointer-events-none mix-blend-overlay z-0">
                <img 
                src="/img/tolkien.jpeg" 
                alt="J.R.R. Tolkien" 
                className="w-full h-full object-cover" 
                />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">
                    Selección del Mes
                </span>
                <div className="h-[1px] flex-grow bg-slate-700"></div>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                J.R.R. <span className="text-orange-500">Tolkien</span>
                </h2>
                
                <div className="relative mb-8 max-w-xl">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-slate-700 opacity-50" />
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed italic pl-6">
                    "No todo lo que es de oro reluce, ni toda la gente errante anda perdida."
                </p>
                </div>

                <div className="space-y-4 text-slate-400 text-base md:text-lg font-medium mb-12 max-w-3xl">
                <p>
                    Elegimos a Tolkien este mes por ser el arquitecto de la fantasía épica moderna. Su capacidad para crear no solo historias, sino lenguajes y mitologías completas, sigue siendo el faro que guía a todo lector en busca de aventura.
                </p>
                <p>
                    En <strong>Librerías Oeste</strong>, creemos que la profundidad de su prosa y sus valores de amistad y coraje son esenciales en cualquier biblioteca.
                </p>
                </div>
                
                <Link 
                to="/productos" 
                className="inline-flex items-center gap-2 text-orange-500 font-bold text-lg hover:text-orange-400 transition-colors group"
                >
                Ver todas las obras del autor <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
            </div>
            </div>

            <div className="relative bg-slate-800/40 flex flex-col items-center justify-center p-8 md:p-12 lg:p-16 border-t lg:border-t-0 border-slate-800">
            
            {libroRecomendado ? (
                <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl transform lg:rotate-2 lg:hover:rotate-0 transition-all duration-500 text-left">
                <div className="flex gap-4">
                    <img 
                    src={libroRecomendado.imagen} 
                    alt={libroRecomendado.nombre} 
                    className="w-28 h-40 md:w-32 md:h-44 object-cover rounded-lg shadow-md -mt-12 border-4 border-white bg-slate-100"
                    />
                    <div className="pt-2">
                    <div className="flex items-center gap-1 text-orange-500 mb-1">
                        <BookOpenCheck className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">Lectura Recomendada</span>
                    </div>
                    <h3 className="font-bold text-slate-900 leading-tight mb-2 text-sm md:text-base">
                        {libroRecomendado.nombre}
                    </h3>
                    <p className="text-xl font-black text-slate-950">
                        ${libroRecomendado.precio.toLocaleString('es-AR')}
                    </p>
                    </div>
                </div>
                
                <Link 
                    to={`/producto/${libroRecomendado.id}`}
                    className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl flex items-center justify-center font-bold hover:bg-orange-500 transition-all gap-2 text-sm"
                >
                    Lo quiero leer
                    <ArrowRight className="w-4 h-4" />
                </Link>
                </div>
            ) : (
                <p className="text-slate-500 text-sm italic relative z-10">Cargando recomendación...</p>
            )}
            
            <p className="mt-8 text-slate-400 text-xs font-bold tracking-widest uppercase block border-t border-slate-700 pt-3 relative z-10">
                Filólogo • Escritor • Poeta
            </p>
            </div>

        </div>
        </section>
    );
}