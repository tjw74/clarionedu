export interface Lesson {
  id: number;
  title: string;
  duration: string;
  content: {
    introduction: string;
    mainContent: string[];
    keyTakeaways: string[];
    practicalExercise?: string;
  };
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export interface Section {
  id: number;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  lessons: Lesson[];
  totalDuration: string;
  isUnlocked: boolean;
}

export const completeCurriculum: Section[] = [
  {
    id: 1,
    title: "The Fiat Problem & Hard Money Solution",
    description: "Understanding why Bitcoin exists and the fundamental problems it solves",
    difficulty: "Beginner",
    totalDuration: "2 hours",
    isUnlocked: true,
    lessons: [
      {
        id: 1,
        title: "What is Money?",
        duration: "15 min",
        content: {
          introduction: "Money is one of humanity's most important inventions, yet most people have never deeply considered what makes something 'money' or why money exists at all.",
          mainContent: [
            "Money serves three primary functions: a medium of exchange, a unit of account, and a store of value. Each function is crucial for a functioning economy.",
            "Before money, humans relied on barter systems. Barter requires a 'double coincidence of wants' - both parties must want what the other offers. This severely limits economic activity.",
            "Good money exhibits specific properties: divisibility, portability, durability, recognizability, and scarcity. Throughout history, various items have served as money based on these properties.",
            "The evolution of money shows a clear progression: from commodity money (cattle, shells) to precious metals (gold, silver) to paper money (IOUs backed by gold) to fiat money (government decree).",
            "Each transition solved certain problems but introduced new ones. Understanding this progression is crucial to understanding why Bitcoin represents the next evolutionary step."
          ],
          keyTakeaways: [
            "Money is a technology that solves the problem of coincidence of wants",
            "Good money must be scarce, durable, divisible, portable, and recognizable",
            "Money has evolved through distinct phases throughout human history",
            "Each form of money represents trade-offs between different properties"
          ],
          practicalExercise: "Think about a recent purchase you made. Walk through how barter would have worked for this transaction and identify at least 3 problems you would have encountered."
        },
        quiz: [
          {
            question: "What is the 'double coincidence of wants' problem?",
            options: [
              "When two people want the same thing",
              "When both parties in a trade must want what the other offers",
              "When money becomes too valuable",
              "When there's not enough money in circulation"
            ],
            correctAnswer: 1,
            explanation: "The double coincidence of wants occurs in barter systems when both parties must simultaneously want what the other has to offer, making trade difficult."
          }
        ]
      },
      {
        id: 2,
        title: "History of Money",
        duration: "20 min",
        content: {
          introduction: "The history of money reveals patterns that help us understand what makes money successful and why certain monetary systems fail.",
          mainContent: [
            "Commodity Money Era: Early humans used items with intrinsic value - cattle, salt, shells, stones. These had practical uses beyond being money.",
            "Precious Metals Era: Gold and silver emerged as superior money due to their unique properties: chemical stability, divisibility, portability, and natural scarcity.",
            "The Gold Standard: Paper money initially represented claims on gold. This system combined the benefits of gold (store of value) with paper's convenience (portability).",
            "Bretton Woods System (1944-1971): Established the US dollar as the world's reserve currency, backed by gold at $35/ounce. Other currencies were pegged to the dollar.",
            "The Nixon Shock (1971): President Nixon temporarily suspended gold convertibility due to mounting pressure on US gold reserves. This 'temporary' measure became permanent.",
            "The Fiat Era (1971-present): Money is now backed only by government decree. This has enabled unprecedented monetary expansion and manipulation."
          ],
          keyTakeaways: [
            "Successful money throughout history has been scarce and difficult to produce",
            "The gold standard provided monetary stability for over 100 years",
            "The end of gold backing in 1971 fundamentally changed the nature of money",
            "Fiat money represents the first time in history money has no commodity backing"
          ]
        }
      }
      // Continue with all remaining lessons for Section 1...
    ]
  },
  {
    id: 2,
    title: "What is Bitcoin?",
    description: "High-level conceptual understanding of Bitcoin's core properties",
    difficulty: "Beginner",
    totalDuration: "1.5 hours",
    isUnlocked: true,
    lessons: [
      {
        id: 1,
        title: "Bitcoin's Core Properties",
        duration: "15 min",
        content: {
          introduction: "Bitcoin represents a breakthrough in monetary technology, combining the best properties of previous money with new capabilities only possible in the digital realm.",
          mainContent: [
            "Digital Scarcity: For the first time in history, we have a digital asset with provable, absolute scarcity. Only 21 million bitcoins will ever exist.",
            "Decentralization: No single entity controls Bitcoin. It operates through a distributed network of nodes worldwide.",
            "Immutability: Bitcoin transactions, once confirmed, cannot be reversed or censored. The ledger becomes increasingly immutable over time.",
            "Transparency: All transactions are publicly visible on the blockchain, enabling unprecedented auditability.",
            "Programmability: Bitcoin can execute basic smart contracts and is programmable money that follows predetermined rules.",
            "Global Accessibility: Bitcoin works the same everywhere, 24/7, without borders or restrictions.",
            "Self-Sovereignty: You can hold and transfer Bitcoin without permission from any authority."
          ],
          keyTakeaways: [
            "Bitcoin achieves digital scarcity for the first time",
            "Decentralization removes single points of failure",
            "Immutability provides finality and security",
            "Self-sovereignty returns monetary control to individuals"
          ]
        }
      }
      // Continue with all lessons for Section 2...
    ]
  },
  {
    id: 3,
    title: "Using Bitcoin",
    description: "Practical skills for safely storing and transacting with Bitcoin",
    difficulty: "Beginner",
    totalDuration: "3 hours",
    isUnlocked: false,
    lessons: [
      {
        id: 1,
        title: "Bitcoin Wallets",
        duration: "18 min",
        content: {
          introduction: "Bitcoin wallets are software or hardware that manage your Bitcoin private keys. Understanding wallets is essential for safe Bitcoin usage.",
          mainContent: [
            "A Bitcoin wallet doesn't actually store Bitcoin - it stores the private keys that control Bitcoin addresses on the blockchain.",
            "Hot wallets are connected to the internet (mobile apps, desktop software, web wallets). They're convenient but less secure.",
            "Cold wallets are offline (hardware wallets, paper wallets). They're more secure but less convenient for frequent transactions.",
            "Custodial wallets are controlled by a third party (exchanges, banks). You don't control the private keys.",
            "Non-custodial wallets give you full control of your private keys. This is true Bitcoin ownership.",
            "Popular wallet types include mobile wallets (BlueWallet, Electrum), hardware wallets (Ledger, Trezor), and full nodes (Bitcoin Core)."
          ],
          keyTakeaways: [
            "Wallets store private keys, not Bitcoin itself",
            "Hot wallets are convenient, cold wallets are secure",
            "Non-custodial wallets provide true ownership",
            "Choose your wallet based on your security needs and usage patterns"
          ],
          practicalExercise: "Download a reputable mobile Bitcoin wallet and explore its interface. DO NOT send real Bitcoin until you complete this section."
        },
        quiz: [
          {
            question: "What does a Bitcoin wallet actually store?",
            options: [
              "Bitcoin coins",
              "Private keys",
              "Public addresses",
              "Transaction history"
            ],
            correctAnswer: 1,
            explanation: "Bitcoin wallets store private keys that control Bitcoin addresses. The Bitcoin itself exists on the blockchain."
          }
        ]
      }
      // Continue with all lessons for Section 3...
    ]
  }
  // Continue with Sections 4, 5, 6...
];

export const getSection = (sectionId: number): Section | undefined => {
  return completeCurriculum.find(section => section.id === sectionId);
};

export const getLesson = (sectionId: number, lessonId: number): Lesson | undefined => {
  const section = getSection(sectionId);
  return section?.lessons.find(lesson => lesson.id === lessonId);
}; 