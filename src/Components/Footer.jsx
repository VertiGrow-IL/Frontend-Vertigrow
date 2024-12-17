import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#387F39] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8 md:gap-0">
          {/* Brand Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold">VertiGrow</h3>
            <p className="mt-2 text-base">Solusi Edukasi Budidaya Kamu</p>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-3">Layanan Kami</h4>
            <ul className="space-y-2 text-base pl-0">
              <li>VertiGuide</li>
              <li>EcoLimbah</li>
              <li>Chatbot Mr.Grow</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-3">Kontak</h4>
            <ul className="space-y-2 text-base pl-0">
              <li>VertiGrow@gmail.com</li>
              <li>Instagram: VertiGrow</li>
              <li>Facebook: VertiGrow</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 border-t border-white/20 pt-4">
          <p className="text-base">
            Copyright © 2024 VertiGrow. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
