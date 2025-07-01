import { Card } from "@/components/ui/card";
import { Upload, Check, Activity, ArrowDown } from "lucide-react";

const AutomationFlow = () => {
  const steps = [
    {
      id: 1,
      title: "Upload & Validate",
      description: "AAB analysis, metadata extraction, basic validation checks",
      icon: Upload,
      status: "completed",
      time: "30 seconds"
    },
    {
      id: 2,
      title: "Policy & QA Checks",
      description: "Automated ProGuard analysis, manifest validation, permission audit",
      icon: Activity,
      status: "active",
      time: "2 minutes"
    },
    {
      id: 3,
      title: "Play Console Upload",
      description: "Create edit session, upload AAB to internal track, metadata sync",
      icon: ArrowDown,
      status: "pending",
      time: "1 minute"
    },
    {
      id: 4,
      title: "Review & Promote",
      description: "Auto-commit edit, track promotion, review status monitoring",
      icon: Check,
      status: "pending",
      time: "5-30 minutes"
    }
  ];

  const getStepStyle = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success border-success text-success-foreground";
      case "active":
        return "bg-warning border-warning text-warning-foreground animate-pulse-glow";
      case "pending":
        return "bg-muted border-border text-muted-foreground";
      default:
        return "bg-muted border-border text-muted-foreground";
    }
  };

  const getConnectorStyle = (currentStatus: string, nextStatus: string) => {
    if (currentStatus === "completed") {
      return "bg-success";
    } else if (currentStatus === "active") {
      return "bg-gradient-to-b from-success to-muted";
    }
    return "bg-muted";
  };

  return (
    <section id="automation" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Automation in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our AI pipeline handle your entire publishing workflow automatically
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Current Publishing Status */}
          <Card className="p-6 mb-12 card-gradient shadow-soft border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Current Publishing Job</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                <span className="text-sm text-warning font-medium">In Progress</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">App</p>
                <p className="font-medium text-foreground">GameChanger v1.5.0</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Target Track</p>
                <p className="font-medium text-foreground">Internal Testing</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Started</p>
                <p className="font-medium text-foreground">2 minutes ago</p>
              </div>
            </div>
          </Card>

          {/* Automation Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="flex items-start space-x-6">
                  {/* Step Icon */}
                  <div className={`
                    relative w-16 h-16 rounded-2xl border-2 flex items-center justify-center transition-all duration-500
                    ${getStepStyle(step.status)}
                  `}>
                    <step.icon className="w-8 h-8" />
                    
                    {/* Active indicator */}
                    {step.status === "active" && (
                      <div className="absolute -inset-1 rounded-2xl bg-warning/20 animate-ping"></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 min-w-0">
                    <Card className={`
                      p-6 transition-all duration-500
                      ${step.status === "active" 
                        ? "card-gradient shadow-glow border-warning/30" 
                        : "card-gradient shadow-soft border-border/50"
                      }
                    `}>
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                        <span className={`
                          text-xs font-medium px-3 py-1 rounded-full
                          ${step.status === "completed" 
                            ? "bg-success/20 text-success" 
                            : step.status === "active"
                            ? "bg-warning/20 text-warning"
                            : "bg-muted text-muted-foreground"
                          }
                        `}>
                          {step.status === "completed" ? "Complete" : step.status === "active" ? "Running" : "Pending"}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      {/* Progress indicators for active step */}
                      {step.status === "active" && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Estimated time</span>
                            <span className="text-foreground font-medium">{step.time}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-warning h-2 rounded-full w-2/3 transition-all duration-1000"></div>
                          </div>
                        </div>
                      )}
                      
                      {step.status === "completed" && (
                        <div className="flex items-center text-sm text-success">
                          <Check className="w-4 h-4 mr-2" />
                          Completed in {step.time}
                        </div>
                      )}
                    </Card>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`
                    absolute left-8 top-16 w-0.5 h-8 transition-all duration-500
                    ${getConnectorStyle(step.status, steps[index + 1].status)}
                  `}></div>
                )}
              </div>
            ))}
          </div>

          {/* Live Logs */}
          <Card className="mt-12 p-6 card-gradient shadow-soft border-border/50">
            <h4 className="font-semibold text-foreground mb-4">Live Activity Log</h4>
            <div className="bg-foreground/5 rounded-lg p-4 font-mono text-sm space-y-2 max-h-32 overflow-y-auto">
              <div className="text-success">✓ AAB uploaded successfully (12.4 MB)</div>
              <div className="text-success">✓ Metadata extracted and validated</div>
              <div className="text-warning">⚡ Running ProGuard analysis...</div>
              <div className="text-muted-foreground">⏳ Checking for policy violations...</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AutomationFlow;