let pop_up = document.getElementById("pop-up");
let open_btn = document.getElementById("open");

function openPopUp() {
  open_btn.classList.replace("openPopUp", "openPopUp_btn_close");
  pop_up.classList.replace("pop-hide", "pop-up");
}

function closePopup() {
  pop_up.classList.replace("pop-up", "pop-hide");
  open_btn.classList.replace("openPopUp_btn_close", "openPopUp");
}