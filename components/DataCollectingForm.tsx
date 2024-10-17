import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";


interface FormData {
  name: string;
  email: string;
  message: string;
}

const DataCollectingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s.pageclip.co/v1/pageclip.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted");
    setIsSubmitting(false);
    setShowThankYou(true);

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Hide thank you message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-lg sm:max-w-xl mx-auto mt-8 p-4 sm:p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Get in Touch</h2>
      {showThankYou ? (
        <div className="text-center py-4 px-4 bg-green-500 rounded-lg text-white animate-fade-in-out">
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p>Your message has been sent successfully.</p>
        </div>
      ) : (
        <form
          action="https://send.pageclip.co/jGv7Pi1MwF4byGKSX5w7XEXjGlZAi77a/DataCollectingExample"
          className="pageclip-form space-y-4"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 focus:border-white/30 focus:ring focus:ring-white/30 focus:ring-opacity-50 text-white placeholder-gray-400 px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 focus:border-white/30 focus:ring focus:ring-white/30 focus:ring-opacity-50 text-white placeholder-gray-400 px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              required
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md bg-white/5 border border-white/10 focus:border-white/30 focus:ring focus:ring-white/30 focus:ring-opacity-50 text-white placeholder-gray-400 px-3 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
};

export default DataCollectingForm;
