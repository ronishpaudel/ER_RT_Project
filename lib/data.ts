import { Profile } from "./type";

export async function getDummyProfileData(): Promise<Profile> {
  // This would normally fetch from a database
  return {
    name: "Er. Ramesh Tharu",
    title:
      "AI Engineer/ML Scientist | Instructor at Udemy | Software Developer | M.Phil in ICT | M.E. in CSE | B.E. in Computer Science",
    image: "/img/ramesh_sir.jpg",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "Teaching",
    ],
    about:
      "Hi, I'm Er. Ramesh Tharu, an AI Engineer and ML Scientist with extensive experience in software development and teaching. I'm passionate about helping aspiring AI and ML professionals succeed in their careers.",
    socials: {
      facebook: "https://www.facebook.com/ramesh.hardiwla",
    },
    services: [
      {
        id: "1",
        title: "AI/ML Interview Preparation",
        description:
          "Comprehensive guide to ace your AI and Machine Learning interviews",
        type: "product",
        price: 499,
        rating: 4.8,
        popular: true,
      },
      {
        id: "2",
        title: "1:1 AI/ML Mentoring Session",
        description: "Personal mentoring session for AI and ML career guidance",
        type: "call",
        duration: "60 mins",
        price: 999,
        rating: 5.0,
        popular: false,
      },
      {
        id: "3",
        title: "Priority AI/ML Support",
        description: "Get your AI and ML questions answered within 24 hours",
        type: "dm",
        price: 299,
        rating: 4.9,
        popular: true,
      },
    ],
    testimonials: [
      {
        id: "1",
        text: "Er. Ramesh's AI course was incredibly insightful. It cleared all my doubts about machine learning!",
        author: "Priya Sharma",
        rating: 5,
        date: "2024-12-01",
      },
      {
        id: "2",
        text: "Great instructor, explains complex AI concepts in simple terms. Highly recommended!",
        author: "Raj Patel",
        rating: 5,
        date: "2024-12-05",
      },
    ],
    // ratings: 18,
    // averageRating: 4.8,
    // badges: ["Top 1%", "Popular", "935 Bookings"],
    // bookings: 935,
  };
}
