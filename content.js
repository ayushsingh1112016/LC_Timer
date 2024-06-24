function clickTimerButton() {
    const timerButton = document.querySelector('div.flex.flex-none.cursor-pointer.p-2.text-gray-60.dark\\:text-gray-60[data-state="closed"]');
    if (timerButton) {
      timerButton.click();
      console.log('Timer button clicked.');
      return true;  
    }
    return false;  
  }
  
window.addEventListener('load', () => {
if (!clickTimerButton()) {
    const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (clickTimerButton()) {
        observer.disconnect();  
        }
    });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
});
  