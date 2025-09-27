import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "BDP nos ayudó a resolver un complejo litigio administrativo que llevaba años estancado. Su expertise en derecho público y su estrategia legal fueron fundamentales para nuestro éxito.",
      name: "Carlos Mendoza",
      designation: "CEO de Constructora del Pacífico",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "La consultoría de BDP en materia de contrataciones públicas transformó completamente nuestros procesos. Su conocimiento profundo del marco legal nos dio una ventaja competitiva significativa.",
      name: "María Elena Ruiz",
      designation: "CEO de Servicios Corporativos del Norte",
      src: "https://images.unsplash.com/photo-1697089843672-eece9d6a7848?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Cuando enfrentamos una controversia fiscal compleja, BDP demostró un nivel de profesionalismo y resultados excepcionales. Su equipo de litigantes es verdaderamente de clase mundial.",
      name: "Roberto Silva",
      designation: "CEO de Grupo Industrial del Sur",
      src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=755&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "BDP nos acompañó en un proceso de amparo que parecía imposible de ganar. Su estrategia legal innovadora y su dedicación nos permitieron obtener un resultado favorable que cambió el rumbo de nuestra empresa.",
      name: "Ana Patricia López",
      designation: "CEO de Tecnologías Avanzadas S.A.",
      src: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "La asesoría de BDP en derecho administrativo ha sido fundamental para el crecimiento de nuestra empresa. Su capacidad para anticipar riesgos legales y proponer soluciones estratégicas es incomparable.",
      name: "Fernando Herrera",
      designation: "CEO de Desarrollo Urbano Integral",
      src: "https://images.unsplash.com/photo-1514971126075-758e7d825812?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="flex flex-col gap-5  mt-10 items-center">
      <div className="text-4xl md:text-6xl text-center text-white font-bold">
        Lo que dicen de nosotros
      </div>
      <div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}
