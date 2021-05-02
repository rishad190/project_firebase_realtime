import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const AnimationText = () => {
  const [key, setKey] = useState(1);
  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 9000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <div key={key}>
      <animated.div style={scrolling}>
        <p style={{ color: "red" }}>Please help Us</p>
      </animated.div>
    </div>
  );
};

export default AnimationText;
