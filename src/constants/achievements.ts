export interface TimelineItem  {
    date: string;
    title: string;
    subtitle?: string;
    description: string;
};

export const educationData: TimelineItem[] = [
    {
        date: '2024 - Present',
        title: 'Bachelor of Engineering in Computer Engineering',
        subtitle: 'Institute of Engineering, Pulchowk Campus',
        description:
            'Pursuing a comprehensive curriculum covering computer science, software development, networking, and system design, with a focus on practical applications and research.',
    },
    {
        date: '2021 - 2023',
        title: 'High School',
        subtitle: 'Kathmandu BernHardt Higher Secondary School',
        description:
            'Completed high school with a focus on science and mathematics, gaining a strong foundation in programming, problem-solving, and analytical thinking.',
    },
    {
        date: '2021',
        title: 'Secondary School',
        subtitle: 'Rajghara English Boarding Secondary School',
        description:
            'Completed secondary education, building fundamental knowledge in various subjects, including mathematics, science, and computer studies.',
    },
];

export const experienceData: TimelineItem[] = [
    {
        date: '2024 - Present',
        title: 'Freelance Web Developer',
        subtitle: 'Upwork & Independent Clients',
        description:
            'Developing dynamic and scalable web applications using Next.js, React, and Express.js. Specializing in dashboards, and custom web solutions tailored to client needs.',
    },
];
