import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

const menuSections = [
  { title: "Starters", items: ["Smoked paneer tikka", "Charred prawn skewers", "Wood-fired mushrooms"] },
  { title: "Mains", items: ["Slow-braised lamb shank", "Tandoori cauliflower steak", "Coastal fish curry"] },
  { title: "Desserts", items: ["Dark chocolate ganache", "Saffron kulfi", "Caramelised fig tart"] },
  { title: "Drinks", items: ["House cocktails", "Cold-pressed juices", "Single-origin coffee"] },
];

export function RestaurantSite() {
  return (
    <div className="w-[1200px] bg-[#17110d] text-[#f6ecdc]">
      <header className="flex h-20 items-center justify-between border-b border-white/10 px-16">
        <span className="font-serif text-2xl tracking-[0.2em] text-[#d9a441]">EMBER &amp; OAK</span>
        <nav className="flex gap-10 text-sm uppercase tracking-widest text-[#f6ecdc]/80">
          <span>Menu</span>
          <span>Dishes</span>
          <span>Private Dining</span>
          <span>Contact</span>
        </nav>
        <div className="flex gap-3 text-sm">
          <span className="rounded-full border border-[#d9a441] px-5 py-2.5">Order on WhatsApp</span>
          <span className="rounded-full bg-[#d9a441] px-5 py-2.5 font-semibold text-[#17110d]">
            Reserve a Table
          </span>
        </div>
      </header>

      <section className="grid grid-cols-2 items-center gap-16 px-16 pb-24 pt-20">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#d9a441]">Wood-fired kitchen &amp; bar</p>
          <h1 className="mt-6 font-serif text-7xl leading-[1.05]">
            Warm flavours, <span className="italic text-[#d9a441]">slow-fired</span> to perfection.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#f6ecdc]/75">
            Seasonal plates, a carefully curated wine list and a welcome that feels like coming home.
          </p>
          <div className="mt-10 flex gap-4">
            <span className="rounded-full bg-[#d9a441] px-8 py-4 font-semibold text-[#17110d]">
              Reserve a Table
            </span>
            <span className="rounded-full border border-[#f6ecdc]/40 px-8 py-4">View Full Menu</span>
          </div>
        </div>

        <div className="relative mx-auto h-[460px] w-[460px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3b2a1e] to-[#0d0907] shadow-2xl" />
          <div className="absolute inset-8 rounded-full border border-[#d9a441]/30" />
          <div className="absolute inset-20 rounded-full bg-gradient-to-br from-[#9a5f2c] via-[#b5652b] to-[#5b2e16]" />
          <div className="absolute left-[24%] top-[30%] h-28 w-48 -rotate-12 rounded-[50%] bg-gradient-to-r from-[#6e2a1a] to-[#c0553a] shadow-lg" />
          <div className="absolute bottom-[26%] right-[22%] h-24 w-40 rotate-12 rounded-[50%] bg-gradient-to-r from-[#3f6b2e] to-[#79a954]" />
          <div className="absolute bottom-[34%] left-[36%] h-10 w-10 rounded-full bg-[#e8c27a]" />
          <div className="absolute right-[34%] top-[36%] h-7 w-7 rounded-full bg-[#f3d89a]" />
          <div className="absolute left-[46%] top-[18%] h-5 w-5 rounded-full bg-[#79a954]" />
        </div>
      </section>

      <section className="bg-[#1f1712] px-16 py-20">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d9a441]">From the kitchen</p>
          <h2 className="mt-3 font-serif text-5xl">Our Menu</h2>
        </div>
        <div className="mt-14 grid grid-cols-4 gap-6">
          {menuSections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-white/10 bg-[#17110d] p-8">
              <h3 className="font-serif text-2xl text-[#d9a441]">{section.title}</h3>
              <ul className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center justify-between border-b border-white/10 pb-3 text-[#f6ecdc]/85">
                    <span>{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d9a441]" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="flex items-center justify-between px-16 py-14">
        <div>
          <h2 className="font-serif text-4xl">Order your favourites at home</h2>
          <p className="mt-2 text-[#f6ecdc]/70">Send your order on WhatsApp for quick takeaway and delivery.</p>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-[#25d366] px-8 py-4 font-semibold text-[#0d1f12]">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Order on WhatsApp
        </span>
      </section>

      <footer className="grid grid-cols-3 gap-10 border-t border-white/10 px-16 py-14 text-[#f6ecdc]/80">
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-[#d9a441]" aria-hidden="true" />
          <div>
            <p className="font-semibold text-[#f6ecdc]">Find us</p>
            <p>Restaurant address and landmark</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="mt-1 h-5 w-5 text-[#d9a441]" aria-hidden="true" />
          <div>
            <p className="font-semibold text-[#f6ecdc]">Opening hours</p>
            <p>Daily 12:00 pm – 11:00 pm</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="mt-1 h-5 w-5 text-[#d9a441]" aria-hidden="true" />
          <div>
            <p className="font-semibold text-[#f6ecdc]">Reservations</p>
            <p>Call or WhatsApp to book</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
