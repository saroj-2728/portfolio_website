'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'

interface CardProps {
    children?: ReactNode
    title?: string
    description?: string
    image?: string
    imageAlt?: string
    icon?: LucideIcon | IconType | ReactNode
    href?: string
    onClick?: () => void
    variant?: 'default' | 'glass' | 'gradient' | 'elevated'
    size?: 'sm' | 'md' | 'lg'
    interactive?: boolean
    hoverEffect?: 'none' | 'lift' | 'tilt' | 'glow' | 'scale'
    className?: string
    imageClassName?: string
    contentClassName?: string
    tag?: string
    badge?: ReactNode
    footer?: ReactNode
    loading?: boolean
}

const Card = ({
    children,
    title,
    description,
    image,
    imageAlt,
    icon: Icon,
    href,
    onClick,
    variant = 'default',
    size = 'md',
    interactive = true,
    hoverEffect = 'lift',
    className = '',
    imageClassName = '',
    contentClassName = '',
    tag,
    badge,
    footer,
    loading = false
}: CardProps) => {

    // Variant styles
    const variantStyles = {
        default: 'bg-accent border border-brd',
        glass: 'bg-glass-bg backdrop-blur-sm border border-glass-border',
        gradient: 'bg-gradient-to-br from-gradient-start to-gradient-end border border-brd',
        elevated: 'bg-surface-elevated border border-brd shadow-lg'
    }

    // Size styles
    const sizeStyles = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    }

    // Title size styles
    const titleSizeStyles = {
        sm: 'text-base font-semibold',
        md: 'text-lg font-semibold',
        lg: 'text-xl font-semibold'
    }

    // Hover effects
    const getHoverEffect = () => {
        if (!interactive || loading) return {}

        switch (hoverEffect) {
            case 'lift':
                return {
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                }
            case 'tilt':
                return {
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.02,
                    transition: { duration: 0.2 }
                }
            case 'glow':
                return {
                    boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)',
                    transition: { duration: 0.2 }
                }
            case 'scale':
                return {
                    scale: 1.05,
                    transition: { duration: 0.2 }
                }
            default:
                return {}
        }
    }

    const cardContent = (
        <motion.div
            className={`
        relative rounded-lg overflow-hidden group ${loading ? '' : 'cursor-pointer'}
        ${variantStyles[variant]} ${sizeStyles[size]} ${className}
        ${interactive && !loading ? 'hover:border-brd-hover' : ''}
        ${loading ? 'animate-pulse' : ''}
      `}
            whileHover={getHoverEffect()}
            whileTap={interactive && !loading ? { scale: 0.98 } : {}}
            onClick={loading ? undefined : onClick}
            style={hoverEffect === 'tilt' ? { transformStyle: 'preserve-3d' } : {}}
        >
            {/* Badge */}
            {badge && !loading && (
                <div className="absolute top-4 right-4 z-10">
                    {badge}
                </div>
            )}

            {/* Image */}
            {(image || loading) && (
                <div className="relative mb-4 -mx-6 -mt-6 overflow-hidden">
                    <div className="aspect-[16/9] relative">
                        {loading ? (
                            <div className="w-full h-full bg-icon/20 animate-pulse" />
                        ) : (
                            <Image
                                src={image!}
                                alt={imageAlt || title || 'Card image'}
                                fill
                                className={`object-cover transition-transform duration-500 ${!loading ? 'group-hover:scale-110' : ''} ${imageClassName}`}
                            />
                        )}
                    </div>
                    {tag && !loading && (
                        <div className="absolute bottom-3 left-3">
                            <span className="px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm border border-brd rounded-full">
                                {tag}
                            </span>
                        </div>
                    )}
                </div>
            )}

            {/* Icon */}
            {Icon && !image && !loading && (
                <div className="mb-4">
                    {typeof Icon === 'function' ? (
                        <Icon className="w-8 h-8 text-btn-accent" />
                    ) : (
                        Icon
                    )}
                </div>
            )}

            {/* Content */}
            <div className={`space-y-3 ${contentClassName}`}>
                {/* Title & Description */}
                {(title || description || loading) && (
                    <div className={`${loading ? 'space-y-1' : ''}`}>
                        {(title || loading) && (
                            <div className={`${titleSizeStyles[size]} text-primary transition-colors`}>
                                {loading ? (
                                    <div className="h-6 bg-icon/20 rounded animate-pulse" />
                                ) : (
                                    title
                                )}
                            </div>
                        )}
                        {(description || loading) && (
                            <div className="text-sm text-secondary">
                                {loading ? (
                                    <div className="space-y-2">
                                        <div className="h-4 bg-icon/20 rounded animate-pulse" />
                                    </div>
                                ) : (
                                    description
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Custom children */}
                {children && !loading && (
                    <div className="space-y-5">
                        {children}
                    </div>
                )}
            </div>

            {/* Footer */}
            {footer && !loading && (
                <div className="mt-4 pt-4 border-t border-brd">
                    {footer}
                </div>
            )}

            {/* Interactive hover overlay */}
            {interactive && hoverEffect !== 'none' && !loading && (
                <motion.div
                    className="absolute inset-0 bg-hover opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                    initial={{ opacity: 0 }}
                />
            )}
        </motion.div>
    )

    // Wrap with link if href is provided and not loading
    if (href && !loading) {
        return (
            <Link href={href} className="block">
                {cardContent}
            </Link>
        )
    }

    return cardContent
}

export default Card