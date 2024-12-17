import { getDummyProfileData } from "@/lib/data";
import { ProfileSidebar } from "@/components/Profile-Siderbar";
import { ProfileContent } from "@/components/Profile-Content";
import { Footer } from "@/components/Footer";

export default async function HomePage() {
  const profile = await getDummyProfileData();

  return (
    <div className="flex flex-col md:flex-row gap-0 lg:gap-8">
      <aside className="w-full md:w-1/4">
        <div className="block md:sticky top-16">
          <ProfileSidebar />
        </div>
      </aside>
      <div className="lg:w-2/3 px-4 py-9">
        <ProfileContent profile={profile} />
        <Footer />
      </div>
    </div>
  );
}
