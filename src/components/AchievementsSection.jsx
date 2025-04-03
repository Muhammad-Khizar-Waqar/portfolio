import React, { useEffect, useRef, useCallback } from "react";
import { PenTool, Computer, UserCheck, Award } from "lucide-react";
import { animate } from "framer-motion";
import BackgroundImage from "../assets/bgDot.png";

const AchievementsSection = () => {
  const achievementsData = React.useMemo(
    () => [
      {
        icon: <PenTool className="w-12 h-12 text-tertiary" />,
        value: 4,
        label: "Year Experience",
      },
      {
        icon: <Computer className="w-12 h-12 text-tertiary" />,
        value: 50,
        label: "Projects Completed",
      },
      {
        icon: <UserCheck className="w-12 h-12 text-tertiary" />,
        value: 100,
        label: "Satisfied Clients",
      },
      {
        icon: <Award className="w-12 h-12 text-tertiary" />,
        value: 2,
        label: "Awards Winner",
      },
    ],
    []
  );

  const createCounterRef = useCallback((initialValue) => {
    const ref = useRef(null);

    useEffect(() => {
      const node = ref.current;
      if (!node) return;

      const controls = animate(initialValue, initialValue, {
        duration: 2,
        onUpdate(value) {
          node.textContent = Math.round(value);
        },
      });

      return () => controls.stop();
    }, [initialValue]);

    return ref;
  }, []);

  return (
    <section className="relative py-3 px-20 z-0">
      <div className="container mx-auto relative z-10">
        <div
          className="border   border-secondary  rounded-lg overflow-hidden shadow-lg bg-cover bg-center"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 p-8">
            {achievementsData.map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-4"
              >
                {achievement.icon}

                <div className="flex items-baseline">
                  <span
                    ref={createCounterRef(achievement.value)}
                    className="text-5xl font-bold text-white"
                  >
                    {achievement.value}
                  </span>
                  <span className="text-3xl text-white ml-1">+</span>
                </div>

                <p className="text-white">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
