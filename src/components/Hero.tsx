import { Button } from "@/components/ui/button";
import { CircleImage } from "./CircleImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 md:pt-24 md:pb-1rem md:py-20 bg-background">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
          <div className="max-w-[100%] space-y-4 pl-20 pt-20">
            <h1 className="text-[45px] leading-[60px] font-[400] text-[#761587] font-[Poppins,sans-serif] ">
              The Smarter Way to <br />
              Learn Anything
              <br></br>
            </h1>
            <span className="text-[55px] font-[500] text-[#F37335] underline font-[Questrial,sans-serif]">
              Experiential Learning
            </span>
            <div className="relative max-w-[500px]">
              <span className="absolute text-[100px] md:text-[100px] text-red-100 opacity-1 top-28 left-24 pointer-events-none select-none z-0 leading-none font-questrial">
                iSTEAM
              </span>
              <p className="relative text-sm text-[#222] leading-relaxed mt-5 z-10">
                Experiential Learning emphasizes hands-on, practical experiences
                as a primary means of acquiring knowledge and skills. It
                encourages active engagement with the subject matter, often
                through real-world activities, simulations, experiments, and
                problem-solving tasks. It fosters a deeper understanding of
                concepts and promotes the development of critical thinking,
                problem-solving, and decision-making abilities. It typically
                follows a cycle of “do, reflect, and apply,” where learners
                participate in activities, reflect on their experiences, and
                then apply their insights to further learning.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-12 pt-0">
              <CircleImage
                src="https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg"
                alt="Child with robot"
                className="ml-auto mt-0 w-40 h-40 md:w-60 md:h-60"
              />
              <CircleImage
                src="https://images.pexels.com/photos/8535213/pexels-photo-8535213.jpeg"
                alt="Child using computer"
                className="mt-[40%] w-36 h-36 md:w-64 md:h-64"
              />
              <CircleImage
                src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg"
                alt="Child with molecular model"
                className="ml-auto mt-[-20%] w-44 h-44 md:w-60 md:h-60"
              />
              <CircleImage
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                alt="Child with circuit board"
                className="mt-31 w-48 h-48 md:w-64 md:h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
