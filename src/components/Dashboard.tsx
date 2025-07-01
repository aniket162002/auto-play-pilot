import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, ArrowUp, Check, Activity, AlertCircle } from "lucide-react";

const Dashboard = () => {
  const projects = [
    {
      id: 1,
      name: "MyAwesome App",
      packageName: "com.example.myawesome",
      status: "published",
      version: "2.1.4",
      track: "production",
      lastUpdate: "2 hours ago",
      downloads: "10.2K"
    },
    {
      id: 2,
      name: "GameChanger",
      packageName: "com.studio.gamechanger",
      status: "reviewing",
      version: "1.5.0",
      track: "internal",
      lastUpdate: "30 minutes ago",
      downloads: "856"
    },
    {
      id: 3,
      name: "HealthTracker",
      packageName: "com.health.tracker",
      status: "error",
      version: "3.2.1",
      track: "alpha",
      lastUpdate: "1 day ago",
      downloads: "2.4K"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-success text-success-foreground";
      case "reviewing":
        return "bg-warning text-warning-foreground";
      case "error":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "published":
        return <Check className="w-4 h-4" />;
      case "reviewing":
        return <Activity className="w-4 h-4" />;
      case "error":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <ArrowUp className="w-4 h-4" />;
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor all your app publishing pipelines in real-time with automated status tracking
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Projects", value: "12", change: "+2", icon: Upload },
            { label: "Published Today", value: "3", change: "+1", icon: Check },
            { label: "In Review", value: "2", change: "0", icon: Activity },
            { label: "Total Downloads", value: "45.2K", change: "+12%", icon: ArrowUp }
          ].map((stat, index) => (
            <Card key={index} className="p-6 card-gradient shadow-soft hover:shadow-glow transition-smooth border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-success">{stat.change}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Projects Table */}
        <Card className="card-gradient shadow-soft border-border/50 overflow-hidden">
          <div className="p-6 border-b border-border/50">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">Recent Projects</h3>
              <Button className="hero-gradient text-white shadow-soft hover:shadow-glow transition-smooth">
                <Upload className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">App Name</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Version</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Track</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Downloads</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Last Update</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-border/30 hover:bg-muted/20 transition-smooth">
                    <td className="p-4">
                      <div>
                        <p className="font-medium text-foreground">{project.name}</p>
                        <p className="text-sm text-muted-foreground">{project.packageName}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        <span className="capitalize">{project.status}</span>
                      </span>
                    </td>
                    <td className="p-4 text-foreground font-mono text-sm">{project.version}</td>
                    <td className="p-4">
                      <span className="text-sm text-muted-foreground capitalize">{project.track}</span>
                    </td>
                    <td className="p-4 text-foreground font-medium">{project.downloads}</td>
                    <td className="p-4 text-muted-foreground text-sm">{project.lastUpdate}</td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;