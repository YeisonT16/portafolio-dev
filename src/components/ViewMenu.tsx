import { useState } from "react"
import NavigationMenu from "./NavigationMenu.tsx"


export default function ViewMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log("click")
  }
 const isView = isOpen ? "hidden" : "flex"

return (
  <>
    <button
      className={`hidden max-[555px]:flex items-center justify-center absolute z-10 right-2 top-2 size-9 rounded-full border-transparent hover:-border-violet-600/50 border-2 hover:text-indigo-500 hover:border-indigo-500/50 transform duration-500 cursor-pointer hover:bg-black`} onClick={() => {handleClick}}
    >
      {children}
    </button>
    <NavigationMenu isView={isView} />
  
  </>
)
}

 
