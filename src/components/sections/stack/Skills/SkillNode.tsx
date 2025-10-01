import { motion } from "motion/react";
import type { SkillNodeType } from "@/constants/stack";

interface SkillNodeProps {
    skill: SkillNodeType;
    hoveredSkill: string | null;
    setHoveredSkill: (skillId: string | null) => void;
    isConnected: (skillId: string) => boolean;
    proficiencyColors: Record<string, string>;
}

const SkillNode = ({
    skill,
    hoveredSkill,
    setHoveredSkill,
    isConnected,
    proficiencyColors
}: SkillNodeProps) => {

    const connected = isConnected(skill.id);
    return (
        <motion.div
            key={skill.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
            style={{
                left: `${skill.position.x}%`,
                top: `${skill.position.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: connected ? 1 : 0.4,
                scale: hoveredSkill === skill.id ? 1.2 : 1
            }}
            transition={{ duration: 0.3, delay: skill.position.x / 100 * 0.5 }}
            onMouseEnter={() => setHoveredSkill(skill.id)}
            onMouseLeave={() => setHoveredSkill(null)}
        >
            <div className={`
                relative w-16 h-16 md:w-16 md:h-16 rounded-full 
                bg-gradient-to-r ${skill.color} 
                flex items-center justify-center text-2xl
                ring-4 ${proficiencyColors[skill.proficiency]}
                shadow-lg hover:shadow-xl transition-all duration-300
                ${connected ? 'brightness-100' : 'brightness-50'}
                `}>
                <span className="text-white font-bold">
                    {skill.icon}
                </span>

                {/* Pulse animation for hovered skill */}
                {hoveredSkill === skill.id && (
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                )}
            </div>

            {/* Skill name */}
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                <span className={`text-xs md:text-sm font-medium transition-colors duration-300 ${connected ? 'text-white' : 'text-gray-500'
                    }`}>
                    {skill.name}
                </span>
            </div>
        </motion.div>
    )
}

export default SkillNode;