import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { BloomingFlower } from "./Blooming-Flower";

interface Testimonial {
  id: string;
  text: string;
  author: string;
  rating: number;
  date: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section className="mt-12">
      <div className="mb-8 flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <BloomingFlower />
          <h2 className="ml-4 text-3xl font-bold">Testimonials</h2>
        </div>
        <div className="flex items-center bg-yellow-100 rounded-full px-6 py-2">
          <div className="mr-2 text-2xl font-bold">{averageRating}</div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 ${
                  i < Math.floor(Number(averageRating))
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="ml-2 text-sm text-gray-600">
            ({testimonials.length} reviews)
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardContent className="p-6">
              <div className="mb-2 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">{testimonial.text}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">{testimonial.author}</span>
                <span className="text-muted-foreground">
                  {testimonial.date}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
