import { motion } from "framer-motion"

const HeroBackground = () => {
    return (
        <div
            id="bg-image" 
            className="bg-space-img bg-no-repeat bg-bottom bg-contain h-full w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                x: [1, -10],
                y: [0, 10],
            }}
            transition={{
                x: { yoyo: Infinity, duration: 10 },
                y: { yoyo: Infinity, duration: 5, ease: "easeOut" },
                scale: { yoyo: Infinity, duration: 10, ease: "easeIn" },
            }}
        />
    )
}

export default HeroBackground