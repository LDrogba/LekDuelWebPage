document.querySelector('#quiz').addEventListener('click', event => {
  const choice = event.target.closest('button');
  if (!choice) return;
  const correct = choice.dataset.answer === '1';
  document.querySelectorAll('#quiz button').forEach(button => button.classList.remove('correct', 'wrong'));
  choice.classList.add(correct ? 'correct' : 'wrong');
  document.querySelector('#result').textContent = correct ? 'Dobrze! Kość ramienna łączy bark z łokciem.' : 'Ta kość leży w przedramieniu. Spróbuj ponownie.';
});
