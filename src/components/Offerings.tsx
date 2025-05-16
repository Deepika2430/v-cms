import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CircleImage } from "./CircleImage";
import { Notebook as Robot, Code, Microscope, Cpu, GraduationCap, Gauge } from "lucide-react";

interface OfferingsProps {
  fullPage?: boolean;
}

const Offerings = ({ fullPage = false }: OfferingsProps) => {
  const offerings = [
    {
      title: "Robotics",
      description: "Learn to build and program robots using LEGO, Arduino, and other platforms.",
      icon: <Robot className="h-6 w-6" />,
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      ages: "8-16",
      levels: ["Beginner", "Intermediate", "Advanced"]
    },
    {
      title: "Coding",
      description: "Develop programming skills from block-based coding to advanced languages.",
      icon: <Code className="h-6 w-6" />,
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      ages: "6-18",
      levels: ["Scratch", "Python", "Web Development"]
    },
    {
      title: "Science Experiments",
      description: "Hands-on experiments that bring physics, chemistry, and biology concepts to life.",
      icon: <Microscope className="h-6 w-6" />,
      image: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg",
      ages: "5-15",
      levels: ["Basic", "Intermediate", "Advanced"]
    },
    {
      title: "Embedded Systems",
      description: "Learn about microcontrollers, electronics, and IoT project development.",
      icon: <Cpu className="h-6 w-6" />,
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      ages: "12-18",
      levels: ["Fundamentals", "Project-Based", "Advanced"]
    },
    {
      title: "STEM Education",
      description: "Integrated approach to learning science, technology, engineering and mathematics.",
      icon: <GraduationCap className="h-6 w-6" />,
      image: "https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg",
      ages: "6-16",
      levels: ["Foundational", "Intermediate", "Advanced"]
    },
    {
      title: "Competitive Robotics",
      description: "Prepare for and participate in regional and national robotics competitions.",
      icon: <Gauge className="h-6 w-6" />,
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      ages: "10-18",
      levels: ["Competition Prep", "Team Challenges"]
    }
  ];

  return (
    <section className={`py-12 ${fullPage ? 'min-h-[80vh]' : ''} bg-muted/30`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">Our Program Offerings</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our range of hands-on learning programs designed to inspire curiosity and develop essential skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="bg-purple-100 dark:bg-purple-950 p-2 rounded-lg text-purple-700 dark:text-purple-300">
                    {offering.icon}
                  </div>
                  <Badge variant="outline" className="bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-normal">
                    Ages {offering.ages}
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-xl">{offering.title}</CardTitle>
                <CardDescription className="mt-1">{offering.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="relative rounded-lg overflow-hidden h-48 mb-4">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {offering.levels.map((level, i) => (
                    <Badge key={i} variant="secondary" className="font-normal">
                      {level}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-700 hover:bg-purple-800">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {!fullPage && (
          <div className="text-center mt-10">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              View All Programs
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Offerings;