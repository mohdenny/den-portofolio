export const pathVariants = {
    hidden: { rotate: 0, opacity: 0, pathLength: 0 },
    visible: {
        rotate: [360, 360],
        opacity: 1,
        pathLength: 1,
        transition: { duration: 2, type: "spring" },
    }
};

export const headlineVariants = {
    initial:{opacity: 0},
    animate:{
        opacity: 1,
        transition: {
            duration: 2, ease: "easeInOut"
        }
    }
}

export const photoProfileVariants = {
    initial:{opacity: 0},
    animate:{
        opacity: 1,
        transition: {
            delay: 2, duration: 2, ease: "easeInOut"
        }
    }
}

export const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
};

export const buttonVariants = {
hover: {
    scale: 1.1,
        textShadow: "0px 0px 8px rgb(0, 0, 0)",
        boxShadow: "0px 0px 8px rgb(0, 0, 0)",
    transition: {
        duration: 0.4, // duration of keyframe
        yoyo: Infinity, // number of keyframes and it can have the value Infinity
    },
},
};