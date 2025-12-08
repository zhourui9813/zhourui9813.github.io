import { Profile, Project, ExperienceItem, Award } from './types';

export const PROFILE: Profile = {
  name: "Rui Zhou",
  title: "Undergraduate Student",
  school: "Electronic Information School",
  schoolUrl: "http://eis.whu.edu.cn/",
  affiliation: "Wuhan University",
  affiliationUrl: "https://www.whu.edu.cn/",
  bio: "I’m a second year undergraduate student from Electronic Information School, Wuhan University. Currently, my research interests mainly focus on Embodied AI.",
  interests: ["Embodied AI", "Robotics", "Computer Vision"],
  links: [
    {
      label: "Email",
      url: "mailto:zhourui9813@gmail.com",
      type: "email"
    },
    {
      label: "Github",
      url: "https://github.com/zhourui9813",
      type: "github"
    },
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?view_op=list_works&hl=zh-CN&authuser=1&user=YRM2Q84AAAAJ",
      type: "scholar"
    }
  ]
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: "2022 - Present",
    title: "Undergraduate Student",
    institution: "Wuhan University",
    description: "Major in Electronic Information. Focusing on Embodied AI and Robotics research.",
    type: "education"
  },
  // Placeholder for future internship
  /*
  {
    date: "Summer 2024",
    title: "Research Intern",
    institution: "Example University / Company",
    description: "Worked on large-scale diffusion policies for robotic manipulation.",
    type: "internship"
  }
  */
];

export const PROJECTS: Project[] = [
  {
    title: "Video2Act: A Dual-System Video Diffusion Policy with Robotic Spatio-Motional Modeling",
    paperUrl: "https://arxiv.org/abs/2512.03044",
    venue: "In Submission",
    authors: [
      { name: "Yueru Jia" },
      { name: "Jiaming Liu" },
      { name: "Shengbang Liu" },
      { name: "Rui Zhou", isMe: true },
      { name: "Wanhe Yu" },
      { name: "Yuyang Yan" },
      { name: "Xiaowei Chi" },
      { name: "Yandong Guo" },
      { name: "Boxin Shi" },
      { name: "Shanghang Zhang" }
    ]
  },
  {
    title: "MotionTrans: Human VR Data Enable Motion-Level Learning for Robotic Manipulation Policies",
    venue: "In Submission",
    authors: [
      { name: "Chengbo Yuan" },
      { name: "Rui Zhou", isMe: true },
      { name: "Mengzhen Liu" },
      { name: "Yingdong Hu" },
      { name: "Shengjie Wang" },
      { name: "Li Yi" },
      { name: "Chuan Wen" },
      { name: "Shanghang Zhang" },
      { name: "Yang Gao" }
    ]
  },
  {
    title: "ADUGS-VINS: Generalized Visual-Inertial Odometry for Robust Navigation in Highly Dynamic and Complex Environments",
    venue: "Arxiv preprint",
    authors: [
      { name: "Rui Zhou", isMe: true },
      { name: "Jingbin Liu" },
      { name: "Junbin Xie" },
      { name: "Jianyu Zhang" },
      { name: "Yingze Hu" },
      { name: "Jiele Zhao" }
    ]
  }
];

export const AWARDS: Award[] = [
  {
    date: "2025-08",
    title: "2nd Prize, National Level, National Undergraduate Electronics Design Contest"
  },
  {
    date: "2024-12",
    title: "National Scholarship"
  },
  {
    date: "2024-11",
    title: "Wuhan University Excellent Student Class A Scholarship"
  },
  {
    date: "2024-07",
    title: "2nd Prize, China Integrated Circuit Innovation and Entrepreneurship Competition"
  },
  {
    date: "2023-12",
    title: "1st Prize, Mathematics competition of Chinese"
  },
  {
    date: "2023-11",
    title: "Wuhan University Huang Zhangren Special Scholarship"
  },
  {
    date: "2023-11",
    title: "Wuhan University Excellent Student Class A Scholarship"
  },
  {
    date: "2023-08",
    title: "1st Prize, Provincial Level, National Undergraduate Electronics Design Contest"
  }
];