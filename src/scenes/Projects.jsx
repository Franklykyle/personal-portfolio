import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 transition <duration-500></duration-500>
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7"></p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
                max-w-[265px] max-h-[265px] text-5xl font-playfair font-semibold"
          >
            React
          </div>
          <a
            href="https://www.youtube.com/watch?v=BNdy5-P3G9M&ab_channel=KyleFranklin"
            target="_blank"
            rel="noreferrer"
          >
            <Project title="Project 1" />
            <p className=" flex justify-center">Tiktok Clone - Youtube</p>
          </a>

          <a
            href="https://evogymwebsite.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <Project title="Project 2" />
            <p className="flex justify-center">EVOGYM - Website</p>
          </a>

          {/* ROW 2 */}
          <a
            href="https://www.youtube.com/watch?v=10VDbfJSFyA&ab_channel=KyleFranklin"
            target="_blank"
            rel="noreferrer"
          >
            <Project title="Project 3" />{" "}
            <p className="flex justify-center">ChatGPT - Youtube</p>
          </a>
          {/* <Project title="Project 4" /> */}
          <a
            href="https://github.com/Franklykyle/wordle"
            target="_blank"
            rel="noreferrer"
          >
            <Project title="Project 5" />
            <p className="flex justify-center">Wordle - Github</p>
          </a>

          {/* ROW 3 */}
          <a
            href="https://github.com/Franklykyle/war-card-game"
            target="_blank"
            rel="noreferrer"
          >
            <Project title="Project 6" />
            <p className="flex justify-center">War Card Game - Github</p>
          </a>
          <a
            href="https://github.com/Franklykyle/Sweater-Shop"
            target="_blank"
            rel="noreferrer"
          >
            <Project title="Project 7" />
            <p className="flex justify-center">Sweater Shop - Github</p>
          </a>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
                max-w-[265px] max-h-[265px] text-5xl font-playfair font-semibold"
          >
            Swift
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
