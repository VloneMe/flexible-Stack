import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
    className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`container h-full mx-auto ${className}`}>
        {children}
    </div>
  )
}
