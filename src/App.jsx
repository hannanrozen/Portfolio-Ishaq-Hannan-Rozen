import React, { useState, useCallback, useMemo } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Instagram,
  Figma,
  Linkedin,
} from "lucide-react";
import {
  useScrollEffect,
  useIntersectionObserver,
} from "./hooks/useScrollEffect";

// Import your assets
import Logo from "./assets/images/Logo.svg";
import ProfileImage from "./assets/images/Profile.jpg";
import Project1Image from "./assets/images/Project1.png";
import Project2Image from "./assets/images/Project2.png";
import Project3Image from "./assets/images/Project3.png";

// Memoized components for better performance
const NavigationItem = React.memo(({ item, activeSection, onClick }) => (
  <button
    onClick={() => onClick(item)}
    className={`px-3 py-2 text-sm font-medium capitalize transition-colors relative ${
      activeSection === item
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`}
  >
    {item}
    {activeSection === item && (
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600" />
    )}
  </button>
));

const SkillCard = React.memo(({ skill, index }) => (
  <div
    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 transition-all duration-300 cursor-pointer"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <span className="text-2xl">{skill.icon}</span>
    <span className="font-medium text-gray-800">{skill.name}</span>
  </div>
));

const ProjectCard = React.memo(({ project }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={20} />
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                aria-label={`View ${project.title} on Figma`}
              >
                <Figma size={20} />
              </a>
            )}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              aria-label={`View ${project.title} demo`}
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={`${project.id}-${tech}-${index}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrolled, activeSection } = useScrollEffect();

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Memoized data to prevent unnecessary re-renders
  const skills = useMemo(
    () => [
      { name: "Figma", icon: "🎨" },
      { name: "HTML5", icon: "📝" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "React", icon: "⚛️" },
      { name: "Git", icon: "📦" },
      { name: "Responsive Design", icon: "📱" },
    ],
    []
  );

  // Update projects with your actual images
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Bale Raos Website Slicing",
        description:
          "Website restoran Bale Raos yang responsive dan mobile-friendly. Dibuat dengan HTML dan Tailwind CSS berdasarkan desain Figma. Fokus pada layout semantik, konsistensi UI, dan optimalisasi tampilan lintas perangkat.",
        image: Project1Image,
        tech: ["HTML", "Tailwind CSS", "Responsive Design"],
        github: "https://github.com/hannanrozen/-DAY-24---Mini-Project.git",
        demo: "https://drive.google.com/file/d/1mcMSipBDe6WFewAOqG_64xKN3M5N_PBr/view?usp=drive_link",
      },
      {
        id: 2,
        title: "Dibimbing Blog & Article Page Slicing",
        description:
          "Slicing halaman artikel dan blog dari website Dibimbing menggunakan HTML dan CSS. Menjaga kesesuaian visual dengan desain serta memastikan tampilan yang rapi dan responsif di berbagai ukuran layar.",
        image: Project2Image,
        tech: ["HTML", "CSS"],
        github: "https://github.com/hannanrozen/Dibimbing-Slicing.git",
        demo: "https://drive.google.com/file/d/1SosO3FVGD7asKI2CVy7usSpitz6DcVFA/view?usp=drive_link",
      },
      {
        id: 3,
        title: "House of Raminten Website Redesign",
        description:
          "Redesign UI website restoran House of Raminten dengan pendekatan modern dan elegan. Dibuat di Figma, dengan fokus pada navigasi yang lebih sederhana, visual gelap, dan aksen warna gold untuk memperkuat branding.",
        image: Project3Image,
        tech: ["Figma", "UI/UX Design", "Design System"],
        figma:
          "https://www.figma.com/design/LxDtCyfMYw7bGDt85LZ55c/Assignment-EC1-Ishaq-Hannan-Rozen?node-id=0-1&t=5HfSofbiTm2yQzCa-1",
        demo: "https://www.figma.com/proto/LxDtCyfMYw7bGDt85LZ55c/Assignment-EC1-Ishaq-Hannan-Rozen?page-id=0%3A1&node-id=2-6&viewport=468%2C610%2C0.15&t=oYwsqqXtdvanIByl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A6",
      },
    ],
    []
  );

  const navigationItems = useMemo(
    () => ["home", "about", "projects", "contact"],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-glass shadow-lg border-b border-white/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center hover:scale-105 transition-transform"
                aria-label="Go to home section"
              >
                <img src={Logo} alt="IHR Logo" className="h-10 w-auto" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-1">
                {navigationItems.map((item) => (
                  <NavigationItem
                    key={item}
                    item={item}
                    activeSection={activeSection}
                    onClick={scrollToSection}
                  />
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-glass border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 text-base font-medium capitalize transition-colors w-full text-left ${
                    activeSection === item
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient">Ishaq Hannan</span>
                <br />
                <span className="text-gray-800">Rozen</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Frontend Developer & UI/UX Designer passionate about creating
                beautiful, functional web experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="btn-gradient"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={ProfileImage}
                    alt="Ishaq Hannan Rozen"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl animate-bounce-slow">
                  👋
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Frontend Developer and UI/UX Designer with
              expertise in modern web technologies. I love creating
              user-centered digital experiences that are both beautiful and
              functional.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills in
              frontend development and UI/UX design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection scrollToSection={scrollToSection} />
    </div>
  );
};

// Contact Components
const ContactItem = React.memo(({ icon: IconComponent, title, content }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
      <IconComponent size={20} />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
));

const SocialLink = React.memo(({ href, icon: IconComponent, emoji, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
    aria-label={label}
  >
    {IconComponent ? (
      <IconComponent size={20} />
    ) : (
      <span className="text-lg">{emoji}</span>
    )}
  </a>
));

const ContactForm = React.memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      // Add your form submission logic here
    },
    [formData]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextAreaField
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
      />
      <button type="submit" className="w-full btn-gradient">
        Send Message
      </button>
    </form>
  );
});

const InputField = React.memo(
  ({ type, name, placeholder, value, onChange }) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
      required
    />
  )
);

const TextAreaField = React.memo(({ name, placeholder, value, onChange }) => (
  <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    rows={5}
    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-none"
    required
  />
));

const ContactSection = React.memo(({ scrollToSection }) => (
  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I'm always interested in new opportunities and collaborations. Let's
          connect and discuss how we can work together!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            <ContactItem
              icon={Mail}
              title="Email"
              content="ishaqhannanrozen@gmail.com"
            />
            <ContactItem
              icon={Phone}
              title="Phone"
              content="+62 812-3456-7890"
            />
            <ContactItem
              icon={MapPin}
              title="Location"
              content="Jakarta, Indonesia"
            />
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Follow Me
            </h4>
            <div className="flex gap-4">
              <SocialLink
                href="https://github.com/hannanrozen"
                icon={Github}
                label="GitHub Profile"
              />
              <SocialLink
                href="https://www.linkedin.com/in/hannanrozen/"
                icon={Linkedin}
                label="LinkedIn Profile"
              />
              <SocialLink
                href="https://www.instagram.com/hannan_rozen/"
                icon={Instagram}
                label="Instagram Profile"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Send Message
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
));

export default Portfolio;
