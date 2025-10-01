'use client'
import { motion } from "framer-motion";
import { LinkTiles } from "@/components/cards";
import Button from "@/components/ui/Button";
import { useScrollAnimation, fadeUpVariants, scaleVariants, slideLeftVariants } from "@/hooks/useScrollAnimation";

interface Tool {
    href: string;
    mainText: string;
    secondaryText: string;
    imageSrc: string;
}

interface StackSectionProps {
    title: string;
    description?: string;
    tools: Tool[];
    showViewAll?: boolean;
}

export default function StackSection({
    title,
    description,
    tools,
    showViewAll = false
}: StackSectionProps) {
    const stackAnimation = useScrollAnimation({ threshold: 0.1, bidirectional: true });

    return (
        <motion.div
            ref={stackAnimation.ref}
            className="thoughts space-y-6"
            initial="hidden"
            animate={stackAnimation.controls}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="border border-brd rounded-md"
                variants={scaleVariants}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="p-3 flex flex-col gap-6">
                    <motion.div
                        className="title p-4 pb-0"
                        variants={slideLeftVariants}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="font-bold text-primary">{title}</h2>
                        {description && <p>{description}</p>}
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2"
                        variants={fadeUpVariants}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {
                            tools.map((item, index) => (
                                <LinkTiles
                                    key={index}
                                    href={item.href}
                                    mainText={item.mainText}
                                    secondaryText={item.secondaryText}
                                    imageSrc={item.imageSrc}
                                />
                            ))
                        }
                    </motion.div>
                    {
                        showViewAll &&
                        <motion.div
                            className="p-3 pt-0 flex items-center justify-center w-full rounded-md"
                            variants={fadeUpVariants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Button
                                variant="secondary"
                                size="md"
                                href="/stack"
                                fullWidth={true}
                            >
                                View all
                            </Button>
                        </motion.div>
                    }
                </div>
            </motion.div>
        </motion.div>
    );
}