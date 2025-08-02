function handleUserInput() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const responseDiv = document.getElementById("response");

  if (!input.trim()) {
    responseDiv.innerHTML =
      "<p>Please enter something for MediBot to help you with!</p>";
    return;
  }

  if (input.includes("headache")) {
    responseDiv.innerHTML =
      "<p>🧠 Headaches can result from stress or dehydration. Rest and stay hydrated. Consult a doctor if persistent.</p>";
  } else if (input.includes("diet")) {
    responseDiv.innerHTML =
      "<p>🥗 A balanced diet boosts energy. Eat fresh vegetables, fruits, and drink water regularly!</p>";
  } else if (input.includes("mental")) {
    responseDiv.innerHTML =
      "<p>💚 You're not alone. Try talking to someone you trust, and practice self-care. You matter.</p>";
  } else {
    responseDiv.innerHTML =
      "<p>🤖 I'm still learning. Please consult a healthcare professional for personalized support.</p>";
  }
}
