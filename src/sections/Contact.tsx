import { useForm } from "@mantine/form";
import { zodResolver } from 'mantine-form-zod-resolver'; 
import { z } from "zod";
import { TextInput, Textarea, Select, Button } from "@mantine/core";
import { useState } from "react";
import { CONTACT_INFO, SERVICE_OPTIONS } from "../constants";
import { YellowPattern } from "../components/YellowPattern";


const consultationSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ConsultationValues = z.infer<typeof consultationSchema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ConsultationValues>({
    initialValues: { 
      email: "", 
      service: "", 
      message: "" 
    },
    validate: zodResolver(consultationSchema), 
  });

  const handleSubmit = (values: ConsultationValues) => {
    console.log("Consultation:", values);
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-8 md:px-10 lg:grid-cols-2">
        <div className="bg-cream p-10 md:p-14">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">Contact</span>
          <h2 className="mb-10 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            Get in touch <br /> with us
          </h2>
          <ul className="space-y-6">
            {CONTACT_INFO.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 items-center justify-center bg-gold text-ink">
                  <Icon size={16} />
                </span>
                <span className="text-ink/85">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden bg-white p-20 md:p-14">
          <YellowPattern className="absolute inset-0 h-full w-full opacity-80" />
          <div className="relative">
            <h3 className="mb-8 font-serif text-3xl font-bold text-ink md:text-4xl">Free Consultation</h3>
            <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-5">
              <TextInput 
                placeholder="Your Email" 
                variant="filled" 
                classNames={{ input: "border-b border-ink/40 pb-2 placeholder:text-ink/60 rounded-none" }} 
                {...form.getInputProps("email")} 
              />
              <Select 
                placeholder="Subject" 
                data={SERVICE_OPTIONS} 
                variant="filled" 
                classNames={{ input: "border-b border-ink/40 pb-2 placeholder:text-ink/60 rounded-none" }} 
                {...form.getInputProps("service")} 
              />
              <Textarea 
                placeholder="Message" 
                minRows={3} 
                autosize 
                variant="filled" 
                classNames={{ input: "border-b border-ink/40 pb-2 placeholder:text-ink/60 rounded-none" }} 
                {...form.getInputProps("message")} 
              />
              <div className="flex justify-start pt-2">
              <Button 
                type="submit" 
                radius={0} 
                size="lg" 
                styles={{ root: { backgroundColor: "#0D0D0D" , fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", height: '54px' } }}
              >
                Submit
              </Button>
              </div>
              {submitted && <p className="mt-4 text-sm font-medium text-ink">Thanks — we'll be in touch shortly.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}