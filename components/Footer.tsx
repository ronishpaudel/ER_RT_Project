import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ramesh Sir</h3>
            <p className="text-sm text-muted-foreground">
              Connecting mentors and mentees for professional growth.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mentors" className="text-sm hover:underline">
                  Find a Mentor
                </Link>
              </li>
              <li>
                <Link
                  href="/become-a-mentor"
                  className="text-sm hover:underline"
                >
                  Become a Mentor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              Email: support@rameshSir.io
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-sm hover:underline">
                Twitter
              </Link>
              <Link href="#" className="text-sm hover:underline">
                LinkedIn
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Facebook
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Er.Rc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
