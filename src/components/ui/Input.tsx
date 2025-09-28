'use client'

import { motion } from 'motion/react'
import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef, useState } from 'react'
import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'

interface BaseInputProps {
    label?: string
    placeholder?: string
    error?: string
    helperText?: string
    icon?: LucideIcon | IconType
    iconPosition?: 'left' | 'right'
    size?: 'sm' | 'md' | 'lg'
    variant?: 'default' | 'filled' | 'glass'
    fullWidth?: boolean
    required?: boolean
    loading?: boolean
    className?: string
}

interface InputProps extends BaseInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'className'> {
    multiline?: false
}

interface TextareaProps extends BaseInputProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
    multiline: true
    rows?: number
    resize?: boolean
}

type CombinedInputProps = InputProps | TextareaProps

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, CombinedInputProps>(
    ({
        label,
        placeholder,
        error,
        helperText,
        icon: Icon,
        iconPosition = 'left',
        size = 'md',
        variant = 'default',
        fullWidth = true,
        required = false,
        loading = false,
        className = '',
        ...props
    }, ref) => {
        const [isFocused, setIsFocused] = useState(false)
        const [hasValue, setHasValue] = useState(false)

        
        // Extract only the valid HTML props for input/textarea
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { rows, resize, multiline, ...htmlProps } = props as any
        const isMultiline = !!multiline
        
        // Base styles
        const baseStyles = "w-full transition-all duration-300 ease-out outline-none border-0 focus:outline-none bg-transparent relative z-10"

        // Size styles
        const sizeStyles = {
            sm: isMultiline ? "px-3 py-2 text-sm" : "px-3 py-2 text-sm h-9",
            md: isMultiline ? "px-4 py-3 text-base" : "px-4 py-3 text-base h-11",
            lg: isMultiline ? "px-5 py-4 text-lg" : "px-5 py-4 text-lg h-13"
        }

        // Icon padding adjustments
        const iconPadding = {
            sm: iconPosition === 'left' ? "pl-10" : "pr-10",
            md: iconPosition === 'left' ? "pl-12" : "pr-12",
            lg: iconPosition === 'left' ? "pl-14" : "pr-14"
        }

        // Variant styles for container
        const variantStyles = {
            default: "border border-brd rounded-lg",
            filled: "bg-surface rounded-lg border border-transparent",
            glass: "bg-glass-bg backdrop-blur-sm border border-glass-border rounded-lg"
        }

        // Text color
        const textColor = error ? "text-error" : "text-primary"
        // const placeholderColor = error ? "placeholder-error/60" : "placeholder-muted"

        // Icon sizes
        const iconSizes = {
            sm: 16,
            md: 18,
            lg: 20
        }

        // Icon positioning
        const iconPositioning = {
            sm: iconPosition === 'left' ? "left-3" : "right-3",
            md: iconPosition === 'left' ? "left-4" : "right-4",
            lg: iconPosition === 'left' ? "left-5" : "right-5"
        }

        const inputClassName = `
      ${baseStyles}
      ${sizeStyles[size]}
      ${Icon ? iconPadding[size] : ''}
      ${textColor}
      placeholder-muted
    `.trim()

        // Container border color logic
        const containerStyle: React.CSSProperties = {
            borderColor: error ? 'red' : isFocused ? 'var(--terminal-green)' : undefined
        }

        const containerClassName = `
      ${fullWidth ? 'w-full' : 'w-auto'}
      ${variantStyles[variant]}
      ${loading ? 'opacity-60 pointer-events-none' : ''}
      relative
      ${className}
    `.trim()

        // Handle value changes
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setHasValue(e.target.value.length > 0)
            if (htmlProps.onChange) {
                htmlProps.onChange(e)
            }
        }

        const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setIsFocused(true)
            if (htmlProps.onFocus) htmlProps.onFocus(e)
        }

        const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setIsFocused(false)
            if (htmlProps.onBlur) htmlProps.onBlur(e)
        }

        // Loading spinner
        const LoadingSpinner = () => (
            loading ? (
                <motion.div
                    className={`absolute ${iconPositioning[size]} top-1/2 transform -translate-y-1/2 z-20`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                    <div className="w-4 h-4 border-2 border-muted border-t-primary rounded-full" />
                </motion.div>
            ) : null
        )

        return (
            <div className="space-y-2">
                {label && (
                    <motion.label
                        className={`block text-sm font-medium ${error ? 'text-error' : 'text-primary'}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {label}{required && <span className="text-error ml-1">*</span>}
                    </motion.label>
                )}

                <motion.div
                    className={containerClassName}
                    style={containerStyle}
                    initial={{ scale: 1 }}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                >
                    {Icon && iconPosition === 'left' && !loading && (
                        <motion.div
                            className={`absolute ${iconPositioning[size]} top-1/2 transform -translate-y-1/2 z-20`}
                            initial={{ opacity: 0.6 }}
                            animate={{
                                opacity: isFocused || hasValue ? 1 : 0.6,
                                color: error ? 'red' : isFocused ? 'var(--terminal-green)' : 'rgb(102,102,102)'
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <Icon size={iconSizes[size]} />
                        </motion.div>
                    )}

                    <LoadingSpinner />

                    <motion.div
                        className="relative"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: loading ? 0.6 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isMultiline ? (
                            <textarea
                                ref={ref as React.Ref<HTMLTextAreaElement>}
                                className={inputClassName}
                                placeholder={placeholder}
                                rows={rows || 4}
                                style={{ resize: resize === false ? 'none' : 'vertical' }}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                {...htmlProps}
                            />
                        ) : (
                            <input
                                ref={ref as React.Ref<HTMLInputElement>}
                                className={inputClassName}
                                placeholder={placeholder}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                {...htmlProps}
                            />
                        )}
                    </motion.div>

                    {Icon && iconPosition === 'right' && !loading && (
                        <motion.div
                            className={`absolute ${iconPositioning[size]} top-1/2 transform -translate-y-1/2 z-20`}
                            initial={{ opacity: 0.6 }}
                            animate={{
                                opacity: isFocused || hasValue ? 1 : 0.6,
                                color: error ? 'red' : isFocused ? 'var(--terminal-green)' : 'rgb(102,102,102)'
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <Icon size={iconSizes[size]} />
                        </motion.div>
                    )}
                </motion.div>

                {(helperText || error) && (
                    <motion.p
                        className={`text-sm ${error ? 'text-error' : 'text-muted'}`}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {error || helperText}
                    </motion.p>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'
export default Input