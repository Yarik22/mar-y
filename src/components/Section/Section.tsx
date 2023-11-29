import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./section.module.scss";

type SectionProps = {
  children: React.ReactNode;
  translateX: number;
  translateY: number;
  transition: number;
};

export default function Section({
  children,
  translateX,
  translateY,
  transition,
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={styles.section} ref={ref}>
      <span
        style={{
          transform: isInView
            ? "none"
            : `translate(${translateX}px,${translateY}px)`,
          opacity: isInView ? 1 : 0,
          zIndex: 1,
          transition: `all ${transition}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`,
        }}
      >
        {children}
      </span>
    </section>
  );
}
