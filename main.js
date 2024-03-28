function playGame() {
    var userChoice = prompt("Tanlang: quduq, qaychi yoki qogoz?").toLowerCase();
  
    if (userChoice !== "quduq" && userChoice !== "qaychi" && userChoice !== "qogoz") {
      alert("Siz togri malumot kiritmadingiz. Iltimos, quduq, qaychi yoki qogozni tanlang!");
      return;
    }
  
    var choices = ["quduq", "qaychi", "qogoz"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    var result;
    if (userChoice === computerChoice) {
      result = "Durrang!";
    } else if (
      (userChoice === "quduq" && computerChoice === "qaychi") ||
      (userChoice === "qogoz" && computerChoice === "quduq") ||
      (userChoice === "qaychi" && computerChoice === "qogoz")
    ) {
      result = "Siz yuttingiz!";
    } else {
      result = "Kompyuter yutti!";
    }
  
    alert(`Siz tanladingiz: ${userChoice}\nKompyuter tanladi: ${computerChoice}\n${result}`);
  }
  
  playGame();