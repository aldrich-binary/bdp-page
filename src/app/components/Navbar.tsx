"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Facebook, Instagram, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Función para scroll suave personalizado
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - 100; // 100px de offset para el navbar fijo
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

export const Navbar = () => {
  // El problema original es que el botón del menú móvil no está dentro de PopoverTrigger,
  // lo que impide que el Popover se abra correctamente por sí solo.
  // Además, no es necesario controlar el estado manualmente a menos que quieras lógica especial.
  // Usamos PopoverTrigger para abrir/cerrar el popover.
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-4 mx-auto max-w-7xl px-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-3xl px-6 py-3">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col items-center justify-center">
              <span
                className="font-light text-2xl text-white"
                style={{
                  WebkitTextStroke: "1px",
                  letterSpacing: "0.05em",
                }}
              >
                BDP
              </span>
              <span className="font-light text-sm text-gray-300 mt-1 tracking-wide">
                litigio · consultoría
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => smoothScrollTo("acerca")}
              className="text-white hover:text-white transition-colors duration-200 relative group cursor-pointer"
            >
              Acerca
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </button>

            <Link href="/services">
              <button className="text-white hover:text-white transition-colors duration-200 relative group cursor-pointer">
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </button>
            </Link>

            <button
              onClick={() => smoothScrollTo("contacto")}
              className="text-white hover:text-white transition-colors duration-200 relative group cursor-pointer"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Social Links & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 h-8 w-8 p-0 cursor-pointer"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 h-8 w-8 p-0 cursor-pointer"
              >
                <Facebook className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile menu button y Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 p-0"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[40vw] mt-4 bg-black border-none">
                <div className="flex flex-col gap-5">
                  <Button
                    onClick={() => {
                      smoothScrollTo("acerca");
                      // Opcional: cerrar el popover después de click
                      // (esto requiere ref o control del estado)
                    }}
                    className="text-white hover:text-white transition-colors duration-200 relative group cursor-pointer"
                  >
                    Acerca
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                  </Button>
                  <Button
                    asChild
                    className="text-white hover:text-white transition-colors duration-200 relative group cursor-pointer"
                  >
                    <Link
                      href="/services"
                      className="w-full inline-block relative group"
                    >
                      Servicios
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </Button>
                  <Button
                    onClick={() => {
                      smoothScrollTo("contacto");
                      // Opcional: cerrar el popover después de click
                    }}
                    className="text-white hover:text-white transition-colors duration-200 relative group cursor-pointer"
                  >
                    Contacto
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};
