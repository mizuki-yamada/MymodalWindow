"use strict";
{
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const modal = document.getElementById("modal");
  const background = document.getElementById("background");

  open.addEventListener("click", () => {
    modal.classList.remove("hidden");
    background.classList.remove("hidden");
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    background.classList.add("hidden");
  });

  background.addEventListener("click", () => {
    modal.classList.add("hidden");
    background.classList.add("hidden");
  });
}
