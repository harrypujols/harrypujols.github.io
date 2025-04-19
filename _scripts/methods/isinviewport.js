export default (element) => {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === element) {
          if (entry.isIntersecting) {
            resolve(true); // Element is in the viewport
          } else {
            resolve(false); // Element is not in the viewport
          }
          observer.disconnect(); // Stop observing once the result is determined
        }
      });
    });

    // Start observing the element
    observer.observe(element);
  });
};
