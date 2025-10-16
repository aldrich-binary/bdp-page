"use client";

import AnimatedContent from "@/components/AnimatedContent";

export const LogoSection = () => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0.2}
    >
      <section className=" py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-white text-3xl font-medium">
            Nuestro Enfoque
          </h2>
          <div className="mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl">
            <div className="text-center space-y-4">
              <div className="text-4xl">⚖️</div>
              <h3 className="text-white text-xl font-semibold">
                Orientado a Soluciones
              </h3>
              <p className="text-white/70 text-sm">
                Buscamos siempre entregar un valor agregado a los clientes
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">🌱</div>
              <h3 className="text-white text-xl font-semibold">
                Innovación Legal
              </h3>
              <p className="text-white/70 text-sm">
                Innovamos en técnicas esenciales para el desarrollo humano
                sustentable
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl">🤝</div>
              <h3 className="text-white text-xl font-semibold">
                Colaboración Social
              </h3>
              <p className="text-white/70 text-sm">
                Colaboramos activamente con organizaciones de la sociedad civil
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
};
