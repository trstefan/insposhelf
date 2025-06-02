"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const inspirationCards = [
    {
      id: 1,
      title: "Brand Identity System",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 167,
      views: 780,
      author: "Emma Wilson",
    },
    {
      id: 2,
      title: "Brand Identity System",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 167,
      views: 780,
      author: "Emma Wilson",
    },
    {
      id: 3,
      title: "Brand Identity System",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 167,
      views: 780,
      author: "Emma Wilson",
    },
    {
      id: 4,
      title: "Brand Identity System",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 167,
      views: 780,
      author: "Emma Wilson",
    },
    {
      id: 5,
      title: "Brand Identity System",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 167,
      views: 780,
      author: "Emma Wilson",
    },
    {
      id: 6,
      title: "Brand Identity System",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 167,
      views: 780,
      author: "Emma Wilson",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Content */}
      <div className="text-center space-y-6 mb-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Discover
            </span>{" "}
            <span className="text-foreground">Beautiful</span>
            <br />
            <span className="text-foreground">Inspiration</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-semibold ">
            Curate, organize, and share your creative inspiration.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-accent transition-all duration-300"
          >
            Category 1
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-accent transition-all duration-300"
          >
            Category 2
          </Button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {inspirationCards.map((card, index) => (
          <Card
            key={card.id}
            className="group bg-card/50  overflow-hidden border-0 shadow-lg hover:cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] backdrop-blur-sm"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: "fadeInUp 0.6s ease-out forwards",
            }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <Badge
                variant="secondary"
                className="absolute top-4 left-4 bg-white/90 text-black hover:bg-white transition-colors"
              >
                {card.category}
              </Badge>
            </div>

            <CardContent className="p-6 space-y-4 ">
              <div className="space-y-2">
                <h3 className="text-lg font-bold group-hover:text-purple-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat molestias nam reiciendis ducimus ullam laudantium
                  maiores eos harum impedit magnam.
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
