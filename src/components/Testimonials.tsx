"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const testimonials = [
  {
    rating: 5,
    feedback:
      "The vehicle transfer is well organized by your company. Drivers are very professional, friendly, polite, and patient. A big thank you to the driver for their exceptional kindness.",
    client: "Orange Business Services",
    role: "Fleet Manager",
  },
  {
    rating: 5,
    feedback:
      "We regularly use your services because they are always high quality. The teams at My Express Driver make it their priority to ensure our satisfaction. The added bonus? The positivity and good humor of your team. Very happy to have you as our partner.",
    client: "Alpha Finance Services",
    role: "Fleet Manager",
  },
  {
    rating: 5,
    feedback: "Very professional from pick-up to delivery!",
    client: "BEEV",
    role: "Sales Manager",
  },
  {
    rating: 5,
    feedback:
      "When I need an express delivery, I immediately think of My Express Driver because I know they will handle it.",
    client: "Roulenloc",
    role: "Logistics Manager",
  },
  {
    rating: 5,
    feedback:
      "Djamel delivered my vehicle within the promised time with great professionalism. A very professional and pleasant person. I highly recommend him.",
    client: "Dalkia",
    role: "Employee",
  },
  {
    rating: 5,
    feedback:
      "With My Express Driver, managing vehicle transfers is easy, and the rates are advantageous.",
    client: "Clauger",
    role: "Fleet Manager",
  },
];
export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }

  function handlePreviousSlide() {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }

  return (
    <div className="p-4 w-full">
      <div className="w-full overflow-hidden rounded-2xl grid grid-cols-1">
        <h2 className="text-2xl text-primary font-semibold underline underline-offset-4">
          Testimonials
        </h2>
        <p className="text-neutral-500 text-sm">
          Why people love using MyExpress driver to get more done.
        </p>
        <div className="flex justify-end gap-2">
          <button
            className="group inline-flex size-7 items-center justify-center rounded-full bg-primary t p-1.5 "
            disabled={currentSlide === 0}
            onClick={handlePreviousSlide}
            type="button"
          >
            <ArrowLeftIcon className="transform-gpu stroke-link transition-colors group-disabled:stroke-link/40" />
          </button>
          <button
            className="group inline-flex size-7 items-center justify-center rounded-full bg-primary t p-1.5 "
            disabled={currentSlide === testimonials.length - 1}
            onClick={handleNextSlide}
            type="button"
          >
            <ArrowRightIcon className="transform-gpu stroke-link transition-colors group-disabled:stroke-link/40" />
          </button>
        </div>
        <section className="mt-8 flex w-full gap-2 *:shrink-0">
          {testimonials.map((testimonial, index) => {
            return (
              <AnimatePresence key={testimonial.feedback} mode="popLayout">
                {index >= currentSlide && (
                  <motion.div
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    className="flex h-60 w-[24rem] flex-col justify-between rounded-lg border-primary/10 p-4 border  "
                    exit={{ opacity: 0, x: 0, scale: 0.8, rotate: 3 }}
                    initial={{ opacity: 0, x: 0, scale: 0.8 }}
                    layout={true}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div className="size-7 rounded-full bg-neutral-300" />
                    <p className="font-medium text-neutral-600 leading-5 tracking-tight dark:text-neutral-400">
                      {testimonial.feedback}
                    </p>
                    <p className="text-neutral-400 text-xs dark:text-neutral-500">
                      {testimonial.client} - {testimonial.role}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Testimonials;
