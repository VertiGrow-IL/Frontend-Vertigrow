import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ChatbotInput({ onSend, loading }) {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-10">
      <div className="flex justify-center items-center space-x-2">
        <input
          type="text"
          placeholder="Masukkan pertanyaan anda"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown} // Tambahkan event untuk menangkap Enter
          className="border border-green-500 p-2 w-4/5 rounded"
          disabled={loading} // Disabled saat loading
        />
        <button
          className={`bg-[#387F39] hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSend}
          disabled={loading} // Disabled saat loading
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </div>
    </div>
  );
}

ChatbotInput.propTypes = {
  onSend: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
