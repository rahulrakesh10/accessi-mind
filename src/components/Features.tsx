import { Card } from "@/components/ui/card";
import { 
  FileText, 
  AudioLines, 
  Image, 
  Languages, 
  Eye, 
  Mic,
  Brain,
  Users,
  Zap
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Document Processing",
    description: "Transform PDFs, Word docs, and text files into accessible formats with AI-powered analysis and summarization.",
    color: "text-primary"
  },
  {
    icon: AudioLines,
    title: "Audio Transcription",
    description: "Convert lectures, podcasts, and audio content into text with real-time processing and speaker identification.",
    color: "text-secondary"
  },
  {
    icon: Image,
    title: "Visual Content Analysis",
    description: "Automatically describe images, charts, and diagrams for visually impaired learners with detailed explanations.",
    color: "text-accent"
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description: "Translate and adapt content across 50+ languages while maintaining context and educational value.",
    color: "text-success"
  },
  {
    icon: Eye,
    title: "Screen Reader Optimization",
    description: "Enhanced compatibility with screen readers and assistive technologies for seamless accessibility.",
    color: "text-warning"
  },
  {
    icon: Mic,
    title: "Voice Navigation",
    description: "Navigate and interact with content using voice commands and speech-to-text functionality.",
    color: "text-primary"
  },
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "AI learns from user preferences to provide increasingly personalized and effective content formats.",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Collaborative Tools",
    description: "Share annotated content and collaborate with peers and educators in real-time.",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Lightning-fast content transformation with live preview and instant format switching.",
    color: "text-success"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful AI Features for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Every Learning Need
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of AI-powered tools ensures that every learner can access, understand, and engage with educational content in their preferred format.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-background to-muted group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};