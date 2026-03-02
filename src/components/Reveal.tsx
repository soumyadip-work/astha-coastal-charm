import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, useScroll, useTransform, HTMLMotionProps } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0,
    duration = 0.8,
    direction = "up",
    distance = 60,
    ...props
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const yObj = direction === "up" ? { hidden: distance, visible: 0 } : direction === "down" ? { hidden: -distance, visible: 0 } : { hidden: 0, visible: 0 };
    const xObj = direction === "left" ? { hidden: distance, visible: 0 } : direction === "right" ? { hidden: -distance, visible: 0 } : { hidden: 0, visible: 0 };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: yObj.hidden, x: xObj.hidden, filter: "blur(8px)" },
                    visible: { opacity: 1, y: yObj.visible, x: xObj.visible, filter: "blur(0px)" },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
                {...props}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const RevealText = ({
    text,
    className = "",
    delay = 0,
    staggerDelay = 0.05
}: {
    text: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: staggerDelay, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            rotateZ: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                restDelta: 0.001
            },
        },
        hidden: {
            opacity: 0,
            y: 40,
            rotateZ: 5,
            filter: "blur(8px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            },
        },
    };

    const words = text.split(" ");

    return (
        <motion.div
            ref={ref}
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", margin: 0, padding: 0 }}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export const ImageReveal = ({
    src,
    alt,
    className,
    delay = 0
}: {
    src: string;
    alt: string;
    className?: string;
    delay?: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <div ref={ref} className="relative overflow-hidden w-full h-full rounded-2xl group">
            <motion.div
                className="absolute inset-0 bg-primary z-10"
                initial={{ height: "100%", top: 0, filter: "blur(10px)" }}
                animate={isInView ? { height: "0%", top: "100%", filter: "blur(0px)" } : {}}
                transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 ${className || ""}`}
                initial={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
                animate={isInView ? { scale: 1, opacity: 1, filter: "blur(0px)" } : {}}
                transition={{ duration: 1.4, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
        </div>
    );
};

export const ParallaxSection = ({ children, speed = 0.5, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", `${speed * 100}%`]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y, height: "120%", width: "100%", position: "absolute", inset: 0 }}>
                {children}
            </motion.div>
        </div>
    );
};
