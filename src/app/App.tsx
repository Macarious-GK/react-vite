import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock, ChevronRight, Star, CheckCircle, Shield, Award, Heart, Zap, Users, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Why Us", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: "👨‍⚕️",
    title: "Family Medicine",
    description:
      "Personalized healthcare for children, adults, and seniors with a focus on prevention, wellness, and long-term health.",
  },
  {
    icon: "💉",
    title: "Vaccines & Flu Shots",
    description:
      "Routine immunizations, seasonal flu vaccines, TB testing, and preventive care to help protect your family's health.",
  },
  {
    icon: "🫀",
    title: "EKG & Preventive Screenings",
    description:
      "Comprehensive heart health evaluations, EKG testing, and preventive screenings for early detection of medical conditions.",
  },
  {
    icon: "🌎",
    title: "Immigration Physical Exams",
    description:
      "Convenient immigration medical examinations performed according to USCIS requirements with prompt documentation.",
  },
  {
    icon: "📋",
    title: "Physicals & Chronic Care",
    description:
      "Annual physicals, management of chronic conditions, and treatment for common illnesses to keep you and your family healthy year-round.",
  },
];
const STATS = [
  { value: "12,400+", label: "Patients Treated" },
  { value: "18", label: "Years of Excellence" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "6", label: "Specialist Dentists" },
];

const TEAM = [
  {
    name: "Dr. Elena Voss",
    role: "Lead Periodontist & Founder",
    bio: "Dr. Voss graduated from NYU College of Dentistry with honors and completed her periodontics residency at Columbia. She has 18 years of clinical experience.",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=480&fit=crop&auto=format",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Implantologist",
    bio: "A specialist in oral surgery and implantology, Dr. Chen trained at the University of Michigan and holds dual board certifications in oral and maxillofacial surgery.",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=480&fit=crop&auto=format",
  },
  // {
  //   name: "Dr. Amara Okafor",
  //   role: "Orthodontist",
  //   bio: "Dr. Okafor brings precision and artistry to every case. Trained at the University of Toronto, she specializes in clear aligner therapy and complex bite correction.",
  //   photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=480&fit=crop&auto=format",
  // },
];

const WHY_US = [
  {
    icon: Shield,
    title: "Pain-Free Promise",
    description: "We use the latest anesthetic techniques and gentle protocols so comfort is never a compromise.",
  },
  {
    icon: Award,
    title: "Accredited Practice",
    description: "Fully accredited by the American Dental Association and Joint Commission on Dental Accreditation.",
  },
  {
    icon: Zap,
    title: "Same-Day Emergency Care",
    description: "Dental emergencies don't wait. We reserve daily slots for urgent same-day appointments.",
  },
  {
    icon: Heart,
    title: "Anxiety-Friendly",
    description: "From sedation options to calming environments, we make every visit a positive experience.",
  },
];

const TESTIMONIALS = [
  {
    name: "Rachel M.",
    location: "Brooklyn, NY",
    rating: 5,
    text: "I've been terrified of dentists my whole life. Dr. Voss changed that completely. The team is patient, explains every step, and the results are incredible. My smile has never looked better.",
  },
  {
    name: "James T.",
    location: "Manhattan, NY",
    rating: 5,
    text: "Had three implants done here after a bad accident. The precision and professionalism of Dr. Chen's work is unmatched. Six months later, you'd never know I had any work done.",
  },
  {
    name: "Sofia R.",
    location: "Hoboken, NJ",
    rating: 5,
    text: "Switched to Voss Dental after years of unsatisfying care. The digital diagnostics alone are worth it — they caught a problem three other dentists missed. Genuinely life-changing.",
  },
];

