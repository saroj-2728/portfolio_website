'use client'

import { motion, AnimatePresence } from 'motion/react'
import { ReactNode, useEffect } from 'react'
import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'
import { IoClose } from 'react-icons/io5'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    title?: string
    description?: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    variant?: 'default' | 'glass' | 'dark'
    showCloseButton?: boolean
    closeOnBackdrop?: boolean
    closeOnEscape?: boolean
    icon?: LucideIcon | IconType
    className?: string
}

const Modal = ({
    isOpen,
    onClose,
    children,
    title,
    description,
    size = 'md',
    variant = 'default',
    showCloseButton = true,
    closeOnBackdrop = true,
    closeOnEscape = true,
    icon: Icon,
    className = ''
}: ModalProps) => {

    // Handle escape key
    useEffect(() => {
        if (!closeOnEscape) return

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose, closeOnEscape])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    // Size styles
    const sizeStyles = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-[95vw] max-h-[95vh]'
    }

    // Variant styles
    const variantStyles = {
        default: 'bg-surface border border-brd',
        glass: 'bg-glass-bg backdrop-blur-xl border border-glass-border',
        dark: 'bg-background border border-brd'
    }

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-backdrop-blur"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={closeOnBackdrop ? onClose : undefined}
                    />

                    {/* Modal */}
                    <motion.div
                        className={`
              relative w-full ${sizeStyles[size]} max-h-[90vh] overflow-hidden
              ${variantStyles[variant]} rounded-lg shadow-2xl
              ${className}
            `}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        {(title || description || showCloseButton) && (
                            <div className="flex items-start justify-between p-6 border-b border-brd">
                                <div className="flex items-center gap-3">
                                    {Icon && (
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-btn-accent/10">
                                            <Icon className="w-5 h-5 text-btn-accent" />
                                        </div>
                                    )}
                                    <div>
                                        {title && (
                                            <h3 className="text-lg font-semibold text-primary">
                                                {title}
                                            </h3>
                                        )}
                                        {description && (
                                            <p className="text-sm text-secondary mt-1">
                                                {description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {showCloseButton && (
                                    <motion.button
                                        className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-hover transition-colors"
                                        onClick={onClose}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <IoClose className="w-5 h-5" />
                                    </motion.button>
                                )}
                            </div>
                        )}

                        {/* Content */}
                        <div className="overflow-y-auto max-h-[70vh]">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default Modal
