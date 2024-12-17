import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

interface AboutSectionProps {
  about: string;
  socials: {
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export function AboutSection({ about, socials }: AboutSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">About me</h2>
      <Card>
        <CardContent className="p-6">
          <p className="mb-4 text-muted-foreground">{about}</p>
          <div className="flex space-x-4">
            {socials.linkedin && (
              <Button asChild variant="outline">
                <Link
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            )}
            {socials.youtube && (
              <Button asChild variant="outline">
                <Link
                  href={socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="mr-2 h-4 w-4" />
                  YouTube
                </Link>
              </Button>
            )}
            {socials.facebook && (
              <Button asChild variant="outline">
                <Link
                  href={socials.facebook!}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
