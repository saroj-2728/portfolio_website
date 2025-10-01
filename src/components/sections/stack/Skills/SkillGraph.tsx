'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInVariants, fadeUpVariants } from '@/hooks/useScrollAnimation';
import { skills } from '@/constants/stack';
import SkillNode from './SkillNode';
import SkillsTooltip from './Tooltip';

const proficiencyColors = {
    beginner: 'ring-yellow-400/50',
    intermediate: 'ring-blue-400/50',
    advanced: 'ring-green-400/50'
};

const SkillGraph = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const sectionAnimation = useScrollAnimation({
        threshold: 0.1,
        bidirectional: true
    });

    const getConnectedSkills = (skillId: string): string[] => {
        const skill = skills.find(s => s.id === skillId);
        return skill ? skill.connections : [];
    };

    const isConnected = (skillId: string): boolean => {
        if (!hoveredSkill) return true;
        if (skillId === hoveredSkill) return true;

        const hoveredConnections = getConnectedSkills(hoveredSkill);
        const skillConnections = getConnectedSkills(skillId);

        return hoveredConnections.includes(skillId) || skillConnections.includes(hoveredSkill);
    };

    const renderConnections = () => {
        const connections: React.ReactElement[] = [];

        skills.forEach(skill => {
            skill.connections.forEach(connectionId => {
                const connectedSkill = skills.find(s => s.id === connectionId);
                if (connectedSkill) {
                    const isHighlighted = hoveredSkill ?
                        (skill.id === hoveredSkill || connectionId === hoveredSkill) : true;

                    connections.push(
                        <motion.line
                            key={`${skill.id}-${connectionId}`}
                            x1={`${skill.position.x}%`}
                            y1={`${skill.position.y}%`}
                            x2={`${connectedSkill.position.x}%`}
                            y2={`${connectedSkill.position.y}%`}
                            stroke={isHighlighted ? '#10b981' : '#374151'}
                            strokeWidth={isHighlighted ? 2 : 1}
                            opacity={isHighlighted ? 0.8 : 0.3}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    );
                }
            });
        });

        return connections;
    };

    const hoveredSkillData = hoveredSkill ? skills.find(s => s.id === hoveredSkill) : null;

    return (
        <motion.section
            ref={sectionAnimation.ref}
            initial="hidden"
            animate={sectionAnimation.controls}
            exit="hidden"
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="p-3 relative rounded-md overflow-hidden border border-brd"
        >
            <motion.div
                className="title p-4 pb-0"
                variants={fadeInVariants}
            >
                <h2 className="font-bold text-primary">Tech Graph</h2>
            </motion.div>

            <div
                className='p-3 relative h-96 md:h-[500px] overflow-hidden'
            >
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full">
                    {renderConnections()}
                </svg>

                {/* Skill Nodes */}
                {skills.map((skill) => (
                    <SkillNode
                        key={skill.id}
                        skill={skill}
                        hoveredSkill={hoveredSkill}
                        setHoveredSkill={setHoveredSkill}
                        isConnected={isConnected}
                        proficiencyColors={proficiencyColors}
                    />
                ))}
            </div>

            {/* Tooltip */}
            {hoveredSkillData && (
                <SkillsTooltip
                    hoveredSkillData={hoveredSkillData}
                />
            )}
        </motion.section>
    );
};

export default SkillGraph;