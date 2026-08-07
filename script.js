document.addEventListener("DOMContentLoaded", () => {
  const envelopeWrapper = document.getElementById("envelopeWrapper");
  const waxSeal = document.getElementById("waxSeal");
  const fullContent = document.getElementById("fullContent");
  // Trigger opening animation when clicking either the wax seal or the envelope wrapper
  envelopeWrapper.addEventListener("click", () => {
    // Add open class to start CSS animations
    envelopeWrapper.classList.add("open");
    // Reveal the main website layout after the envelope animation completes
    setTimeout(() => {
      fullContent.classList.add("show");
    }, 1200); // Matches envelope exit timing
  });
});



document.querySelectorAll('.plan-item').forEach(item => {
  item.addEventListener('click', () => {
    
    document.querySelectorAll('.map_all').forEach(section => {
      section.classList.remove('active');
    });

 
    const targetClass = item.getAttribute('data-target');
    document.querySelector('.' + targetClass).classList.add('active');
    
  });
});
