import React from "react";
import styles from "./index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.joFooter}>
      <div className={styles.bg} />
      <div className={styles.joFooterContent}>
        <p>© 2025 JO极社 | 版权所有</p>
        <p>
          本站内容受相关法律保护，未经授权禁止转载或使用。
          <br />
          如有问题，请联系{" "}
          <a href="mailto:jojishe@163.com" className={styles.email}>
            jojishe@163.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
