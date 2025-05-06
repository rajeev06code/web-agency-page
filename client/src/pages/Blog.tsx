import { LazyImage } from "@/components/ui/lazy-image";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends in web development, from AI integration to WebAssembly and beyond.",
    image: "/blog/web-dev-trends.jpg",
    date: "2024-03-20",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Building Scalable Mobile Apps: Best Practices",
    excerpt: "Learn the essential practices for creating mobile applications that can grow with your business.",
    image: "/blog/mobile-app-dev.jpg",
    date: "2024-03-18",
    category: "Mobile Development"
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Better User Engagement",
    excerpt: "Discover how to create engaging user interfaces that drive better user experience and conversion.",
    image: "/blog/ui-ux-design.jpg",
    date: "2024-03-15",
    category: "Design"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, trends, and best practices in web and mobile development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-muted-foreground">{post.category}</span>
                  <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button asChild variant="ghost">
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 