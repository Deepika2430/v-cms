import { Button } from "@/components/ui/button";
import { CircleImage } from "./CircleImage";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-[100%] space-y-6 pl-20">
            <h1 className="text-[45px] leading-[60px] font-[400] text-[#761587] font-[Poppins,sans-serif] ">
              The Smarter Way to <br />
              Learn Anything
              <br></br>
            </h1>
            <span className="text-[55px] font-[500] text-[#F37335] underline font-[Questrial,sans-serif]">
              Experiential Learning
            </span>
            <p className="text-sm text-[#222] leading-relaxed mt-5 max-w-[500px]">
              Experiential Learning emphasizes hands-on, practical experiences
              as a primary means of acquiring knowledge and skills. It
              encourages active engagement with the subject matter, often
              through real-world activities, simulations, experiments, and
              problem-solving tasks. It fosters a deeper understanding of
              concepts and promotes the development of critical thinking,
              problem-solving, and decision-making abilities. It typically
              follows a cycle of “do, reflect, and apply,” where learners
              participate in activities, reflect on their experiences, and then
              apply their insights to further learning.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              <CircleImage
                src="https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg"
                alt="Child with robot"
                className="ml-auto"
              />
              <CircleImage
                src="https://images.pexels.com/photos/8535213/pexels-photo-8535213.jpeg"
                alt="Child using computer"
                className="mt-12"
              />
              <CircleImage
                src="https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg"
                alt="Child with molecular model"
                className="ml-auto"
              />
              <CircleImage
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                alt="Child with circuit board"
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
