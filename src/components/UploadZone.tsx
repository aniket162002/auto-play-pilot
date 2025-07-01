import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileArchive, Image, FileText, Check, ArrowUp } from "lucide-react";

const UploadZone = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<any[]>([]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => [...prev, ...droppedFiles.map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'uploaded'
    }))]);
  }, []);

  const fileTypes = [
    {
      type: "AAB File",
      description: "Android App Bundle (.aab)",
      icon: FileArchive,
      required: true,
      uploaded: files.some(f => f.name.endsWith('.aab'))
    },
    {
      type: "Screenshots",
      description: "Phone, tablet & TV screenshots",
      icon: Image,
      required: true,
      uploaded: files.some(f => f.type?.startsWith('image/'))
    },
    {
      type: "Feature Graphic",
      description: "1024x500 promotional banner",
      icon: Image,
      required: false,
      uploaded: false
    },
    {
      type: "Metadata",
      description: "App description & details",
      icon: FileText,
      required: false,
      uploaded: false
    }
  ];

  return (
    <section id="upload" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upload & Publish
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drag and drop your app bundle and assets, then let our AI handle the rest
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload Zone */}
          <div className="space-y-6">
            <Card 
              className={`
                relative p-8 border-2 border-dashed transition-all duration-300 cursor-pointer
                ${dragActive 
                  ? 'border-primary bg-primary/5 shadow-glow' 
                  : 'border-border hover:border-primary/50 hover:bg-primary/2'
                }
              `}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="text-center">
                <div className={`
                  w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all
                  ${dragActive ? 'hero-gradient shadow-glow' : 'upload-gradient'}
                `}>
                  <Upload className={`w-8 h-8 ${dragActive ? 'text-white' : 'text-primary'}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {dragActive ? 'Drop files here' : 'Drag & drop your files'}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  AAB files, screenshots, and promotional assets
                </p>
                
                <Button 
                  className="hero-gradient text-white shadow-soft hover:shadow-glow transition-smooth"
                  onClick={() => document.getElementById('fileInput')?.click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Browse Files
                </Button>
                
                <input
                  id="fileInput"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    const selectedFiles = Array.from(e.target.files || []);
                    setFiles(prev => [...prev, ...selectedFiles.map(file => ({
                      name: file.name,
                      size: file.size,
                      type: file.type,
                      status: 'uploaded'
                    }))]);
                  }}
                />
              </div>
            </Card>

            {/* File List */}
            {files.length > 0 && (
              <Card className="p-6 card-gradient shadow-soft border-border/50">
                <h4 className="font-semibold text-foreground mb-4">Uploaded Files</h4>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
                          <Check className="w-4 h-4 text-success-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(1)} MB
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-success font-medium">Uploaded</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Requirements Checklist */}
          <div className="space-y-6">
            <Card className="p-6 card-gradient shadow-soft border-border/50">
              <h4 className="font-semibold text-foreground mb-4">Publishing Requirements</h4>
              <div className="space-y-4">
                {fileTypes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-smooth">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      ${item.uploaded ? 'bg-success' : item.required ? 'bg-warning' : 'bg-muted'}
                    `}>
                      {item.uploaded ? (
                        <Check className="w-5 h-5 text-success-foreground" />
                      ) : (
                        <item.icon className={`w-5 h-5 ${item.required ? 'text-warning-foreground' : 'text-muted-foreground'}`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-foreground">{item.type}</p>
                        {item.required && (
                          <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">Required</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Publish Button */}
            <Button 
              size="lg" 
              className="w-full success-gradient text-success-foreground font-semibold py-6 text-lg shadow-success hover:shadow-glow transition-smooth"
              disabled={!files.some(f => f.name.endsWith('.aab'))}
            >
              <ArrowUp className="w-5 h-5 mr-2" />
              Publish to Play Store
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Our AI will handle uploads, QA checks, policy validation, and notifications automatically
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadZone;