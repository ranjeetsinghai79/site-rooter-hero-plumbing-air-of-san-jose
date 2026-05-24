import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Rooter Hero Plumbing & Air of San Jose",
    tagline: "Plumbing, Drain, HVAC Experts Now",
    phone: "(408) 703-6715",
    phoneHref: "tel:+14087036715",
    email: "info@rooterhero.com",
    address: "San Jose",
    city: "San Jose",
    serviceAreas: ["San Jose", "Northern California", "Southern California", "Arizona"],
    license: "Licensed Technicians",
    since: "2000",
    google_rating: "4.8",
    review_count: "8000+",
    emergency: true,
    theme: "forest",
    niche: "plumbing",
  },

  services: [
    { icon: "wrench", title: "Plumbing Services", desc: "Expert plumbers handle all repairs, installations, and maintenance for your home or business.", urgent: false },
    { icon: "droplets", title: "Drain & Sewer", desc: "Comprehensive drain cleaning, sewer line repair, and trenchless solutions keep your systems flowing freely.", urgent: true },
    { icon: "thermometer", title: "HVAC Services", desc: "From AC repair to furnace installation, we ensure your indoor comfort all year round.", urgent: false },
    { icon: "briefcase", title: "Commercial Plumbing", desc: "Specialized plumbing services for businesses, ensuring minimal disruption and maximum efficiency.", urgent: false },
    { icon: "sparkles", title: "Water Treatment Services", desc: "Improve your water quality with our advanced filtration and softening solutions for healthier living.", urgent: false },
    { icon: "flame", title: "Heating Services", desc: "Stay warm with our reliable heating system repairs, installations, and routine maintenance.", urgent: false },
  ],

  testimonials: [
    { name: "Sarah L.", location: "San Jose", stars: 5, text: "My water heater burst on a Saturday morning. Rooter Hero responded within an hour, and their technician, Mark, was incredibly professional and efficient. He had a new unit installed and hot water running by lunchtime. I was so relieved and impressed with the speed and quality of service!" },
    { name: "David R.", location: "Campbell", stars: 5, text: "We had a persistent drain clog that other companies couldn't fix. Rooter Hero's team used a camera inspection to find the root cause and cleared it completely. They were transparent about pricing and explained everything clearly. Highly recommend their drain cleaning expertise!" },
    { name: "Jessica M.", location: "Santa Clara", stars: 5, text: "Our AC stopped working in the middle of a heatwave. Rooter Hero sent a technician the same day. He quickly diagnosed the issue, had the part on his truck, and got our AC running again. The service was friendly, fast, and fairly priced. Thank you for saving our summer!" },
  ],

  trustBadges: [
    "NATE Certified", "GAF Master Elite", "Licensed & Insured", "24/7 Emergency Service", "Same-Day Appointments", "Satisfaction Guaranteed"
  ],

  stats: [
    { value: 4.8, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 8000, label: "Happy Customers", suffix: "+", decimals: 0 },
    { value: 20, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We arrive quickly to address your plumbing and HVAC emergencies, minimizing damage and discomfort." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "You'll receive a clear, detailed quote before any work begins, with no hidden fees or surprises." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, licensed, and certified to deliver top-quality service every time." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction on every job." },
    { icon: "phone", title: "24/7 Availability", desc: "Our team is ready to assist you around the clock, ensuring help is always just a call away." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with the latest tools and parts for efficient, on-the-spot repairs." }
  ],

  formServiceOptions: ["Plumbing Services", "Drain & Sewer", "HVAC Services", "Commercial Plumbing", "Water Treatment Services", "Heating Services"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!