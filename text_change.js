document.addEventListener('DOMContentLoaded', function() {
    const dmDiv = document.querySelector('.dm');
    const text = document.querySelector('.text');
    const affirmations = [
      
        "I am worthy of love and respect.",
        "I am capable of achieving my goals.",
        "I am confident in my abilities.",
        "I attract positivity and abundance into my life.",
        "I am grateful for all that I have.",
        "I am constantly growing and improving.",
        "I am in control of my thoughts and emotions.",
        "I am surrounded by supportive and loving people.",
        "I am resilient and can overcome any challenge.",
        "I am proud of myself and my accomplishments.",
        "I am deserving of success and happiness.",
        "I am at peace with who I am.",
        "I am open to new opportunities and experiences.",
        "I am healthy, strong, and full of energy.",
        "I am creating a life I love.",
        "I am enough just as I am.",
        "I am brave and face my fears with courage.",
        "I am worthy of all the good things that come my way.",
        "I am focused and determined to succeed.",
        "I am a magnet for positive energy and good vibes."
    
    ];
    
    
  
    // Function to change the text to a random affirmation
    function changeToRandomAffirmation() {
      const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
      text.textContent = randomAffirmation;
      adjustTextSize(); // Adjust text size after changing content
      console.log('Changed text to:', randomAffirmation);
    }
  
    // Function to reset the text after a delay
    async function resetTextAfterDelay(delay) {
      await sleep(delay);
      text.textContent = "Touch me!";
      adjustTextSize(); // Adjust text size after resetting content
      console.log('Reset text to "Touch me!"');
    }
  
    // Utility function to sleep for a given ms
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    // Function to adjust text size
    function adjustTextSize() {
      const textLength = text.textContent.length;
      let fontSize = 20; // Base font size in pixels
  
      if (textLength > 50) {
        fontSize -= (textLength - 50) / 5; // Example adjustment
      }
  
      text.style.fontSize = `${Math.max(fontSize, 10)}px`; // Apply font size, minimum 10px
    }
  
    // Event listener functions
    function handleMouseLeave() {
      resetTextAfterDelay(1000);
      console.log('Mouse left the dm div');
    }

    let touchCount = 0;

    function handleTouchStart(event) {
      event.preventDefault(); // Prevent default touch behavior
      touchCount++;
      if (touchCount % 2 === 1) {
        dmDiv.classList.add('transformed');
        changeToRandomAffirmation();
        console.log('Touch added, transformed class added');
        log.innerHTML = 'Touch added, transformed class added';
    } else {
        dmDiv.classList.remove('transformed');
        resetTextAfterDelay(1000);
        console.log('Touch removed, transformed class removed');
        log.innerHTML = 'Touch removed, transformed class removed';
    }
    }
  
    // Adding event listeners for desktop
    dmDiv.addEventListener('mouseenter', function() {
      changeToRandomAffirmation();
      console.log('Mouse entered the dm div');
    });
  
    dmDiv.addEventListener('mouseleave', handleMouseLeave);
  
    // Adding event listeners for mobile (touch)
    dmDiv.addEventListener('touchstart', handleTouchStart);
  });
  