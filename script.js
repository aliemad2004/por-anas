// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
  });
  
  // Navbar color change on scroll
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('nav-links');
  const navLogo = document.getElementById('nav-logo');
  const menuToggle = document.getElementById('menu-toggle');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-white', 'shadow-md', 'py-2');
      navbar.classList.remove('bg-transparent', 'py-4');
      navLogo.classList.remove('text-white');
      navLogo.classList.add('text-blue-900');
      document.querySelectorAll('#nav-links a').forEach(link => {
        link.classList.add('text-blue-900');
        link.classList.remove('text-white');
      });
      
      // تغيير لون التوجلر إلى أزرق
      menuToggle.classList.remove('text-white');
      menuToggle.classList.add('text-blue-700');
    } else {
      navbar.classList.remove('bg-white', 'shadow-md', 'py-2');
      navbar.classList.add('bg-transparent', 'py-4');
      navLogo.classList.add('text-white');
      navLogo.classList.remove('text-blue-900');
      document.querySelectorAll('#nav-links a').forEach(link => {
        link.classList.add('text-white');
        link.classList.remove('text-blue-900');
      });
  
      // تغيير لون التوجلر إلى أبيض
      menuToggle.classList.remove('text-blue-700');
      menuToggle.classList.add('text-white');
    }
  });
  
  // Toggle mobile menu with background and transition
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    if (!navLinks.classList.contains('hidden')) {
      navLinks.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'p-4');
  
      // خلي اللينكات لونها أزرق لما القائمة تتفتح
      document.querySelectorAll('#nav-links a').forEach(link => {
        link.classList.remove('text-white', 'text-blue-900');
        link.classList.add('text-blue-700'); // أزرق واضح
      });
    } else {
      navLinks.classList.remove('bg-white', 'rounded-lg', 'shadow-lg', 'p-4');
  
      // رجّع لون اللينكات حسب الاسكرول
      if (window.scrollY > 50) {
        document.querySelectorAll('#nav-links a').forEach(link => {
          link.classList.remove('text-white', 'text-blue-700');
          link.classList.add('text-blue-900');
        });
      } else {
        document.querySelectorAll('#nav-links a').forEach(link => {
          link.classList.remove('text-blue-900', 'text-blue-700');
          link.classList.add('text-white');
        });
      }
    }
  });
  
  // تحديد الزر
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// وظيفة لإظهار الزر عند التمرير
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = 'block'; // يظهر الزر
    } else {
        scrollToTopBtn.style.display = 'none'; // يختفي الزر
    }
};

// وظيفة للرجوع إلى أعلى الصفحة عند الضغط على الزر
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // الانتقال السلس لأعلى الصفحة
    });
});
