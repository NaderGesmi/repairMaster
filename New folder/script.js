// Main JS for RepairMaster (Tailwind, Modern)

document.addEventListener('DOMContentLoaded', function () {
  // Navbar mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Sticky navbar animation
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
      } else {
        navbar.classList.remove('shadow-lg');
      }
    });
  }

  // Initialize SwiperJS for testimonials
  if (typeof Swiper !== 'undefined') {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  // Initialize AOS.js for animations
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
    });
  }

  // Dark/Light mode toggle
  const darkToggle = document.getElementById('darkToggle');
  const darkToggleMobile = document.getElementById('darkToggleMobile');

  function setDarkMode(on) {
    if (on) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-black', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
      if (darkToggle) darkToggle.textContent = '☀️';
      if (darkToggleMobile) darkToggleMobile.textContent = '☀️';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-black', 'text-white');
      document.body.classList.add('bg-white', 'text-black');
      if (darkToggle) darkToggle.textContent = '🌙';
      if (darkToggleMobile) darkToggleMobile.textContent = '🌙';
    }
    localStorage.setItem('darkMode', on ? 'true' : 'false');
  }

  function toggleDarkMode() {
    const isDark = !document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }

  if (darkToggle) darkToggle.addEventListener('click', toggleDarkMode);
  if (darkToggleMobile) darkToggleMobile.addEventListener('click', toggleDarkMode);

  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }

  // Language toggle
  const langLinks = document.querySelectorAll('a[href="/"], a[href="/en/"], a[href="/ar/"]');
  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.location.href = href;
    });
  });

  // Contact form validation and booking
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name')?.value;
      const phone = document.getElementById('phone')?.value;
      const service = document.getElementById('service')?.value;
      if (!name || !phone || (service !== undefined && !service)) {
        if (typeof Toastify !== 'undefined') {
          Toastify({
            text: "Please fill in all fields",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#ef4444",
          }).showToast();
        }
        return;
      }
      // Save booking to localStorage
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      bookings.push({
        name,
        phone,
        service,
        date: new Date().toISOString(),
      });
      localStorage.setItem('bookings', JSON.stringify(bookings));
      // Show success message
      if (typeof Toastify !== 'undefined') {
        Toastify({
          text: "Booking successful! We'll contact you soon.",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#22c55e",
        }).showToast();
      }
      contactForm.reset();
    });
  }

  // Pricing tabs (works for all languages)
  const tabTv = document.getElementById('tab-tv');
  const tabAc = document.getElementById('tab-ac');
  const tvPricing = document.getElementById('tv-pricing') || document.getElementById('table-tv');
  const acPricing = document.getElementById('ac-pricing') || document.getElementById('table-ac');

  if (tabTv && tabAc && tvPricing && acPricing) {
    tabTv.addEventListener('click', () => {
      tabTv.classList.add('active');
      tabAc.classList.remove('active');
      tvPricing.classList.remove('hidden');
      acPricing.classList.add('hidden');
    });
    tabAc.addEventListener('click', () => {
      tabAc.classList.add('active');
      tabTv.classList.remove('active');
      acPricing.classList.remove('hidden');
      tvPricing.classList.add('hidden');
    });
  }

  // RTL support
  function setRTL() {
    const html = document.documentElement;
    const lang = html.getAttribute('lang');
    if (lang === 'ar') {
      html.setAttribute('dir', 'rtl');
    } else {
      html.setAttribute('dir', 'ltr');
    }
  }
  setRTL();
}); 