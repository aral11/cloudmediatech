import { Car, Dumbbell, Mail, MapPin, Phone, Sparkles, UtensilsCrossed, Waves } from "lucide-react";

const serif = { fontFamily: "Georgia, 'Times New Roman', serif" };

const rooms = [
  { name: "Ocean Suite", text: "Sea-facing balcony with a king bed.", art: "from-[#2a8c8f] to-[#0c4a52]" },
  { name: "Garden Villa", text: "Private plunge pool surrounded by palms.", art: "from-[#6fb29a] to-[#1f5b52]" },
  { name: "Sunset Room", text: "Warm evenings framed by the horizon.", art: "from-[#f2b07f] to-[#b8566a]" },
];

const amenities = [
  { icon: Waves, label: "Infinity pool" },
  { icon: UtensilsCrossed, label: "Beachside dining" },
  { icon: Dumbbell, label: "Fitness studio" },
  { icon: Sparkles, label: "Spa retreat" },
  { icon: Car, label: "Airport transfers" },
];

export function ResortSite() {
  return (
    <div className="w-[1200px] bg-[#f7f2ea] text-[#0c3b3f]">
      <section className="relative h-[720px] overflow-hidden bg-gradient-to-b from-[#0c4a52] via-[#e9a57a] to-[#0c4a52]">
        <div className="absolute left-1/2 top-[300px] h-72 w-72 -translate-x-1/2 rounded-full bg-[#fbe3b5]" />
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#0f5d63] to-[#0a3b40]" />
        <svg className="absolute bottom-[280px] left-0 h-24 w-full" viewBox="0 0 1200 96" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 48 C150 0 300 96 450 48 S750 0 900 48 S1100 96 1200 48 L1200 96 L0 96 Z" fill="#0f5d63" />
        </svg>

        <header className="relative flex h-20 items-center justify-between px-16 text-white">
          <span className="text-2xl tracking-[0.25em]" style={serif}>AZURE BAY</span>
          <nav className="flex gap-9 text-sm uppercase tracking-widest text-white/85">
            <span>Rooms</span>
            <span>Dining</span>
            <span>Experiences</span>
            <span>Location</span>
          </nav>
          <span className="rounded-full border border-white/70 px-6 py-2.5 text-sm">Book Now</span>
        </header>

        <div className="relative mt-24 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-[#fbe3b5]">Coastal luxury resort</p>
          <h1 className="mt-5 text-7xl leading-tight" style={serif}>Where the sea slows you down.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Ocean-side suites, slow mornings and sunsets that are worth staying for.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 flex w-[980px] -translate-x-1/2 items-center gap-4 rounded-2xl bg-white p-4 text-sm shadow-2xl">
          <div className="flex-1 rounded-xl border border-slate-200 px-5 py-3 text-slate-500">Check-in date</div>
          <div className="flex-1 rounded-xl border border-slate-200 px-5 py-3 text-slate-500">Check-out date</div>
          <div className="flex-1 rounded-xl border border-slate-200 px-5 py-3 text-slate-500">Guests</div>
          <span className="rounded-xl bg-[#0c3b3f] px-8 py-4 font-semibold text-white">Check Availability</span>
        </div>
      </section>

      <section className="px-16 pb-20 pt-32">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b8566a]">Accommodation</p>
          <h2 className="mt-3 text-5xl" style={serif}>Rooms &amp; Suites</h2>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="overflow-hidden rounded-3xl bg-white shadow-lg">
              <div className={`h-64 bg-gradient-to-br ${room.art}`} />
              <div className="p-8">
                <h3 className="text-2xl" style={serif}>{room.name}</h3>
                <p className="mt-3 text-slate-600">{room.text}</p>
                <p className="mt-6 font-semibold text-[#0c3b3f]">View Room &rarr;</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0c3b3f] px-16 py-16 text-white">
        <h2 className="text-center text-4xl" style={serif}>Amenities</h2>
        <div className="mt-12 grid grid-cols-5 gap-6">
          {amenities.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#fbe3b5]/50">
                <Icon className="h-7 w-7 text-[#fbe3b5]" aria-hidden="true" />
              </span>
              <p className="text-sm text-white/85">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="grid grid-cols-3 gap-10 px-16 py-14">
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-[#b8566a]" aria-hidden="true" />
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-slate-600">Beachfront address and directions</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="mt-1 h-5 w-5 text-[#b8566a]" aria-hidden="true" />
          <div>
            <p className="font-semibold">Reservations</p>
            <p className="text-slate-600">Phone and WhatsApp booking enquiries</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="mt-1 h-5 w-5 text-[#b8566a]" aria-hidden="true" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-slate-600">Group and event enquiries</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
