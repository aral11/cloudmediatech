import { Backpack, Glasses, Gem, Headphones, Heart, Lamp, Search, ShoppingBag, Shirt, Star, User, Watch } from "lucide-react";

const categories = ["New In", "Women", "Men", "Home", "Accessories", "Sale"];

const products = [
  { name: "Linen Overshirt", price: "₹2,499", was: "₹3,299", icon: Shirt, tint: "from-[#fde2d4] to-[#f7b9a0]", badge: "New" },
  { name: "Classic Analog Watch", price: "₹4,199", was: null, icon: Watch, tint: "from-[#dfe7f7] to-[#b5c6ea]", badge: null },
  { name: "Everyday Backpack", price: "₹2,899", was: "₹3,600", icon: Backpack, tint: "from-[#e4f1e6] to-[#b6d9bd]", badge: "Sale" },
  { name: "Aviator Sunglasses", price: "₹1,599", was: null, icon: Glasses, tint: "from-[#f3e8d6] to-[#e5c99c]", badge: null },
  { name: "Wireless Headphones", price: "₹5,499", was: "₹6,999", icon: Headphones, tint: "from-[#ebe4f7] to-[#c7b6ea]", badge: "Sale" },
  { name: "Gold Pendant", price: "₹3,299", was: null, icon: Gem, tint: "from-[#fbf0c9] to-[#ebd389]", badge: "New" },
  { name: "Ceramic Table Lamp", price: "₹2,199", was: null, icon: Lamp, tint: "from-[#f2ece6] to-[#d9c9b8]", badge: null },
  { name: "Heritage Tote", price: "₹1,899", was: "₹2,400", icon: ShoppingBag, tint: "from-[#f8e1e1] to-[#eba9a9]", badge: "Sale" },
];

export function StoreSite() {
  return (
    <div className="w-[1200px] bg-white text-neutral-900">
      <header className="flex h-20 items-center justify-between border-b border-neutral-200 px-16">
        <span className="text-2xl font-extrabold tracking-[0.2em]">LUMÉ</span>
        <div className="flex w-[420px] items-center gap-3 rounded-full bg-neutral-100 px-5 py-3 text-sm text-neutral-500">
          <Search className="h-4 w-4" aria-hidden="true" />
          Search products, brands and more
        </div>
        <div className="flex items-center gap-6 text-neutral-700">
          <User className="h-5 w-5" aria-hidden="true" />
          <Heart className="h-5 w-5" aria-hidden="true" />
          <span className="relative">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
              2
            </span>
          </span>
        </div>
      </header>

      <nav className="flex justify-center gap-10 border-b border-neutral-200 py-4 text-sm font-medium text-neutral-700">
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </nav>

      <section className="mx-16 mt-10 grid grid-cols-2 overflow-hidden rounded-3xl bg-gradient-to-r from-[#ff6a3d] to-[#e0457b]">
        <div className="flex flex-col justify-center p-16 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/85">Summer edit</p>
          <h1 className="mt-4 text-6xl font-extrabold leading-tight">Up to 40% off the new season.</h1>
          <p className="mt-5 text-lg text-white/90">Free delivery on orders above ₹999. Limited time only.</p>
          <span className="mt-8 w-fit rounded-full bg-white px-8 py-4 font-bold text-neutral-900">Shop the Sale</span>
        </div>
        <div className="relative">
          <div className="absolute right-16 top-14 h-56 w-56 rotate-6 rounded-3xl bg-white/25" />
          <div className="absolute right-40 top-28 h-56 w-56 -rotate-6 rounded-3xl bg-white/40" />
          <div className="absolute bottom-10 right-24 h-40 w-40 rounded-full bg-[#ffd166]" />
        </div>
      </section>

      <section className="px-16 py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-extrabold">Curated Styles You&apos;ll Love</h2>
          <div className="flex gap-2 text-sm">
            <span className="rounded-full bg-neutral-900 px-4 py-2 text-white">All</span>
            <span className="rounded-full bg-neutral-100 px-4 py-2">Trending</span>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-4 gap-6">
          {products.map(({ name, price, was, icon: Icon, tint, badge }) => (
            <div key={name} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div className={`relative flex h-52 items-center justify-center bg-gradient-to-br ${tint}`}>
                <Icon className="h-20 w-20 text-neutral-800/70" aria-hidden="true" />
                {badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                    {badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="font-semibold">{name}</p>
                <div className="mt-1 flex items-center gap-1 text-xs text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="font-bold">{price}</span>
                  {was && <span className="text-sm text-neutral-400 line-through">{was}</span>}
                </div>
                <span className="mt-4 block rounded-full bg-neutral-900 py-3 text-center text-sm font-semibold text-white">
                  Add to Cart
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="grid grid-cols-3 gap-8 bg-neutral-100 px-16 py-12 text-sm">
        <div>
          <p className="font-bold">Premium quality</p>
          <p className="mt-2 text-neutral-600">Carefully selected materials and trusted makers.</p>
        </div>
        <div>
          <p className="font-bold">Fast delivery</p>
          <p className="mt-2 text-neutral-600">Tracked shipping and easy returns.</p>
        </div>
        <div>
          <p className="font-bold">Secure checkout</p>
          <p className="mt-2 text-neutral-600">Multiple payment options, safely processed.</p>
        </div>
      </footer>
    </div>
  );
}
