"use client";

import Link from "next/link";

import { Motorbike } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Shipping() {
  return (
    <section className="py-20 px-4 bg-white animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <div className="bg-azulDark rounded-full px-6 py-20 md:px-12 md:py-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="h-26 w-26 ">
              <Motorbike className="w-full h-full" />
            </div>
            <div className="flex flex-col text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Envíos a Nivel Nacional
              </h3>
              <div className="text-sm leading-relaxed">
                <p>
                  Dentro de <strong>Trujillo y Chiclayo</strong>, el delivery es
                  a través de motorizado.
                </p>
                <p>
                  Envíos fuera de las ciudades respectivas, se realizará a
                  través de <strong>Olva Courier.</strong>
                </p>
              </div>
            </div>
            <div className="block">
              <h3 className="text-3xl md:text-4xl font-bold mb-1">
                Contáctanos al:
              </h3>
              <Link
                href={`https://wa.me/+51959260357?text=Podría darme información al respecto.`}
                target="_blank"
              >
                <p className="text-3xl md:text-4xl font-semibold flex items-center gap-2">
                  <FaWhatsapp className="text-green-400" />
                  959 260 357
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
