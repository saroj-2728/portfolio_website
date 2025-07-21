'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

type HoverEffect = 'none' | 'lift' | 'tilt' | 'glow' | 'scale' | 'zoom'

interface AnimatedImageProps {
    src: string
    alt?: string
    width?: number
    height?: number
    fill?: boolean
    sizes?: string
    rounded?: string
    interactive?: boolean
    hoverEffect?: HoverEffect
    hoverOverlay?: boolean | string
    caption?: string
    href?: string
    onClick?: () => void
    className?: string
    imgClassName?: string
    aspectRatio?: `${number}/${number}` | string
    loadingSkeleton?: boolean
    fallbackSrc?: string
}

const AnimatedImage = ({
    src,
    alt = '',
    width,
    height,
    fill,
    sizes,
    rounded = 'rounded-lg',
    interactive = true,
    hoverEffect = 'zoom',
    hoverOverlay,
    caption,
    href,
    onClick,
    className = '',
    imgClassName = '',
    aspectRatio,
    loadingSkeleton = false,
    fallbackSrc,
}: AnimatedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    // Show skeleton placeholder until image loads
    const showSkeleton = loadingSkeleton && !isLoaded && !hasError

    // Use fallback image if original fails to load
    const effectiveSrc = hasError && fallbackSrc ? fallbackSrc : src

    // Hover animations
    const getHoverMotion = () => {
        if (!interactive) return {}
        switch (hoverEffect) {
            case 'lift':
                return { y: -6, scale: 1.02, transition: { duration: 0.2 } }
            case 'tilt':
                return { rotateX: 5, rotateY: -5, scale: 1.02, transition: { duration: 0.2 } }
            case 'glow':
                return { boxShadow: '0 10px 40px rgba(59,130,246,0.35)', scale: 1.02, transition: { duration: 0.2 } }
            case 'scale':
                return { scale: 1.05, transition: { duration: 0.2 } }
            case 'zoom':
                return { scale: 1.01, transition: { duration: 0.2 } }
            default:
                return {}
        }
    }

    const innerZoomClass = interactive && hoverEffect === 'zoom' ? 'group-hover:scale-110' : ''
    const overlayClass = hoverOverlay ? (typeof hoverOverlay === 'string' ? hoverOverlay : 'bg-hover/40') : ''

    // Main image element with skeleton and overlay
    const imageElement = (
        <>
            {showSkeleton && <div className="absolute inset-0 animate-pulse bg-icon/20" />}
            <Image
                src={effectiveSrc}
                alt={alt}
                {...(fill ? { fill: true } : { width: width ?? 800, height: height ?? 450 })}
                sizes={sizes}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                className={`object-cover transition-transform duration-500 ${innerZoomClass} ${imgClassName} ${showSkeleton ? 'opacity-0' : 'opacity-100'
                    }`}
            />
            {hoverOverlay && interactive && (
                <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${overlayClass}`}
                />
            )}
        </>
    )

    // Image wrapper with animations
    const content = (
        <motion.figure
            className={`group relative overflow-hidden ${rounded} ${interactive ? 'cursor-pointer' : 'cursor-default'} ${className}`}
            whileHover={getHoverMotion()}
            whileTap={interactive ? { scale: 0.98 } : {}}
            onClick={onClick}
            style={aspectRatio ? { aspectRatio } : undefined}
        >
            <div className="relative w-full h-full">{imageElement}</div>

            {/* Caption */}
            {caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs bg-background/80 backdrop-blur-sm border-t border-brd">
                    {caption}
                </figcaption>
            )}
        </motion.figure>
    )

    // Wrap with link if href is provided
    return href ? <Link href={href}>{content}</Link> : content
}

export default AnimatedImage