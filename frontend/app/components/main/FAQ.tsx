"use client"
import React, { useState } from "react";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const faqItems = [
  {
    question: "What is included in a visit?",
    answer:
      "Each visit includes feeding, fresh water, a litter tray check and tidy, a general wellbeing check, and time for attention or play depending on your cat’s personality and routine.",
  },
  {
    question: "Do cats stay in their own home?",
    answer:
      "Yes. Shortlegs-N-Paws is a home visit cat sitting service, so your cat stays in their familiar environment while receiving care.",
  },
  {
    question: "Will I get updates while I'm away?",
    answer:
      "Yes, updates can be provided after visits so you know your cat has been checked on, cared for, and is doing well.",
  },
  {
    question: "Can you care for shy or nervous cats?",
    answer:
      "Yes. Visits are tailored to each cat's temperament. Some cats enjoy play and attention, while others simply prefer a calm presence and their routine being maintained.",
  },
  {
    question: "How do I book?",
    answer:
      "You can get in touch through the website to ask about availability, discuss your cat’s needs, and arrange the best visit option for your dates.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFAQ(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="bg-[#fffaf4] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mt-4 text-base leading-7 text-stone-600">
            Everything you may want to know about visits, updates, and how care
            is tailored to your cat.
          </p>
        </div>

        <div className="mt-12 space-y-4 lg:hidden">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold text-stone-900 sm:text-base">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-amber-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-amber-100 px-5 py-4 text-sm leading-7 text-stone-600 sm:px-6 sm:text-base">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-stone-900">
                {item.question}
              </h3>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <section id="contact" className="pt-8 sm:pt-10">
          <div className="rounded-3xl border border-amber-100 bg-white p-6 text-center shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
              Still have a question?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
              Get in touch to ask about availability, discuss your cat&apos;s
              needs, or find the best visit option for your trip.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:shortlegs_lisa@hotmail.co.uk?subject=Cat%20Sitting%20Enquiry"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact by Email
              </a>

              <a
                href="https://wa.me/447568073267"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-emerald-200 bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                <BsWhatsapp className="mr-2 h-4 w-4" />
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}