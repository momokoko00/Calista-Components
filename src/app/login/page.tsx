import { LoginForm } from "@/components/login-form"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <div
      className={cn(
        "flex flex-col min-h-screen",
        "bg-[url('/bg-white.png')] dark:bg-[url('/bg-black.png')]",
        "bg-cover bg-center bg-no-repeat"
      )}
    >
      <div className="flex justify-end p-4">
        <ModeToggle />
      </div>
      <div className="flex flex-grow items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
