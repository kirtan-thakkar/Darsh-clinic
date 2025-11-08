"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { BlurredStagger } from "../ui/blurred-stagger-text";
import Link from "next/link";
import { cn } from "../../lib/utils";

export default function StaggeredFAQSection({
  title = "StaggeredFAQ",
  subtitle = "Everything you need to know about Ruixen UI",
  supportText = "Can&apos;t find what you&apos;re looking for? Reach out to our",
  supportLink = "#",
  supportLinkText = "Ruixen UI support team",
  faqItems,
  className,
  hideSupport = false
}) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-foreground text-4xl font-semibold">{title}</h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg">
              {subtitle}
            </p>
            {!hideSupport && (
              <p className="text-muted-foreground mt-6 hidden md:block">
                {supportText}{" "}
                <Link href={supportLink} className="text-primary font-medium hover:underline">
                  {supportLinkText}
                </Link>{" "}
                for assistance.
              </p>
            )}
          </div>

          <div className="md:col-span-3">
            <Accordion type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-200 dark:border-gray-600">
                  <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {!hideSupport && (
            <p className="text-muted-foreground mt-6 md:hidden">
              {supportText}{" "}
              <Link href={supportLink} className="text-primary font-medium hover:underline">
                {supportLinkText}
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
