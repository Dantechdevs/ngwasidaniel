export const siteData = {
  name: "Daniel Ngwasi",
  role: "ICT Officer | Software Developer | CS Graduate",
  tagline: "Building practical systems that solve real-world problems.",
  bio: "I'm a skilled computer programmer and ICT professional with a strong background in computer science. I specialize in writing, testing, debugging, and maintaining efficient and scalable software solutions. I am passionate about building practical systems that solve real-world problems, with experience in developing web applications, managing ICT infrastructure, and working with modern technologies.",

  // ─── CONTACT ───────────────────────────────────────────────────────────────
  email: "damnngwasi@gmail.com",
  whatsapp: "+254712328150",
  location: "Nairobi, Kenya",

  // ─── SOCIAL LINKS ──────────────────────────────────────────────────────────
  github: "https://github.com/Dantechdevs",
  linkedin: "https://linkedin.com/in/danielngwasi",
  twitter: "https://x.com/Ngwasidaniel",
  facebook: "https://www.facebook.com/share/18SUkkGvGh/",
  tiktok: "https://www.tiktok.com/@dantechdevs",
  youtube: "https://www.youtube.com/@dantechdevs",
  instagram: "https://www.instagram.com/danielngwasi",

  // ─── HERO STATS ────────────────────────────────────────────────────────────
  stats: [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Projects Built" },
    { number: "10+", label: "Happy Clients" },
  ],

  // ─── WHERE TO PUT YOUR IMAGES ──────────────────────────────────────────────
  // 1. Put all images inside:  daniel-portfolio/public/images/
  // 2. They are already copied there for you (see list below)
  // 3. Reference them anywhere as:  /images/filename.png
  //
  //  YOUR IMAGES:
  //   public/images/daniel-profile.png      ← standing photo (blue shirt)       → used in About section
  //   public/images/daniel-working.png      ← working at laptop                 → used in Hero / About
  //   public/images/blog-coding.png         ← laptop + VS Code photo            → used in Blog post 1
  //   public/images/blog-python.png         ← Python / Django code screenshot   → used in Blog post 2
  //   public/images/blog-git.png            ← How Git Works diagram             → used in Blog post 3
  //   public/images/project-reposage.png    ← RepoSage screenshot               → used in Projects
  //
  //  TO ADD MORE IMAGES later:
  //   Just drop the file into  public/images/  and add it here.
  images: {
    profile: "/images/daniel.jpg",
    working: "/images/daniel-working.png",
    blogCoding: "/images/blog-coding.png",
    blogPython: "/images/blog-python.png",
    blogGit: "/images/blog-git.png",
    projectReposage: "/images/project-reposage.png",
  },

  // ─── SKILLS ────────────────────────────────────────────────────────────────
  skills: [
    { name: "React", category: "Frontend", icon: "⚛" },
    { name: "JavaScript", category: "Frontend", icon: "JS" },
    { name: "TypeScript", category: "Frontend", icon: "TS" },
    { name: "HTML/CSS", category: "Frontend", icon: "<>" },
    { name: "Next.js", category: "Frontend", icon: "▲" },
    { name: "Tailwind CSS", category: "Frontend", icon: "🌊" },
    { name: "Vue.js", category: "Frontend", icon: "V" },
    { name: "Node.js", category: "Backend", icon: "⬡" },
    { name: "Python", category: "Backend", icon: "🐍" },
    { name: "Django", category: "Backend", icon: "D" },
    { name: "PostgreSQL", category: "Backend", icon: "🐘" },
    { name: "MongoDB", category: "Backend", icon: "M" },
    { name: "REST API", category: "Backend", icon: "⚡" },
    { name: "GraphQL", category: "Backend", icon: "◈" },
    { name: "React Native", category: "Mobile", icon: "📱" },
    { name: "Flutter", category: "Mobile", icon: "🦋" },
    { name: "Git", category: "Tools", icon: "🔀" },
    { name: "Docker", category: "Tools", icon: "🐳" },
    { name: "AWS", category: "Tools", icon: "☁" },
    { name: "Figma", category: "Tools", icon: "✏" },
    { name: "Linux", category: "Tools", icon: "🐧" },
    { name: "CI/CD", category: "Tools", icon: "♾" },
    { name: "Network Admin", category: "ICT", icon: "🌐" },
    { name: "ICT Support", category: "ICT", icon: "🖥" },
    { name: "Cybersecurity", category: "ICT", icon: "🔒" },
    { name: "Microsoft 365", category: "ICT", icon: "Ⓜ" },
    { name: "Server Mgmt", category: "ICT", icon: "🗄" },
    { name: "Data Analysis", category: "ICT", icon: "📊" },
    { name: "PHP", category: "Backend", icon: "🐘" },
    { name: "Laravel", category: "Backend", icon: "🔴" },
    { name: "MySQL", category: "Backend", icon: "🗃" },
    { name: "Bootstrap", category: "Frontend", icon: "🅱" },
  ],

  // ─── SERVICES ──────────────────────────────────────────────────────────────
  services: [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Full-stack web apps built with React, Next.js, Laravel, and Node.js. From landing pages to complex enterprise systems.",
      features: ["Responsive Design", "REST APIs", "Database Design", "Authentication"],
    },
    {
      icon: "🖥",
      title: "ICT Support & Infrastructure",
      description: "End-to-end ICT support for organizations — network setup, server management, hardware maintenance, and staff training.",
      features: ["Network Setup", "Server Management", "Hardware Repair", "IT Training"],
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and Flutter that work seamlessly on iOS and Android.",
      features: ["React Native", "Flutter", "Firebase", "App Store Deployment"],
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Security audits, vulnerability assessments, and implementation of best practices to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "SSL Setup", "Data Backup"],
    },
    {
      icon: "📊",
      title: "System Design & Databases",
      description: "Architecture design, database modeling, and optimization for scalable, high-performance systems.",
      features: ["System Architecture", "Database Optimization", "API Design", "Cloud Deployment"],
    },
    {
      icon: "🎨",
      title: "UI/UX & Consulting",
      description: "User-centered design, wireframing, and technical consulting to help you build better digital products faster.",
      features: ["Wireframing", "Figma Prototypes", "Tech Consulting", "Code Reviews"],
    },
  ],

  // ─── CAREER ────────────────────────────────────────────────────────────────
  career: [
    {
      period: "2024 – Present",
      title: "ICT Officer",
      company: "Ministry of Education, Kenya",
      type: "work",
      description:
        "Providing ICT support and infrastructure management for the Ministry of Education. Responsible for maintaining computer systems, networks, and digital services. Supporting staff with ICT needs, managing government databases, and implementing digital transformation initiatives across education departments.",
    },
    {
      period: "2023 – 2024",
      title: "Freelance Web Developer",
      company: "Self-Employed",
      type: "work",
      description:
        "Delivered responsive, user-friendly websites and web applications for clients across various industries. Focused on modern frameworks like React and Next.js, delivering exceptional digital experiences and scalable backend systems.",
    },
    {
      period: "2022 – 2023",
      title: "ICT Attaché / Intern",
      company: "Government ICT Department",
      type: "work",
      description:
        "Gained hands-on experience in ICT infrastructure management, network configuration, hardware maintenance, and end-user support. Assisted in the rollout of digital systems and maintained IT documentation.",
    },
    {
      period: "2019 – 2022",
      title: "BSc Computer Science",
      company: "St. Paul's University, Limuru",
      type: "education",
      description:
        "Graduated with a Bachelor of Science in Computer Science from St. Paul's University Main Campus, Limuru. Built a strong foundation in algorithms, data structures, software engineering, computer networks, and systems design.",
    },
  ],

  // ─── EDUCATION ─────────────────────────────────────────────────────────────
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "St. Paul's University — Main Campus, Limuru",
      period: "2019 – 2022",
      description:
        "Strong foundation in algorithms, data structures, software engineering, computer networks, and systems design. Developed practical skills through hands-on projects and coursework.",
    },
  ],

  // ─── CERTIFICATIONS ────────────────────────────────────────────────────────
  certifications: [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta / Coursera",
      year: "2023",
    },
    {
      title: "Python for Everybody",
      issuer: "University of Michigan",
      year: "2023",
    },
    {
      title: "Cisco IT Essentials",
      issuer: "Cisco Networking Academy",
      year: "2022",
    },
  ],

  // ─── PROJECTS ──────────────────────────────────────────────────────────────
  projects: [
    {
      title: "RepoSage",
      description:
        "Drop in any GitHub URL and instantly get the purpose, architecture, key files, dependencies, and a contribution guide — all in a clean terminal-style UI. Built for developers, by developers. Zero config.",
      tags: ["TypeScript", "React", "Node.js", "GitHub API", "Open Source"],
      demo: "https://dantechdevs.github.io/reposage/",
      source: "https://github.com/Dantechdevs/reposage",
      featured: true,
      image: "/images/project-reposage.png",
      badge: "Open Source · v0.1.0-alpha",
    },
    {
      title: "DantePOS",
      description:
        "A full-featured Point of Sale system built with Laravel 11. Manages sales, purchases, stock, customers, suppliers, employees, and expenses with real-time financial dashboards and lucky draw modules.",
      tags: ["Laravel 11", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      demo: "#",
      source: "https://github.com/Dantechdevs",
      featured: true,
      image: "/images/project-dantepos.png",
      badge: "Laravel 11",
    },
    {
      title: "DanteCredit",
      description:
        "A secure web-based loan & credit management system for SACCOs and microfinance institutions. Features loan tracking, branch management, deposits, withdrawals, and analytics dashboards.",
      tags: ["Laravel 11", "PHP", "MySQL", "Tailwind CSS", "Charts"],
      demo: "#",
      source: "https://github.com/Dantechdevs",
      featured: true,
      image: "/images/project-dantecredit.png",
      badge: "Laravel 11",
    },
    {
      title: "Jitihada Voting System",
      description:
        "A simple, secure web-based voting management system for community groups. Members register, get a unique REG.NO, and cast one vote. Tracks live results with charts and exports to CSV.",
      tags: ["PHP", "Tailwind CSS", "Bootstrap", "MySQL", "Chart.js"],
      demo: "https://dantechdevelopers.com/jitihada_voting/dashboard.php",
      source: "https://github.com/Dantechdevs/Jitihada-_Group_voting_system",
      featured: true,
      image: "/images/project-jitihada.png",
      badge: "Live · Open Source",
    },
    {
      title: "Ministry of Education ICT Portal",
      description:
        "An internal web portal for managing ICT assets, support tickets, and staff ICT requests across the Ministry of Education. Includes real-time dashboards and reporting.",
      tags: ["React", "Node.js", "PostgreSQL", "Docker"],
      demo: "#",
      source: "https://github.com/Dantechdevs",
      featured: true,
    },
    {
      title: "Full-Stack E-Commerce Platform",
      description:
        "A complete e-commerce solution with cart, payments, authentication, and an admin dashboard. Built for performance and scalability.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      demo: "#",
      source: "https://github.com/Dantechdevs",
      featured: false,
    },
  ],

  // ─── BLOG ──────────────────────────────────────────────────────────────────
  blog: [
    {
      title: "Building Scalable APIs with Node.js and PostgreSQL",
      category: "Backend",
      date: "March 2026",
      excerpt:
        "A deep dive into designing RESTful APIs that scale — covering database indexing, connection pooling, and caching strategies.",
      slug: "#",
      image: "/images/blog-coding.png",
    },
    {
      title: "Django + Azure Cosmos DB: A Practical Guide",
      category: "Backend",
      date: "February 2026",
      excerpt:
        "How to connect a Django application to Azure Cosmos DB — covering the django-cosmos driver, proxy configuration, and database creation.",
      slug: "#",
      image: "/images/blog-python.png",
    },
    {
      title: "How Git Works: A Visual Guide for Developers",
      category: "Tools",
      date: "January 2026",
      excerpt:
        "A clear visual breakdown of Git workflows — workspace, staging, local repository, and remote repository using GitHub, GitLab, and Bitbucket.",
      slug: "#",
      image: "/images/blog-git.png",
    },
  ],

  // ─── TESTIMONIALS ──────────────────────────────────────────────────────────
  testimonials: [
    {
      text: "Daniel built our entire company website and internal tools from scratch. Clean code, beautiful design, and delivered ahead of schedule. He is our go-to developer.",
      name: "Felister Wanjiru",
      role: "CEO, Feltech Creative",
      initials: "FW",
    },
    {
      text: "Working with Daniel was a seamless experience. He understood our requirements quickly and built a robust, scalable solution that exceeded expectations.",
      name: "David Mwangi",
      role: "Product Manager, InnovateCo",
      initials: "DM",
    },
    {
      text: "Daniel's problem-solving approach is outstanding. He doesn't just write code — he thinks through the architecture and delivers clean, maintainable systems.",
      name: "Aisha Hassan",
      role: "CTO, StartupKE",
      initials: "AH",
    },
    {
      text: "The DantePOS system Daniel built for us transformed our operations. Sales tracking, stock management, and reporting are now completely seamless. Highly recommended!",
      name: "James Otieno",
      role: "Business Owner, Matiliku Enterprises",
      initials: "JO",
    },
    {
      text: "Daniel built the DanteCredit loan management system for our SACCO. It handles all our loan workflows, deposits, and analytics flawlessly. Great work!",
      name: "Grace Wanjiku",
      role: "Manager, Dantech Credit",
      initials: "GW",
    },
    {
      text: "The Jitihada Voting System was exactly what our group needed — secure, simple, and reliable. Daniel understood our requirements and delivered fast. 10/10!",
      name: "Peter Kamau",
      role: "Chairman, Jitihada Group",
      initials: "PK",
    },
    {
      text: "Daniel helped us migrate our entire school ICT infrastructure. Professional, patient, and thorough. Our systems have been running flawlessly ever since.",
      name: "Mr. Omondi",
      role: "Principal, Nairobi Technical Institute",
      initials: "MO",
    },
    {
      text: "Hired Daniel to build our e-commerce store. He delivered a fast, beautiful, and easy-to-manage site. Sales increased within the first month. Highly skilled!",
      name: "Mercy Njeri",
      role: "Founder, ShopKenya Online",
      initials: "MN",
    },
    {
      text: "Daniel is one of the most reliable developers I have worked with. He communicates well, writes clean code, and always goes the extra mile. A true professional.",
      name: "Brian Mutua",
      role: "Tech Lead, AfriTech Solutions",
      initials: "BM",
    },
  ],

  // ─── CHATBOT AUTO-REPLIES ──────────────────────────────────────────────────
  // Used by the WhatsApp chatbot widget
  chatbot: {
    enabled: true,
    whatsappNumber: "+254712328150",
    greeting: "Hi! I'm Daniel's assistant 👋 How can I help you today?",
    autoReplies: [
      {
        triggers: ["hire", "available", "work", "freelance", "project", "collaborate"],
        reply:
          "Daniel is open to freelance projects and collaborations! 🚀 Send him an email at damnngwasi@gmail.com or WhatsApp him directly.",
      },
      {
        triggers: ["price", "cost", "charge", "rate", "quote", "how much"],
        reply:
          "Project pricing depends on scope and complexity. Reach out via the contact form or WhatsApp for a free quote! 💬",
      },
      {
        triggers: ["cv", "resume", "download"],
        reply: "You can download Daniel's CV from the About section of this portfolio. 📄",
      },
      {
        triggers: ["hello", "hi", "hey", "hii", "helo", "good morning", "good afternoon"],
        reply: "Hello! 👋 Welcome to Daniel Ngwasi's portfolio. Feel free to explore or ask me anything!",
      },
      {
        triggers: ["skill", "skills", "technology", "stack", "know", "languages"],
        reply:
          "Daniel works with React, Next.js, TypeScript, Node.js, Python, Django, PostgreSQL, MongoDB, and much more! Check the Skills section for the full list. 💻",
      },
      {
        triggers: ["education", "university", "degree", "study", "school"],
        reply:
          "Daniel graduated with a BSc in Computer Science from St. Paul's University, Limuru (2019–2022). 🎓",
      },
      {
        triggers: ["contact", "email", "reach", "touch", "message"],
        reply:
          "You can reach Daniel at damnngwasi@gmail.com, or use the contact form on this page. WhatsApp: +254712328150 📩",
      },
    ],
  },
}
