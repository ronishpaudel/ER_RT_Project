export interface Profile {
  name: string;
  title: string;
  image: string;
  skills: string[];
  about: string;
  socials: {
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
  services: Service[];
  testimonials: Testimonial[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  type: "call" | "dm" | "product";
  price: number;
  duration?: string;
  rating: number;
  popular: boolean;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  rating: number;
  date: string;
}
