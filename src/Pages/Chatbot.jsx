import { useState, useEffect } from "react";
import NavbarUser from "../Components/NavbarUser";
import ChatbotMessages from "../Sections/Chatbot/ChatbotMessage";
import ChatbotInput from "../Sections/Chatbot/ChatbotInput";
import chatbotAPI from "../utils/chatbotAPI";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Ambil riwayat pesan dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatbotMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  // Simpan riwayat pesan ke localStorage setiap kali `messages` berubah
  useEffect(() => {
    localStorage.setItem("chatbotMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = async (message) => {
    // Tambahkan pesan pengguna ke state
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, fromUser: true },
    ]);

    // Set status loading
    setLoading(true);

    try {
      // Panggil API chatbot
      const botResponse = await chatbotAPI(message);

      // Tambahkan respon chatbot ke state
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, fromUser: false },
      ]);
    } catch (error) {
      // Jika API gagal, tambahkan pesan error
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Maaf, terjadi kesalahan. Coba lagi nanti.", fromUser: false },
      ]);
    } finally {
      // Matikan status loading
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <NavbarUser />
      <ChatbotMessages messages={messages} loading={loading} />
      <ChatbotInput onSend={handleSendMessage} loading={loading} />
    </div>
  );
}
