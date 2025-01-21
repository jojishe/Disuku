import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface FadeUpProps {
  children: ReactNode; // 用于接收子组件或 JSX
}

const FadeUp: React.FC<FadeUpProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 80 }} // 初始透明度为 0，y 轴偏移 100px
      whileInView={{ opacity: 1, y: 0 }} // 进入视口时透明度为 1，y 轴位置恢复为 0
      transition={{ duration: 0.8 }} // 动画时长 0.8 秒
      // viewport={{ once: true }} // 只触发一次动画
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
