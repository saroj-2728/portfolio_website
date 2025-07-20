'use client'

import { motion, useInView } from 'motion/react'
import { ReactNode, useRef, useEffect, useState } from 'react'
import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'

interface BadgeProps {
    children: ReactNode
    variant?: 'default' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'outline' | 'glass'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    icon?: LucideIcon | IconType
    iconPosition?: 'left' | 'right'
    removable?: boolean
    onRemove?: () => void
    clickable?: boolean
    onClick?: () => void
    loading?: boolean
    pulse?: boolean
    animated?: boolean
    progress?: number // 0-100 for progress badges
    className?: string
}

const Badge = ({
    children,
    variant = 'default',
    size = 'sm',
    icon: Icon,
    iconPosition = 'left',
    removable = false,
    onRemove,
    clickable = false,
    onClick,
    loading = false,
    pulse = false,
    animated = true,
    progress,
    className = ''
}: BadgeProps) => {

    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-20px' })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Size styles
    const sizeStyles = {
        xs: 'px-1.5 py-0.5 text-xs',
        sm: 'px-2 py-1 text-xs',
        md: 'px-2.5 py-1 text-sm',
        lg: 'px-3 py-1.5 text-sm'
    }

    // Icon sizes
    const iconSizes = {
        xs: 'w-3 h-3',
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-4 h-4'
    }

    // Variant styles
    const variantStyles = {
        default: 'bg-surface text-primary border border-brd',
        secondary: 'bg-surface-secondary text-secondary border border-brd',
        accent: 'bg-accent text-btn-accent border-0',
        success: 'bg-success text-white border-0',
        warning: 'bg-warning text-black border-0',
        error: 'bg-error text-white border-0',
        outline: 'bg-transparent text-primary border border-primary',
        glass: 'bg-glass-bg backdrop-blur-sm text-primary border border-glass-border'
    }

    // Animation states
    const hiddenState = {
        opacity: 0,
        scale: 0.8,
        y: 10
    }

    const visibleState = {
        opacity: 1,
        scale: 1,
        y: 0
    }

    const pulseState = {
        scale: [1, 1.05, 1]
    }

    const progressHiddenState = { width: 0 }
    const progressVisibleState = { width: `${progress}%` }

    const isInteractive = clickable || removable

    return (
        <motion.span
            ref={ref}
            className={`
        inline-flex items-center gap-1.5 rounded-full font-medium select-none relative overflow-hidden
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${isInteractive ? 'cursor-pointer hover:shadow-md' : ''}
        ${loading ? 'opacity-75' : ''}
        ${className}
      `}
            initial={animated ? hiddenState : undefined}
            animate={pulse && !loading ? pulseState : (animated && mounted && isInView) ? visibleState : undefined}
            transition={animated ? {
                duration: pulse ? 1.5 : 0.3,
                ease: pulse ? 'easeInOut' : [0.4, 0, 0.2, 1],
                repeat: pulse ? Infinity : 0
            } : undefined}
            whileHover={isInteractive ? {
                scale: 1.05,
                transition: { duration: 0.2 }
            } : undefined}
            whileTap={isInteractive ? {
                scale: 0.95,
                transition: { duration: 0.1 }
            } : undefined}
            onClick={onClick}
        >
            {/* Progress bar background */}
            {progress !== undefined && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-btn-accent/20 to-btn-accent/40 rounded-full"
                    initial={progressHiddenState}
                    animate={mounted && isInView ? progressVisibleState : progressHiddenState}
                    transition={{
                        duration: 1,
                        ease: 'easeOut',
                        delay: 0.2
                    }}
                />
            )}

            {/* Loading spinner */}
            {loading && (
                <motion.div
                    className={`border-2 border-current border-t-transparent rounded-full ${iconSizes[size]}`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
            )}

            {/* Left Icon */}
            {Icon && iconPosition === 'left' && !loading && (
                <motion.div
                    initial={animated ? { opacity: 0, x: -5 } : undefined}
                    animate={animated && mounted && isInView ? { opacity: 1, x: 0 } : undefined}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <Icon className={iconSizes[size]} />
                </motion.div>
            )}

            {/* Content */}
            <motion.span
                className="relative z-10"
                initial={animated ? { opacity: 0 } : undefined}
                animate={animated && mounted && isInView ? { opacity: 1 } : undefined}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                {children}
            </motion.span>

            {/* Progress percentage */}
            {progress !== undefined && (
                <motion.span
                    className="text-xs font-bold relative z-10"
                    initial={animated ? { opacity: 0 } : undefined}
                    animate={animated && mounted && isInView ? { opacity: 1 } : undefined}
                    transition={{ duration: 0.3, delay: 0.8 }}
                >
                    {Math.round(progress)}%
                </motion.span>
            )}

            {/* Right Icon */}
            {Icon && iconPosition === 'right' && !loading && (
                <motion.div
                    initial={animated ? { opacity: 0, x: 5 } : undefined}
                    animate={animated && mounted && isInView ? { opacity: 1, x: 0 } : undefined}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <Icon className={iconSizes[size]} />
                </motion.div>
            )}

            {/* Remove button */}
            {removable && (
                <motion.button
                    className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
                    onClick={(e) => {
                        e.stopPropagation()
                        onRemove?.()
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={animated ? { opacity: 0, scale: 0 } : undefined}
                    animate={animated && mounted && isInView ? { opacity: 1, scale: 1 } : undefined}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <svg className={iconSizes[size]} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </motion.button>
            )}
        </motion.span>
    )
}

// Skill Badge Component for animated skill bars
interface SkillBadgeProps {
    name: string
    level: number // 0-100
    icon?: LucideIcon | IconType
    color?: string
    animated?: boolean
    showPercentage?: boolean
    className?: string
}

export const SkillBadge = ({
    name,
    level,
    icon: Icon,
    color = 'var(--btn-accent)',
    animated = true,
    showPercentage = true,
    className = ''
}: SkillBadgeProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-20px' })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <motion.div
            ref={ref}
            className={`relative p-3 bg-surface border border-brd rounded-lg ${className}`}
            initial={animated ? { opacity: 0, y: 20 } : undefined}
            animate={animated && mounted && isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4 text-btn-accent" />}
                    <span className="text-sm font-medium text-primary">{name}</span>
                </div>
                {showPercentage && (
                    <motion.span
                        className="text-xs font-bold text-btn-accent"
                        initial={animated ? { opacity: 0 } : undefined}
                        animate={animated && mounted && isInView ? { opacity: 1 } : undefined}
                        transition={{ duration: 0.3, delay: 0.8 }}
                    >
                        {level}%
                    </motion.span>
                )}
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-surface-secondary rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                    initial={animated ? { width: 0 } : { width: `${level}%` }}
                    animate={animated && mounted && isInView ? { width: `${level}%` } : undefined}
                    transition={{
                        duration: 1.2,
                        ease: 'easeOut',
                        delay: 0.2
                    }}
                />
            </div>
        </motion.div>
    )
}

export default Badge
