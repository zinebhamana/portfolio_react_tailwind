import { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/movppaqp", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message envoyé avec succès ");
      form.reset();
    } else {
      setStatus("Une erreur s'est produite ");
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto max-w-7xl px-4 md:px-8 mt-20 mb-10 mr-10"
    >
      <div className="w-full max-w-xl text-center mt-1">
        <h1 className="text-4xl font-bold mb-6">
          <span className="text-glow">Contact</span>{" "}
          <span className="text-primary">Me</span>
        </h1>

        <div className="border-theme rounded-lg py-12 px-6 ">
          <form onSubmit={handleSubmit} className="space-y-4">
           <input
  type="text"
  name="name"
  placeholder="Your Name"
  className="
    w-full rounded-md
    border-theme
    bg-transparent
    px-4 py-3
    text-gray-500
    caret-primary
    placeholder:text-primary/50
    focus:outline-none
    focus:ring-2
    focus:ring-primary
  "
/>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className=" w-full rounded-md
    border-theme
    bg-transparent
    px-4 py-3
    text-gray-500
    caret-primary
    placeholder:text-primary/50
    focus:outline-none
    focus:ring-2
    focus:ring-primary
  "
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="
  w-full rounded-md
    border-theme
    bg-transparent
    px-4 py-3
    text-gray-500
    caret-primary
    placeholder:text-primary/50
    focus:outline-none
    focus:ring-2
    focus:ring-primary
"
            />

            <button
              type="submit"
              className="gradient-border w-full rounded-md bg-primary px-6 py-3 font-semibold"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm text-green-500 mt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
