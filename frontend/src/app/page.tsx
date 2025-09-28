import Link from "next/link";
import { FiUser, FiLock, FiShield, FiGrid, FiEye, FiMail, FiStar, FiBriefcase, FiAward } from "react-icons/fi";
import Image from "next/image";

const featuredProjects = [
  {
    id: 1,
    title: "Digital Art Collection",
    description: "A series of digital illustrations exploring modern themes",
    image: "https://images.unsplash.com/photo-1749569198333-b772fea6bdd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTkwNzc5NDB8&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Digital art collection thumbnail",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description: "Complete brand identity for a tech startup",
    image: "https://images.unsplash.com/photo-1685477111327-4fa59d68cfbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTkwNzc5NDB8&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Brand identity design showcase",
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description: "Professional photography portfolio with diverse subjects",
    image: "https://images.unsplash.com/photo-1646831874061-7a795935b143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTkwNzc5Mzl8&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Photography portfolio cover image",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Art Director",
    quote: "CreativePortfolio helped me showcase my work professionally and connect with amazing clients.",
    image: "https://images.unsplash.com/photo-1739551757773-bd3ea56e9330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTkwNzc5Mzl8&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Sarah Johnson portrait",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelance Designer",
    quote: "The platform's ease of use and beautiful templates made presenting my portfolio a breeze.",
    image: "https://images.unsplash.com/photo-1640076104332-cda8e092b44c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTkwNzc5Mzh8&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Michael Chen portrait",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 text-center bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Showcase Your Creativity
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                A professional platform for artists, designers, and creatives to display their work and connect with clients.
              </p>
            </div>
            <div className="space-x-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
              >
                Join Now
              </Link>
              <Link
                href="/gallery"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              >
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
            <p className="max-w-[85%] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to create an impressive portfolio
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-transform hover:scale-105">
              <div className="p-3 rounded-full bg-primary-100">
                <FiGrid className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold">Portfolio Gallery</h3>
              <p className="text-sm text-gray-600 text-center">
                Beautifully display your work in customizable galleries that showcase your creative projects.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-transform hover:scale-105">
              <div className="p-3 rounded-full bg-primary-100">
                <FiUser className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold">User Profiles</h3>
              <p className="text-sm text-gray-600 text-center">
                Create detailed profiles with bios, skills, and contact information to attract potential clients.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-transform hover:scale-105">
              <div className="p-3 rounded-full bg-primary-100">
                <FiBriefcase className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold">Project Management</h3>
              <p className="text-sm text-gray-600 text-center">
                Organize your projects with categories, tags, and detailed descriptions for easy navigation.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-transform hover:scale-105">
              <div className="p-3 rounded-full bg-primary-100">
                <FiMail className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold">Client Connection</h3>
              <p className="text-sm text-gray-600 text-center">
                Built-in tools to help you connect with potential clients and showcase your availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="max-w-[85%] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover amazing work from talented creators on our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    href={`/project/${project.id}`}
                    className="text-primary-600 hover:text-primary-800 font-medium transition"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Users Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary-500">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[58rem] flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Showcase Your Work?</h2>
            <p className="max-w-[85%] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join CreativePortfolio today and start displaying your creative projects to the world.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
              >
                Get Started
              </Link>
              <Link
                href="/gallery"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}