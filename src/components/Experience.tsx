import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../data/portfolio";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            My <span className="text-teal-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My professional journey and the roles that shaped my development
            career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-blue-500 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                {/* Content */}
                <div
                  className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-teal-500"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <Briefcase className="text-teal-500" size={20} />
                      <h3 className="text-xl font-bold text-slate-900">
                        {exp.position}
                      </h3>
                      {exp.current && (
                        <span className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-slate-600">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed text-left">
                      {exp.description}
                    </p>
                    {/* exp.keyAchievements */}
                    <h4 className="font-bold text-foreground text-left mb-2">
                      Key Achievements:
                    </h4>
                    {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                      <ul className="achievements-list">
                        {exp.keyAchievements.map((achievement, index) => (
                          <li className="text-left text-sm leading-[1.45rem]" key={index}>- {achievement}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>

                {/* Empty space for alignment */}
                <div
                  className={`hidden md:block ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="h-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
