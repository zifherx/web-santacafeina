"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-azulDark text-white">
      <div className="border-t border-white/10 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left Section */}
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Santa Cafeína</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Café de la más alta calidad, cultivado responsablemente en las
                montañas de Trujillo, Perú.
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-white/60 text-sm font-medium mb-1">
                    Horario de Atención
                  </p>
                  <p className="text-white font-medium">
                    Lunes a Viernes: 9:00 a.m. - 8:00 p.m.
                  </p>
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium mb-1">
                    Ubicación
                  </p>
                  <p className="text-white font-medium">
                    Trujillo, La Libertad
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div
              className="animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <h3 className="text-2xl font-bold mb-4">Síguenos</h3>
              <p className="text-white/80 mb-6">
                Únete a nuestra comunidad y entérate de las novedades
              </p>

              <div className="flex items-center gap-4 mb-8">
                <Link
                  href="https://www.instagram.com/santacafeina.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-transparent hover:border-green-300 rounded-full transition-all duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-white group-hover:text-green-300 transition-colors" />
                </Link>
              </div>

              <div>
                <p className="text-white/60 text-sm font-medium mb-2">
                  Pedidos por WhatsApp
                </p>
                <Link
                  href={`https://wa.me/+51959260357?text=Podría darme información al respecto.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-semibold"
                >
                  <FaWhatsapp />
                  +51 959 260 357
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
              <p>
                &copy; {currentYear} Santa Cafeina. Todos los derechos
                reservados.
              </p>

              <span>
                Diseñado por{" "}
                <Link
                  href="https://ziphonex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  Ziphonex
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
