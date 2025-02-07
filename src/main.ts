import './scss/styles.scss';
document.addEventListener('DOMContentLoaded', () => {
  const sentenceTag = document.querySelector<HTMLInputElement>(`input[type="text"]`);
  const typesizeTag = document.querySelector<HTMLInputElement>(`input[name="typesize"]`);
  const typesizeLabel = document.querySelector<HTMLSpanElement>('.typesize-label');
  const outputTag = document.querySelector<HTMLTextAreaElement>('.output');
  const originalText = outputTag?.value || '';

  //when i type in my sentence tag, update the output tag accordingly
  //if there is no value, put in the original text
  console.log(outputTag);

  if (sentenceTag && outputTag) {
    sentenceTag.addEventListener('keyup', function () {
      if (this.value) {
        outputTag.value = this.value;
      } else {
        outputTag.value = originalText;
      }
    });
  }

  //when i type in my output tag, update the sentence tag accordingly
  if (sentenceTag && outputTag) {
    outputTag?.addEventListener('keyup', function () {
      sentenceTag.value = this.value;
    });
  }

  //when i change my typesize slider, update the text next to it and change the outputTag's font size
  typesizeTag?.addEventListener('input', function () {
    if (outputTag) {
      outputTag.style.fontSize = this.value + 'px';
      if (typesizeLabel) {
        typesizeLabel.innerHTML = this.value + 'px';
      }
    }
  });
});
