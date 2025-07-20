'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'

interface ButtonProps {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'ghost'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    loading?: boolean
    disabled?: boolean
    icon?: LucideIcon | IconType
    iconPosition?: 'left' | 'right'
    ripple?: boolean
    glow?: boolean
    className?: string
    fullWidth?: boolean
    href?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    icon: Icon,
    iconPosition = 'left',
    ripple = true,
    glow = false,
    className = '',
    fullWidth = false,
    href,
    onClick,
    type = 'button',
}: ButtonProps) => {

    // Base styles
    const baseStyles = "relative overflow-hidden font-semibold transition-all duration-300 ease-out cursor-pointer outline-none focus:outline-none select-none inline-flex items-center justify-center gap-2"

    // Variant styles - Updated for secondary and ghost
    const variantStyles = {
        primary: "bg-btn-primary text-background hover:opacity-80 active:scale-[0.98]",
        secondary: "bg-transparent text-secondary hover:text-primary border border-brd hover:bg-active active:bg-active",
        accent: "bg-btn-accent text-white hover:opacity-80 active:scale-[0.98]",
        success: "bg-btn-success text-white hover:opacity-80 active:scale-[0.98]",
        warning: "bg-btn-warning text-white hover:opacity-80 active:scale-[0.98]",
        danger: "bg-btn-danger text-white hover:opacity-80 active:scale-[0.98]",
        ghost: "bg-transparent text-secondary hover:text-primary hover:bg-active active:bg-active"
    }

    // Size styles
    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm rounded-md",
        md: "px-6 py-2.5 text-sm rounded-md",
        lg: "px-8 py-3 text-base rounded-lg",
        xl: "px-10 py-4 text-lg rounded-lg"
    }

    // Icon sizes
    const iconSizes = {
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20
    }

    // Disabled styles
    const disabledStyles = disabled || loading
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : ""

    // Full width styles
    const widthStyles = fullWidth ? "w-full" : ""

    // Glow effect styles
    const glowStyles = glow && !disabled && !loading
        ? "shadow-lg shadow-btn-accent/25 hover:shadow-btn-accent/40"
        : ""

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${widthStyles} ${glowStyles} ${className}`.trim()

    // Ripple effect component - Fixed for secondary and ghost variants
    const RippleEffect = () => {
        // Only show ripple for secondary and ghost variants
        const shouldShowRipple = ripple && !disabled && !loading && (variant === 'secondary' || variant === 'ghost')
        
        return shouldShowRipple ? (
            <motion.div
                className="absolute inset-0 bg-white/0 rounded-inherit pointer-events-none"
                whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
                initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                exit={{ 
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
            />
        ) : null
    }

    // Loading spinner component
    const LoadingSpinner = () => (
        loading ? (
            <motion.div
                className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        ) : null
    )

    // Content with icon - Removed z-index
    const ButtonContent = () => (
        <>
            {loading && <LoadingSpinner />}
            {Icon && iconPosition === 'left' && !loading && (
                <Icon size={iconSizes[size]} />
            )}
            <span className={loading ? "opacity-0" : "opacity-100"}>
                {children}
            </span>
            {Icon && iconPosition === 'right' && !loading && (
                <Icon size={iconSizes[size]} />
            )}
        </>
    )

    // If href is provided, render as link
    if (href && !disabled && !loading) {
        return (
            <motion.a
                href={href}
                className={combinedClassName}
                whileHover={disabled || loading ? {} : { scale: 1.02 }}
                whileTap={disabled || loading ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
            >
                <RippleEffect />
                <div className="relative flex items-center gap-2">
                    <ButtonContent />
                </div>
            </motion.a>
        )
    }

    // Default button
    return (
        <motion.button
            className={combinedClassName}
            onClick={onClick}
            disabled={disabled || loading}
            type={type}
            whileHover={disabled || loading ? {} : { scale: 1.02 }}
            whileTap={disabled || loading ? {} : { scale: 0.98 }}
            transition={{ duration: 0.2 }}
        >
            <RippleEffect />
            <div className="relative flex items-center gap-2">
                <ButtonContent />
            </div>
        </motion.button>
    )
}

export default Button