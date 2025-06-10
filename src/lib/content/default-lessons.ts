import { Lesson, Section } from './curriculum-complete';

const sectionTitles = [
  "", // index 0 unused
  "The Problem: Fiat & Hard Money",
  "What is Bitcoin?", 
  "Using Bitcoin",
  "Bitcoin Network & Protocol",
  "Advanced Technical Concepts",
  "Bitcoin Development"
];

const lessonTitles: { [key: number]: string[] } = {
  1: [
    "", // index 0 unused
    "What is Money?",
    "History of Money", 
    "Fiat Currency Problems",
    "Inflation & Debasement",
    "Austrian Economic Theory",
    "Store of Value Properties",
    "Why Gold Failed",
    "The Need for Hard Money"
  ],
  2: [
    "",
    "Bitcoin's Core Properties",
    "Peer-to-Peer Networks",
    "Digital Scarcity", 
    "Permissionless System",
    "Financial Sovereignty",
    "Censorship Resistance"
  ],
  3: [
    "",
    "Bitcoin Wallets",
    "Private & Public Keys",
    "Entropy & Randomness",
    "Seed Phrases",
    "Address Generation",
    "Transaction Basics",
    "Fee Management",
    "Security Best Practices",
    "Hardware Wallets",
    "Multi-signature"
  ],
  4: [
    "",
    "Nodes & The Network",
    "Blockchain Structure",
    "Proof of Work",
    "Mining & Miners", 
    "Hash Functions",
    "Digital Signatures",
    "Transaction Verification",
    "Block Validation",
    "Consensus Rules",
    "Network Upgrades",
    "Forks & Soft Forks",
    "Lightning Network Basics"
  ],
  5: [
    "",
    "Cryptographic Primitives",
    "Elliptic Curve Cryptography",
    "Merkle Trees",
    "Script Language",
    "Transaction Types",
    "Lightning Network Deep Dive",
    "Channel Management",
    "Privacy Techniques",
    "Coin Selection",
    "Replace-by-Fee",
    "Segregated Witness",
    "Taproot & Schnorr",
    "Covenant Proposals",
    "Layer 2 Solutions",
    "Sidechains"
  ],
  6: [
    "",
    "Bitcoin Core",
    "Development Environment",
    "Testing Framework",
    "Code Review Process",
    "BIP Process",
    "Protocol Development",
    "Security Considerations",
    "Performance Optimization",
    "Debugging Techniques",
    "Node Operation",
    "Mining Pool Development",
    "Wallet Development",
    "Lightning Development",
    "Library Usage",
    "API Integration",
    "Custom Applications",
    "Research & Innovation",
    "Economic Analysis",
    "Game Theory",
    "Future Developments"
  ]
};

export function defaultLessonContent(sectionId: number, lessonId: number, section: Section): Lesson {
  const title = lessonTitles[sectionId]?.[lessonId] || `Lesson ${lessonId}`;
  
  return {
    id: lessonId,
    title,
    duration: "15 min",
    content: {
      introduction: `This lesson covers ${title.toLowerCase()} as part of the ${sectionTitles[sectionId]} section. This content is foundational to understanding Bitcoin.`,
      mainContent: [
        `Welcome to ${title}! This lesson will build on the concepts from previous lessons in the ${sectionTitles[sectionId]} section.`,
        "Bitcoin represents a paradigm shift in how we think about money, technology, and financial sovereignty.",
        "Understanding these concepts deeply is crucial for anyone who wants to participate meaningfully in the Bitcoin ecosystem.",
        "Each lesson builds upon the previous ones, creating a comprehensive understanding of Bitcoin from first principles.",
        "Take time to absorb the material and complete any practical exercises to reinforce your learning."
      ],
      keyTakeaways: [
        `${title} is an essential component of Bitcoin education`,
        "Each concept builds upon previous knowledge",
        "Practical understanding requires hands-on experience",
        "Bitcoin education enables financial sovereignty"
      ],
      practicalExercise: `Reflect on how ${title.toLowerCase()} relates to your current understanding of money and technology. Consider discussing these concepts with others to deepen your comprehension.`
    },
    quiz: [
      {
        question: `What is the main focus of the "${title}" lesson?`,
        options: [
          "Technical implementation details",
          "Understanding fundamental concepts",
          "Trading strategies", 
          "Investment advice"
        ],
        correctAnswer: 1,
        explanation: "This lesson focuses on building fundamental understanding that forms the foundation for all Bitcoin knowledge."
      }
    ]
  };
} 