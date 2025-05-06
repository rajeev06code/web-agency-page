import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string(),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real app, we'd send an email or store the contact request
      // For this demo, we'll just return success
      
      console.log('Contact form submission:', validatedData);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Message received. We will contact you shortly.' 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: 'Server error, please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}