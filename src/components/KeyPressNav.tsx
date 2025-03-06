'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const KeyPressNavigation = ({ children }: { children: React.ReactNode }) => {

  const router = useRouter()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return;
      }
      
      if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
        return;
      }

      switch (event.key) {
        case "1":
          router.push("/");
          break;
        case "2":
          router.push("/achievements");
          break;
        case "3":
          router.push("/projects");
          break;
        case "4":
          router.push("/services");
          break;
        case "5":
          router.push("/about");
          break;
        case "6":
          router.push("/feed");
          break;
        case "7":
          router.push("/thoughts");
          break;
        case "8":
          router.push("/stack");
          break;
        case "c":
          router.push("/contact");
          break;
        case "g":
          window.open("https://github.com/saroj-2728", "_blank");
          break;
        case "l":
          window.open("https://www.linkedin.com/in/saroj27/", "_blank");
          break;
        case "i":
          window.open("https://www.instagram.com/_._.saroj._._/", "_blank");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router])


  return (
    <>
      {children}
    </>
  )
}

export default KeyPressNavigation
