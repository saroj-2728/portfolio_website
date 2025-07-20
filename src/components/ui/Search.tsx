'use client'

import { motion, AnimatePresence } from 'motion/react'
import { ReactNode, useState, useEffect, useRef } from 'react'
import { IoSearch, IoClose } from 'react-icons/io5'
import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons'

export interface SearchResult {
    id: string
    title: string
    description?: string
    category?: string
    icon?: LucideIcon | IconType | ReactNode
    href?: string
    onClick?: () => void
}

interface SearchProps {
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    onSearch?: (query: string) => void
    onSelect?: (result: SearchResult) => void
    results?: SearchResult[]
    loading?: boolean
    size?: 'sm' | 'md' | 'lg'
    variant?: 'default' | 'filled' | 'glass'
    showResults?: boolean
    maxResults?: number
    debounceMs?: number
    className?: string
    icon?: LucideIcon | IconType
    clearable?: boolean
}

const Search = ({
    placeholder = 'Search...',
    value: controlledValue,
    onChange,
    onSearch,
    onSelect,
    results = [],
    loading = false,
    size = 'md',
    variant = 'default',
    showResults = true,
    maxResults = 10,
    debounceMs = 300,
    className = '',
    icon: CustomIcon,
    clearable = true
}: SearchProps) => {

    const [internalValue, setInternalValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const [isFocused, setIsFocused] = useState(false)

    const searchRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const resultsRef = useRef<HTMLDivElement>(null)

    const value = controlledValue ?? internalValue
    const displayResults = results.slice(0, maxResults)

    // Handle input change with debouncing
    useEffect(() => {
        if (!onSearch) return

        const handler = setTimeout(() => {
            if (value.trim()) {
                onSearch(value.trim())
            }
        }, debounceMs)

        return () => clearTimeout(handler)
    }, [value, onSearch, debounceMs])

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false)
                setHighlightedIndex(-1)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!showResults || displayResults.length === 0) return

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setHighlightedIndex(prev =>
                    prev < displayResults.length - 1 ? prev + 1 : prev
                )
                break
            case 'ArrowUp':
                e.preventDefault()
                setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev)
                break
            case 'Enter':
                e.preventDefault()
                if (highlightedIndex >= 0 && highlightedIndex < displayResults.length) {
                    handleSelect(displayResults[highlightedIndex])
                }
                break
            case 'Escape':
                setIsOpen(false)
                setHighlightedIndex(-1)
                inputRef.current?.blur()
                break
        }
    }

    const handleSelect = (result: SearchResult) => {
        onSelect?.(result)
        setIsOpen(false)
        setHighlightedIndex(-1)

        if (result.href) {
            window.location.href = result.href
        } else if (result.onClick) {
            result.onClick()
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setInternalValue(newValue)
        onChange?.(newValue)

        if (newValue.trim() && !isOpen) {
            setIsOpen(true)
        }

        setHighlightedIndex(-1)
    }

    const handleClear = () => {
        setInternalValue('')
        onChange?.('')
        setIsOpen(false)
        setHighlightedIndex(-1)
        inputRef.current?.focus()
    }

    // Size styles
    const sizeStyles = {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-4 text-base',
        lg: 'h-13 px-5 text-lg'
    }

    // Variant styles
    const variantStyles = {
        default: 'bg-transparent border border-brd hover:border-brd-hover focus-within:border-brd-focus',
        filled: 'bg-surface border border-transparent hover:border-brd-hover focus-within:border-brd-focus',
        glass: 'bg-glass-bg backdrop-blur-sm border border-glass-border hover:border-brd-hover focus-within:border-brd-focus'
    }

    const Icon = CustomIcon || IoSearch

    return (
        <div ref={searchRef} className={`relative ${className}`}>
            {/* Input */}
            <div className={`
        relative flex items-center rounded-lg transition-all duration-200
        ${variantStyles[variant]}
        ${isFocused ? 'ring-2 ring-focus' : ''}
      `}>
                <Icon className="absolute left-3 w-5 h-5 text-muted" />

                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                        setIsFocused(true)
                        if (value.trim() && displayResults.length > 0) {
                            setIsOpen(true)
                        }
                    }}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    className={`
            w-full bg-transparent outline-none text-primary placeholder-muted
            pl-10 pr-10 ${sizeStyles[size]}
          `}
                />

                {/* Loading spinner or clear button */}
                <div className="absolute right-3 flex items-center">
                    {loading ? (
                        <motion.div
                            className="w-4 h-4 border-2 border-muted border-t-primary rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                    ) : (
                        value && clearable && (
                            <motion.button
                                className="p-1 text-muted hover:text-primary transition-colors"
                                onClick={handleClear}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <IoClose className="w-4 h-4" />
                            </motion.button>
                        )
                    )}
                </div>
            </div>

            {/* Results */}
            <AnimatePresence>
                {isOpen && showResults && displayResults.length > 0 && (
                    <motion.div
                        ref={resultsRef}
                        className="absolute top-full left-0 right-0 mt-2 bg-surface border border-brd rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {displayResults.map((result, index) => (
                            <motion.div
                                key={result.id}
                                className={`
                  p-3 border-b border-brd last:border-b-0 cursor-pointer transition-colors
                  ${highlightedIndex === index ? 'bg-hover' : 'hover:bg-hover'}
                `}
                                onClick={() => handleSelect(result)}
                                whileHover={{ backgroundColor: 'var(--hover)' }}
                            >
                                <div className="flex items-start gap-3">
                                    {/* Icon */}
                                    {result.icon && (
                                        <div className="flex-shrink-0 mt-0.5">
                                            {typeof result.icon === 'function' ? (
                                                <result.icon className="w-4 h-4 text-btn-accent" />
                                            ) : (
                                                result.icon
                                            )}
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-sm font-medium text-primary truncate">
                                                {result.title}
                                            </h4>
                                            {result.category && (
                                                <span className="px-2 py-0.5 text-xs bg-accent rounded-full text-muted">
                                                    {result.category}
                                                </span>
                                            )}
                                        </div>
                                        {result.description && (
                                            <p className="text-xs text-secondary mt-1 truncate">
                                                {result.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* No results */}
            {isOpen && showResults && value.trim() && displayResults.length === 0 && !loading && (
                <motion.div
                    className="absolute top-full left-0 right-0 mt-2 bg-surface border border-brd rounded-lg shadow-xl p-4 text-center text-secondary"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    No results found for &quot;{value}&quot;
                </motion.div>
            )}
        </div>
    )
}

export default Search
