interface Props {
  isView: string;
}

export default function NavigationMenu({isView}: Props) {




  return (
<section
  className={`hidden max-[555px]:${isView} justify-center max-[555px]:absolute z-0 top-0 w-full nav-bar border-transparent rounded-md`}
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