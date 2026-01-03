import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/images/image-gen.jpg)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-60 text-center">
        <div className="mb-8 inline-block">
          <span className="text-6xl">🍃</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-balance">
          Café de Especialidad Premium
        </h1>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
          Descubre el auténtico sabor del café peruano. 100% orgánico, cultivado
          en las mejores altitudes de los Andes con dedicación y pasión.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button className="bg-primary cursor-pointer hover:bg-azulDark text-white px-8 py-6 text-lg">
            Explorar Productos
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-verde/5 hover:text-verde hover:border-verde cursor-pointer px-8 py-6 text-lg bg-transparent"
          >
            Conocer más
          </Button>
        </div>
      </div>
    </section>
  );
}
