import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import type { Service } from "@/lib/type";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-primary" />
          <span>{service.rating}</span>
        </div>
        {service.popular && (
          <span className="text-sm text-blue-500">Popular</span>
        )}
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {service.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              {service.type === "product"
                ? "Digital Product"
                : service.duration}
            </p>
            <p className="font-semibold">₹{service.price}</p>
          </div>
          <Button>Book Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}
