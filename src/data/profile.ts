// All portfolio copy lives here, sourced from the CV. Wrap a phrase in **double
// asterisks** to emphasise it when rendered.

export const profile = {
  name: 'Zeeshan Liaqat',
  role: 'Software Engineer',
  location: 'Rawalpindi, Pakistan',
  email: 'zeeshanliaqat595@gmail.com',
  linkedin: 'https://www.linkedin.com/in/zeeshan-liaqat-165381199',
  linkedinLabel: 'in/zeeshan-liaqat',
  cv: `${import.meta.env.BASE_URL}Zeeshan_Liaqat_CV.pdf`,
  careerStart: new Date(2023, 10, 1), // Nov. 2023
  leadIntro: 'I build mission-critical desktop and web software',
  lead: 'WPF command & control and HMI systems, real-time hardware communication, and the ASP.NET Core backends behind them.',
  summary: [
    'A results-driven Software Engineer with professional experience building mission-critical desktop and web applications across **defence and commercial** domains.',
    'I specialise in **WPF-based C2 and HMI systems**, **multi-sensor data fusion** and **real-time hardware communication** over TCP/IP sockets and COM port/serial — combined with solid backend engineering in **ASP.NET Core** and **C#**.',
    'Most of my work is about one thing: designing operator-centric interfaces that turn complex, high-volume data streams into clean, actionable displays.',
  ],
};

export const focusAreas = [
  {
    title: 'C2 & HMI systems',
    body: 'WPF command & control hubs and situational-awareness dashboards built with MVVM, custom controls and real-time data binding.',
  },
  {
    title: 'Hardware comms',
    body: 'Serial (RS-232) protocol handling and TCP/IP socket links with message framing and fault-tolerant reconnection.',
  },
  {
    title: 'Backend & data',
    body: 'ASP.NET Core services, RESTful APIs and SQL Server persistence with Entity Framework Core and LINQ.',
  },
];

export const education = [
  {
    degree: 'BS Computer Science',
    school: 'COMSATS University, Attock Campus',
    location: 'Attock, Pakistan',
    period: 'Sep 2019 — Jul 2023',
  },
  {
    degree: 'F.Sc Pre-Engineering (HSSC)',
    school: 'Punjab College Jand, Attock',
    location: 'Attock, Pakistan',
    period: 'Aug 2016 — Jun 2018',
  },
];

export const experience = {
  role: 'Software Engineer',
  company: 'Shaheen Aero Traders',
  location: 'Rawalpindi, Pakistan',
  period: 'Nov 2023 — Present',
  groups: [
    {
      title: 'Command & Control / HMI',
      points: [
        'Architected and developed a **Command & Control (C2) application** for an **Anti-Drone System** in WPF and C#, the unified operator hub for commanding and monitoring interconnected **ESM** (Electronic Support Measures) and **ECM** (Electronic Countermeasures) subsystems.',
        'Engineered a **multi-sensor data fusion layer** that aggregates and correlates concurrent ESM, ECM and radar streams, applying filtering and priority logic so field operators only see operationally relevant information.',
        'Designed responsive **HMI screens** using **MVVM**, custom controls and data binding — real-time situational-awareness dashboards with context-sensitive alerts in a single, uncluttered view.',
      ],
    },
    {
      title: 'Hardware communication',
      points: [
        'Developed an **Anti-GNSS application** that drives RF amplifiers over **COM port (serial)**, with custom protocol handling for precise frequency, power and device-state control.',
        'Implemented **TCP/IP socket programming** to exchange structured data with an external signal-processing system — connection lifecycle, message framing and fault-tolerant reconnection.',
        'Applied **async/await and multithreading** to run serial, socket and sensor I/O independently, keeping the UI fully responsive under continuous high-frequency throughput.',
      ],
    },
    {
      title: 'Backend & data',
      points: [
        'Architected and maintained scalable **ASP.NET Core** services for operational data logging, configuration management and system-health reporting, serving desktop C2 clients and web admin interfaces.',
        'Developed and optimised **RESTful APIs** connecting WPF clients, backend services and hardware subsystems across the full stack.',
        'Used **Entity Framework Core**, **LINQ** and **SQL Server** to persist mission logs, device configurations, sensor records and inventory, with optimised schemas and stored procedures.',
      ],
    },
    {
      title: 'Engineering practice',
      points: [
        'Built modular, maintainable codebases on **SOLID principles** and proven patterns — **MVVM, Repository, Unit of Work** — for long-term testability of mission-critical software.',
      ],
    },
  ],
};

