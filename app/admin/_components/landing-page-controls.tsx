"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Image as ImageIcon, Trash } from "lucide-react";
import { useState } from "react";

interface SectionData {
  title: string;
  subtitle: string;
  images: string[];
}

interface WorkSection extends SectionData {
  descriptionTitle: string;
  descriptionText: string;
}

interface GallerySection extends SectionData {
  categories: string[];
}

interface ArtistSection extends SectionData {
  bioName: string;
  bioSubtitle: string;
  bioDescription: string;
}

interface EducationCategory {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface EducationSection extends SectionData {
  categories: EducationCategory[];
}

export default function LandingPageControls() {
  const [workData, setWorkData] = useState<WorkSection>({
    title: "The Work",
    subtitle: "Exploring celestial wonders",
    descriptionTitle: "Artistic Vision",
    descriptionText: "Discover the universe through our lens...",
    images: [],
  });

  const [galleryData, setGalleryData] = useState<GallerySection>({
    title: "The Gallery",
    subtitle: "Featured collections",
    categories: ["Astrophotography", "Portraits", "Landscapes"],
    images: [],
  });

  const [artistData, setArtistData] = useState<ArtistSection>({
    title: "The Artist",
    subtitle: "Creative journey",
    bioName: "Caneck Leyva",
    bioSubtitle: "Professional Astrophotographer",
    bioDescription: "Passionate about capturing the cosmos...",
    images: [],
  });

  const [educationData, setEducationData] = useState<EducationSection>({
    title: "The Education",
    subtitle: "Learning resources",
    categories: [],
    images: [],
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Tabs defaultValue="work" className="w-full">
        <TabsList className="grid grid-cols-4 gap-2 mb-6">
          <TabsTrigger value="work">The Work</TabsTrigger>
          <TabsTrigger value="gallery">The Gallery</TabsTrigger>
          <TabsTrigger value="artist">The Artist</TabsTrigger>
          <TabsTrigger value="education">The Education</TabsTrigger>
        </TabsList>

        {/* Work Section */}
        <TabsContent value="work">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Label>Title</Label>
                <Input
                  value={workData.title}
                  onChange={(e) =>
                    setWorkData({ ...workData, title: e.target.value })
                  }
                />

                <Label>Subtitle</Label>
                <Input
                  value={workData.subtitle}
                  onChange={(e) =>
                    setWorkData({ ...workData, subtitle: e.target.value })
                  }
                />
              </div>

              <div className="space-y-4">
                <Label>Description Title</Label>
                <Input
                  value={workData.descriptionTitle}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setWorkData({
                      ...workData,
                      descriptionTitle: e.target.value,
                    })
                  }
                />

                <Label>Description Text</Label>
                <Textarea
                  value={workData.descriptionText}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setWorkData({
                      ...workData,
                      descriptionText: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <ImageSection
              images={workData.images}
              onAdd={() => {
                /* TODO: Implement image selection */
              }}
            />
          </div>
        </TabsContent>

        {/* Gallery Section */}
        <TabsContent value="gallery">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Label>Title</Label>
                <Input
                  value={galleryData.title}
                  onChange={(e) =>
                    setGalleryData({ ...galleryData, title: e.target.value })
                  }
                />

                <Label>Subtitle</Label>
                <Input
                  value={galleryData.subtitle}
                  onChange={(e) =>
                    setGalleryData({ ...galleryData, subtitle: e.target.value })
                  }
                />
              </div>

              <div className="space-y-4">
                <Label>Categories</Label>
                <div className="space-y-2">
                  {galleryData.categories.map((category, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={category}
                        onChange={(e) => {
                          const newCategories = [...galleryData.categories];
                          newCategories[index] = e.target.value;
                          setGalleryData({
                            ...galleryData,
                            categories: newCategories,
                          });
                        }}
                      />
                      <Button variant="destructive" size="sm">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() =>
                      setGalleryData({
                        ...galleryData,
                        categories: [...galleryData.categories, ""],
                      })
                    }
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Category
                  </Button>
                </div>
              </div>
            </div>

            <ImageSection
              images={galleryData.images}
              onAdd={() => {
                /* TODO: Implement image selection */
              }}
            />
          </div>
        </TabsContent>

        {/* Artist Section */}
        <TabsContent value="artist">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Label>Title</Label>
                <Input
                  value={artistData.title}
                  onChange={(e) =>
                    setArtistData({ ...artistData, title: e.target.value })
                  }
                />

                <Label>Subtitle</Label>
                <Input
                  value={artistData.subtitle}
                  onChange={(e) =>
                    setArtistData({ ...artistData, subtitle: e.target.value })
                  }
                />
              </div>

              <div className="space-y-4">
                <Label>Bio Name</Label>
                <Input
                  value={artistData.bioName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setArtistData({ ...artistData, bioName: e.target.value })
                  }
                />

                <Label>Bio Subtitle</Label>
                <Input
                  value={artistData.bioSubtitle}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setArtistData({
                      ...artistData,
                      bioSubtitle: e.target.value,
                    })
                  }
                />

                <Label>Bio Description</Label>
                <Textarea
                  value={artistData.bioDescription}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setArtistData({
                      ...artistData,
                      bioDescription: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <ImageSection
              images={artistData.images}
              onAdd={() => {
                /* TODO: Implement image selection */
              }}
            />
          </div>
        </TabsContent>

        {/* Education Section */}
        <TabsContent value="education">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Label>Title</Label>
                <Input
                  value={educationData.title}
                  onChange={(e) =>
                    setEducationData({
                      ...educationData,
                      title: e.target.value,
                    })
                  }
                />

                <Label>Subtitle</Label>
                <Input
                  value={educationData.subtitle}
                  onChange={(e) =>
                    setEducationData({
                      ...educationData,
                      subtitle: e.target.value,
                    })
                  }
                />
              </div>

              <div className="space-y-4">
                <Label>Education Categories</Label>
                <div className="space-y-4">
                  {educationData.categories.map((category, index) => (
                    <div
                      key={index}
                      className="space-y-2 border p-4 rounded-lg"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Category {index + 1}</h4>
                        <Button variant="destructive" size="sm">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>

                      <Label>Title</Label>
                      <Input
                        value={category.title}
                        onChange={(e) => {
                          const newCategories = [...educationData.categories];
                          newCategories[index].title = e.target.value;
                          setEducationData({
                            ...educationData,
                            categories: newCategories,
                          });
                        }}
                      />

                      <Label>Description</Label>
                      <Textarea
                        value={category.description}
                        onChange={(
                          e: React.ChangeEvent<HTMLTextAreaElement>,
                        ) => {
                          const newCategories: EducationCategory[] = [
                            ...educationData.categories,
                          ];
                          newCategories[index].description = e.target.value;
                          setEducationData({
                            ...educationData,
                            categories: newCategories,
                          });
                        }}
                      />

                      <Label>URL Link</Label>
                      <Input
                        value={category.url}
                        onChange={(e) => {
                          const newCategories = [...educationData.categories];
                          newCategories[index].url = e.target.value;
                          setEducationData({
                            ...educationData,
                            categories: newCategories,
                          });
                        }}
                      />
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() =>
                      setEducationData({
                        ...educationData,
                        categories: [
                          ...educationData.categories,
                          {
                            title: "",
                            description: "",
                            image: "",
                            url: "",
                          },
                        ],
                      })
                    }
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Category
                  </Button>
                </div>
              </div>
            </div>

            <ImageSection
              images={educationData.images}
              onAdd={() => {
                /* TODO: Implement image selection */
              }}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ImageSection({
  images,
  onAdd,
}: {
  images: string[];
  onAdd: () => void;
}) {
  return (
    <div className="space-y-4">
      <Label>Section Images</Label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="aspect-square bg-gray-100 rounded-lg relative"
          >
            {/* TODO: Replace with actual image preview */}
            <div className="w-full h-full flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-gray-400" />
            </div>
            <Button
              variant="destructive"
              size="sm"
              className="absolute top-1 right-1"
            >
              <Trash className="h-3 w-3" />
            </Button>
          </div>
        ))}
        <button
          onClick={onAdd}
          className="aspect-square border-2 border-dashed rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors"
        >
          <Plus className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
