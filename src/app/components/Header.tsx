"use client";

import BlurText from "@/components/BlurText";
import { Navbar } from "./Navbar";
import { ArrowRight, Scale, Users, Shield } from "lucide-react";
import CountUp from "@/components/CountUp";

export function BDPHeader() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <BlurText
                    as="span"
                    text="Litigio y consultoría en"
                    delay={120}
                    animateBy="words"
                    direction="top"
                    className="block"
                  />
                  <span className="text-white font-light text-5xl">
                    derecho público
                  </span>
                </h1>

                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  Equipo especializado en resolver controversias complejas y
                  brindar asesoría estratégica a entidades públicas y privadas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cursor-pointer group border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-white/10">
                  Agenda una consulta
                  <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="cursor-pointer group border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-white/10">
                  Conoce nuestros servicios
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    <CountUp
                      from={0}
                      to={15}
                      separator=","
                      direction="up"
                      duration={3}
                      className="count-up-text"
                    />
                    +
                  </div>
                  <div className="text-white/60 text-sm">
                    Años de experiencia
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    <CountUp
                      from={0}
                      to={500}
                      separator=","
                      direction="up"
                      duration={3}
                      className="count-up-text"
                    />
                    +
                  </div>
                  <div className="text-white/60 text-sm">Casos exitosos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    <CountUp
                      from={0}
                      to={98}
                      separator="%"
                      direction="up"
                      duration={3}
                      className="count-up-text"
                    />
                    %
                  </div>
                  <div className="text-white/60 text-sm">Tasa de éxito</div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="space-y-6">
              <div className="grid gap-6">
                <div className="animate__animated animate__fadeInUp animate__delay-1s bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-xl  flex items-center justify-center">
                      <Scale className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Litigio Estratégico
                      </h3>
                      <p className="text-white/70 text-sm">
                        Defensa especializada en procesos complejos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="animate__animated animate__fadeInUp animate__delay-2s bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-xl  flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Consultoría Legal
                      </h3>
                      <p className="text-white/70 text-sm">
                        Asesoría multidisciplinaria especializada
                      </p>
                    </div>
                  </div>
                </div>

                <div className="animate__animated animate__fadeInUp animate__delay-3s bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-xl  flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Protección Legal
                      </h3>
                      <p className="text-white/70 text-sm">
                        Defensa integral de derechos e intereses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
