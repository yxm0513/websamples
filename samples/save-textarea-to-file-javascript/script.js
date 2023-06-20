let textEle = document.getElementById("text");
let fileNameEle = document.getElementById("fileName");
let saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const textData = textEle.value;
  const textDataBlob = new Blob([textEle.value], { type: "text/plain" });

  const downloadUrl = window.URL.createObjectURL(textDataBlob)

  const downloadLink = document.createElement('a');
  downloadLink.download = fileNameEle.value
  downloadLink.href = downloadUrl;
  downloadLink.click()

  console.log(textData);
  console.log(textDataBlob);
});
