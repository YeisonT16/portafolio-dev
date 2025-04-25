import { useState } from "react"
import NavigationMenu from "./NavigationMenu.tsx"



export default function ViewMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(prev => !prev);
    console.log("click")
  }


return (
  <>
    <button
      className={`max-[555px]:flex hidden items-center justify-center absolute z-50 right-1 top-4 size-11 rounded-full border-transparent hover:-border-violet-600/50 border-2 hover:text-indigo-500 hover:border-indigo-500/50 transform duration-500 cursor-pointer hover:bg-black`}  onClick={() => {
        console.log("Button clicked");
        handleClick();  // Llama a la función después del log
    }}
      type="button"
    >
      {children}
    </button>
    <NavigationMenu isOpen={isOpen} />  
  </>
)
}

