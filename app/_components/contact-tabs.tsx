"use client";

import { CalendarClock, MessageSquare } from "lucide-react";

import CalBookingEmbed from "@/components/cal-booking-embed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ContactForm from "./contact-form";

export default function ContactTabs() {
  return (
    <Tabs defaultValue="booking">
      <TabsList className="mx-auto h-auto w-full max-w-xs rounded-full border border-zinc-200 bg-zinc-100 p-1 py-5">
        <TabsTrigger
          value="booking"
          className="gap-2 rounded-full py-4 text-ink-secondary transition-colors duration-300 data-active:bg-ink data-active:text-white data-active:shadow-none"
        >
          <CalendarClock className="size-4" aria-hidden="true" />
          Book a Call
        </TabsTrigger>
        <TabsTrigger
          value="message"
          className="gap-2 rounded-full py-4 text-ink-secondary transition-colors duration-300 data-active:bg-ink data-active:text-white data-active:shadow-none"
        >
          <MessageSquare className="size-4" aria-hidden="true" />
          Send a Message
        </TabsTrigger>
      </TabsList>

      <TabsContent
        value="booking"
        className="mt-10 duration-300 animate-in fade-in-0 slide-in-from-bottom-2 motion-reduce:animate-none"
      >
        <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white sm:rounded-[20px]">
          <CalBookingEmbed />
        </div>
      </TabsContent>

      <TabsContent
        value="message"
        className="mt-10 duration-300 animate-in fade-in-0 slide-in-from-bottom-2 motion-reduce:animate-none"
      >
        <ContactForm />
      </TabsContent>
    </Tabs>
  );
}
