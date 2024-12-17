import React from "react";

export default function DefinisiDaurUlang() {
  return (
    <section className="bg-[#387F39]">
      <div className="container flex flex-col gap-10 py-20">
        <h3 className="text-4xl font-bold text-white">Panduan Daur Ulang</h3>

        <img
          src="https://picsum.photos/200/200"
          alt="daur ulang"
          className="rounded-xl h-96 object-cover"
        />

        {/* Teks */}
        <div className="flex gap-60 text-white">
          <p className="text-4xl font-bold">Daur Ulang Media Tanam</p>
          <p>
            Daur ulang media tanam adalah proses mengolah kembali media tanam
            yang telah dipakai agar bisa digunakan kembali untuk menanam
            tanaman. Dengan mendaur ulang media tanam, kita bisa menghemat biaya
            dan mengurangi limbah yang dihasilkan.
          </p>
        </div>
      </div>
    </section>
  );
}
