    import { BookOpen, MapPin, ShieldCheck } from 'lucide-react';

    export default function Nosotros() {
    return (
        <main className="min-h-[80vh] bg-[#ebebeb] py-12 px-4 font-sans">
        <div className="max-w-4xl mx-auto">
            
            
            <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3 uppercase">
                Quiénes Somos
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
                Conocé la historia y los valores detrás de Oeste Librería, tu rincón literario en el corazón del Oeste.
            </p>
            </div>

            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-8 text-left">
            <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center w-full block"> NUESTRA HISTORIA</h2>
            <p className="text-slate-700 text-xl font-medium leading-relaxed mb-6">
                Oeste Librería nació de la pasión por los libros y el deseo de construir un espacio de encuentro para los lectores de la zona. Desde nuestros inicios, nos propusimos ir más allá de ser una simple tienda de libros: quisimos ser un puente entre las grandes historias y tu biblioteca.
            </p>
            <p className="text-slate-700 text-xl font-medium leading-relaxed">
                Hoy en día, nos enorgullece ofrecer un catálogo seleccionado minuciosamente, que abarca desde los grandes clásicos de la literatura hasta las novedades más buscadas, brindando siempre una atención personalizada y cercana a cada vecino que nos visita.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-4">
                <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Catálogo Único</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                Elegimos cada título con dedicación para asegurarnos de que encuentres exactamente lo que buscás.
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-4">
                <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Identidad Local</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                Somos del oeste y trabajamos día a día para impulsar la cultura y la lectura en nuestra comunidad.
                </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-4">
                <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Compromiso</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                Te garantizamos un proceso de reserva seguro y la mejor atención en cada paso de tu compra.
                </p>
            </div>

            </div>

        </div>
        </main>
    );
    }