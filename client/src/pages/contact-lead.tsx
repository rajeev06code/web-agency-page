import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  message: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

const ContactLead = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "Web Development",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_ID;

    // Create a new object that contains dynamic template params
    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      to_name: "Rajeev Sharma",
      message: data.message,
      projectType: `{${data.projectType}${data.phone}}`,
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
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    } catch (innerError: any) {
      console.error("Error submitting form: ", innerError);

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
    <div className="min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-primary/10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-transparent to-primary/10"></div>
      <div
        className="absolute top-32 right-10 w-48 h-48 border border-primary/5 animate-rotate"
        style={{ animationDuration: "50s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-20 max-w-3xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Get in touch<span className="text-primary">.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up animate-delay-100">
            Business owner or solo entrepreneur,need website or mobile app?
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Form container with border effect */}
            <div className="relative z-10">
              <div className="absolute -top-3 -left-3 -right-3 -bottom-3 border border-primary/5 -z-10"></div>
              <div className="bg-background/50 backdrop-blur-sm border border-primary/10 p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-8">Send us a message</h2>

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
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-medium">
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 123-4567"
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
                                Website design and development
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

                    {/* <FormField
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
                    /> */}

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
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLead;