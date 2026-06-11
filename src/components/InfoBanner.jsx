import { Truck, Lock } from 'lucide-react';

export default function InfoBanner() {
  return (
    <div className="w-full bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          
          <div className="flex items-center gap-5 border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm bg-white">
            <div className="w-16 h-16 shrink-0 bg-slate-100 rounded-full flex items-center justify-center">
              <Truck className="w-8 h-8 text-slate-800" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Métodos de envío
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Envíos en el día. Envío gratis en compras superiores a $55.000
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 border border-slate-200 rounded-xl p-5 md:p-6 shadow-sm bg-white">
            <div className="w-16 h-16 shrink-0 bg-slate-100 rounded-full flex items-center justify-center">
              <Lock className="w-7 h-7 text-slate-800" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Sitio 100% seguro
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tu compra está protegida en todo momento
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}