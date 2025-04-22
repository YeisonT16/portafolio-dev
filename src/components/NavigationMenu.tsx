interface Props {
  isOpen: boolean;
}

export default function NavigationMenu({isOpen}: Props) {




  return (
<section
  className={`
    transition-all duration-500 ease-in-out
    max-[555px]:absolute top-0 w-full nav-bar border-transparent rounded-md bg-black/90
    flex-col justify-center items-center text-center
    ${isOpen
      ? 'max-[555px]:block max-[555px]:opacity-100 max-[555px]:translate-y-0'
      : 'max-[555px]:opacity-0 max-[555px]:-translate-y-full max-[555px]:pointer-events-none max-[555px]:none'}
  `}
>
  <nav className="p-4 text-center w-full">
    <ul>
      <li
        className="mb-2 border-transparent hover:text-violet-500 px-2 border-b-2 hover:border-b-violet-600/50 transform duration-500"
      >
        <a href="#top">Inicio</a>
      </li>
      <li
        className="mb-2 border-transparent hover:text-violet-500 px-2 border-b-2 hover:border-b-violet-600/50 transition transform duration-500"
      >
        <a href="#experiencia">Experiencia</a>
      </li>
      <li
        className="mb-2 border-transparent hover:text-violet-500 px-2 border-b-2 hover:border-b-violet-600/50 transition transform duration-500"
      >
        <a href="#proyectos">Proyectos</a>
      </li>
      <li
        className="mb-2 border-transparent hover:text-violet-500 px-2 border-b-2 hover:border-b-violet-600/50 transition transform duration-500"
      >
        <a href="#sobre-mi">Sobre mi</a>
      </li>
      <li
        className="mb-2 border-transparent hover:text-violet-500 px-2 border-b-2 hover:border-b-violet-600/50 transition transform duration-500"
      >
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
</section>
  )
}