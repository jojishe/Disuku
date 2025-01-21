import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface FadeRightProps {
  children: ReactNode; // 用于接收子组件或 JSX
}

const FadeRight: React.FC<FadeRightProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.2, x: 100 }} // 初始透明度为 0，x 轴偏移 100px（从右侧进入）
      whileInView={{ opacity: 1, x: 0 }} // 进入视口时透明度为 1，x 轴位置恢复为 0
      transition={{ duration: 0.8 }} // 动画时长 0.8 秒
    >
      {children}
    </motion.div>
  );
};

export default FadeRight;
