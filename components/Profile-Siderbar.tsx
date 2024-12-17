import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileSidebar() {
  const profile = {
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
    ratings: 18,
    testimonials: 15,
    averageRating: 4.8,
    badges: ["Top 1%", "Popular", "935 Bookings"],
    bookings: 935,
    socialLinks: {
      facebook: "https://www.facebook.com/ramesh.hardiwla",
    },
  };

  return (
    <div className="w-full bg-[#E75A4E] p-8 shadow-white md:mt-0 mt-14 h-full md:min-h-screen text-black">
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="h-40 w-40">
          <AvatarImage
            src={profile.image}
            width={160}
            height={160}
            className="object-cover"
          />
          <AvatarFallback>
            <div className="animate-pulse bg-gray-800 w-[160px] h-[160px]">
              {/* {profile.name[0]} */}
            </div>
          </AvatarFallback>
        </Avatar>
        <h1 className="text-2xl lg:text-3xl font-bold">{profile.name}</h1>
        <p className="text-center text-sm">{profile.title}</p>

        <div className="mt-8">
          <h3 className="mb-4 font-semibold uppercase">Highly Rated In</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-white/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