const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", date: "", time: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>V</span>
            </div>
            <span className="font-bold text-foreground tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem" }}>
              Santa Marya <span className="text-primary">Medicine Clinic</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+17142369663" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone size={13} />
              (714) 236-9663
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-primary text-primary-foreground text-sm px-5 py-2 hover:bg-primary/90 transition-colors duration-200 tracking-wide"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Book Now
            </button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <button key={l.label} onClick={() => scrollTo(l.href)} className="text-left text-sm text-muted-foreground hover:text-primary py-1.5">
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-primary text-primary-foreground text-sm px-5 py-2.5 mt-2 hover:bg-primary/90 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 bg-[#0A2233]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1588776814546-1ffbb5b9bbf6?w=1600&h=1000&fit=crop&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#061824]/95 via-[#0A2D44]/80 to-[#0A2D44]/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                New York City · Est. 2007
              </span>
            </div>
            <h1
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Your smile,<br />
              <span className="text-accent">precisely</span><br />
              cared for.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
              Voss Dental is a modern, full-service dental clinic in the heart of Manhattan. Precision diagnostics, gentle care, and results that last.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("#contact")}
                className="bg-accent text-white px-8 py-3.5 font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2 justify-center"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Book a Free Consultation
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="border border-white/30 text-white px-8 py-3.5 hover:bg-white/10 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                View Services
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {["photo-1612349317150-e413f6a5b16d", "photo-1559839734-2b71ea197ec2", "photo-1594824476967-48c8b964273f"].map((id, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/${id}?w=48&h=48&fit=crop&auto=format`}
                    alt="Doctor"
                    className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#12BFA0" color="#12BFA0" />)}
                </div>
                <p className="text-white/60 text-sm">4.9 · 847 verified reviews</p>
              </div>
            </div>
          </div>

          {/* Info card */}
          <div className="hidden md:block" />
        </div>

        {/* Info strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 gap-4">
            {[
              { icon: Clock, label: "Mon–Fri 8am–5pm", sub: "Extended hours available" },
              { icon: MapPin, label: "3400 W. Ball Rd, Suite 202", sub: "Anaheim CA, 92804" },
              { icon: Phone, label: "(714) 236-9663", sub: "Same-day emergency line" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={18} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>{label}</p>
                  <p className="text-white/50 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{value}</p>
              <p className="text-white/60 text-sm tracking-wide uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>What We Offer</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Comprehensive dental<br />care under one roof.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              From your first check-up to complex restorations, every treatment is performed with clinical precision and genuine care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-card p-8 group hover:bg-secondary transition-colors duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-5">{icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
                <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Learn more <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / TEAM */}
      <section id="team" className="py-24 bg-[#0A2233]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>The Specialists</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <h2 className="text-4xl font-bold text-white leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Dentists who are also<br />genuinely good people.
            </h2>
            <p className="text-white/50 max-w-sm leading-relaxed text-sm">
              Every clinician at Family Medicine Clinic holds advanced specialist credentials and a commitment to continuous education.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map(({ name, role, bio, photo }) => (
              <div key={name} className="group">
                <div className="overflow-hidden mb-5 bg-white/5" style={{ aspectRatio: "4/4.8" }}>
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>{name}</p>
                  <p className="text-accent text-sm mb-3">{role}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="flex flex-wrap justify-center gap-6">
            {TEAM.map(({ name, role, bio, photo }) => (
              <div
                key={name}
                className="group w-full md:w-[340px] lg:w-[360px]"
              >
                <div
                  className="overflow-hidden mb-5 bg-white/5"
                  style={{ aspectRatio: "4/4.8" }}
                >
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>

                <div className="border-l-2 border-accent pl-4">
                  <p
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {name}
                  </p>

                  <p className="text-accent text-sm mb-3">{role}</p>

                  <p className="text-white/50 text-sm leading-relaxed">
                    {bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Why Family Medicine Clinic</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                A practice built around<br />your experience.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We designed every aspect of Family Medicine Clinic — from our operatory equipment to our scheduling system — around one question: what would make this genuinely easy for the patient?
              </p>
              <div className="flex flex-col gap-3">
                {["No hidden fees, ever", "All insurances processed in-house", "Online booking in under 60 seconds", "Evening and Saturday appointments available"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {WHY_US.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-card border border-border p-6 hover:border-accent/40 hover:shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center mb-4">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-accent" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Patient Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-14 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            In their own words.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, location, rating, text }) => (
              <div key={name} className="bg-card p-8 border border-border">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(rating)].map((_, i) => <Star key={i} size={14} fill="#12BFA0" color="#12BFA0" />)}
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-sm">"{text}"</p>
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="w-9 h-9 bg-primary flex items-center justify-center">
                    <span className="text-white text-sm font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{name}</p>
                    <p className="text-muted-foreground text-xs">{location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#12BFA0" color="#12BFA0" />)}
            </div>
            <span className="text-muted-foreground text-sm">4.9 average across 847 reviews on Google · Healthgrades · Zocdoc</span>
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      {/* <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-accent" />
                <span className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Request an Appointment</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Ready for a better<br />dental experience?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fill out the form and we'll confirm your appointment within 2 hours during business hours. First visits include a complimentary consultation and digital X-rays.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: Clock, text: "Mon–Fri: 8:00 AM – 5:00 PM" },
                  // { icon: Clock, text: "Saturday: 9:00 AM – 4:00 PM" },
                  { icon: MapPin, text: "42 W 57th Street, Suite 800, New York, NY 10019" },
                  { icon: Phone, text: "(714) 236-9663" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon size={15} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={15} className="text-primary" />
                  <span className="text-primary font-bold text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>Currently accepting new patients</span>
                </div>
                <p className="text-muted-foreground text-sm">We welcome patients of all ages, including children from age 3 and seniors. Most major insurances accepted.</p>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-card border border-accent/30 p-10 flex flex-col items-center justify-center text-center min-h-[500px]">
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mb-5">
                    <CheckCircle size={28} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>You're all set!</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    We've received your request and will confirm your appointment by email and phone within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-primary text-sm underline underline-offset-2 hover:text-accent transition-colors"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border p-8 flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-input-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-input-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="jane@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Phone</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-input-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="(714) 000-0000"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Service *</label>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-input-background border border-border px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map(({ title }) => (
                          <option key={title} value={title}>{title}</option>
                        ))}
                        <option value="General Check-up">General Check-up / Cleaning</option>
                        <option value="Emergency">Dental Emergency</option>
                        <option value="Other">Other / Not sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Preferred Date *</label>
                      <input
                        required
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-input-background border border-border px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Preferred Time</label>
                      <select
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full bg-input-background border border-border px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Any time</option>
                        {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold text-foreground mb-1.5 tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>Additional Notes</label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        rows={3}
                        className="w-full bg-input-background border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Dental anxiety, current pain, insurance questions..."
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3.5 font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Request Appointment
                    <ArrowRight size={15} />
                  </button>
                  <p className="text-muted-foreground text-xs text-center">We'll confirm within 2 hours · No credit card required</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* FOOTER */}
      <footer className="bg-[#061824] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <span className="text-white text-xs font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>V</span>
                </div>
                <span className="font-bold text-white tracking-tight" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem" }}>
                  Family <span className="text-accent">Medicine Clinic </span>
                </span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Modern, full-service medical clinic in Midtown Manhattan. Accepting new patients, most insurances, and same-day emergencies.
              </p>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Services</p>
              <ul className="flex flex-col gap-2">
                {SERVICES.map(({ title }) => (
                  <li key={title}>
                    <a href="#services" className="text-white/40 text-sm hover:text-accent transition-colors">{title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold text-sm mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Practice</p>
              <ul className="flex flex-col gap-2">
                {["About Our Team", "Patient Reviews", "Insurance & Billing", "New Patient Forms", "Emergency Care", "Contact Us"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/40 text-sm hover:text-accent transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">© 2026 Family Medicine Clinic, PLLC · 3400 W. Ball Rd, Suite 202, Anaheim, CA 92804</p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Use", "HIPAA Notice", "Accessibility"].map((item) => (
                <a key={item} href="#" className="text-white/25 text-xs hover:text-accent transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
