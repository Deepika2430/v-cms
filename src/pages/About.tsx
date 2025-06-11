import { CircleImage } from '../components/CircleImage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Lightbulb, GraduationCap, Target } from 'lucide-react';

interface AboutProps {
  fullPage?: boolean;
}

const About = ({ fullPage = false }: AboutProps) => {
  return (
    <>
      <section className="relative bg-[#f8fbfd] py-20 text-center overflow-hidden">
        {/* Background Text */}
        <h1 className="text-[64px] md:text-[96px] text-pink-100 font-light absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
          Sree Vismayee Edutek
        </h1>

        {/* Foreground Text */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 relative z-10">
          About Us
        </h2>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-16 relative overflow-hidden">
        {/* Left: Text */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-semibold text-orange-500" style={{ fontFamily: 'cursive' }}>
            Welcome to
          </h2>
          <h1 className="text-5xl font-bold text-green-700 my-2" style={{ fontFamily: 'Pacifico, cursive' }}>
            Sree Vismayee
          </h1>
          <h1 className="text-4xl font-extrabold text-purple-700 tracking-wide mb-6">
            SMART ACADEMY
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
            At Vismayee, we are a dedicated team of educators, scientists, and industry professionals united by a common vision. Fuelled by a passion for Science, Technology, Engineering, and Mathematics (STEM), we strive to create an innovative learning environment. Our mission is to inspire and empower the next generation of critical thinkers, problem solvers, and leaders by providing cutting-edge STEM education. Rooted in excellence, integrity, and a commitment to fostering curiosity, we aim to shape young minds and prepare them for the challenges and opportunities of the future
          </p>
        </div>

        {/* Right: Images */}
        <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
          {/* Circular Image Mask */}
          <div className="w-[550px] h-[550px] rounded-full overflow-hidden relative">
            <img
              src="https://vismayee.com/wp-content/uploads/elementor/thumbs/children-s-activities-scaled-qf57erpm8fwetp57xmiv4m6kxlzduqfg7anowbx74i.jpg"
              alt="children-activity"
              className="object-cover w-full h-full"
            />
          </div>

          {/* STEM Crest Logo */}
          <img
            src="https://vismayee.com/wp-content/uploads/2023/11/Social-Icon-V@4x.png"
            alt="logo"
            className="absolute left-[-10px] top-[130px]"
            style={{ width: '165x', height: '165px' }}
          />



          {/* SEIZE Image/Label */}
          <img
            src="https://vismayee.com/wp-content/uploads/2023/11/SEIZE@2x.png"
            alt="SEIZE"
            className="absolute top-[10px] right-[90px]"
            style={{ width: '219.19px', height: '102.42px' }}
          />


          {/* Rubik Icon */}
          <img
            src="https://vismayee.com/wp-content/uploads/2023/11/LIB-Logo@2x.png"
            alt="Rubik Cube"
            className="w-20 absolute bottom-0 right-4"
          />
        </div>
      </section>
    </>
  );
};

export default About;
