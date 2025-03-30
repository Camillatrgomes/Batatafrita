document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('quiz-result');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const q1 = document.querySelector('input[name="q1"]:checked');
      const q2 = document.querySelector('input[name="q2"]:checked');
      const q3 = document.querySelector('input[name="q3"]:checked');
  
      if (!q1 || !q2 || !q3) {
        resultDiv.textContent = "Por favor, responda todas as perguntas.";
        resultDiv.style.color = 'red';
        return;
      }
  
      let score = 0;
  
      if (q1.value === 'inglesa') score++;
      if (q2.value === '180') score++;
      if (q3.value === 'falso') score++;
  
      resultDiv.textContent = "Você acertou " + score + " de 3 respostas.";
      resultDiv.style.color = score === 3 ? 'green' : 'red';
    });
  });
  