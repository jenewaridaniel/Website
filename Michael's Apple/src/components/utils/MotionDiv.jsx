import { motion } from "framer-motion";

const MotionDiv = ({ children, cls }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className={cls}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
