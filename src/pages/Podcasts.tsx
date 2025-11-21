import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Headphones } from "lucide-react";

const podcasts = [
  {
    title: "Business Succession Planning",
    host: "Marie Laurent",
    duration: "45 min",
    description: "Expert insights on preparing your business for succession and ensuring a smooth transition.",
    listens: "2.3k",
    date: "March 18, 2024",
  },
  {
    title: "Tax Law Updates 2024",
    host: "Thomas Bernard",
    duration: "38 min",
    description: "Latest changes in tax legislation and their impact on entrepreneurs and business owners.",
    listens: "1.8k",
    date: "March 15, 2024",
  },
  {
    title: "Wealth Protection Strategies",
    host: "Sophie Martin",
    duration: "52 min",
    description: "Comprehensive strategies for protecting your assets and securing your family's future.",
    listens: "3.1k",
    date: "March 12, 2024",
  },
  {
    title: "International Tax Planning",
    host: "Pierre Dubois",
    duration: "41 min",
    description: "Navigate cross-border taxation and optimize your international business structure.",
    listens: "1.5k",
    date: "March 10, 2024",
  },
  {
    title: "Real Estate Investment Law",
    host: "Marie Laurent",
    duration: "47 min",
    description: "Legal considerations and best practices for real estate investment portfolios.",
    listens: "2.7k",
    date: "March 8, 2024",
  },
  {
    title: "Corporate Governance Essentials",
    host: "Thomas Bernard",
    duration: "35 min",
    description: "Understanding corporate governance requirements and implementing best practices.",
    listens: "1.9k",
    date: "March 5, 2024",
  },
];

export default function Podcasts() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Legal & Financial Podcasts</h1>
          <p className="text-lg text-muted-foreground">
            Listen to expert discussions on legal, tax, and wealth management topics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-20 w-20 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Headphones className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {podcast.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium">{podcast.host}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {podcast.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {podcast.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span>{podcast.listens} listens</span>
                    <span className="mx-2">•</span>
                    <span>{podcast.date}</span>
                  </div>
                  <Button className="group-hover:shadow-lg">
                    <Play className="mr-2 h-4 w-4" fill="currentColor" />
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
