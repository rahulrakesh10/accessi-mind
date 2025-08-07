import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  AudioLines, 
  Image as ImageIcon, 
  Download,
  Play,
  Pause,
  Volume2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContentProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processedContent, setProcessedContent] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setProgress(0);

    try {
      // Simulate AI processing with progress updates
      const progressSteps = [
        { step: 20, message: "Analyzing file format..." },
        { step: 40, message: "Extracting content..." },
        { step: 60, message: "Processing with AI models..." },
        { step: 80, message: "Generating accessible format..." },
        { step: 100, message: "Finalizing output..." }
      ];

      for (const { step, message } of progressSteps) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setProgress(step);
        toast({
          title: "Processing...",
          description: message,
        });
      }

      // Mock processed content
      setProcessedContent(`
        Processed Content Summary:
        
        📄 Document Type: ${file.name}
        📊 Content Analysis: The uploaded file contains educational material suitable for accessibility enhancement.
        
        🎯 Key Features Applied:
        • Text extraction and cleanup
        • Heading structure optimization  
        • Alternative text generation for images
        • Readability score improvement
        • Screen reader compatibility
        
        ♿ Accessibility Enhancements:
        • High contrast formatting
        • Logical reading order
        • Keyboard navigation support
        • Voice navigation ready
        
        🔊 Audio Version: Available for text-to-speech conversion
        📱 Multiple Formats: PDF, EPUB, HTML, Audio
      `);

      toast({
        title: "Processing Complete!",
        description: "Your content has been successfully transformed for accessibility.",
        variant: "default",
      });

    } catch (error) {
      toast({
        title: "Processing Error",
        description: "There was an issue processing your file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleTextToSpeech = () => {
    if (!processedContent) return;
    
    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(processedContent);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.onend = () => setIsPlaying(false);
      speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Try It Now - Upload Your Content
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of AI-driven accessibility. Upload any document, image, or audio file to see how we transform it.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Upload Area */}
          <Card className="p-8 mb-8 border-dashed border-2 border-border hover:border-primary transition-colors">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Your Content</h3>
              <p className="text-muted-foreground mb-6">
                Supports PDF, Word docs, images, audio files, and more
              </p>
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.mp3,.wav,.mp4"
                disabled={isProcessing}
              />
              <Button 
                onClick={() => fileInputRef.current?.click()}
                variant="hero"
                size="lg"
                disabled={isProcessing}
                className="group"
              >
                {isProcessing ? "Processing..." : "Choose File"}
                <Upload className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Progress Bar */}
          {isProcessing && (
            <Card className="p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Processing Content</h4>
                  <span className="text-sm text-muted-foreground">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </Card>
          )}

          {/* Processed Content */}
          {processedContent && (
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold">Processed Content</h4>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleTextToSpeech}
                      className="group"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" />
                          Pause Audio
                        </>
                      ) : (
                        <>
                          <Volume2 className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                          Listen
                        </>
                      )}
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">
                    {processedContent}
                  </pre>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-success-light rounded-lg">
                    <FileText className="h-6 w-6 text-success" />
                    <div>
                      <div className="font-medium">Text Optimized</div>
                      <div className="text-sm text-muted-foreground">Screen reader ready</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-secondary-light rounded-lg">
                    <AudioLines className="h-6 w-6 text-secondary" />
                    <div>
                      <div className="font-medium">Audio Available</div>
                      <div className="text-sm text-muted-foreground">Natural voice synthesis</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-accent-light rounded-lg">
                    <ImageIcon className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-medium">Images Described</div>
                      <div className="text-sm text-muted-foreground">Alt text generated</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};