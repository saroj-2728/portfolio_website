'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { ChevronDown, GraduationCap, Briefcase, Award } from 'lucide-react'
import Card from './Card'
import Badge from './Badge'
import type { TimelineItem } from '@/constants/achievements'

interface TreeSectionProps {
    title: string
    items: TimelineItem[]
    category: 'education' | 'experience' | 'awards'
    defaultExpanded?: boolean
}

const TreeSection = ({ title, items, category, defaultExpanded = false }: TreeSectionProps) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded)
    const [hasAnimated, setHasAnimated] = useState(false) // Always start as false to ensure first animation

    const toggleSection = () => {
        setIsExpanded(prev => {
            const newValue = !prev
            if (newValue && !hasAnimated) {
                setHasAnimated(true)
            }
            return newValue
        })
    }

    // Handle default expanded case - trigger animation after component mounts
    useEffect(() => {
        if (defaultExpanded && !hasAnimated) {
            // Small delay to ensure proper mounting
            const timer = setTimeout(() => {
                setHasAnimated(true)
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [defaultExpanded, hasAnimated])

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'education':
                return GraduationCap
            case 'experience':
                return Briefcase
            case 'awards':
                return Award
            default:
                return GraduationCap
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'education':
                return 'from-blue-500 to-indigo-600'
            case 'experience':
                return 'from-green-500 to-emerald-600'
            case 'awards':
                return 'from-yellow-500 to-orange-600'
            default:
                return 'from-btn-accent to-btn-primary'
        }
    }

    const getBadgeVariant = (category: string) => {
        switch (category) {
            case 'education':
                return 'accent'
            case 'experience':
                return 'success'
            case 'awards':
                return 'warning'
            default:
                return 'default'
        }
    }

    const Icon = getCategoryIcon(category)
    const shouldAnimate = !hasAnimated && isExpanded // Only animate if not animated yet AND currently expanded

    return (
        <div className="relative w-full">
            {/* Category Header */}
            <motion.div
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.button
                    onClick={toggleSection}
                    className={`
                        px-6 py-3 rounded-xl border-2 border-brd
                        bg-gradient-to-r ${getCategoryColor(category)}
                        text-white font-bold text-sm md:text-base
                        hover:scale-105 transition-all duration-300
                        shadow-lg hover:shadow-xl
                        flex items-center gap-3 z-10 relative cursor-pointer
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Icon className="w-5 h-5" />
                    {title}
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </motion.button>
            </motion.div>

            {/* Tree Structure */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Main Trunk - Vertical Line */}
                        <motion.div
                            className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b ${getCategoryColor(category)} z-0`}
                            style={{
                                height: `${items.length * 160}px`,
                                top: '0px'
                            }}
                            initial={shouldAnimate ? { height: 0 } : { height: `${items.length * 160}px` }}
                            animate={{ height: `${items.length * 160}px` }}
                            transition={{
                                duration: shouldAnimate ? 0.8 : 0,
                                ease: 'easeOut'
                            }}
                        />

                        {/* Tree Items Container */}
                        <div className="relative z-10">
                            {items.map((item, index) => (
                                <motion.div
                                    key={`${category}-${index}`}
                                    className="relative mb-8"
                                    style={{
                                        marginTop: index === 0 ? '20px' : '0px',
                                        height: '140px'
                                    }}
                                    initial={shouldAnimate ? {
                                        opacity: 0,
                                        x: index % 2 === 0 ? -100 : 100
                                    } : { opacity: 1, x: 0 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={shouldAnimate ? {
                                        duration: 0.6,
                                        delay: index * 0.2 + 0.5,
                                        type: 'spring',
                                        stiffness: 100
                                    } : { duration: 0 }}
                                >
                                    {/* Branch Line - Horizontal */}
                                    <motion.div
                                        className={`
                                            absolute top-8 h-0.5 z-0
                                            bg-gradient-to-r ${getCategoryColor(category)}
                                            ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'}
                                        `}
                                        style={{
                                            width: 'clamp(48px, 5vw, 80px)'
                                        }}
                                        initial={shouldAnimate ? { width: 0 } : { width: 'clamp(48px, 5vw, 80px)' }}
                                        animate={{ width: 'clamp(48px, 5vw, 80px)' }}
                                        transition={shouldAnimate ? {
                                            duration: 0.5,
                                            delay: index * 0.2 + 0.8
                                        } : { duration: 0 }}
                                    />

                                    {/* Node Circle */}
                                    <motion.div
                                        className={`
                                            absolute top-6 w-4 h-4 rounded-full z-10
                                            bg-gradient-to-r ${getCategoryColor(category)}
                                            shadow-lg border-2 border-card-bg
                                            ${index % 2 === 0 ? 'left-1/2 -ml-2' : 'right-1/2 -mr-2'}
                                        `}
                                        initial={shouldAnimate ? { scale: 0 } : { scale: 1 }}
                                        animate={{ scale: 1 }}
                                        transition={shouldAnimate ? {
                                            duration: 0.3,
                                            delay: index * 0.2 + 1.0,
                                            type: 'spring',
                                            stiffness: 200
                                        } : { duration: 0 }}
                                        whileHover={{ scale: 1.5 }}
                                    />

                                    {/* Tree Item Card */}
                                    <div className={`
                                        absolute top-0 w-full max-w-sm
                                        ${index % 2 === 0
                                            ? 'left-1/2 ml-12 md:ml-18'
                                            : 'right-1/2 mr-12 md:mr-18'
                                        }
                                    `}>
                                        <Card
                                            variant="default"
                                            size="sm"
                                            interactive={true}
                                            hoverEffect="lift"
                                            className={`
                                                relative group  
                                                ${index % 2 !== 0
                                                    ? `${category === 'education' ? 'border-r-blue-500' : ''}
                                                       ${category === 'experience' ? 'border-r-green-500' : ''}
                                                       ${category === 'awards' ? 'border-r-yellow-500' : ''} border-r-4`
                                                    : `${category === 'education' ? 'border-l-blue-500' : ''}
                                                       ${category === 'experience' ? 'border-l-green-500' : ''}
                                                       ${category === 'awards' ? 'border-l-yellow-500' : ''} border-l-4`
                                                }
                                                hover:border-terminal-green
                                            `}
                                        >
                                            <div className="space-y-3">
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                                    <div className="space-y-1 flex-1">
                                                        <h3 className="text-sm md:text-base font-semibold text-primary">
                                                            {item.title}
                                                        </h3>
                                                        {item.subtitle && (
                                                            <p className="text-xs md:text-sm text-secondary font-medium">
                                                                {item.subtitle}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <Badge
                                                        variant={getBadgeVariant(category)}
                                                        size="xs"
                                                        className="self-start shrink-0"
                                                    >
                                                        {item.date}
                                                    </Badge>
                                                </div>
                                                <p className="text-xs md:text-sm text-secondary leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </Card>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default TreeSection
