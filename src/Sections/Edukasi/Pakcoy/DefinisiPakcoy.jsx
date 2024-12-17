import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DefinisiTomat() {
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState(""); // State untuk title
  const [content, setContent] = useState(""); // State untuk konten

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengambil data edukasi (title, konten, dan image) dari API
        const response = await axios.get("http://localhost:4000/edukasi/5");

        if (response.data) {
          setTitle(response.data.title); // Menyimpan title
          setContent(response.data.konten); // Menyimpan konten

          // Mengambil gambar
          const imageResponse = await axios.get(
            "http://localhost:4000/edukasi/5/image",
            {
              responseType: "blob",
            }
          );
          const imageObjectURL = URL.createObjectURL(imageResponse.data);
          setImageUrl(imageObjectURL);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(); // Memanggil fungsi untuk mengambil data saat komponen pertama kali dirender
  }, []);

  return (
    <section className="bg-[#387F39] py-20 mt-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Gambar */}
          <div className="relative lg:w-1/2">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="rounded-xl h-auto w-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <p>Memuat gambar...</p>
            )}
          </div>

          {/* Teks */}
          <div className="lg:w-1/2 text-white space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
              {title || "Memuat title..."} {/* Menampilkan title */}
            </h1>
            <p className="text-lg leading-relaxed text-justify">
              {content || "Memuat konten..."} {/* Menampilkan konten */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
