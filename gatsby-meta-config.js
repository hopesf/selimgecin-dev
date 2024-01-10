module.exports = {
  title: `selimgecin.dev`,
  description: `...`,
  language: `tr`,
  siteUrl: `https://selimgecin.dev`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `hopesf/selimgecin-dev`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `Selim Geçin`,
    bio: {
      role: `Full Stack Developer`,
      description: [`React'e fısıldayan adam`,`Node.JS'i yalayıp yutmuş`,'Express & NestJS Aşığı 😍','MongoDB Bağımlısı 🤩','AWS ile haşır neşir', 'Docker sefercisi', 'Next.JS eline yapışmış', 'React Native 📱', `TypeScript yaşam felsefesi 📌`,],
      thumbnail: 'sc.png',
    },
    social: {
      github: `https://github.com/hopesf`,
      linkedIn: `https://www.linkedin.com/in/selim-gecin`,
      email: `gecin18@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2024.01 ~',
        activity: 'Kişisel blogun geliştirilmesi ve işletilmesi',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/hopesf/selimgecin-dev',
          demo: 'https://selimgecin.dev',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Proje 1',
        description:
          'Proje 1 açıklama',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/hopesf/selimgecin-dev',
          demo: 'https://selimgecin.dev',
        },
      },
    ],
  },
};
