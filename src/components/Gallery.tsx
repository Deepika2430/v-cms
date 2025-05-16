import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Gallery = () => {
  const [currentTab, setCurrentTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = {
    all: "All Photos",
    robotics: "Robotics",
    coding: "Coding Classes",
    experiments: "Science Experiments",
    events: "Events & Competitions"
  };

  const images = [
    {
      src: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg",
      alt: "Children at robotics class",
      category: "robotics"
    },
    {
      src: "https://images.pexels.com/photos/7516362/pexels-photo-7516362.jpeg",
      alt: "Child building robot",
      category: "robotics"
    },
    {
      src: "https://images.pexels.com/photos/8365031/pexels-photo-8365031.jpeg",
      alt: "Coding class",
      category: "coding"
    },
    {
      src: "https://images.pexels.com/photos/8364876/pexels-photo-8364876.jpeg",
      alt: "Learning programming",
      category: "coding"
    },
    {
      src: "https://images.pexels.com/photos/8364775/pexels-photo-8364775.jpeg",
      alt: "Science experiment with beakers",
      category: "experiments"
    },
    {
      src: "https://images.pexels.com/photos/8364570/pexels-photo-8364570.jpeg",
      alt: "Kids with microscopes",
      category: "experiments"
    },
    {
      src: "https://images.pexels.com/photos/8364068/pexels-photo-8364068.jpeg",
      alt: "Robotics competition",
      category: "events"
    },
    {
      src: "https://images.pexels.com/photos/8364754/pexels-photo-8364754.jpeg",
      alt: "Science exhibition",
      category: "events"
    },
    {
      src: "https://images.pexels.com/photos/8365050/pexels-photo-8365050.jpeg",
      alt: "Coding workshop",
      category: "coding"
    },
    {
      src: "https://images.pexels.com/photos/8364742/pexels-photo-8364742.jpeg",
      alt: "Circuit building",
      category: "robotics"
    },
    {
      src: "https://images.pexels.com/photos/8364779/pexels-photo-8364779.jpeg",
      alt: "Chemistry experiment",
      category: "experiments"
    },
    {
      src: "https://images.pexels.com/photos/8364646/pexels-photo-8364646.jpeg",
      alt: "Kids presenting projects",
      category: "events"
    }
  ];

  const filteredImages = currentTab === 'all' 
    ? images 
    : images.filter(img => img.category === currentTab);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">Learning in Action</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See our students engaged in hands-on learning experiences across our various programs.
          </p>
        </div>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {Object.entries(categories).map(([key, label]) => (
              <TabsTrigger key={key} value={key}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={currentTab} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-10">
          <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
            View More Photos
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Gallery preview" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;