
function typeWriter(messages, spanElement, speed, delay) {
    let messageIndex = 0;

    function type() {
      const currentMessage = messages[messageIndex % messages.length];
      spanElement.textContent = currentMessage.substring(0, spanElement.textContent.length + 1);

      if (spanElement.textContent === currentMessage) {
        
        setTimeout(erase, delay);
      } else {
        setTimeout(type, speed);
      }
    }

    function erase() {
      if (spanElement.textContent.length > 0) {
        spanElement.textContent = spanElement.textContent.substring(0, spanElement.textContent.length - 1);
        setTimeout(erase, speed);
      } else {
        // Move to the next message
        messageIndex++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // Call the function with  parameters
  const spanElement = document.getElementById('typing-span');
  const messagesToType = ['Abhinav!', 'Darling.']; 
  const typingSpeed = 150; 
  const delayAfterFirstMessage = 1000;

  setTimeout(() => {
    typeWriter(messagesToType, spanElement, typingSpeed, delayAfterFirstMessage);
  }, 100); 

