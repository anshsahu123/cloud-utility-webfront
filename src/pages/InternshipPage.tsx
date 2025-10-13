import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Sparkles, Users, TrendingUp, Award, Clock, Target, CheckCircle, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/internship-hero.jpg';
import teamImage from '@/assets/internship-team.jpg';
import presentationImage from '@/assets/internship-presentation.jpg';
import mentorshipImage from '@/assets/internship-mentorship.jpg';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';

const InternshipPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">Launch Your Career</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Kickstart Your Career with Our{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Internship Program
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Learn, grow, and contribute to real projects while building your skills. Join a dynamic team where innovation meets mentorship and your ideas make an impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => scrollToSection('apply')}
                >
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                  onClick={() => scrollToSection('details')}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in animation-delay-200">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
              <img 
                src={heroImage} 
                alt="Diverse team of interns collaborating" 
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="cloud-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Interns', value: '150+', icon: Users },
              { label: 'Success Rate', value: '95%', icon: TrendingUp },
              { label: 'Projects Completed', value: '200+', icon: Target },
              { label: 'Industry Awards', value: '12+', icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <stat.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section id="details" className="py-20 md:py-32">
        <div className="cloud-container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              What Makes Our Program <span className="text-primary">Unique?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've designed a comprehensive program that combines hands-on experience, expert mentorship, and real-world projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Program Duration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our internship program runs for 3-6 months, giving you ample time to learn, grow, and make meaningful contributions. We offer flexible start dates throughout the year with both full-time and part-time options available to accommodate your schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Learning Outcomes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gain hands-on experience with cutting-edge technologies and industry best practices. Work on real client projects, develop professional skills, and build a portfolio that showcases your capabilities. Receive certifications upon successful completion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Expert Mentorship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each intern is paired with a dedicated mentor who provides guidance, feedback, and support throughout the program. Benefit from weekly one-on-one sessions, code reviews, and career development advice from industry professionals with years of experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Benefits & Perks</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Competitive stipend, flexible work environment, access to premium learning resources, networking opportunities, company events, and potential for full-time employment. We invest in your growth with training programs, conference attendance, and more.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 lg:order-1">
              <img 
                src={teamImage} 
                alt="Interns brainstorming in modern office" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-foreground">Work on Real Projects</h3>
              <p className="text-lg text-muted-foreground">
                From day one, you'll be contributing to actual projects that impact our clients and users. No busy work—just meaningful tasks that challenge you and help you grow as a professional.
              </p>
              <ul className="space-y-3">
                {[
                  'Collaborate with cross-functional teams',
                  'Use industry-standard tools and technologies',
                  'Present your work to stakeholders',
                  'Build features that go into production'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Personalized Mentorship</h3>
              <p className="text-lg text-muted-foreground">
                Our mentorship program pairs you with experienced professionals who are invested in your success. They'll guide your learning journey, provide career advice, and help you navigate challenges.
              </p>
              <ul className="space-y-3">
                {[
                  'Weekly 1-on-1 mentoring sessions',
                  'Personalized learning plans',
                  'Code reviews and technical guidance',
                  'Career development coaching'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={mentorshipImage} 
                alt="Mentor guiding intern" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="cloud-container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Hear from Our <span className="text-primary">Past Interns</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from interns who've transformed their careers through our program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial1} 
                    alt="Sarah Chen" 
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Sarah Chen</h4>
                    <p className="text-muted-foreground">Software Engineering Intern</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "This internship completely transformed my career trajectory. I learned more in 3 months here than I did in my entire final year at university. The mentorship was exceptional, and I got to work on real features that thousands of users interact with daily. I'm now a full-time developer on the team!"
                </p>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Award key={star} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial2} 
                    alt="Marcus Rodriguez" 
                    className="w-20 h-20 rounded-full object-cover border-4 border-secondary/20"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Marcus Rodriguez</h4>
                    <p className="text-muted-foreground">Product Design Intern</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "The collaborative environment and real-world projects made this internship incredibly valuable. My mentor pushed me to think critically and solve complex problems. I gained hands-on experience with industry tools and built a portfolio that helped me land my dream job. Highly recommend!"
                </p>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Award key={star} className="w-5 h-5 text-secondary fill-secondary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <img 
              src={presentationImage} 
              alt="Intern presenting project" 
              className="rounded-2xl shadow-2xl max-w-4xl mx-auto w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="apply" className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="cloud-container text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Join Our Team</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Ready to Launch Your Career?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss this opportunity to learn from the best, work on exciting projects, and kickstart your professional journey. Applications are now open!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-10 py-6 border-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </Button>
          </div>

          <div className="pt-8 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">Rolling Applications</h4>
              <p className="text-sm text-muted-foreground">We accept applications year-round with quarterly start dates</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">Quick Response</h4>
              <p className="text-sm text-muted-foreground">Hear back within 2 weeks of submitting your application</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">Inclusive Hiring</h4>
              <p className="text-sm text-muted-foreground">We welcome applicants from all backgrounds and experiences</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternshipPage;
