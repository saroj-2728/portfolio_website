import { motion } from "motion/react"
import { skills, type SkillNodeType } from "@/constants/stack"

const SkillsTooltip = ({
    hoveredSkillData
}: {
    hoveredSkillData: SkillNodeType
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute z-50 bg-gray-900 text-white p-3 rounded-md shadow-xl border border-brd w-md left-1/2 top-0 -translate-x-1/2"
        >
            <div className="text-sm font-semibold mb-1">{hoveredSkillData.name}</div>
            <div className="text-xs text-gray-300 mb-2">{hoveredSkillData.description}</div>
            <div className="text-xs">
                <span className="text-gray-400">Proficiency: </span>
                <span className={`capitalize ${hoveredSkillData.proficiency === 'advanced' ? 'text-green-400' :
                    hoveredSkillData.proficiency === 'intermediate' ? 'text-blue-400' :
                        'text-yellow-400'
                    }`}>
                    {hoveredSkillData.proficiency}
                </span>
            </div>
            {hoveredSkillData.connections.length > 0 && (
                <div className="text-xs mt-1">
                    <span className="text-gray-400">Connected to: </span>
                    <span className="text-green-400">
                        {hoveredSkillData.connections.map(id =>
                            skills.find(s => s.id === id)?.name
                        ).join(', ')}
                    </span>
                </div>
            )}
        </motion.div>
    )
}

export default SkillsTooltip;