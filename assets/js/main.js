(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelectorAll(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    if(logo.length) {
      // === logo change
      if (ud_header.classList.contains("sticky")) {
        document.querySelector(".header-logo").src =
          "assets/images/logo/logo.png"
      } else {
        document.querySelector(".header-logo").src =
          "assets/images/logo/logo.png"
      }
    }

    if (document.documentElement.classList.contains("dark")) {
      if(logo.length) {
        // === logo change
        if (ud_header.classList.contains("sticky")) {
          document.querySelector(".header-logo").src =
            "assets/images/logo/logo.png"
        } 
      }
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ===== responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("rotate-180");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };

    /* ========  themeSwitcher start ========= */

  // themeSwitcher
  const themeSwitcher = document.getElementById('themeSwitcher');

  // Theme Vars
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color0scheme: dark)').matches;

  // Initial Theme Check
  const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark');
      return;
    }
  };

  // Manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      return;
    }

    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  // call theme switch on clicking buttons
  themeSwitcher.addEventListener('click', () => {
    themeSwitch();
  });

  // invoke theme check on initial load
  themeCheck();
  /* ========  themeSwitcher End ========= */
})();

// EmailJS
function sendMail(event) {
  event.preventDefault();  // Prevent form submission

  let parms = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  emailjs.send('service_5pg5u58', 'template_prbtn4k', parms)
    .then(function(response) {
      showToast('successAlert', 'success');
    }, function(error) {
      showToast('failureAlert', 'failure');
    });
}

function showToast(alertId, type) {
  hideToasts();  // Hide all toasts before showing the current one
  
  const toast = document.getElementById(alertId);
  toast.classList.remove('hidden');
  toast.classList.add('show', type);
  
  // Optionally, auto-hide the toast after a few seconds
  setTimeout(() => {
    hideToast(toast);
  }, 5000);  // Hide after 5 seconds
}

function hideToast(toast) {
  toast.classList.remove('show');
  toast.classList.add('hidden');
}

