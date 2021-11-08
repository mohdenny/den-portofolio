export const pathVariants = {
    hidden: { rotate: 0, opacity: 0, pathLength: 0 },
    animationOne: {
        opacity: 1,
        pathLength: 1,
        transition: { duration: 2, ease: "easeInOut" },
    },
    animationTwo: {
        rotate: 360,
        opacity: 1,
        pathLength: 1,
        transition: { duration: 2, ease:"linear", repeat:Infinity },
    },
};

export const headlineVariants = {
    initial:{opacity: 0},
    animate:{
        opacity: 1,
        transition: {
            duration: 1, ease: "easeInOut"
        }
    }
}

export const photoProfileVariants = {
    initial:{opacity: 0},
    animate:{
        opacity: 1,
        transition: {
            delay: 1, duration: 1, ease: "easeInOut"
        }
    }
}

export const squareVariants = {
    // hidden: { opacity: 0, scale: 0 },
    // visible: { opacity: 1, scale: 1, transition: { duration: 2 } }
    hidden: { opacity: 0, y: 180 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }
};

export const buttonVariants = {
hover: {
    scale: 1.1,
        textShadow: "0px 0px 8px rgb(0, 0, 0)",
        boxShadow: "0px 0px 8px rgb(0, 0, 0)",
    transition: {
        duration: 0.4, // duration of keyframe
        repeat: Infinity, // number of keyframes and it can have the value Infinity
    },
},
};