import LightRays from "@/components/LightRays";
import { Button } from "@/components/ui/button";
import { Mail, SendHorizonal } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="relative" id="contacto">
      <div className="absolute inset-0 overflow-hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          saturation={1}
          fadeDistance={1}
          className="w-full h-full opacity-[0.5]"
        />
      </div>
      <section className="relative py-16 bg-black  md:py-32 border border-gray-800 max-w-5xl mx-auto rounded-3xl">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-white">
              Trabajemos juntos
            </h2>
            <p className="mt-4 text-white/80">
              Deja tu correo y te contactaremos.
            </p>

            <form action="" className="mx-auto mt-10 max-w-sm lg:mt-12">
              <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                <input
                  placeholder="Tu correo electrónico"
                  className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                  type="email"
                />

                <div className="md:pr-1.5 lg:pr-0">
                  <Button aria-label="submit" className="rounded-(--radius)">
                    <span className="hidden md:block">Enviar</span>
                    <SendHorizonal
                      className="relative mx-auto size-5 md:hidden"
                      strokeWidth={2}
                    />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
