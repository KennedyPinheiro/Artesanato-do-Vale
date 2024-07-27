document.getElementById('dark_mode').addEventListener('click', function() {
  document.body.classList.toggle('dark');
  
  // Altera o ícone de acordo com o modo atual
  if (document.body.classList.contains('dark')) {
    this.textContent = 'wb_sunny';
  } else {
    this.textContent = 'dark_mode';
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('dark_mode');
  themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    alternarIcone();
  });
});

function alternarIcone() {
  let darkmode = document.getElementById("dark_mode");
  if (darkmode.textContent === "wb_sunny") {
    darkmode.textContent = "dark_mode";
  } else {
    darkmode.textContent = "wb_sunny";
  }
}