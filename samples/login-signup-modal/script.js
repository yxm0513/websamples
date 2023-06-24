const modal = document.getElementById("modal");

const toggleModal = (value) => {
  if (value === "open") modal.style.display = "flex";
  if (value === "close") modal.style.display = "none";
};
