function toggleAnswer(id, question) {
    const answer = document.getElementById(`answer${id}`);
    const allQuestions = document.querySelectorAll('.question');
    const allAnswers = document.querySelectorAll('.answer');

    // Close all answers
    allAnswers.forEach(ans => {
      if (ans.id !== `answer${id}`) {
        ans.style.display = 'none';
      }
    });

    // Toggle current answer
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';

    // Toggle icons for all questions
    allQuestions.forEach(q => {
      if (q == question) {
        q.querySelector('i').classList.toggle('fa-arrow-up');
        q.querySelector('i').classList.toggle('fa-arrow-down');
      }
    });
  }