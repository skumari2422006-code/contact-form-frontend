import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formState.error) {
      setFormState(prev => ({ ...prev, error: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset form state
    setFormState({
      isSubmitting: true,
      isSubmitted: false,
      error: "",
    });

    try {
      // Get backend URL from environment or use localhost for development
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
      
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Success
        setFormState({
          isSubmitting: false,
          isSubmitted: true,
          error: "",
        });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success state after 5 seconds
        setTimeout(() => {
          setFormState(prev => ({ ...prev, isSubmitted: false }));
        }, 5000);
      } else {
        // Error from backend
        setFormState({
          isSubmitting: false,
          isSubmitted: false,
          error: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      // Network or other error
      console.error('Contact form submission error:', error);
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Network error. Please check your connection and try again.',
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Patna, Bihar, India",
    },
    {
      icon: Phone,
      label: "Call Me",
      value: "+91 9153942168",
      link: "tel:+919153942168",
    },
    {
      icon: Mail,
      label: "Email Me",
      value: "nirajsingh9570460932@gmail.com",
      link: "mailto:nirajsingh9570460932@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "niraj-kumar-singh-116437257",
      link: "https://www.linkedin.com/in/niraj-kumar-singh-116437257/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "nirajkumarsingh51",
      link: "https://github.com/nirajkumarsingh51",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Open to discussing new opportunities, collaborations, or technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-effect p-4 sm:p-6 hover:glow-effect transition-all">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="font-semibold hover:text-primary transition-colors text-sm sm:text-base break-all"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-sm sm:text-base">{info.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            <Card className="glass-effect p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Available for Freelance</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                I'm currently available for freelance projects including:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>Frontend & Backend Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>Cloud & AWS Deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 flex-shrink-0" />
                  <span>Custom Full-Stack Solutions</span>
                </li>
              </ul>
              <a href="/NIRAJ_KUMAR_SINGH_Resume.pdf" download>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-sm sm:text-base">Download Resume</span>
                </Button>
              </a>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Success Message */}
              {formState.isSubmitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div className="text-green-800 text-sm">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-green-600">I'll get back to you soon. You should receive a confirmation email shortly.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {formState.error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-red-800 text-sm">
                    <p className="font-semibold">Oops! Something went wrong</p>
                    <p className="text-red-600">{formState.error}</p>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="name" className="text-xs sm:text-sm font-medium mb-2 block">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="text-sm sm:text-base"
                  disabled={formState.isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs sm:text-sm font-medium mb-2 block">
                  Your Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="text-sm sm:text-base"
                  disabled={formState.isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-xs sm:text-sm font-medium mb-2 block">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Project Discussion"
                  className="text-sm sm:text-base"
                  disabled={formState.isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs sm:text-sm font-medium mb-2 block">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="text-sm sm:text-base"
                  disabled={formState.isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full glow-effect text-sm sm:text-base"
                disabled={formState.isSubmitting || formState.isSubmitted}
              >
                {formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : formState.isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>

            {/* Form Status Info */}
            <div className="mt-4 text-xs text-muted-foreground text-center">
              <p>Your message will be sent directly to my email inbox.</p>
              <p>You'll receive a confirmation email after submission.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;