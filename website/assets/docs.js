document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) return;

  const code = button.parentElement.querySelector("code");
  if (!code) return;

  await navigator.clipboard.writeText(code.textContent.trim());
  const previous = button.textContent;
  button.textContent = "Copied";
  window.setTimeout(() => { button.textContent = previous; }, 1200);
});
