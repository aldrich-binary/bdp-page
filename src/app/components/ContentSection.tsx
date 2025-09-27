"use client";
import AnimatedContent from "@/components/AnimatedContent";
import SpotlightCard from "@/components/SpotlightCard";
import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContentSection() {
  return (
    <AnimatedContent
      distance={200}
      direction="vertical"
      reverse={true}
      duration={1.5}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.2}
      delay={0.2}
    >
      <section className="py-16 md:py-32" id="servicios">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
          <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
            <h2 className="text-balance text-white text-4xl font-medium lg:text-5xl">
              BDP Abogados: Experiencia y excelencia en servicios legales
            </h2>
            <p className="text-white/80">
              BDP es más que un despacho jurídico. Somos un equipo comprometido
              que ofrece soluciones legales integrales y personalizadas para
              proteger sus intereses y alcanzar sus objetivos.
            </p>
          </div>
          <Image
            className="rounded-(--radius) "
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="team image"
            height={1200}
            width={1200}
            loading="lazy"
          />

          <div className="relative mx-auto grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            <Link href={"/services/1"}>
              <SpotlightCard
                className="custom-spotlight-card h-50"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="mb-4">
                  <div className="inline-flex rounded-lg bg-gray-900/50 p-3">
                    <Zap className="size-5 text-white opacity-80 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="mb-2 text-base font-medium text-white">
                  Litigio en Derecho Publico
                </h3>
              </SpotlightCard>
            </Link>
            <Link href={"/services/2"}>
              <SpotlightCard
                className="custom-spotlight-card h-50"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="mb-4">
                  <div className="inline-flex rounded-lg bg-gray-900/50 p-3">
                    <Cpu className="size-5 text-white opacity-80 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="mb-2 text-base font-medium text-white">
                  Derecho Regulatorio y de Cumplimiento
                </h3>
              </SpotlightCard>
            </Link>

            <Link href={"/services/3"}>
              <SpotlightCard
                className="custom-spotlight-card h-50"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="mb-4">
                  <div className="inline-flex rounded-lg bg-gray-900/50 p-3">
                    <Lock className="size-5 text-white opacity-80 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="mb-2 text-base font-medium text-white">
                  Contratación Pública.
                </h3>
              </SpotlightCard>
            </Link>
            <Link href={"/services/4"}>
              <SpotlightCard
                className="custom-spotlight-card h-50"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="mb-4">
                  <div className="inline-flex rounded-lg bg-gray-900/50 p-3">
                    <Sparkles className="size-5 text-white opacity-80 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="mb-2 text-base font-medium text-white">
                  Derecho de la Energía y Sustentabilidad
                </h3>
              </SpotlightCard>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedContent>
  );
}