export type ProjectVisual = 'radar' | 'signal' | 'learning' | 'pipeline';

export type Project = {
  title: string;
  kind: 'Defence project' | 'Web project';
  visual: ProjectVisual;
  summary: string;
  points: string[];
  stack: string[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: 'Anti-Drone C2 System',
    kind: 'Defence project',
    visual: 'radar',
    summary:
      'The central command & control application for an anti-drone platform — one operator interface to command and monitor ESM and ECM subsystems in real time.',
    points: [
      'Multi-sensor **fusion pipeline** correlating ESM, ECM and radar feeds with priority and deduplication logic to prevent operator overload.',
      '**Context-driven HMI** that surfaces only what matters for the current threat state.',
      'Graceful handling of subsystem connection loss and hardware faults for **operational continuity** in live field deployments.',
    ],
    stack: ['WPF', 'C#', 'MVVM', 'Multi-sensor fusion', 'Real-time HMI'],
  },
  {
    title: 'Anti-GNSS Control Application',
    kind: 'Defence project',
    visual: 'signal',
    summary:
      'A desktop control application for an Anti-GNSS system that manages RF amplifiers through serial communication.',
    points: [
      'Custom **COM port protocol framing** for reliable command and response handling.',
      '**TCP/IP socket** link to an external signal-processing application with automatic reconnection on link failure.',
      'Clean **WPF HMI** with real-time parameter monitoring and hardware configuration controls.',
    ],
    stack: ['WPF', 'C#', 'Socket programming', 'COM port', 'Serial protocols'],
  },
  {
    title: 'GradeWise.ai',
    kind: 'Web project',
    visual: 'learning',
    summary:
      'Full-stack backend for a GCSE & A-Level revision platform serving 10,000+ students, with real-time quiz sessions and progress tracking.',
    points: [
      '**SQL Server** schemas and EF Core pipelines managing a bank of **20,000+ questions**, performance records and adaptive learning state.',
      '**RESTful APIs** consumed by a React frontend for quiz delivery, student dashboards and personalised feedback loops.',
    ],
    stack: ['ASP.NET Core', 'React', 'SQL Server', 'RESTful APIs'],
    link: { label: 'gradewiseai.com', href: 'https://gradewiseai.com' },
  },
  {
    title: 'A.T.L.A.S. Engine',
    kind: 'Web project',
    visual: 'pipeline',
    summary:
      'Co-developed a B2B lead-generation platform whose ASP.NET Core backend orchestrates prospect discovery, contact enrichment and automated multi-channel outreach.',
    points: [
      'High-throughput **RESTful API services** across enrichment, scheduling and reporting workflows.',
      'Delivering **2,400+ leads per month** in production.',
    ],
    stack: ['ASP.NET Core', 'RESTful APIs', 'Multi-channel automation'],
    link: { label: 'atlase.ai', href: 'https://atlase.ai' },
  },
];

export const skills = [
  { group: 'Languages', items: ['C#', 'Python', 'SQL', 'HTML5 & CSS3'] },
  {
    group: 'Desktop & HMI',
    items: ['WPF', 'MVVM', 'Custom controls', 'Real-time data binding', 'Multi-sensor data fusion', 'C2 systems'],
  },
  {
    group: 'Comms & hardware',
    items: ['TCP/IP sockets', 'COM port (serial RS-232)', 'Hardware protocol integration'],
  },
  {
    group: 'Web & backend',
    items: ['ASP.NET Core', 'ASP.NET MVC', 'Web API', 'Entity Framework Core', 'RESTful APIs'],
  },
  { group: 'Data', items: ['SQL Server', 'LINQ', 'Stored procedures', 'Schema design'] },
  { group: 'Tools', items: ['Visual Studio', 'VS Code', 'Git & GitHub', 'SSMS', 'Postman'] },
  {
    group: 'Core concepts',
    items: ['Multithreading', 'Async programming', 'SOLID', 'MVVM', 'Repository pattern', 'OOP'],
  },
];

export const ticker = [
  'C#',
  'WPF',
  'MVVM',
  'ASP.NET Core',
  'Entity Framework Core',
  'SQL Server',
  'TCP/IP',
  'RS-232',
  'LINQ',
  'REST APIs',
  'Multithreading',
  'Data fusion',
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];
