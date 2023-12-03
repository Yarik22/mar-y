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
      <div className={styles.container}>
        <Section translateX={0} translateY={"-200px"} transition={2}>
          <h1>Mars Exploration Program</h1>
        </Section>
        <hr />
        <section id="mission-statement">
          <Section translateX={"-20vw"} translateY={0} transition={2}>
            <h2>MISSION STATEMENT</h2>
          </Section>
          <Section translateX={0} translateY={"50px"} transition={2}>
            <p id="main_page">
              The goal of the Mars Exploration Program is to explore Mars and to
              provide a continuous flow of scientific information and discovery
              through a carefully selected series of robotic orbiters, landers,
              and mobile laboratories interconnected by a high-bandwidth
              Mars/Earth communications network.
            </p>
          </Section>
        </section>
        <hr />
        <section id="about-program">
          <Section translateX={"-20vw"} translateY={0} transition={2}>
            <h2>ABOUT THE PROGRAM</h2>
            <a
              href="https://mars.nasa.gov/files/mep/Mars_Exploration_Program_Future_Plan.pdf"
              target="_blank"
              id="draft-plan"
            >
              DRAFT Mars Exploration Program Future Plan
            </a>
          </Section>
          <Section translateX={0} translateY={"50px"} transition={2}>
            <p id="main_page">
              NASA’s Mars Exploration Program (MEP) is seeking feedback from the
              science community for its draft plan for the future of the
              program. MEP is excited to share this draft vision for the
              program’s future, entitled “Plan for a Sustainable Future for
              Science at Mars.” The plan is intended to look toward the next 20
              years and center on community-responsive science themes. The draft
              plan suggests a new strategic paradigm designed to: send low-cost,
              high-value science missions to Mars at a higher frequency; develop
              new mission-enabling technologies; and address critical
              infrastructure at Mars. We are seeking community feedback at:
              <code> HQ-MEP@mail.nasa.gov</code>
            </p>
          </Section>
        </section>
        <hr />
        <section id="program-goals">
          <Section translateX={"-20vw"} translateY={0} transition={2}>
            <h2>PROGRAM GOALS</h2>
          </Section>
          <Section translateX={0} translateY={"100px"} transition={2}>
            <p id="main_page">
              NASA’s Mars Exploration Program is a science-driven,
              technology-enabled study of Mars as a planetary system in order to
              understand:
            </p>
          </Section>
          <Section translateX={0} translateY={"100px"} transition={1}>
            <ul id="main_page">
              <li>Maintaining a continuous scientific presence at Mars</li>
              <li>
                Providing continuing improvements in technical capabilities of
                robotic Mars missions
              </li>
              <li>
                Capitalizing on measurement opportunities that contribute to the
                advancement of knowledge required for future human exploration
                of Mars, in collaboration with the Exploration Systems
                Development Mission Directorate (ESDMD) and the Space Technology
                Mission Directorate (STMD)
              </li>
              <li>
                Ensuring that scientific measurements that can enable human
                exploration of Mars are considered for flight, and that
                opportunities to fly instruments-of-opportunity and technology
                demonstrations from ESDMD and STMD are exercised on a mutually
                agreed upon basis
              </li>
              <li>
                Supporting communications activities required for the successful
                conduct of the program’s core science mission and NASA’s goals
                for helping to develop scientific literacy in the nation
              </li>
            </ul>
          </Section>
          <Section translateX={0} translateY={"-50px"} transition={2}>
            <p id="main_page">
              The Mars Program derives its science goals from interactions with
              the planetary and Mars science community (e.g., through the Mars
              Exploration Program Analysis Group, or MEPAG). MEP has an evolving
              science strategy, with related MEP Science Goals that are
              consistent with the priorities in the Planetary Science Decadal
              Survey: Origins, Worlds and Life: A Decadal Strategy for Planetary
              Science and Astrobiology 2023-2032, conducted by the National
              Academy of Science’s National Research Council. These goals are
              formed into specific requirements and, as appropriate, applied to
              the individual missions in Program-level project requirements.
            </p>
          </Section>
          <Section translateX={0} translateY={"-50px"} transition={2}>
            <p id="main_page" style={{ marginTop: 5 }}>
              To support an integrated program structure, the Mars Program
              carries out a number of activities that provide crosscutting
              functions and long-term investments for the future.
            </p>
          </Section>
          <Section translateX={0} translateY={"100px"} transition={2}>
            <ul id="main_page">
              <li>
                The Mars Program supports the implementation of large and small
                directed missions as well as those that are competitively
                selected and led by a PI. These missions have included the Mars
                Science Laboratory/Curiosity Rover mission, which seeks to
                answer the question of whether Mars ever had the right
                environmental conditions to support life; the MAVEN mission,
                which is quantifying the rate of escape of atmospheric gasses
                from the planet and implications for the ancient Martian
                climate; and the Mars 2020/Perseverance Rover/Ingenuity
                Helicopter mission, which is acquiring samples to be returned to
                Earth by the Mars Sample Return mission later this decade.
              </li>
              <li>
                The Mars Data and Analysis Program (MDAP) is a scientific
                research and analysis effort that sponsors detailed studies of
                data returned from Mars missions in order to shape the next
                steps of the Program’s future-mission studies. Research
                conducted through MDAP is intended to improve upon open science
                questions at Mars relevant to current hypotheses. Brief synopsis
                of research funded through MDAP can be found on the NSPIRES
                website and typing in MDAP as the keyword.
              </li>
            </ul>
          </Section>
        </section>
      </div>
    </>
  );
}