function hideToasts() {
  document.getElementById('successAlert').classList.add('hidden');
  document.getElementById('failureAlert').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
  // Blog Content
  const blogContent = [
    {
      title: 'Project WASH: Promoting Health Through Clean Water and Hygiene!',
      image: '../../assets/images/photos/55.jpg',
      date: 'Dec 13, 2024',
      description: 'We are proud to announce the successful completion of Project WASH, an initiative dedicated to promoting water, sanitation, and hygiene (WASH) awareness among students. This project focused on the importance of clean water access, proper sanitation practices, and maintaining hygiene to prevent illness. 🚰💧',
      link: 'javascript:void(0)'
    },
    {
      title: 'Health First Initiative: Empowering Students with First Aid Knowledge!',
      image: '../../assets/images/photos/45.jpg',
      date: 'Dec 13, 2024',
      description: 'We are excited to share the success of our Health First Initiative, a transformative session where we equipped students with essential first aid skills and infection prevention knowledge. This initiative aimed to empower students to respond effectively in emergencies and maintain their health and well-being. 🩺💪',
      link: 'javascript:void(0)'
    },
    {
      title: 'Breaking Barriers: A Successful Start with Mental Health Talk!',
      image: '../../assets/images/photos/46.png',
      date: 'Dec 11, 2024',
      description: 'We are delighted to share the success of the first session of Breaking Barriers, a series dedicated to exploring diverse and impactful topics. Our inaugural session, focused on mental health, featured an insightful talk by Dr. Ravi Sharma, who captivated the audience with his expertise and compassionate approach. 🗣💬',
      link: 'javascript:void(0)'
    },
    {
      title: 'Installation Ceremony of Rtr. Rijul Sen',
      image: '../../assets/images/Blogs/installation1.jpg',
      date: 'Sep 25, 2024',
      description: 'Join us for the prestigious Installation Ceremony of Rtr. Rijul Sen as the President of Rotaract Club UCBS for the term 2024-2025.',
      link: 'javascript:void(0)'
    },
    {
      title: 'Trip to Leh Ladakh',
      image: '../../assets/images/Blogs/leh1.jpg',
      date: 'Sep 13, 2024',
      description: 'Experience the breathtaking beauty of the Himalayas with our adventurous road trip from Manali to Leh.',
      link: 'javascript:void(0)'
    },
    {
      title: 'Pinning Ceremony Of BODs 2024-25',
      image: '../../assets/images/Blogs/pinning1.jpg',
      date: 'Sep 03, 2024',
      description: 'Highlight the importance of the pinning tradition in recognizing leadership and responsibility.',
      link: 'javascript:void(0)'
    },
    {
      title: 'A Day of Joy and Care for Our Furry Friends',
      image: '../../assets/images/Blogs/dog1.jpg',
      date: 'Aug 25, 2024',
      description: 'Rotaract UCBS celebrated National Dog Day with a heartwarming event dedicated to our street dogs.',
      link: 'javascript:void(0)'
    },
    {
      title: 'Candle March for Justice',
      image: '../../assets/images/Blogs/candle1.jpg',
      date: 'Aug 20, 2023',
      description: 'Joined a solemn candle march to demand justice for the recent tragic incident in Kolkata, standing in solidarity for victims\' rights.',
      link: 'javascript:void(0)'
    },
    {
      title: 'World Photography Day Competition',
      image: './assets/images/Blogs/competition.jpg',
      date: 'Aug 19, 2024',
      description: 'Celebrated Independence Day by supporting local animal welfare through a visit and donations to a nearby cow shelter.',
      link: 'javascript:void(0)'
    },
    {
      title: 'Rakhi Celebration with Governor, Army and Police',
      image: '../../assets/images/Blogs/rakhi3.jpg',
      date: 'Aug 18, 2023',
      description: 'Spread festive joy by organizing Rakhi distribution with esteemed guests including the Governor, Army personnel, and Police officers, enhancing community spirit and unity.',
      link: 'javascript:void(0)'
    },
    {
      title: 'Cow Shelter Visit on Independence Day',
      image: './assets/images/Blogs/cow1.jpg',
      date: 'Aug 15, 2024',
      description: 'Celebrated Independence Day by supporting local animal welfare through a visit and donations to a nearby cow shelter.',
      link: 'javascript:void(0)'
    },
    {
      title: ' Blood Donation Drive at Police Ground, Junga',
      image: './assets/images/Blogs/blood2.jpg',
      date: 'Aug 07, 2024',
      description: 'Celebrated Independence Day by supporting local animal welfare through a visit and donations to a nearby cow shelter.',
      link: 'javascript:void(0)'
    },
    {
      title: 'Igniting Leadership: Rotaract UCBS Engages in Leadership Training',
      image: './assets/images/Blogs/ltp1.jpg',
      date: 'July 21, 2024',
      description: 'The Rotaract Club of UCBS recently participated in District 3080’s Leadership Training Programme (LTP), an event designed to empower and inspire future leaders.',
      link: 'javascript:void(0)'
    },
    {
      title: 'Green Tomorrow: Tree Plantation at Ava Lodge',
      image: './assets/images/Blogs/tree1.jpg',
      date: 'June 24, 2024',
      description: 'Rotaract UCBS took a step toward a greener future by organising a tree plantation event at Ava Lodge.',
      link: 'javascript:void(0)'
    },
    {
      title: 'Blood Donation Camp at The Ridge, Shimla',
      image: './assets/images/Blogs/Blood1.jpg',
      date: 'May 01, 2024',
      description: 'Rotaract UCBS, in collaboration with Rotary Club Shimla Hill Queens and the Blood Bank of Kamla Nehru State Hospital, organized a blood donation camp at The Ridge in Shimla.',
      link: '../../src/Blogs/blooddonation1.html'
    }
    
  ];

  // Footer Blog Content
  const footerBlogContent = [
    {
      title: 'Promoting Health Through Clean Water and Hygiene!',
      image: '../../assets/images/photos/55.jpg',
      link: '#'
    },
    {
      title: 'Empowering Students with First Aid Knowledge!',
      image: '../../assets/images/photos/45.jpg',
      link: '#'
    }
  ];

  function updateBlogSection(content) {
    content.forEach((item, index) => {
      const blogElement = document.querySelector(`.blog-item:nth-child(${index + 1})`);
      if (blogElement) {
        blogElement.querySelector('img').src = item.image;
        blogElement.querySelector('h3 a').textContent = item.title;
        blogElement.querySelector('.date').textContent = item.date;
        blogElement.querySelector('p').textContent = item.description;
        blogElement.querySelector('a').href = item.link;
      }
    });
  }

  function updateFooterBlogs(blogContent) {
    blogContent.forEach((blog, index) => {
      const imgElement = document.querySelector(`#footer-blog${index + 1}-img`);
      const titleElement = document.querySelector(`#footer-blog${index + 1}-title`);
      const linkElement = imgElement ? imgElement.closest('a') : null;

      // Check if elements exist before setting their properties
      if (imgElement && titleElement && linkElement) {
        imgElement.src = blog.image;
        titleElement.textContent = blog.title;
        linkElement.href = blog.link;
      }
    });
  }

  // Update Blog Section
  updateBlogSection(blogContent);

  // Update Footer Blog Section
  if (document.querySelector('#footer-blog1-img')) {
    updateFooterBlogs(footerBlogContent);
  }
});

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

