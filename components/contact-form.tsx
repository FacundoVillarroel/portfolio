"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { submitContactForm } from "@/actions/contact-form";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResponse, setFormResponse] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFormResponse(null);

    try {
      const response = await submitContactForm(data);
      setFormResponse(response);

      if (response.success) {
        reset(); // Clear the form on success
      }
    } catch (error) {
      setFormResponse({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {formResponse && (
        <Alert
          className={
            formResponse.success
              ? "bg-green-50 text-green-800 border-green-200"
              : "bg-red-50 text-red-800 border-red-200"
          }
        >
          <AlertDescription>{formResponse.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="first-name"
            className={errors.firstName ? "text-red-500" : ""}
          >
            First name
          </Label>
          <Input
            id="first-name"
            {...register("firstName")}
            placeholder="Enter your first name"
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-xs text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="last-name"
            className={errors.lastName ? "text-red-500" : ""}
          >
            Last name
          </Label>
          <Input
            id="last-name"
            {...register("lastName")}
            placeholder="Enter your last name"
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-xs text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={errors.email ? "text-red-500" : ""}>
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="subject"
          className={errors.subject ? "text-red-500" : ""}
        >
          Subject
        </Label>
        <Input
          id="subject"
          {...register("subject")}
          placeholder="Enter the subject"
          className={errors.subject ? "border-red-500" : ""}
        />
        {errors.subject && (
          <p className="text-xs text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="message"
          className={errors.message ? "text-red-500" : ""}
        >
          Message
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Enter your message"
          className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
