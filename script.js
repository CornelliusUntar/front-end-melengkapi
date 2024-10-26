// Pilih semua kartu dalam section Latest in Wellness
  const wellnessCards = document.querySelectorAll('.latest-wellness .card');

  wellnessCards.forEach((card) => {
    // hover in
    card.addEventListener('mouseover', () => {
      card.classList.add('hover-effect');
    });

    // hover out
    card.addEventListener('mouseout', () => {
      card.classList.remove('hover-effect');
    });
  });

  const fashionCards = document.querySelectorAll('.fashion-trends .card');

  fashionCards.forEach((card) => {
    // hover in
    card.addEventListener('mouseover', () => {
      card.classList.add('hover-effect');
    });

    // hover out
    card.addEventListener('mouseout', () => {
      card.classList.remove('hover-effect');
    });
  });

  // Menambahkan kelas animate untuk memulai animasi saat halaman dimuat
window.onload = function() {
    const bestLife = document.getElementById('bestLife');
    bestLife.classList.add('animate');
  };

  document.addEventListener("scroll", function() {
    const subscribeSection = document.querySelector(".subscribe-section");
    const sectionPosition = subscribeSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      subscribeSection.classList.add("show");
    }
  });