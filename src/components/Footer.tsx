export default function Footer() {
  return (
    <footer className="bg-[#0a0705] border-t border-brand-golden/10 pt-16 pb-8 px-6 text-brand-beige/60">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-brand-golden mb-4">Nyemilinajah.id</h3>
          <p className="max-w-xs mx-auto md:mx-0">
            Jajanan tradisional premium, dibuat dengan resep rumahan yang bikin kangen.
          </p>
          <div className="mt-4 text-sm font-medium text-brand-caramel-light border border-brand-caramel/30 inline-block px-3 py-1 rounded-full">
            Home-made / UMKM Local Product
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-brand-beige mb-4">Links</h4>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-brand-golden transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-golden transition-colors">Produk</a>
            </li>
            <li>
              <a href="https://wa.me/6285335694802" target="_blank" rel="noopener noreferrer" className="hover:text-brand-golden transition-colors">
                Order via WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-brand-beige mb-4">Social Media</h4>
          <ul className="space-y-3">
            <li>
              <a href="https://www.tiktok.com/@nyemilinajah.id" target="_blank" rel="noopener noreferrer" className="hover:text-brand-golden transition-colors flex items-center justify-center md:justify-start gap-2">
                TikTok: @nyemilinajah.id
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center text-sm border-t border-brand-beige/5 pt-8">
        &copy; {new Date().getFullYear()} Nyemilinajah.id. All rights reserved.
      </div>
    </footer>
  );
}
