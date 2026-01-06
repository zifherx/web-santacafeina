import { nosotros_stats } from "@/common/data/nosotros";
import Image from "next/image";

export function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="block my-0 gap-0">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-balance">
              La pasión por el Café
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
              trasciende generaciones
            </h2>
          </div>
          {/* <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Descubre nuestra historia y nuestro compromiso con la excelencia
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative h-96 animate-slide-in-left">
            <Image
              src="/images/origen-2.jpeg
              "
              alt="Nuestro Cafetales"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
          </div>

          <div className="animate-slide-in-right">
            <p className="text-lg text-foreground/80 mb-6 text-justify">
              En Santa Cafeína, nuestro compromiso es brindar café de la más
              alta calidad, cultivado responsablemente en las tierras de San
              Ignacio, Jaén - Perú.
            </p>
            <p className="text-lg text-foreground/80 mb-6 text-justify leading-relaxed">
              Cada grano representa el trabajo dedicado de agricultores que aman
              su oficio.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Somos una empresa que valora la sostenibilidad, la transparencia y
              la excelencia. Desde el cultivo hasta tu taza, cada paso es
              cuidadosamente controlado para garantizar que disfrutes del mejor
              café.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nosotros_stats.map(({ description, icon: Icon, id, title }) => (
            <div
              key={id}
              className="p-8 bg-white rounded-2xl border border-muted hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-verde/30 rounded-full group-hover:bg-verde/20 transition-colors">
                  <Icon className="w-8 h-8 text-verde" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-2 max-w-32 mx-auto">
                {title}
              </h3>
              <p className="text-foreground/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
