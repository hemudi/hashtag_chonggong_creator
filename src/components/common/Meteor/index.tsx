import React from "react";

const Meteor = () => {
  const meteors = Array.from({ length: 100 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((_, index) => {
        const left = Math.random() * 120 - 10; // -10vw ~ 110vw 범위에서 생성
        const top = Math.random() * -50 - 10; // -10vh ~ -50vh에서 생성
        const delay = Math.random() * 3; // 랜덤한 애니메이션 딜레이
        const duration = 2.5 + Math.random(); // 랜덤한 애니메이션 속도
        const endX = Math.random() * -40 - 10; // -10vw ~ -50vw로 이동

        return (
          <div
            key={index}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-b from-white via-white to-transparent animate-meteor-fall"
            style={
              {
                left: `${left}vw`,
                top: `${top}vh`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                "--meteor-start": `${top}vh`,
                "--meteor-end": `${endX}vw`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
};

export default Meteor;
