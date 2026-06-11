export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-black text-white">
      
      <div className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          <div className="flex flex-col items-start justify-center">
            <img 
              src="/img/logo2.png"
              alt="Oeste Librería" 
              className="h-40 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-bold text-white">Atención al cliente</h3>
              <ul className="text-sm text-gray-300 flex flex-col gap-2">
                <li>8743-8729</li>
                <li>contacto@oestelibreria.com.ar</li>
                <li>Av. Vergara 671 - Hurlingham</li>
              </ul>
            </div>

            <div className="flex gap-4 items-center mt-2 text-orange-500">
              
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-orange-400 transition-transform" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-orange-400 transition-transform" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-white">Ayuda</h3>
            <ul className="text-sm text-gray-300 flex flex-col gap-2">
              <li><a href="#envios" className="hover:text-white hover:underline transition-colors">Métodos de Envío</a></li>
              <li><a href="#pagos" className="hover:text-white hover:underline transition-colors">Medios de Pago</a></li>
              <li><a href="#cambios" className="hover:text-white hover:underline transition-colors">Cambios y Devoluciones</a></li>
              <li><a href="#preguntas" className="hover:text-white hover:underline transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-5xl mx-auto border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
          &copy; 2026 Oeste Librería. Todos los derechos reservados.
        </div>
      </div>

    </footer>
  );
}