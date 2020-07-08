export function setImagePreview(inputID, targetID, clbk) {
  const input = document.getElementById(inputID);
  const target = document.getElementById(targetID);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  input.onchange = async(evt) => {
    const converted = await toBase64(input.files[0]);
    target.src = converted;
    clbk(target);
  };
}
