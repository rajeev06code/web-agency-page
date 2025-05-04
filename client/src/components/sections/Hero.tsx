import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaMicrosoft, FaAmazon, FaApple } from "react-icons/fa";
import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" id="hero">
      <div className="absolute inset-0 geometric-pattern"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              We build <span className="text-gradient">digital products</span> that solve problems
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-8 max-w-xl">
              A modern development agency that turns your ideas into exceptional digital experiences. We specialize in web apps, mobile development, and UX/UI design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-accent">
                <a href="#work">View our work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary hover:bg-primary/10 text-primary font-accent">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
            <div className="mt-12">
              <p className="text-sm uppercase tracking-wider opacity-60 mb-4">Trusted by innovative companies</p>
              <div className="flex flex-wrap items-center gap-8">
                <FaGoogle className="h-8 w-auto opacity-70 hover:opacity-100 transition-all cursor-pointer" />
                <FaMicrosoft className="h-8 w-auto opacity-70 hover:opacity-100 transition-all cursor-pointer" />
                <FaAmazon className="h-8 w-auto opacity-70 hover:opacity-100 transition-all cursor-pointer" />
                <FaApple className="h-8 w-auto opacity-70 hover:opacity-100 transition-all cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-accent rounded-full opacity-20 blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
              alt="Digital workspace with developers"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
