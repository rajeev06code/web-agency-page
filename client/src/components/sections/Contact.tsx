import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "Web Development",
      message: "",
    },
  });

  const [isFirebaseConfigured, setIsFirebaseConfigured] =
    useState<boolean>(true);

  // useEffect(() => {
  //   // Check if Firebase is properly configured on component mount
  //   const checkFirebaseConfig = async () => {
  //     try {
  //       // Simple test to see if we can access Firestore
  //       const testCollection = collection(db, "connectionTest");
  //       setIsFirebaseConfigured(true);
  //     } catch (error) {
  //       console.warn("Firebase may not be properly configured:", error);
  //       setIsFirebaseConfigured(false);
  //     }
  //   };

  //   checkFirebaseConfig();
  // }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_ID;

    // Create a new object that contains dynamic template params
    const templateParams = {
      name: data.name,
      email: data.email,
      to_name: "Rajeev Sharma",
      message: data.message,
      projectType: data.projectType,
    };

    // Send the email using EmailJS

    try {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          if (response.status === 200) {
            form.reset();
            setIsSubmitting(false);
            toast({
              title: "Message sent successfully!",
              description: "We'll get back to you as soon as possible.",
            });
          }

          // setName('');
          // setEmail('');
          // setMessage('');
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    } catch (innerError: any) {
      console.error("Error submitting form to Firestore: ", innerError);

      // Get more specific error information
      let errorMessage =
        "Please refer to the FIREBASE_SETUP_GUIDE.md file for setup instructions.";
      let errorTitle = "Unable to submit form!";

      if (innerError.code === "permission-denied") {
        errorTitle = "Firebase security rules issue";
        errorMessage =
          "Update Firestore security rules to allow writing to the contactSubmissions collection.";
      } else if (innerError.code === "unavailable") {
        errorTitle = "Connection issue";
        errorMessage =
          "Check your internet connection or Firebase service status.";
      } else if (innerError.code === "not-found") {
        errorTitle = "Collection not found";
        errorMessage =
          "Create a 'contactSubmissions' collection in your Firestore database.";
      }

      toast({
        title: errorTitle,
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-primary/10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent to-primary/10"></div>
      <div
        className="absolute top-32 right-10 w-48 h-48 border border-primary/5 animate-rotate"
        style={{ animationDuration: "50s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-20 max-w-3xl">
          <div className="inline-block mb-4">
            <div className="flex items-center">
              <div className="w-10 h-px bg-primary mr-4"></div>
              <span className="text-sm uppercase tracking-widest font-medium text-primary">
                Contact
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Get in touch<span className="text-primary">.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl animate-slide-up animate-delay-100">
            Have a project in mind? Reach out to us and discover how we can help
            transform your digital vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative">
            {/* Form container with border effect */}
            <div className="relative z-10">
              <div className="absolute -top-3 -left-3 -right-3 -bottom-3 border border-primary/5 -z-10"></div>
              <div className="bg-background/50 backdrop-blur-sm border border-primary/10 p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-8">Send us a message</h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-sm font-medium">
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                className="border-primary/10 focus:border-primary/30 bg-transparent"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-sm font-medium">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                                className="border-primary/10 focus:border-primary/30 bg-transparent"
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium">
                            Project Type
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-primary/10 focus:border-primary/30 bg-transparent">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Web Development">
                                Web Development
                              </SelectItem>
                              <SelectItem value="Mobile App">
                                Mobile App
                              </SelectItem>
                              <SelectItem value="UI/UX Design">
                                UI/UX Design
                              </SelectItem>
                              <SelectItem value="MVP Development">
                                MVP Development
                              </SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium">
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              rows={5}
                              {...field}
                              className="border-primary/10 focus:border-primary/30 bg-transparent resize-none"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 group"
                      disabled={isSubmitting}
                    >
                      <span className="flex items-center">
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && (
                          <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        )}
                      </span>
                    </Button>

                    {/* <div className="text-xs text-muted-foreground text-center mt-4 space-y-1">
                      <p>
                        Your data will be stored in Firebase to enable us to
                        respond to your request.
                      </p>
                      <p className="text-primary/70">
                        Note: You may need to set up Firestore security rules to
                        allow write access.
                      </p>
                    </div> */}
                  </form>
                </Form>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute top-24 -left-4 w-32 h-32 border border-primary/5 animate-rotate"
              style={{ animationDuration: "30s" }}
            ></div>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's talk</h3>
                <p className="text-muted-foreground mb-8 max-w-md">
                  We'd love to hear from you. Fill out the form or contact us
                  directly using the information below.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mr-6">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a
                      href="mailto:hello@PixelBuilders.com"
                      className="text-primary hover:underline transition-all"
                    >
                     support@pixelbuilders.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mr-6">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-primary hover:underline transition-all"
                    >
                      +91-9661313766
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mr-6">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-muted-foreground">Samastipur,Bihar</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-primary/10">
                <h4 className="font-bold mb-5">Follow Us</h4>
                <div className="flex space-x-5">
                  <a
                    href="#"
                    className="w-10 h-10 border border-primary/20 flex items-center justify-center hover:border-primary transition-colors group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:text-primary transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-primary/20 flex items-center justify-center hover:border-primary transition-colors group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:text-primary transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-primary/20 flex items-center justify-center hover:border-primary transition-colors group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:text-primary transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-primary/20 flex items-center justify-center hover:border-primary transition-colors group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:text-primary transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
