"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCard } from "@/components/Service-Card";
import { Profile } from "@/lib/type";
import { TestimonialsSection } from "./Testimonial-Section";
import { AboutSection } from "./About-Section";

export function ProfileContent({ profile }: { profile: Profile }) {
  const [filter, setFilter] = useState("all");

  const filteredServices = profile.services.filter((service) =>
    filter === "all" ? true : service.type === filter
  );

  return (
    <div className="p-0 pt-8 lg:p-8">
      <AboutSection about={profile.about} socials={profile.socials} />

      <Tabs defaultValue="all" className="mt-8">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setFilter("all")}>
            All
          </TabsTrigger>
          <TabsTrigger value="call" onClick={() => setFilter("call")}>
            1:1 Call
          </TabsTrigger>
          <TabsTrigger value="dm" onClick={() => setFilter("dm")}>
            Priority DM
          </TabsTrigger>
          <TabsTrigger value="product" onClick={() => setFilter("product")}>
            Digital Product
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <TestimonialsSection testimonials={profile.testimonials} />
    </div>
  );
}
