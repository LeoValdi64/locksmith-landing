import {
  Phone,
  Shield,
  Clock,
  MapPin,
  Star,
  Key,
  Home,
  Building2,
  Car,
  AlertTriangle,
  RefreshCw,
  Smartphone,
  Lock,
  Copy,
  ChevronRight,
  Mail,
  User,
  MessageSquare,
  CheckCircle2,
  Zap,
  Award,
  Menu,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const PHONE = "(469) 555-0127";
const PHONE_HREF = "tel:+14695550127";

const services = [
  {
    icon: Home,
    title: "Residential Locksmith",
    description:
      "Home lockouts, lock changes, deadbolt installation, and whole-house rekeying to keep your family safe.",
  },
  {
    icon: Building2,
    title: "Commercial Locksmith",
    description:
      "High-security locks, master key systems, access control, and panic bar installation for your business.",
  },
  {
    icon: Car,
    title: "Automotive Locksmith",
    description:
      "Car lockouts, transponder key programming, ignition repair, and broken key extraction on-site.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Services",
    description:
      "Locked out at 3 AM? Our mobile units reach you in 15-30 minutes, any time of day or night.",
  },
  {
    icon: RefreshCw,
    title: "Lock Rekeying",
    description:
      "Moving into a new home or lost your keys? We rekey all your locks quickly and affordably.",
  },
  {
    icon: Smartphone,
    title: "Smart Locks",
    description:
      "Installation and programming of smart locks, keypad entry systems, and Bluetooth-enabled deadbolts.",
  },
  {
    icon: Lock,
    title: "Safe Opening",
    description:
      "Locked out of your safe? We open residential and commercial safes without damage whenever possible.",
  },
  {
    icon: Copy,
    title: "Key Duplication",
    description:
      "Standard, high-security, and restricted key duplication. Spare keys cut while you wait.",
  },
];

const testimonials = [
  {
    name: "Marcus J.",
    location: "Dallas, TX",
    rating: 5,
    text: "Locked out of my car at midnight in downtown Dallas. KeyMaster arrived in under 20 minutes and had me back inside in less than 5. Professional, fast, and reasonably priced.",
  },
  {
    name: "Sarah T.",
    location: "Plano, TX",
    rating: 5,
    text: "Had all the locks rekeyed when we bought our new home. The technician was courteous and efficient. Completed 6 locks in under an hour. Highly recommend!",
  },
  {
    name: "David R.",
    location: "Irving, TX",
    rating: 5,
    text: "Our office needed a master key system for 30+ doors. KeyMaster designed and installed everything perfectly. Outstanding commercial locksmith service.",
  },
  {
    name: "Linda M.",
    location: "Arlington, TX",
    rating: 5,
    text: "I was locked out of my house on a Sunday evening. They came within 25 minutes and the price was exactly what they quoted on the phone. No hidden fees.",
  },
  {
    name: "James K.",
    location: "Garland, TX",
    rating: 5,
    text: "Installed smart locks on all our exterior doors. The technician walked us through the app setup and even programmed codes for the whole family. Top-notch service.",
  },
];

const serviceAreas = [
  "Dallas",
  "Fort Worth",
  "Plano",
  "Irving",
  "Arlington",
  "Garland",
  "Frisco",
  "McKinney",
  "Richardson",
  "Mesquite",
  "Grand Prairie",
  "Carrollton",
  "Denton",
  "Lewisville",
  "Allen",
  "Flower Mound",
];

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-navy-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gold-500 rounded-lg flex items-center justify-center group-hover:bg-gold-400 transition-colors">
              <Key className="w-5 h-5 sm:w-6 sm:h-6 text-navy-900" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Key<span className="text-gold-500">Master</span>
              </span>
              <span className="hidden sm:block text-[10px] text-slate-400 -mt-1 tracking-widest uppercase">
                Locksmith
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-slate-300 hover:text-gold-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-sm text-slate-300 hover:text-gold-400 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#areas"
              className="text-sm text-slate-300 hover:text-gold-400 transition-colors"
            >
              Service Areas
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-300 hover:text-gold-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* CTA */}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-colors text-sm sm:text-base"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,168,67,0.05)_0%,_transparent_50%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,67,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6 sm:mb-8">
          <Shield className="w-4 h-4 text-gold-500" />
          <span className="text-xs sm:text-sm text-gold-400 font-medium">
            Licensed &amp; Insured -- Dallas, TX
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
          Locked Out?
          <br />
          <span className="text-gold-500">We&apos;re On Our Way</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Fast, reliable locksmith services across the Dallas-Fort Worth
          metroplex. Available around the clock for residential, commercial, and
          automotive emergencies.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PHONE_HREF}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-gold-500/20"
          >
            <Phone className="w-5 h-5" />
            Call {PHONE}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-slate-300/20 hover:border-gold-500/50 text-slate-300 hover:text-gold-400 font-semibold px-8 py-4 rounded-xl text-lg transition-all"
          >
            Request a Quote
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 sm:mt-16">
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-5 h-5 text-gold-500" />
            <span className="text-sm">24/7 Availability</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Zap className="w-5 h-5 text-gold-500" />
            <span className="text-sm">15-30 Min Response</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Award className="w-5 h-5 text-gold-500" />
            <span className="text-sm">15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Shield className="w-5 h-5 text-gold-500" />
            <span className="text-sm">Upfront Pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AvailabilityBanner() {
  return (
    <section className="relative bg-gold-500 py-5 sm:py-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(10,22,40,0.05)_25%,_transparent_25%,_transparent_50%,_rgba(10,22,40,0.05)_50%,_rgba(10,22,40,0.05)_75%,_transparent_75%)] bg-[length:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-navy-900">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-lg sm:text-xl font-bold">
              Open 24 Hours a Day, 7 Days a Week
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-navy-900/20" />
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-navy-900 text-gold-400 font-bold px-5 py-2 rounded-lg hover:bg-navy-800 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now -- {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Locksmith Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            From emergency lockouts to advanced security solutions, we have the
            expertise and equipment to handle any lock and key challenge.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-navy-800/60 hover:bg-navy-700/60 border border-navy-700/50 hover:border-gold-500/30 rounded-2xl p-6 sm:p-7 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold-500/10 group-hover:bg-gold-500/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <service.icon className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Rapid Response",
      desc: "Our mobile units are strategically located throughout Dallas-Fort Worth for 15-30 minute average arrival times.",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      desc: "Fully licensed Texas locksmiths with comprehensive liability insurance for your peace of mind.",
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      desc: "Our technicians carry an average of 15 years of hands-on locksmith experience.",
    },
    {
      icon: CheckCircle2,
      title: "Upfront Pricing",
      desc: "No hidden fees, no surprise charges. We quote you a price before any work begins.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Trusted by Thousands Across Dallas
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
              Since 2009, KeyMaster Locksmith has been the go-to choice for
              homeowners, businesses, and drivers throughout the DFW metroplex.
              We combine speed with craftsmanship so you never have to
              compromise.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              Get Help Now
            </a>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-gold-500" />
                </div>
                <h3 className="font-bold text-white mb-1.5">{r.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Thousands of satisfied customers across Dallas-Fort Worth trust
            KeyMaster Locksmith.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-navy-800/60 border border-navy-700/50 rounded-2xl p-6 sm:p-7 ${
                i >= 3 ? "md:col-span-1 lg:col-span-1" : ""
              } ${i === 3 ? "lg:col-start-1" : ""} ${
                i === 4 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-gold-500 fill-gold-500"
                  />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="areas" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Serving the DFW Metroplex
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Our mobile locksmith units cover Dallas and the surrounding cities.
            No matter where you are, help is just a phone call away.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2.5 bg-navy-800/50 border border-navy-700/50 rounded-xl px-4 py-3 hover:border-gold-500/30 transition-colors"
            >
              <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="text-sm text-slate-300 font-medium">{area}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          Don&apos;t see your city? Call us -- we likely cover your area too.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left info */}
          <div>
            <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Need a Locksmith? Contact Us Now
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed">
              Fill out the form and we will get back to you within minutes, or
              call us directly for immediate assistance.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-4 bg-gold-500/10 border border-gold-500/20 rounded-xl px-5 py-4 hover:bg-gold-500/15 transition-colors group"
              >
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call Us 24/7</p>
                  <p className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                    {PHONE}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-navy-800/50 border border-navy-700/50 rounded-xl px-5 py-4">
                <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Us</p>
                  <p className="text-base font-semibold text-white">
                    info@keymasterlocksmith.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-navy-800/50 border border-navy-700/50 rounded-xl px-5 py-4">
                <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Our Office</p>
                  <p className="text-base font-semibold text-white">
                    4521 Elm Street, Dallas, TX 75201
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-navy-800/60 border border-navy-700/50 rounded-2xl p-6 sm:p-8">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-navy-900/60 border border-navy-700/50 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(469) 555-0127"
                    className="w-full bg-navy-900/60 border border-navy-700/50 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-navy-900/60 border border-navy-700/50 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-navy-900/60 border border-navy-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Locksmith</option>
                  <option value="commercial">Commercial Locksmith</option>
                  <option value="automotive">Automotive Locksmith</option>
                  <option value="emergency">Emergency Lockout</option>
                  <option value="rekeying">Lock Rekeying</option>
                  <option value="smart-locks">Smart Lock Installation</option>
                  <option value="safe">Safe Opening</option>
                  <option value="key-duplication">Key Duplication</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-1.5"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your situation..."
                    className="w-full bg-navy-900/60 border border-navy-700/50 rounded-xl pl-10 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/30 transition-colors text-sm resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/20 text-base"
              >
                Send Request
              </button>

              <p className="text-xs text-slate-500 text-center">
                We respond to all inquiries within 15 minutes during business
                hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700/50 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gold-500 rounded-lg flex items-center justify-center">
                <Key className="w-5 h-5 text-navy-900" />
              </div>
              <span className="text-xl font-bold text-white">
                Key<span className="text-gold-500">Master</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-xs">
              Dallas&apos;s most trusted locksmith since 2009. Fast response,
              fair pricing, and professional service around the clock.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm hover:text-gold-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More services */}
          <div>
            <h4 className="text-white font-semibold mb-4">More Services</h4>
            <ul className="space-y-2.5">
              {services.slice(5).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                >
                  Service Areas
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-700/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} KeyMaster Locksmith. All rights
            reserved. Licensed Texas Locksmith #LK-048271.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-gold-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-gold-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AvailabilityBanner />
        <Services />
        <WhyUs />
        <Testimonials />
        <ServiceAreas />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
