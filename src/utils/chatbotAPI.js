import axios from "axios";

const chatbotAPI = async (question) => {
  try {
    const response = await axios.post(
      "https://application-2a.1p964dl5er48.us-south.codeengine.appdomain.cloud/response",
      { question },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.answer;
  } catch (error) {
    console.error("Error calling chatbot API:", error);
    throw new Error("Gagal mendapatkan jawaban dari chatbot.");
  }
};

export default chatbotAPI;
