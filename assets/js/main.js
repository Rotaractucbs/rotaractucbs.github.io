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

  emailjs.send('service_vsm97v1', 'template_prbtn4k', parms)
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

////////////////////// Notices ///////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  const noticeContent = [

    {
      title: 'Be a Hero, Save a Life – Mahadan 10.0 is Here!',
      date: '13th March 2025',
      description: 'We are thrilled to invite you to Mahadan 10.0, a mega blood donation camp organized by Rotary District 3040, with active participation from Rotary District 3080 and our club. This is an incredible opportunity to make a real difference by donating blood and saving lives. Join us at 📍 The Ridge, Shimla, on 13th March and be a part of this noble cause. ⏰ Time: 9 AM - 5 PM '
    },

  ];

  function renderNotices(homePage = true) {
    const noticeContainer = document.querySelector("#notice-list");
    if (!noticeContainer) return; 

    noticeContainer.innerHTML = ""; 

    noticeContent.forEach((item) => {
      let noticeItem;
      if (homePage) {
        
        noticeItem = `
    
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
          ${item.title}
          </div>
          
        `;
      } else {
       
        noticeItem = `
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="wow fadeInUp group mb-10" data-wow-delay=".1s">
              <h3>
                <a href="javascript:void(0)"
                  class="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary">
                  ${item.title}
                </a>
              </h3>
              <div>
                <span class="mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white">
                  ${item.date}
                </span>
                <p class="max-w-[370px] text-base text-body-color dark:text-dark-6" style="text-align: justify;">
                  ${item.description}
                </p>
              </div>
            </div>
          </div>
        `;
      }
      noticeContainer.innerHTML += noticeItem;
    });
  }

  // Detect whether it's the home page or the notices page
  const isHomePage = document.body.classList.contains("home-page");
  renderNotices(isHomePage);
});
  


  ////////////////////////////////// BLOGS //////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {

  // Blog Content
  const blogContent = [
    {
      title: 'Saanjh 2.0: A Cultural Exchange Experience',
      image: '../../assets/images/photos/MEVNT.jpeg',
      date: 'Feb 22, 2025',
      description: 'On February 22nd, 2025, the Rotaract Club of UCBS had the privilege of co-hosting the IDYE event, Saanjh 2.0, in Shimla. This remarkable event, organized by our district, aimed to bring together Rotaractors from different locations, fostering cultural exchange and strengthening inter-club bonds.',
      link: '../../blogs/22-february-2025.html'
    },
    {
      title: '📸 Photography Competition 2025 🌿',
      image: '../../assets/images/photos/PC.jpg',
      date: 'Jan 19, 2025',
      description: 'To celebrate World Photography Day, Rotaract UCBS organized a photo competition with the theme of “Nature.” Members submitted unedited photos capturing the beauty of the natural world. Divyansh Thakur won first place for his breathtaking photo of the Himalayas, highlighting the creativity and talent within the club.',
      link: '../../blogs/19-january-2025.html'
    },
    {
      title: 'Project WASH: Promoting Health Through Clean Water and Hygiene!',
      image: '../../assets/images/photos/55.jpg',
      date: 'Dec 13, 2024',
      description: 'On January 13, 2025, Rotaract UCBS launched Project WASH at Govt. High School, Chaura Maidan. The initiative educated 30 students on proper handwashing techniques, emphasizing how clean hands prevent the spread of diseases. The project is encouraging positive change and healthier habits, making a lasting impact on the community.',
      link: '../../blogs/13-december-2024.html'
    },
    {
      title: 'Health First Initiative: Empowering Students with First Aid Knowledge!',
      image: '../../assets/images/photos/45.jpg',
      date: 'Dec 13, 2024',
      description: 'On January 13, 2025, Rotaract UCBS distributed 50 first aid kits at Govt. High School, Chaura Maidan, empowering students with essential medical knowledge. Led by Rtr. Ayush Sharma, the initiative focused on teaching students how to handle minor injuries and emergencies, ensuring they are prepared for critical situations.',
      link: '../../blogs/13-december-2024-blog-2.html'
    },
    {
      title: 'Breaking Barriers: A Successful Start with Mental Health Talk!',
      image: '../../assets/images/photos/46.png',
      date: 'Dec 11, 2024',
      description: 'On December 11, 2024, Rotaract UCBS kicked off the Breaking Barriers series with a session on mental health. Led by Dr. Ravi Sharma, the event encouraged open conversations and supported resilience-building. It aimed to break stigma and helped participants learn to manage stress and seek help, fostering mental well-being.',
      link: '../../blogs/11-december-2024.html'
    },
    {
      title: 'Integrated social service from distant mode',
      image: '../../assets/images/photos/MT.jpg',
      date: 'OCT 20, 2024',
      description: 'The Integrated Social Service from Distant Mode event connected Rotaract members virtually to discuss leadership through service. Members shared inspiring project stories and engaged in discussions on future initiatives, emphasizing how leadership and service can create lasting change in communities.',
      link: '../../blogs/20-october-2024.html'
    },
    {
      title: 'Ripple of kindness',
      image: '../../assets/images/photos/RK.png',
      date: 'Sep 25, 2024',
      description: 'Following the Installation Ceremony, Rotaract UCBS organized the Ripple of Kindness initiative, donating food to the underprivileged. The event demonstrated the club’s commitment to spreading love, hope, and support through small acts of kindness, creating a ripple effect that encourages positive change and community empowerment.',
      link: '../../blogs/25-september-2024.html'
    },
    {
      title: 'Installation Ceremony of Rtr. Rijul Sen',
      image: '../../assets/images/Projects/installation1.jpg',
      date: 'Sep 25, 2024',
      description: 'On the installation of Rtr. Rijul Sen as President, the Rotaract Club of UCBS celebrated the beginning of a new leadership era. The event, attended by DRR Rtr. Shashank Kaushik and Rtn. Maala Singh, also saw Rtr. Ayush Sharma sworn in as Secretary, marking the start of a vibrant year of service.',
      link: '../../blogs/25-september-2024-blog-2.html'
    },
    {
      title: 'Trip to Leh Ladakh',
      image: '../../assets/images/Projects/leh1.jpg',
      date: 'Sep 13, 2024',
      description: 'Rotaract UCBS embarked on an unforgettable journey through Leh-Ladakh, exploring Khardung La Pass, Nubra Valley, and Pangong Lake. Along with breathtaking landscapes, the trip focused on environmental awareness, engaging with local communities, and visiting the Diskit Monastery, making the adventure an impactful and purposeful exploration.',
      link: '../../blogs/13-september-2024.html'
    },
    {
      title: 'Pinning Ceremony Of BODs 2024-25',
      image: '../../assets/images/Projects/pinning1.jpg',
      date: 'Sep 03, 2024',
      description: 'The Pinning Ceremony for the Board of Directors 2024-25 was held at Rotary Town Hall, Shimla, marking the transition of leadership. The event honored the new board members who pledged to uphold service, integrity, and fellowship. With fresh enthusiasm, the club is ready to embark on impactful initiatives for the year ahead.',
      link: '../../blogs/3-september-2024.html'
    },
    {
      title: 'A Day of Joy and Care for Our Furry Friends',
      image: '../../assets/images/Projects/dog1.jpg',
      date: 'Aug 25, 2024',
      description: 'On August 25, 2024, Rotaract UCBS celebrated National Dog Day by feeding and caring for 60 street dogs across Shimla. This heartwarming initiative, carried out at various locations like Old Bus Stand and Chauda Maidan, exemplified the club’s dedication to animal welfare and compassion for all living beings. 🐾',
      link: '../../blogs/25-august-2024.html'
    },
    {
      title: 'District Assembly of DRR Rtr. Shashank Kaushik (3080)',
      image: '../../assets/images/photos/DE2.jpg',
      date: 'Aug 24, 2024',
      description: 'Rotaract UCBS proudly attended the District Assembly – Sharanga, where Rtr. Shashank Kaushik was installed as DRR for District 3080. The event included inspiring speeches, networking, and connections that fueled our mission of service and positive change. Rtr. Ayush Sharma represented our club at this monumental occasion.',
      link: '../../blogs/24-august-2024.html'
    },
    {
      title: 'Candle March for Justice',
      image: '../../assets/images/Projects/candle1.jpg',
      date: 'Aug 20, 2023',
      description: 'On August 20, 2024, a candle march was held at Shimla Ridge to honor Moumita and protest against rape. The event symbolized solidarity with victims of violence and called for justice, reflecting the club’s commitment to advocating for a safer, more just society for all, united in compassion and action.',
      link: '../../blogs/20-august-2024.html'
    },
    {
      title: 'Rakhi Celebration with Governor, Army and Police',
      image: '../../assets/images/Projects/rakhi3.jpg',
      date: 'Aug 18, 2023',
      description: 'On August 18, 2024, Rotaract UCBS celebrated Raksha Bandhan by tying rakhis to police officers and soldiers. Members visited Jutogh Police Post, met the Honourable Governor of Himachal Pradesh, and paid tribute to Indian Army soldiers at Jutogh Cantonment, symbolizing gratitude, respect, and the bond of protection and unity.',
      link: '../../blogs/18-august-2024.html'
    },
    {
      title: 'Cow Shelter Visit on Independence Day',
      image: './assets/images/Projects/cow1.jpg',
      date: 'Aug 15, 2024',
      description: 'This Independence Day, we chose to celebrate by giving back to our community. We visited a local cow shelter and extended a helping hand to these gentle creatures. By donating essential supplies and spending quality time with them, we experienced a sense of fulfillment and gratitude. Its a small step, but its a step towards a more compassionate and sustainable future. 🐮🙏',
      link: '../../blogs/15-august-2024.html'
    },
    {
      title: ' Blood Donation Drive at Police Ground, Junga',
      image: './assets/images/Projects/blood2.jpg',
      date: 'Aug 07, 2024',
      description: 'Rotary Club Shimla HillQueens, in collaboration with Himachal Pradesh Armed Police 1st Battalion Junga, successfully organized a blood donation camp despite challenging weather. 🩸💪 Over 30 units of blood were collected and donated to IGMC Hospital Shimla blood bank. 🏥 The event was made possible by the support of Mr. Rohit Malpani IPS and Deputy Commandant Babita Rana. 🤝',
      link: '../../blogs/7-august-2024.html'
    },
    {
      title: 'Igniting Leadership: Rotaract UCBS Engages in Leadership Training',
      image: './assets/images/Projects/ltp1.jpg',
      date: 'July 21, 2024',
      description: 'Rotaract UCBS participated in the District 3080 Leadership Training Programme, gaining valuable insights into leadership, communication, and community service. With guidance from DRR Rtr. Shashank Kaushik and DRCC Rtn. Mohit Singla, members left feeling empowered and motivated to lead and make a positive impact in the community.',
      link: '../../blogs/21-july-2024.html'
    },
    {
      title: 'Green Tomorrow: Tree Plantation at Ava Lodge',
      image: './assets/images/Projects/tree1.jpg',
      date: 'July 02, 2024',
      description: 'Rotaract Club UCBS took a significant step towards a greener future by organizing a tree plantation drive at Ava Lodge, Chaura Maidan, Shimla. The initiative aimed to enhance environmental sustainability by planting over 50 trees and flowers, which contribute to cleaner air, soil conservation, and biodiversity. 🌳🌎',
      link: '../../blogs/2-july-2024.html'
    },
    {
      title: '🎉 Charter Presentation of Rotaract Club of UCBS by District Governor 🎓',
      image: './assets/images/Projects/dg.jpg',
      date: 'May 17, 2024',
      description: 'On May 17, 2024, Rotaract UCBS celebrated its charter presentation ceremony at RCS Hill Queens, marking its official induction into the Rotary family. The event, attended by District Governor Rtn. Arun Mongia, was a milestone in the club’s journey of service, leadership, and community impact, inspiring a year of growth. 🤝🎊',
      link: '../../blogs/17-may-2024.html'
    },
    {
      title: 'Blood Donation Camp at The Ridge, Shimla',
      image: './assets/images/Projects/Blood1.jpg',
      date: 'May 01, 2024',
      description: 'The Integrated Social Service from Distant Mode event connected Rotaract members virtually to discuss leadership through service. Members shared impactful project stories and engaged in discussions about future initiatives, highlighting how leadership and service can create lasting change for the greater good.',
      link: '../../blogs/1-may-2024.html'
    }

  ];

  // Footer Blog Content
  const footerBlogContent = [
    {
      title: 'Saanjh 2.0: A Cultural Exchange Experience',
      image: '../../assets/images/photos/MEVNT.jpeg',
      link: '../../blogs/22-february-2025.html'
    },
    {
      title: '📸 Photography Competition 2025 🌿',
      image: '../../assets/images/photos/PC.jpg',
      link: '../../blogs/19-january-2025.html'
    }
  ];



  function updateProjectsection(content) {
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
  updateProjectsection(blogContent);



  function updateFooterProjects(blogContent) {
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
  updateProjectsection(blogContent);

  // Update Footer Blog Section
  if (document.querySelector('#footer-blog1-img')) {
    updateFooterProjects(footerBlogContent);
  }
});



document.addEventListener("DOMContentLoaded", function () {
  // Initialize WOW.js
  new WOW().init();

  // Initialize Swiper
  var swiper = new Swiper(".swiper-container", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 800,
  });

  // Enhanced Typed Text Effect
  var typedElements = document.querySelectorAll(".typed");

  typedElements.forEach((el) => {
    var typedItems = el.getAttribute("data-typed-items").split(", ");
    var typedIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typingSpeed = 100;
    var pauseTime = 2000;

    function typeText() {
      let currentWord = typedItems[typedIndex];

      if (isDeleting) {
        el.textContent = currentWord.substring(0, charIndex--);
      } else {
        el.textContent = currentWord.substring(0, charIndex++);
      }

      let currentSpeed = isDeleting ? typingSpeed / 2 : typingSpeed;

      if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        currentSpeed = pauseTime;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typedIndex = (typedIndex + 1) % typedItems.length;
        currentSpeed = 500;
      }

      setTimeout(typeText, currentSpeed);
    }

    typeText();
  });
});

