import { Navbar } from "@/app/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate__animated animate__fadeInLeft">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
                Servicios Legales
                <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground/90 mt-2">
                  de Excelencia
                </span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl text-balance leading-relaxed">
                Brindamos asesoría jurídica integral con más de 20 años de
                experiencia, garantizando soluciones efectivas y personalizadas
                para cada cliente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Consulta Gratuita
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Conocer Servicios
                </Button>
              </div>
            </div>

            {/* Justice Image */}
            <div className="flex justify-center lg:justify-end animate__animated animate__fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-foreground/10 rounded-2xl blur-2xl transform rotate-6"></div>
                <Card className="relative overflow-hidden rounded-2xl border-primary-foreground/20 bg-card/50 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Estatua de la Justicia - Símbolo de equidad y derecho"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
