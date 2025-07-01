import { Button } from "@/components/ui/button";
import { Upload, Activity, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 hero-gradient rounded-xl flex items-center justify-center shadow-soft">
              <Upload className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PlayAutoPublish</h1>
              <p className="text-xs text-muted-foreground">Zero-touch Google Play Console</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-smooth">
              Dashboard
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-smooth">
              Projects
            </a>
            <a href="#automation" className="text-muted-foreground hover:text-foreground transition-smooth">
              Automation
            </a>
            <a href="#docs" className="text-muted-foreground hover:text-foreground transition-smooth">
              Docs
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Activity className="w-4 h-4 mr-2" />
              Status
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button className="hero-gradient text-white font-medium shadow-soft hover:shadow-glow transition-smooth">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;