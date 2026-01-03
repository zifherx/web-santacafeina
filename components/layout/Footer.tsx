"use client";

import Link from "next/link";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Horario */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock size={20} />
              <h4 className="font-bold text-lg">Horario de Atención:</h4>
            </div>
            <p className="text-sm text-gray-300">Lunes a Viernes:</p>
            <p className="text-sm text-gray-300 mb-4">9:00 a.m. 8:00 p.m.</p>
          </div>

          {/* Ubicación */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={20} />
              <h4 className="font-bold text-lg">Ubicación:</h4>
            </div>
            <p className="text-sm text-gray-300">Trujillo, La Libertad</p>
          </div>

          {/* Contactos */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Phone size={20} />
              <h4 className="font-bold text-lg">Contáctanos:</h4>
            </div>
            <p className="text-sm text-gray-300">Telf: 959 260 357</p>
            <div className="flex gap-4 mt-4">
              <Link
                href={`https://www.instagram.com/santacafeina.pe/`}
                target="_blank"
              >
                <Instagram />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Santa Cafeina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
