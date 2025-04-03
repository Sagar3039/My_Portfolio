
import { Briefcase, GraduationCap, Coffee } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 pattern-bg">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-600 flex items-center justify-center">
                <img src="/pf.jpg" alt="" />
              </div>
            </div>
          </div>
          
          {/* About content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Sagar Karmakar</h3>
            <h4 className="text-xl text-primary mb-6">Full Stack Developer & Android Enthusiast</h4>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate developer with extensive experience in both front-end and back-end technologies. 
              I love creating elegant solutions to complex problems and building applications that provide 
              exceptional user experiences.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Education</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    BCA (Bachelor of Computer Applications) from Midnapore College(autonomus) 2023-2027
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Experience</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    2+ years of experience in software development, specializing in full-stack and Android development.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Coffee size={24} />
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Interests</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and outdoor activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
