function mostrarCuriosidade() {
  const curiosidades = [
    "O primeiro vírus de computador foi criado em 1986 e se chamava Brain.",
    "Mais de 30 mil sites são hackeados por dia no mundo.",
    "Senhas como '123456' ainda estão entre as mais usadas.",
    "Cibercrimes causam bilhões de dólares em prejuízos todos os anos.",
    "O phishing é um dos golpes mais comuns na internet."
  ];

  const aleatorio = Math.floor(Math.random() * curiosidades.length);
  document.getElementById("curiosidade").textContent = curiosidades[aleatorio];
}
