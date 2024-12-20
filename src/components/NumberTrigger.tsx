"use client";

import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type NumberProps = number | `${number}`;

export function TriggerOnScroll({
  className,
  children,
  delayInMs = 100,
}: {
  className?: string;
  children: NumberProps;
  delayInMs?: number;
}) {
  const [number, setNumber] = useState<NumberProps>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -5px 0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setNumber(children), delayInMs);
    } else {
      setNumber(0);
    }
  }, [isInView, children, delayInMs]);

  return (
    <NumberFlow
      ref={ref}
      value={Number(number)}
      isolate={true}
      spinTiming={{ duration: 1200, easing: "ease-in-out" }}
      className={cn(
        "z-20 d text-4xl font-semibold tracking-tighter",
        className,
      )}
    />
  );
}
