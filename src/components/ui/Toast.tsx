'use client'

import { motion, AnimatePresence } from 'motion/react'
import { ReactNode, useEffect } from 'react'
import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'
import { IoClose, IoCheckmarkCircle, IoWarning, IoAlert, IoInformation } from 'react-icons/io5'

export interface Toast {
    id: string
    title?: string
    message: string
    type?: 'success' | 'error' | 'warning' | 'info'
    duration?: number
    icon?: LucideIcon | IconType | ReactNode
    action?: {
        label: string
        onClick: () => void
    }
    dismissible?: boolean
}

interface ToastProps extends Toast {
    onDismiss: (id: string) => void
}

interface ToastContainerProps {
    toasts: Toast[]
    onDismiss: (id: string) => void
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
    className?: string
}

const Toast = ({
    id,
    title,
    message,
    type = 'info',
    duration = 5000,
    icon,
    action,
    dismissible = true,
    onDismiss
}: ToastProps) => {

    // Auto dismiss
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                onDismiss(id)
            }, duration)

            return () => clearTimeout(timer)
        }
    }, [id, duration, onDismiss])

    // Default icons
    const defaultIcons = {
        success: IoCheckmarkCircle,
        error: IoAlert,
        warning: IoWarning,
        info: IoInformation
    }

    // Type styles
    const typeStyles = {
        success: {
            container: 'bg-success/10 border-success/20 text-success',
            icon: 'text-success',
            progress: 'bg-success'
        },
        error: {
            container: 'bg-error/10 border-error/20 text-error',
            icon: 'text-error',
            progress: 'bg-error'
        },
        warning: {
            container: 'bg-warning/10 border-warning/20 text-warning',
            icon: 'text-warning',
            progress: 'bg-warning'
        },
        info: {
            container: 'bg-info/10 border-info/20 text-info',
            icon: 'text-info',
            progress: 'bg-info'
        }
    }

    const IconComponent = icon || defaultIcons[type]
    const styles = typeStyles[type]

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`
        relative max-w-md w-full bg-surface backdrop-blur-sm border rounded-lg shadow-lg overflow-hidden
        ${styles.container}
      `}
        >
            {/* Progress bar */}
            {duration > 0 && (
                <motion.div
                    className={`absolute top-0 left-0 h-1 ${styles.progress}`}
                    initial={{ width: '100%' }}
                    animate={{ width: '0%' }}
                    transition={{ duration: duration / 1000, ease: 'linear' }}
                />
            )}

            <div className="p-4 flex items-start gap-3">
                {/* Icon */}
                {IconComponent && (
                    <div className="flex-shrink-0 mt-0.5">
                        {typeof IconComponent === 'function' ? (
                            <IconComponent className={`w-5 h-5 ${styles.icon}`} />
                        ) : (
                            IconComponent
                        )}
                    </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {title && (
                        <h4 className="text-sm font-semibold text-primary mb-1">
                            {title}
                        </h4>
                    )}
                    <p className="text-sm text-secondary">
                        {message}
                    </p>

                    {/* Action */}
                    {action && (
                        <motion.button
                            className="mt-2 text-sm font-medium underline hover:no-underline transition-all"
                            onClick={action.onClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {action.label}
                        </motion.button>
                    )}
                </div>

                {/* Dismiss button */}
                {dismissible && (
                    <motion.button
                        className="flex-shrink-0 text-secondary hover:text-primary transition-colors p-1 -m-1"
                        onClick={() => onDismiss(id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <IoClose className="w-4 h-4" />
                    </motion.button>
                )}
            </div>
        </motion.div>
    )
}

const ToastContainer = ({
    toasts,
    onDismiss,
    position = 'top-right',
    className = ''
}: ToastContainerProps) => {

    // Position styles
    const positionStyles = {
        'top-right': 'top-4 right-4',
        'top-left': 'top-4 left-4',
        'bottom-right': 'bottom-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
        'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
    }

    return (
        <div className={`fixed z-50 ${positionStyles[position]} ${className}`}>
            <div className="space-y-3">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <Toast
                            key={toast.id}
                            {...toast}
                            onDismiss={onDismiss}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}

// Toast hook for easy usage
export const useToast = () => {
    const showToast = (toast: Omit<Toast, 'id'>) => {
        // This would typically be managed by a context or global state
        console.log('Toast:', toast)
    }

    return { showToast }
}

export { Toast as ToastComponent, ToastContainer }
export default ToastContainer
