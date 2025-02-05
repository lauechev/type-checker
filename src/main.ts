import './scss/styles.scss';

const sentenceTag = document.querySelector<HTMLInputElement>(`input[type="text"]`);
const outputTag = document.querySelector<HTMLDivElement>('.output');

//when i type in my sentence tag, update the output tag accordingly

if (sentenceTag && outputTag) {
  sentenceTag.addEventListener('keyup', function () {
    if (this.value) {
      outputTag.innerHTML = this.value;
    } else {
      outputTag.innerHTML = 'The quick brown fox...';
    }
    // outputTag.innerHTML = this.value;
  });
}
