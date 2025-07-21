import { useRouter } from 'next/navigation';

export interface CommandOutput {
  description: string;
  output: string[];
  action?: () => void;
}

export interface TerminalCommands {
  [key: string]: CommandOutput;
}

export const useTerminalCommands = () => {
  const router = useRouter();

  const navigationCommands: TerminalCommands = {
    cd: {
      description: 'Navigate to different pages',
      output: [
        '📁 Navigation Commands:',
        '',
        '  cd /                 - Go to home page',
        '  cd /about           - Go to about page',
        '  cd /projects        - Go to projects page',
        '  cd /services        - Go to services page',
        '  cd /stack           - Go to tech stack page',
        '  cd /achievements    - Go to achievements page',
        '  cd /contact         - Go to contact page',
        '  cd /thoughts        - Go to thoughts page',
        '  cd /feed            - Go to feed page',
        '',
        '💡 Usage: cd <path>',
        '📝 Example: cd /projects'
      ]
    },
    ls: {
      description: 'List available pages',
      output: [
        '📂 Available pages:',
        '',
        '  /               - Home page',
        '  /about          - About me',
        '  /projects       - Featured projects',
        '  /services       - Services offered',
        '  /stack          - Technology stack',
        '  /achievements   - Accomplishments',
        '  /contact        - Contact information',
        '  /thoughts       - Blog posts',
        '  /feed           - Latest updates',
        '',
        '💡 Use "cd <path>" to navigate to any page'
      ]
    },
    pwd: {
      description: 'Show current page',
      output: [] // Will be populated dynamically
    }
  };

  const infoCommands: TerminalCommands = {
    help: {
      description: 'Show available commands',
      output: [
        '📋 Available commands:',
        '',
        '🧭 Navigation:',
        '  ls          - List available pages',
        '  cd <path>   - Navigate to page',
        '  pwd         - Show current page',
        '',
        '🔍 Information:',
        '  skills      - Display technical skills',
        '  projects    - List featured projects', 
        '  contact     - Get contact information',
        '  whoami      - Show developer info',
        '  experience  - View work experience',
        '  education   - Show educational background',
        '  services    - Available services',
        '',
        '🛠️ System:',
        '  clear       - Clear terminal',
        '  exit        - Close terminal',
        '',
        'Type any command to get started! 🚀'
      ]
    },
    skills: {
      description: 'Display technical skills',
      output: [
        '💻 Technical Skills:',
        '',
        '🎯 Frontend:',
        '  • React.js / Next.js',
        '  • TypeScript / JavaScript',
        '  • Tailwind CSS / SCSS',
        '  • Framer Motion',
        '  • HTML5 / CSS3',
        '',
        '🔧 Backend:',
        '  • Node.js / Express.js',
        '  • REST APIs',
        '',
        '🗄️ Database:',
        '  • MongoDB',
        '  • PostgreSQL',
        '  • MySQL',
        '  • Firebase',
        '',
        '☁️ Cloud & Tools:',
        '  • Git / GitHub',
        '  • Vercel',
        '  • VS Code'
      ]
    },
    whoami: {
      description: 'Show developer info',
      output: [
        '👨‍💻 Developer Profile:',
        '',
        'Name: Saroj Pandey',
        'Role: Full Stack Developer',
        'Location: Nepal',
        'Experience: 2+ years',
        'Status: Working',
        'Passion: Building digital experiences',
        '',
        'Motto: "Turning ideas into seamless digital reality"',
        '',
        'Coffee consumed: ∞',
        'Bugs fixed: countless',
        'Features shipped: many'
      ]
    }
  };

  const projectCommands: TerminalCommands = {
    projects: {
      description: 'List featured projects',
      output: [
        '🚀 Featured Projects:',
        '',
        '📱 E-Commerce Platform',
        '   • Full-stack online store',
        '   • React + Node.js + MongoDB',
        '   • Payment integration & admin panel',
        '',
        '🌐 Portfolio Website',
        '   • Personal developer portfolio',
        '   • Next.js + TypeScript + Tailwind',
        '   • Interactive terminal interface',
        '',
        '💼 Business Management System',
        '   • CRM and inventory management',
        '   • Django + PostgreSQL + React',
        '   • Real-time notifications',
        '',
        '🎮 Interactive Web App',
        '   • Real-time collaboration tool',
        '   • WebSocket + Express + React',
        '   • Live updates & messaging',
        '',
        '💡 Use "cd /projects" to view detailed project showcase'
      ]
    }
  };

  const contactCommands: TerminalCommands = {
    contact: {
      description: 'Get contact information',
      output: [
        '📞 Contact Information:',
        '',
        'Email: saroj.p.2728@gmail.com',
        'LinkedIn: in/saroj27',
        'GitHub: /saroj-2728',
        'Website: saroj27.com.np',
        '',
        'Location: Nepal',
        'Timezone: UTC+5:45',
        '',
        'Feel free to reach out for:',
        '  • Project collaborations',
        '  • Full-stack development',
        '  • Technical consultations',
        '  • Open source contributions',
        '',
        '💡 Use "cd /contact" for contact form'
      ]
    }
  };

  // Handle navigation with cd command
  const handleNavigation = (path: string): string[] => {
    const cleanPath = path.trim();
    
    const routes: { [key: string]: string } = {
      '/': '/',
      '/about': '/about',
      '/projects': '/projects',
      '/services': '/services',
      '/stack': '/stack',
      '/achievements': '/achievements',
      '/contact': '/contact',
      '/thoughts': '/thoughts',
      '/feed': '/feed'
    };

    if (routes[cleanPath]) {
      router.push(routes[cleanPath]);
      return [
        `🧭 Navigating to ${cleanPath}...`,
        'Navigation successful!',
        '',
        'Terminal will remain open for continued use.'
      ];
    } else {
      return [
        `❌ Path not found: ${cleanPath}`,
        '',
        'Available paths:',
        ...Object.keys(routes).map(route => `  ${route}`),
        '',
        'Use "ls" to see all available pages'
      ];
    }
  };

  // Get current path
  const getCurrentPath = (): string[] => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      return [
        `📍 Current location: ${currentPath}`,
        '',
        'Use "ls" to see available pages',
        'Use "cd <path>" to navigate'
      ];
    }
    return ['📍 Current location: /'];
  };

  return {
    navigationCommands,
    infoCommands,
    projectCommands,
    contactCommands,
    handleNavigation,
    getCurrentPath
  };
};
