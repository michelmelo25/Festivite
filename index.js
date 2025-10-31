document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("cover")

  const fileNameSpan = document.querySelector(".input-area .file-name")

  fileInput.addEventListener("change", (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const nomeDoArquivo = event.target.files[0].name

      fileNameSpan.textContent = nomeDoArquivo
    } else {
      fileNameSpan.textContent = "Nenhum arquivo selecionado"
    }
  })
})
