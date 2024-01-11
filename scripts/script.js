const preTags = document.querySelectorAll("pre");

preTags.forEach(preTag => {
  const copyButton = document.createElement("span");
  copyButton.innerText = "Copy";
  copyButton.classList.add("copy-button");

  preTag.appendChild(copyButton);

  copyButton.addEventListener("click", () => {
    copyButton.style.display = "none";

    const range = document.createRange();
    range.selectNode(preTag);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");

      copyButton.innerText = "Copied!";
      setTimeout(function(){
        copyButton.innerText = "Copy";
      }, 2000);
    } catch (err) {
      console.error("Unable to copy text:", err);
    } finally {
   
      copyButton.style.display = "inline";

      
      window.getSelection().removeAllRanges();
    }
  });
});

console.log('🐉')