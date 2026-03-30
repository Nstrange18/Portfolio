import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpqqaaek", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-[#0b0b10]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-130 w-130 rounded-full blur-3xl opacity-20 bg-blue-500/20" />
      
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/15" />
          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Contact
          </h2>
          <div className="h-px flex-1 bg-white/15" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Let's connect</h3>
            <p className="text-white/60 mb-8 max-w-md">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white">
                  <Icon icon="tabler:mail" className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <a href="mailto:hello@example.com" className="text-white hover:text-white/80 transition">nwubachukwuemelie@example.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white">
                  <Icon icon="tabler:brand-github" className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-white/50">GitHub</p>
                  <a href="https://github.com/Nstrange18" target="_blank" className="text-white hover:text-white/80 transition">Nstrange18</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="johndoe@example.com"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition"
                ></textarea>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-black transition hover:bg-white/90 active:scale-95 disabled:cursor-not-allowed disabled:bg-white/50 disabled:active:scale-100 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="tabler:loader-2" className="animate-spin text-xl" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {status === "success" && (
                  <p className="text-center text-sm text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    Oops! There was a problem submitting your form.
                  </p>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;