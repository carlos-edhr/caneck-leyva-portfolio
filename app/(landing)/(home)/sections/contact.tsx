"use client";

import { useRef, useState, useEffect } from "react";
import type { ReactElement } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

interface FormState {
  name: string;
  email?: string;
  message: string;
}

type FormField = keyof FormState;

const Contact = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name as FormField]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (!mounted || !formRef.current) return;

    setLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables not configured");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!"); // Success toast
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again."); // Error toast
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return <div />;

  return (
    <section id="contact" className="flex-center  bg-white font-roboto  ">
      <div className="w-full h-full md:px-10 px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-2">
            Caneck Leyva's Fine Art Photography
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-4"></div>
          <h3 className="text-4xl font-light text-gray-900 uppercase tracking-wider">
            Contact Me
          </h3>
        </div>
        <div className="grid-12-cols mt-16 font-light tracking-wider">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name" className="text-zinc-950">
                    Your name
                  </label>
                  <input
                    className="bg-zinc-900"
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Write your name here."
                    required
                  />
                </div>

                {/* <div>
                  <label htmlFor="email" className="text-zinc-950">
                    Your Email
                  </label>
                  <input
                    className="bg-zinc-900"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Write your email address here."
                    required
                  />
                </div> */}

                <div>
                  <label htmlFor="message" className="text-zinc-950">
                    Your Message
                  </label>
                  <textarea
                    className="bg-zinc-900"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here, please include all relevant details and contact information."
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group bg-zinc-900">
                    <div className="bg-circle" />
                    <p className="text-white text-xl uppercase font-light tracking-wider">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className=" w-full h-full  overflow-hidden">
              <img
                src="/logos/logo.png"
                alt="Contact Experience"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
