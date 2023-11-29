import Section from "../../components/Section/Section";
import styles from "./homePage.module.scss";
import { motion, useScroll, useSpring } from "framer-motion";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className={styles["progress-bar"]} style={{ scaleX }} />
      <Section translateX={300} translateY={100} transition={4}>
        Hello
      </Section>
      <Section translateX={200} translateY={300} transition={2}>
        Hello
      </Section>
      <Section translateX={100} translateY={200} transition={3}>
        Hello
      </Section>
    </>
  );
}
