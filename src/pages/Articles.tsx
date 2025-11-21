import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Briefcase, Building2 } from "lucide-react";

const articles = [
  {
    title: "Tax Optimization for Entrepreneurs 2024",
    excerpt: "Discover new tax optimization strategies for business owners and how to maximize your benefits.",
    category: "Tax",
    date: "March 15, 2024",
    readTime: "8 min",
    icon: TrendingUp,
  },
  {
    title: "Creating a Holding: Complete Guide",
    excerpt: "Everything you need to know about setting up a holding company and managing your assets.",
    category: "Legal Structure",
    date: "March 12, 2024",
    readTime: "12 min",
    icon: Building2,
  },
  {
    title: "Real Estate Investment in 2024",
    excerpt: "Market trends and opportunities in commercial and residential real estate.",
    category: "Investment",
    date: "March 10, 2024",
    readTime: "10 min",
    icon: Briefcase,
  },
  {
    title: "Succession Planning: Best Practices",
    excerpt: "How to prepare the transmission of your business while optimizing taxation.",
    category: "Transmission",
    date: "March 8, 2024",
    readTime: "15 min",
    icon: TrendingUp,
  },
  {
    title: "Asset Diversification Strategies",
    excerpt: "Reduce risk through intelligent asset allocation across different investment vehicles.",
    category: "Investment",
    date: "March 5, 2024",
    readTime: "9 min",
    icon: Briefcase,
  },
  {
    title: "Executive Protection Solutions",
    excerpt: "Comprehensive insurance and legal protection strategies for business leaders.",
    category: "Protection",
    date: "March 1, 2024",
    readTime: "11 min",
    icon: Building2,
  },
];

export default function Articles() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Financial Insights & Articles</h1>
          <p className="text-lg text-muted-foreground">
            Stay informed with the latest insights on wealth management, taxation, and investment strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <article.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{article.date}</span>
                  <span>{article.readTime} read</span>
                </div>
                <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
