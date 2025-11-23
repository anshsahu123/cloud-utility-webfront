import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building2,
  Users,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Heart,
  Home,
  GraduationCap,
  DollarSign,
  Car,
  Upload,
  UserCircle,
  Landmark,
  ShieldCheck,
  Bot,
} from "lucide-react";
import heroImage from "@/assets/internship-hero.jpg";
import teamImage from "@/assets/internship-team.jpg";
import hrmsImage1 from "@/assets/internship-hrms-1.jpg";
import bankingImage1 from "@/assets/internship-banking-1.jpg";
import insuranceImage1 from "@/assets/internship-insurance-1.jpg";
import aiImage1 from "@/assets/internship-ai-1.jpg";
import automobileImage1 from "@/assets/internship-automobile-1.jpg";
import telecomImage1 from "@/assets/internship-telecom-1.jpg";
import healthcareImage1 from "@/assets/internship-healthcare-1.jpg";
import realestateImage1 from "@/assets/internship-realestate-1.jpg";
import financeImage1 from "@/assets/internship-finance-1.jpg";
import educationImage1 from "@/assets/internship-education-1.jpg";
import { useToast } from "@/hooks/use-toast";
import Autoplay from "embla-carousel-autoplay";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const InternshipPage = () => {
 

  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    specialization: "",
    passoutYear: "",
    qualification: "",
    programmingLanguages: "",
    experience: "fresher",
    internshipMode: "",
    duration: "",
    projectExperience: "",
    domain: "",
    resume: null as File | null,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const industries = [
    {
      id: "automobile",
      name: "Automobile",
      icon: Car,
      color: "primary",
      images: [automobileImage1],
      disabled: false,
    },
    {
      id: "telecom",
      name: "Telecom",
      icon: Smartphone,
      color: "secondary",
      images: [telecomImage1],
      disabled: false,
    },
    {
      id: "healthcare",
      name: "Healthcare",
      icon: Heart,
      color: "accent",
      images: [healthcareImage1],
      disabled: false,
    },
    {
      id: "real-estate",
      name: "Real Estate",
      icon: Home,
      color: "primary",
      images: [realestateImage1],
      disabled: false,
    },
    {
      id: "finance",
      name: "Finance",
      icon: DollarSign,
      color: "secondary",
      images: [financeImage1],
      disabled: false,
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      color: "accent",
      images: [educationImage1],
      disabled: false,
    },
    {
      id: "hrms",
      name: "HRMS",
      icon: UserCircle,
      color: "primary",
      images: [hrmsImage1],
      disabled: false,
    },
    {
      id: "banking",
      name: "Banking",
      icon: Landmark,
      color: "secondary",
      images: [bankingImage1],
      disabled: true,
    },
    {
      id: "insurance",
      name: "Insurance",
      icon: ShieldCheck,
      color: "accent",
      images: [insuranceImage1],
      disabled: false,
    },
    {
      id: "agentic-ai",
      name: "Agentic AI (Agentforce)",
      icon: Bot,
      color: "primary",
      images: [aiImage1],
      disabled: true,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const fd = new FormData();

      // Append all text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "resume") {
          fd.append(key, value as string);
        }
      });

      // Append file (VERY IMPORTANT)
      if (formData.resume) {
        fd.append("resume", formData.resume);
      }

      const response = await fetch(`${API_BASE_URL}/internship`, {
        method: "POST",
        body: fd,
        // ❌ NO HEADERS! Browser sets correct multipart boundary automatically
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll be in touch shortly.",
      });

      setSuccess(true);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description:
          error instanceof Error ? error.message : "Error submitting form",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wIDJjLTQuNDE4IDAtOC0zLjU4Mi04LThzMy41ODItOCA4LTggOCAzLjU4MiA4IDgtMy41ODIgOC04IDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="cloud-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Limited-Time Opportunity
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Join Our Live Project</span>{" "}
                <span className="bg-gradient-to-r from-primary  to-accent bg-clip-text text-transparent font-extrabold">
                  Internship Program
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We're opening short-term internship opportunities for passionate
                learners to work hands-on with our expert Salesforce and web
                development teams on real projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => scrollToSection("apply")}
                >
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                  onClick={() => scrollToSection("industries")}
                >
                  Explore Industries
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in animation-delay-200">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
              <img
                src={heroImage}
                alt="Professional team working on live projects"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Context Section */}
      <section className="py-16 bg-muted/30">
        <div className="cloud-container text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Our company is currently open for a{" "}
            <span className="text-primary">
              limited-time internship program
            </span>{" "}
            where selected candidates can work with our team on real industry
            projects and gain practical experience.
          </h2>
        </div>
      </section>

      {/* Choose Your Industry Section */}
      <section
        id="industries"
        className="py-20 md:py-32 bg-gradient-to-br from-background to-muted/30"
      >
        <div className="cloud-container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Choose Your <span className="text-primary">Industry Domain</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select an industry where you want hands-on experience. You'll work
              on live projects in your chosen domain, solving real business
              challenges with real datasets.
            </p>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
  {industries.map((industry) => (
    <Card
      key={industry.id}
      className={`transition-all border-2 overflow-hidden ${
        industry.disabled
          ? "opacity-60 cursor-not-allowed"
          : "cursor-pointer hover:shadow-lg"
      } ${
        selectedIndustry === industry.id
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/50"
      }`}
      onClick={() => {
        if (industry.disabled) {
          toast({
            title: "Seat Full",
            description: "Seat full for this domain project.",
            variant: "default",
          });
          return;
        }
        setSelectedIndustry(industry.id);
        setFormData({ ...formData, domain: industry.id });
      }}
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {industry.images.map((image, idx) => (
            <CarouselItem key={idx}>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={image}
                  alt={`${industry.name} domain ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <CardContent className="p-6 text-center space-y-4">
        <div
          className={`w-16 h-16 rounded-full bg-${industry.color}/10 flex items-center justify-center mx-auto`}
        >
          <industry.icon
            className={`w-8 h-8 text-${industry.color}`}
          />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          {industry.name}
        </h3>
        {selectedIndustry === industry.id && (
          <p className="text-sm text-muted-foreground animate-fade-in">
            You'll get exposure to live projects in the{" "}
            {industry.name.toLowerCase()} industry, working with
            real datasets and solving real business challenges.
          </p>
        )}
      </CardContent>
    </Card>
  ))}
</div>  

          {selectedIndustry &&
            !industries.find((i) => i.id === selectedIndustry)?.disabled && (
              <div className="mt-12 text-center animate-fade-in">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("apply")}
                  className="px-8 py-6"
                >
                  Apply for{" "}
                  {industries.find((i) => i.id === selectedIndustry)?.name}{" "}
                  Internship
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            )}
        </div>
      </section>

      {/* What You'll Work On Section */}
      <section className="py-20 md:py-32">
        <div className="cloud-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={teamImage}
                alt="Team collaborating on live projects"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Work on Real Live Projects
              </h3>
              <p className="text-lg text-muted-foreground">
                From day one, you'll be contributing to actual client projects
                that impact real businesses. This isn't simulated work — it's
                genuine industry experience working alongside our expert team.
              </p>
              <ul className="space-y-3">
                {[
                  "Collaborate directly with our Salesforce and web development teams",
                  "Work on active client projects with real deadlines",
                  "Gain hands-on experience with Salesforce Health Cloud, CMS integrations, and more",
                  "Build your portfolio with genuine project experience",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="cloud-container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Prerequisites{" "}
              <span className="text-primary">for Application</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Before applying, make sure you have these foundational skills.
              These are the basics we expect candidates to bring to the table.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Programming Fundamentals",
                description:
                  "Basic understanding of programming concepts, logic, and problem-solving approaches.",
              },
              {
                title: "Web Development Basics",
                description:
                  "Fundamental knowledge of HTML, CSS, and JavaScript for building web interfaces.",
              },
              {
                title: "Cloud Computing",
                description:
                  "Basic understanding of Clouds and Eagerness to learn Cloud basics — we'll teach you the rest!",
              },
            ].map((prereq, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {prereq.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {prereq.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section
        id="apply"
        className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
      >
        <div className="cloud-container">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Apply Now
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
              Apply for Our Internship Program
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selected interns will get a chance to work directly with our team
              on active projects and gain real-world experience.
            </p>
          </div>
 <Card className="max-w-3xl mx-auto border-2">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Email and Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>

          {/* College and Branch */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="college">College / University *</Label>
              <Input
                id="college"
                type="text"
                placeholder="Enter your college name"
                required
                value={formData.college}
                onChange={(e) =>
                  setFormData({ ...formData, college: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="branch">Branch *</Label>
              <Input
                id="branch"
                type="text"
                placeholder="e.g., Computer Science"
                required
                value={formData.branch}
                onChange={(e) =>
                  setFormData({ ...formData, branch: e.target.value })
                }
              />
            </div>
          </div>

          {/* Specialization and Passout Year */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="specialization">Specialization *</Label>
              <Input
                id="specialization"
                type="text"
                placeholder="e.g., AI/ML, Web Development"
                required
                value={formData.specialization}
                onChange={(e) =>
                  setFormData({ ...formData, specialization: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="passoutYear">Passout Year *</Label>
              <select
                id="passoutYear"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.passoutYear}
                onChange={(e) =>
                  setFormData({ ...formData, passoutYear: e.target.value })
                }
              >
                <option value="">Select year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
            </div>
          </div>

          {/* Qualification and Programming Languages */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="qualification">Qualification *</Label>
              <select
                id="qualification"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.qualification}
                onChange={(e) =>
                  setFormData({ ...formData, qualification: e.target.value })
                }
              >
                <option value="">Select qualification</option>
                <option value="btech">B.Tech</option>
                <option value="bca">BCA</option>
                <option value="mca">MCA</option>
                <option value="mba">MBA</option>
                <option value="msc">M.Sc</option>
                <option value="bsc">B.Sc</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="programmingLanguages">Programming Languages Known *</Label>
              <Input
                id="programmingLanguages"
                type="text"
                placeholder="e.g., Java, Python, JavaScript"
                required
                value={formData.programmingLanguages}
                onChange={(e) =>
                  setFormData({ ...formData, programmingLanguages: e.target.value })
                }
              />
            </div>
          </div>

          {/* Experience Level */}
          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level *</Label>
            <select
              id="experience"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
            >
              <option value="">Select experience level</option>
              <option value="fresher">Fresher</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>

          {/* Mode of Internship and Duration */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="modeOfInternship">Mode of Internship *</Label>
              <select
                id="modeOfInternship"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.modeOfInternship}
                onChange={(e) =>
                  setFormData({ ...formData, modeOfInternship: e.target.value })
                }
              >
                <option value="">Select mode</option>
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration of Internship *</Label>
              <select
                id="duration"
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
              >
                <option value="">Select duration</option>
                <option value="1month">1 Month</option>
                <option value="3months">3 Months</option>
                <option value="6months">6 Months</option>
              </select>
            </div>
          </div>

          {/* Preferred Domain */}
          <div className="space-y-2">
            <Label htmlFor="preferredDomain">Preferred Industry Domain *</Label>
            <select
              id="preferredDomain"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={formData.preferredDomain}
              onChange={(e) =>
                setFormData({ ...formData, preferredDomain: e.target.value })
              }
            >
              <option value="">Select an industry</option>
              {industries.map((industry) => (
                <option key={industry.id} value={industry.id}>
                  {industry.name}
                </option>
              ))}
            </select>
          </div>

          {/* Real-time Project Experience */}
          <div className="space-y-2">
            <Label htmlFor="realtimeProject">Have you worked on any real-time project? *</Label>
            <Textarea
              id="realtimeProject"
              placeholder="Briefly describe your project experience (if any)"
              required
              value={formData.realtimeProject}
              onChange={(e) =>
                setFormData({ ...formData, realtimeProject: e.target.value })
              }
              rows={4}
              className="resize-none"
            />
          </div>

          {/* Additional Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell us why you're interested in this internship..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="resize-none"
            />
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <Label htmlFor="resume">Resume / CV *</Label>
            <div className="flex items-center gap-4">
              <Input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    resume: e.target.files?.[0] || null,
                  })
                }
                className="cursor-pointer"
              />
              <Upload className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">
              Accepted formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full text-lg py-6"
            >
              Submit Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </form>

        {/* Note */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Note:</strong> Selected interns will get a chance to
            work directly with our team on active projects and gain
            real-world experience. We'll review your application carefully
            and respond within 2 weeks.
          </p>
        </div>
      </CardContent>
    </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternshipPage;
