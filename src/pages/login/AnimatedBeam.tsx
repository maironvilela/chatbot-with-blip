"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3  ]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex   w-full items-center justify-center overflow-hidden rounded-lg   bg-transparent p-10"
            ref={containerRef}
        >
            <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div1Ref} className=" p-0">
                        <img src="https://avatars.githubusercontent.com/u/99627922" className="rounded-full" />
                    </Circle>
                    <Circle ref={div5Ref} className=" p-0">
                        <img src="https://avatars.githubusercontent.com/u/94366260" className="rounded-full" />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <Circle ref={div2Ref} className=" p-0">
                        <img src="https://avatars.githubusercontent.com/u/91197082" className="rounded-full" />
                    </Circle>
                    <Circle ref={div4Ref} className="p-0 bg-transparent border-none">
                        <img src="https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-3d-robot-png-image_12841934.png" />
                    </Circle>
                    <Circle ref={div6Ref} className=" p-0">
                        <img src="https://avatars.githubusercontent.com/u/69543817" className="rounded-full" />
                    </Circle>
                </div>
                <div className="flex flex-row items-center justify-between ">
                    <Circle ref={div3Ref} className=" p-0"  >
                        <img src="https://avatars.githubusercontent.com/u/61210651" className="rounded-full" />
                    </Circle>
                    <Circle ref={div7Ref} className=" p-0">
                        <img src="https://avatars.githubusercontent.com/u/19499396" className="rounded-full " />
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
        </div >
    );
}


