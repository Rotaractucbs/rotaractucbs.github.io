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

    if (logo.length) {
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
      if (logo.length) {
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

  /* ======== themeSwitcher start ========= */

  // themeSwitcher
  const themeSwitcher = document.getElementById('themeSwitcher');

  // Theme Vars
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initial Theme Check
  const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark');
      return;
    }
    document.documentElement.classList.remove('dark');
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
  if (themeSwitcher) {
    themeSwitcher.addEventListener('click', () => {
      themeSwitch();
    });
  }

  // invoke theme check on initial load
  themeCheck();

  /* ======== themeSwitcher End ========= */

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
    .then(function (response) {
      showToast('successAlert', 'success');
    }, function (error) {
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
      description: 'We are thrilled to share the success of our Health First Initiative, a transformative session where we equipped students with essential first aid skills and infection prevention knowledge. This initiative aimed to empower students to respond effectively in emergencies and maintain their health and well-being. To further support their efforts, we donated 50 first aid kits. 🩺💪',
      link: 'javascript:void(0)'
    },
    {
      title: 'Breaking Barriers: A Successful Start with Mental Health Talk!',
      image: '../../assets/images/photos/46.png',
      date: 'Dec 11, 2024',
      description: 'We are delighted to share the success of the first session of Breaking Barriers, a series dedicated to exploring diverse and impactful topics. Our inaugural session, focused on mental health, featured an insightful talk by Dr. Ravi Sharma, who captivated the audience with his expertise and compassionate approach. 🗣💬 Click on the Title to Watch Now!!!',
      link: 'https://fb.watch/wL_7Bj9LI6/'
    },
    {
      title: 'Installation Ceremony of Rtr. Rijul Sen',
      image: '../../assets/images/Blogs/installation1.jpg',
      date: 'Sep 25, 2024',
      description: 'Rotaract Club UCBS celebrated the installation of Rtr. Rijul Sen as President for 2024-25! 🎉 The ceremony, held at Rotary Town Hall, Shimla, was graced by esteemed guests, including DRR Rtr. Shashank Kaushik and Rtn. Maala Singh. 🤝 Rtr. Rijul Sen and Rtr. Ayush Sharma were sworn in as President and Secretary, respectively. 💼 The event was a testament to the clubs commitment to service and leadership. 💪',
      link: 'javascript:void(0)'
    },
    {
      title: 'Trip to Leh Ladakh',
      image: '../../assets/images/Blogs/leh1.jpg',
      date: 'Sep 13, 2024',
      description: 'The Rotaract Club of UCBS embarked on an unforgettable adventure through the breathtaking landscapes of Leh-Ladakh! 🏔️ From the majestic Khardung La Pass to the serene Pangong Lake, they explored stunning vistas and embraced the spirit of adventure. 🏕️ Along the way, they promoted environmental awareness and supported local communities, making a positive impact. 🌍 This journey was not just about exploration but also about fostering strong bonds and creating lifelong memories. 🤝❤️',
      link: 'javascript:void(0)'
    },
    {
      title: 'Pinning Ceremony Of BODs 2024-25',
      image: '../../assets/images/Blogs/pinning1.jpg',
      date: 'Sep 03, 2024',
      description: 'Rotaract Club UCBS celebrated the induction of its new leadership team at a pinning ceremony held at Rotary Town Hall, Shimla. 🎉 The event honored the commitment of the new board members to service, integrity, and fellowship. 🤝 With the pinning of the official Rotaract badge, the club welcomed a new era of leadership and community impact.',
      link: 'javascript:void(0)'
    },
    {
      title: 'A Day of Joy and Care for Our Furry Friends',
      image: '../../assets/images/Blogs/dog1.jpg',
      date: 'Aug 25, 2024',
      description: 'Rotaract UCBS marked International Dog Day with a heartwarming event dedicated to our beloved street dogs. We organized a special feeding drive, providing nutritious meals and essential supplies to these furry companions. Lets spread love and compassion for all creatures, big and small. 🐾',
      link: 'javascript:void(0)'
    },
    {
      title: 'Candle March for Justice',
      image: '../../assets/images/Blogs/candle1.jpg',
      date: 'Aug 20, 2023',
      description: 'We joined a solemn candle march with fellow Rotaract and Rotary members, along with other NGOs, at Mall Road, Shimla, to express our deep sorrow and outrage over the tragic incident in Kolkata. We stand united in solidarity with the victims family and call for a thorough investigation and swift justice. Lets work together to create a safer and more compassionate society. 🕯️💔',
      link: 'javascript:void(0)'
    },
    {
      title: 'World Photography Day Competition',
      image: './assets/images/Blogs/competition.jpg',
      date: 'Aug 19, 2024',
      description: 'Rotaract UCBS organized a captivating photography competition to celebrate World Photography Day. The event showcased the incredible talent of our members, as they captured the beauty and diversity of life through their lenses. From stunning landscapes to heartwarming portraits, the competition showcased the power of photography to inspire and connect. 📸🌟',
      link: 'javascript:void(0)'
    },
    {
      title: 'Rakhi Celebration with Governor, Army and Police',
      image: '../../assets/images/Blogs/rakhi3.jpg',
      date: 'Aug 18, 2023',
      description: 'We celebrated Raksha Bandhan by organizing a special Rakhi distribution ceremony with the esteemed Governor of Himachal Pradesh, along with brave Army personnel and dedicated Police officers. By tying over 70 Rakhis, we strengthened the bond of brotherhood and celebrated the spirit of unity and patriotism. 🇮🇳❤️',
      link: 'javascript:void(0)'
    },
    {
      title: 'Cow Shelter Visit on Independence Day',
      image: './assets/images/Blogs/cow1.jpg',
      date: 'Aug 15, 2024',
      description: 'This Independence Day, we chose to celebrate by giving back to our community. We visited a local cow shelter and extended a helping hand to these gentle creatures. By donating essential supplies and spending quality time with them, we experienced a sense of fulfillment and gratitude. Its a small step, but its a step towards a more compassionate and sustainable future. 🐮🙏',
      link: 'javascript:void(0)'
    },
    {
      title: ' Blood Donation Drive at Police Ground, Junga',
      image: './assets/images/Blogs/blood2.jpg',
      date: 'Aug 07, 2024',
      description: 'Rotary Club Shimla HillQueens, in collaboration with Himachal Pradesh Armed Police 1st Battalion Junga, successfully organized a blood donation camp despite challenging weather. 🩸💪 Over 30 units of blood were collected and donated to IGMC Hospital Shimla blood bank. 🏥 The event was made possible by the support of Mr. Rohit Malpani IPS and Deputy Commandant Babita Rana. 🤝',
      link: 'javascript:void(0)'
    },
    {
      title: 'Igniting Leadership: Rotaract UCBS Engages in Leadership Training',
      image: './assets/images/Blogs/ltp1.jpg',
      date: 'July 21, 2024',
      description: 'The Rotaract Club of UCBS recently participated in District 3080’s Leadership Training Programme (LTP). This transformative event, designed to empower and inspire future leaders, provided Rotaract members with valuable insights, skills, and networking opportunities. Through engaging workshops, inspiring talks, and interactive sessions, participants gained a deeper understanding of leadership principles, effective communication, and community service.  🚀',
      link: 'javascript:void(0)'
    },
    {
      title: 'Green Tomorrow: Tree Plantation at Ava Lodge',
      image: './assets/images/Blogs/tree1.jpg',
      date: 'July 02, 2024',
      description: 'Rotaract Club UCBS took a significant step towards a greener future by organizing a tree plantation drive at Ava Lodge, Chaura Maidan, Shimla. The initiative aimed to enhance environmental sustainability by planting over 50 trees and flowers, which contribute to cleaner air, soil conservation, and biodiversity. 🌳🌎',
      link: 'javascript:void(0)'
    },
    {
      title: '🎉 Charter Presentation of Rotaract Club of UCBS by District Governor 🎓',
      image: './assets/images/Blogs/dg.jpg',
      date: 'May 17, 2024',
      description: 'The official visit of District Governor Rtn. Arun Mongia to RCS Hill Queens marked a significant milestone with the formal pinning and charter presentation of the newly formed Rotaract Club of UCBS. 🌟 The ceremony was graced by the First Lady of the District, Rtn. Charu Mongia, and Assistant Governor CA/Rtn. Rohit Karol, emphasizing Rotarys commitment to empowering youth and fostering leadership. 💡✨ This memorable occasion celebrated the induction of this vibrant new club into the Rotary family, inspiring future initiatives and collaborations. 🤝🎊',
      link: 'javascript:void(0)'
    },
    {
      title: 'Blood Donation Camp at The Ridge, Shimla',
      image: './assets/images/Blogs/Blood1.jpg',
      date: 'May 01, 2024',
      description: 'Rotary Club Shimla Hill Queens, in collaboration with Rotaract Club UCBS and Kamla Nehru State Hospital Blood Bank, organized a successful blood donation camp at the historic Ridge on May 1st. The camp aimed to address the urgent need for blood donations and collected 56 units of blood from 70 generous donors. 🩸❤️',
      link: 'javascript:void(0)'
    }

  ];




  // Footer Blog Content
  const footerBlogContent = [
    {
      title: 'Promoting Health Through Clean Water and Hygiene!',
      image: '../../assets/images/photos/55.jpg',
      link: '../../blog-grids.html'
    },
    {
      title: 'Empowering Students with First Aid Knowledge!',
      image: '../../assets/images/photos/45.jpg',
      link: '../../blog-grids.html'
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

        // Make the title clickable as well
        const titleLink = blogElement.querySelector('h3 a');
        titleLink.addEventListener('click', function () {
          window.location.href = item.link;
        });
      }
    });
  }

  // Call the function to update blog content
  updateBlogSection(blogContent);



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
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true, // Allows infinite loop of slides
    slidesPerView: 1, // Number of slides to show at a time
    spaceBetween: 10, // Space between slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 3000, // Time between slide transitions (in milliseconds)
      disableOnInteraction: false // Keeps autoplay running after interaction
    }
  });

  // Function to change the image source for mobile devices for all slides
  function changeImagesForMobile() {
    // Slide 1
    const slide1Image = document.querySelector('#slide-image-1');
    if (slide1Image) {
      if (window.innerWidth <= 768) {
        slide1Image.src = './assets/images/photos/32.jpg'; // Mobile image for Slide 1
      } else {
        slide1Image.src = './assets/images/photos/49.jpg'; // Default image for Slide 1
      }
    }

    // Slide 2
    const slide2Image = document.querySelector('.slide-2 img');
    if (slide2Image) {
      if (window.innerWidth <= 768) {
        slide2Image.src = './assets/images/photos/22.jpg'; // Mobile image for Slide 2
      } else {
        slide2Image.src = './assets/images/photos/22.jpg'; // Default image for Slide 2
      }
    }

    // Slide 3
    const slide3Image = document.querySelector('.slide-3 img');
    if (slide3Image) {
      if (window.innerWidth <= 768) {
        slide3Image.src = './assets/images/photos/23.jpg'; // Mobile image for Slide 3
      } else {
        slide3Image.src = './assets/images/photos/28.jpg'; // Default image for Slide 3
      }
    }

    // Slide 4
    const slide4Image = document.querySelector('.slide-4 img');
    if (slide4Image) {
      if (window.innerWidth <= 768) {
        slide4Image.src = './assets/images/photos/12.jpg'; // Mobile image for Slide 4
      } else {
        slide4Image.src = './assets/images/photos/42.jpg'; // Default image for Slide 4
      }
    }

    // Slide 5
    const slide5Image = document.querySelector('.slide-5 img');
    if (slide5Image) {
      if (window.innerWidth <= 768) {
        slide5Image.src = './assets/images/photos/34.jpg'; // Mobile image for Slide 5
      } else {
        slide5Image.src = './assets/images/Blogs/leh1.jpg'; // Default image for Slide 5
      }
    }

    // Slide 6
    const slide6Image = document.querySelector('.slide-6 img');
    if (slide6Image) {
      if (window.innerWidth <= 768) {
        slide6Image.src = './assets/images/photos/53.1.jpg'; // Mobile image for Slide 6
      } else {
        slide6Image.src = './assets/images/Blogs/Blood1.jpg'; // Default image for Slide 6
      }
    }

    // Slide 7
    const slide7Image = document.querySelector('.slide-7 img');
    if (slide7Image) {
      if (window.innerWidth <= 768) {
        slide7Image.src = './assets/images/photos/39.jpg'; // Mobile image for Slide 7
      } else {
        slide7Image.src = './assets/images/photos/31.jpg'; // Default image for Slide 7
      }
    }
  }

  // Initial run of the function to set the correct images
  changeImagesForMobile();

  // Run the function on window resize to update the images when changing screen sizes
  window.addEventListener('resize', changeImagesForMobile);

});






window.addEventListener("load", function () {
  // Initialize Lottie animation for preloader
  var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-loader'), // The container where the animation will go
    renderer: 'svg', // Renderer type
    loop: true, // Loop the animation
    autoplay: true, // Play the animation automatically
    path: '../../src/Animation.json' // Path to your Lottie JSON file
  });

  // Hide the preloader and show the main content once the page is fully loaded
  setTimeout(function () {
    document.getElementById("loader-wrapper").style.display = "none";
  }, 2000); // Adjust the time as necessary based on your animation duration
});

