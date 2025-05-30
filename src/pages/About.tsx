import { CircleImage } from '../components/CircleImage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Lightbulb, GraduationCap, Target } from 'lucide-react';

interface AboutProps {
  fullPage?: boolean;
}

const About = ({ fullPage = false }: AboutProps) => {
  return (
    <section className={`py-12 ${fullPage ? 'min-h-[80vh]' : ''} bg-background`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">About Our Learning Approach</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in empowering students through experiential learning methods that make education engaging and effective.
          </p>
        </div>

        <Tabs defaultValue="philosophy" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="philosophy" className="flex flex-col items-center gap-2 py-3">
              <Brain className="h-5 w-5" />
              <span>Philosophy</span>
            </TabsTrigger>
            <TabsTrigger value="methodology" className="flex flex-col items-center gap-2 py-3">
              <Lightbulb className="h-5 w-5" />
              <span>Methodology</span>
            </TabsTrigger>
            <TabsTrigger value="outcomes" className="flex flex-col items-center gap-2 py-3">
              <Target className="h-5 w-5" />
              <span>Outcomes</span>
            </TabsTrigger>
            <TabsTrigger value="teachers" className="flex flex-col items-center gap-2 py-3">
              <GraduationCap className="h-5 w-5" />
              <span>Teachers</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="philosophy" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Educational Philosophy</h3>
                <p className="text-foreground/80 mb-4">
                  Experiential learning emphasizes hands-on, practical experiences as a primary means
                  of acquiring knowledge and skills. It encourages active engagement with the subject
                  matter, often through real-world activities, simulations, experiments, and problem-solving tasks.
                </p>
                <p className="text-foreground/80 mb-4">
                  It fosters a deeper understanding of concepts and promotes the development of critical
                  thinking, problem-solving, and decision-making abilities. It typically follows a cycle of
                  "do, reflect, and apply," where learners participate in activities, reflect on their experiences,
                  and then apply their insights to further learning.
                </p>
              </div>
              <div className="flex justify-center">
                <CircleImage
                  src="https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg"
                  alt="Students learning through experience"
                  size="lg"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="methodology">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <CircleImage
                  src="https://images.pexels.com/photos/8365147/pexels-photo-8365147.jpeg"
                  alt="Learning methodology in action"
                  size="lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Teaching Methodology</h3>
                <p className="text-foreground/80 mb-4">
                  We employ a structured yet flexible learning framework that combines guided exploration,
                  hands-on activities, and reflective practice. Students learn by doing, experimenting,
                  and solving real problems.
                </p>
                <p className="text-foreground/80 mb-4">
                  Our curriculum integrates theoretical concepts with practical applications,
                  helping students develop both knowledge and skills simultaneously. This approach
                  ensures deeper understanding and better retention of what they learn.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="outcomes">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Learning Outcomes</h3>
                <p className="text-foreground/80 mb-4">
                  Our experiential learning approach produces students who don't just know concepts
                  but understand how to apply them in real-world contexts. They develop:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-2 mb-4">
                  <li>Critical thinking and problem-solving abilities</li>
                  <li>Creative approaches to challenges</li>
                  <li>Teamwork and communication skills</li>
                  <li>Self-direction and motivation</li>
                  <li>Adaptability to new situations</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <CircleImage
                  src="https://images.pexels.com/photos/8364440/pexels-photo-8364440.jpeg"
                  alt="Learning outcomes demonstration"
                  size="lg"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="teachers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <CircleImage
                  src="https://images.pexels.com/photos/8363104/pexels-photo-8363104.jpeg"
                  alt="Our expert teachers"
                  size="lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Expert Educators</h3>
                <p className="text-foreground/80 mb-4">
                  Our teachers are more than just instructors – they are facilitators of learning
                  who guide students through their educational journey. They bring extensive experience
                  in both traditional education and innovative teaching methods.
                </p>
                <p className="text-foreground/80 mb-4">
                  All educators undergo specialized training in experiential teaching methods and
                  continue their professional development to stay at the forefront of educational
                  innovation. Their passion for teaching and subject expertise creates an engaging
                  learning environment.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;