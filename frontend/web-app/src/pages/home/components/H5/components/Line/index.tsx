import React from "react";

const Line = () => {
  const prefixStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "nowrap",
    gap: "1px",
    alignItems: "center",
    margin: "2.5rem 0",
  };
  const imgStyle = { width: "5.46vw", height: "1.95vh" };
  return (
    <div style={prefixStyle}>
      <img
        style={imgStyle}
        src="https://openres.xfyun.cn/xfyundoc/2025-01-22/3e38e742-6092-4432-90d6-f7bb5e52530d/1737527898411/bg_line_normal_left.webp"
      />
      <div style={{ flex: "1", borderTop: "1px solid #e2007f" }} />
      <img
        style={imgStyle}
        src="https://openres.xfyun.cn/xfyundoc/2025-01-22/e6187146-c7cd-4963-a5f7-408cf4033621/1737527905296/bg_line_normal_right.png"
      />
    </div>
  );
};

export default React.memo(Line);
