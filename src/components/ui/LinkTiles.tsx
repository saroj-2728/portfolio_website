import Link from "next/link"
import Image from "next/image"

interface LinkTilesProps {
    href: string
    mainText: string
    secondaryText: string
    icon?: React.ReactNode
    imageSrc?: string
}

const LinkTiles = ({ href, icon, mainText, secondaryText, imageSrc }: LinkTilesProps) => {
    return (
        <Link
            href={href}
            className="p-3 rounded-lg border border-transparent hover:border-brd hover:bg-accent transition duration-[400ms] ease-in-out"
        >
            <div className="flex flex-row flex-nowrap items-center justify-start gap-4">
                {icon}
                {(imageSrc && !icon) && (
                    <div className="size-10 relative rounded-lg overflow-hidden">
                        <Image
                            src={imageSrc}
                            alt={mainText}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                )}
                <div className="leading-tight text-sm ">
                    <h3 className="font-bold text-primary">{mainText}</h3>
                    <p>{secondaryText}</p>
                </div>
            </div>
        </Link>
    )
}

export default LinkTiles
