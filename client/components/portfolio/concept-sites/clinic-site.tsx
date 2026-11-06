import { Baby, CalendarCheck, Clock, HeartPulse, Microscope, Stethoscope } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Consultation", text: "Routine checkups and expert advice for the whole family." },
  { icon: HeartPulse, title: "Cardiology Checkups", text: "Heart health screening with clear, simple reports." },
  { icon: Baby, title: "Child Care", text: "Gentle paediatric care from newborns to teenagers." },
  { icon: Microscope, title: "Diagnostics & Lab", text: "Quick, accurate tests with reports shared online." },
];

const doctors = [
  { initials: "GP", role: "General Physician", days: "Mon – Sat" },
  { initials: "CA", role: "Cardiologist", days: "Tue – Sat" },
  { initials: "PD", role: "Paediatrician", days: "Mon – Fri" },
];

const slots = ["10:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"];

export function ClinicSite() {
  return (
    <div className="w-[1200px] bg-white text-slate-800">
      <header className="flex h-20 items-center justify-between border-b border-slate-200 px-16">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d6fd8] text-xl font-bold text-white">+</span>
          <span className="text-xl font-bold text-[#0b3d91]">CarePoint Clinic</span>
        </div>
        <nav className="flex gap-9 text-sm font-medium text-slate-600">
          <span>Services</span>
          <span>Doctors</span>
          <span>Opening Hours</span>
          <span>Contact</span>
        </nav>
        <span className="rounded-full bg-[#1d6fd8] px-6 py-3 text-sm font-semibold text-white">Book Appointment</span>
      </header>

      <section className="grid grid-cols-2 items-center gap-16 px-16 py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1d6fd8]">Trusted family healthcare</p>
          <h1 className="mt-5 text-6xl font-bold leading-tight text-[#0b3d91]">
            Compassionate care, on your schedule.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Book an appointment online, meet experienced doctors and get clear answers about your health.
          </p>
          <div className="mt-10 flex gap-4">
            <span className="rounded-xl bg-[#1d6fd8] px-8 py-4 font-semibold text-white">Book an Appointment</span>
            <span className="rounded-xl border border-[#1d6fd8] px-8 py-4 font-semibold text-[#1d6fd8]">Call the Clinic</span>
          </div>
        </div>

        <div className="rounded-3xl bg-[#e8f1fd] p-10">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="flex items-center gap-3">
              <CalendarCheck className="h-6 w-6 text-[#1d6fd8]" aria-hidden="true" />
              <p className="text-lg font-bold text-[#0b3d91]">Next available slots</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {slots.map((slot) => (
                <span key={slot} className="rounded-xl border border-[#1d6fd8]/30 px-4 py-3 text-center font-medium text-[#1d6fd8]">
                  {slot}
                </span>
              ))}
            </div>
            <div className="mt-8 h-px bg-slate-200" />
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-[#0b3d91]">15+</p>
                <p className="text-sm text-slate-500">Years of care</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0b3d91]">Same day</p>
                <p className="text-sm text-slate-500">Appointments</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0b3d91]">Online</p>
                <p className="text-sm text-slate-500">Reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-16 pb-20">
        <h2 className="text-center text-4xl font-bold text-[#0b3d91]">Our Medical Services</h2>
        <div className="mt-12 grid grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-7 shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f1fd]">
                <Icon className="h-7 w-7 text-[#1d6fd8]" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-[#0b3d91]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f8ff] px-16 py-20">
        <h2 className="text-center text-4xl font-bold text-[#0b3d91]">Meet Our Doctors</h2>
        <div className="mt-12 grid grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.role} className="flex items-center gap-6 rounded-2xl bg-white p-7 shadow-sm">
              <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1d6fd8] to-[#0b3d91] text-2xl font-bold text-white">
                {doctor.initials}
              </span>
              <div>
                <p className="text-lg font-bold text-[#0b3d91]">{doctor.role}</p>
                <p className="mt-1 text-sm text-slate-500">Consultant</p>
                <p className="mt-3 flex items-center gap-2 text-sm font-medium text-[#1d6fd8]">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {doctor.days}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="grid grid-cols-2 gap-10 bg-[#0b3d91] px-16 py-14 text-white/85">
        <div>
          <p className="text-xl font-bold text-white">Opening Hours</p>
          <p className="mt-3">Monday – Friday: 9:00 AM – 8:00 PM</p>
          <p>Saturday: 9:00 AM – 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div>
          <p className="text-xl font-bold text-white">Contact</p>
          <p className="mt-3">Clinic address and landmark</p>
          <p>Phone, WhatsApp and email enquiries</p>
        </div>
      </footer>
    </div>
  );
}
