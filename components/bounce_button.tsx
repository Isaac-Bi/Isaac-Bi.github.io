import { motion } from "framer-motion"

export const Bounce_button = () => (
  <motion.a
    href="#project_heading"
    className="flex justify-center items-center w-full h-full px-4 py-2 mt-4 text-3xl font-semibold text-white uppercase bg-sunset rounded-md lg:w-auto transition duration-200 transform hover:scale-125"
  >
      View My Projects
  </motion.a>
)
