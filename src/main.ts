import './scss/styles.scss';
document.addEventListener('DOMContentLoaded', () => {
  const sentenceTag = document.querySelector<HTMLInputElement>(`input[type="text"]`);

  const typesizeTag = document.querySelector<HTMLInputElement>(`input[name="typesize"]`);
  const typesizeLabel = document.querySelector<HTMLSpanElement>('.typesize-label');

  const lineheightTag = document.querySelector<HTMLInputElement>(`input[name="lineheight"]`);
  const lineheightLabel = document.querySelector<HTMLSpanElement>('.lineheight-label');

  const fontweightTag = document.querySelector<HTMLInputElement>(`input[name="fontweight"]`);
  const fontweightLabel = document.querySelector<HTMLSpanElement>('.fontweight-label');

  const italicTag = document.querySelector<HTMLInputElement>(`input[name="italic"]`);

  const typefaceTag = document.querySelector<HTMLSelectElement>(`select[name="typeface"]`);

  const colorTags = document.querySelectorAll<HTMLDivElement>('.colors div');

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
  if (typesizeTag && outputTag) {
    typesizeTag.addEventListener('input', function () {
      outputTag.style.fontSize = this.value + 'px';
      if (typesizeLabel) {
        typesizeLabel.innerHTML = this.value + 'px';
      }
    });
  }

  //when i change my leading slider, update the text next to it and change the outputTag's lineheight
  if (lineheightTag && outputTag) {
    lineheightTag.addEventListener('input', function () {
      outputTag.style.lineHeight = this.value;
      if (lineheightLabel) {
        lineheightLabel.innerHTML = this.value;
      }
    });
  }

  //when i change my font weight slider, update the text next to it and change the outputTag's fontweight
  if (fontweightTag && outputTag) {
    fontweightTag.addEventListener('input', function () {
      outputTag.style.fontWeight = this.value;
      if (fontweightLabel) {
        fontweightLabel.innerHTML = this.value;
      }
    });
  }

  //when i change my italic checkbox, update the font style to either normal or italic if it's checked or not.

  if (italicTag && outputTag) {
    italicTag.addEventListener('change', function () {
      if (this.checked) {
        outputTag.style.fontStyle = 'italic';
      } else {
        outputTag.style.fontStyle = '';
      }
    });
  }

  //when i change my select for typeface, update font family.
  if (typefaceTag && outputTag) {
    typefaceTag.addEventListener('input', function () {
      outputTag.style.fontFamily = this.value;
    });
  }

  //go through all of my color tags, then when i click one of them change the background color and the text color.
  // and make this tag be selected
  colorTags.forEach((tag) => {
    tag.addEventListener('click', function () {
      if (outputTag) {
        outputTag.style.backgroundColor = this.style.backgroundColor;
        outputTag.style.color = this.style.color;

        //reset classes
        colorTags.forEach((tag) => {
          tag.classList.remove('selected');
        });

        //only add selected to clicked tag
        this.classList.add('selected');
      }
    });
  });
});
