export default function (type) {
  type = type.toLowerCase();

  const typeDetails = {
    electric: { borderColor: "#FFD700", emoji: "⚡️" },
    water: { borderColor: "#6493EA", emoji: "💧" },
    fire: { borderColor: "#FF5733", emoji: "🔥" },
    grass: { borderColor: "#66CC66", emoji: "🌿" },
  };

  return typeDetails[type] || { borderColor: "#A0A0A0", emoji: "❓" };
}
