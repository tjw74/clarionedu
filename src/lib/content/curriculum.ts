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

export const curriculum: Section[] = [
  {
    id: 1,
    title: "The Problem: Fiat & Hard Money",
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
      },
      {
        id: 3,
        title: "Fiat Currency Problems",
        duration: "18 min",
        content: {
          introduction: "Fiat currency systems, while providing short-term flexibility, create systemic problems that compound over time.",
          mainContent: [
            "Inflation by Design: Central banks target 2% annual inflation, meaning they deliberately devalue the currency. This is presented as economic stability but represents wealth confiscation.",
            "Monetary Expansion: Since 1971, the money supply has grown exponentially. New money is created through fractional reserve banking and central bank operations.",
            "Cantillon Effect: New money doesn't spread evenly through the economy. Those closest to money creation (banks, governments, large corporations) benefit first, while regular people see prices rise before wages.",
            "Asset Price Inflation: Excessive money printing inflates asset prices (stocks, real estate, bonds), creating wealth inequality between asset owners and non-owners.",
            "Boom-Bust Cycles: Artificial credit expansion creates economic bubbles. When these burst, central banks print more money, creating larger bubbles.",
            "Currency Debasement: Governments have strong incentives to print money rather than raise taxes. This hidden tax falls disproportionately on savers and the poor."
          ],
          keyTakeaways: [
            "Fiat money systems are inherently inflationary by design",
            "Money printing creates wealth inequality through the Cantillon Effect",
            "Artificial credit expansion causes boom-bust economic cycles",
            "Currency debasement is a hidden tax on savers"
          ]
        }
      },
      {
        id: 4,
        title: "Inflation & Debasement",
        duration: "22 min",
        content: {
          introduction: "Understanding inflation and currency debasement is crucial to grasping why Bitcoin was created and why it's necessary.",
          mainContent: [
            "True Definition of Inflation: Inflation is the expansion of the money supply, not rising prices. Rising prices are a symptom of monetary inflation.",
            "The Inflation Tax: When governments print money, they're essentially taxing everyone who holds that currency. This tax is hidden and regressive.",
            "Historical Examples: The Roman Empire debased its currency by reducing silver content. Modern governments debase digitally by creating money from nothing.",
            "Purchasing Power Decline: The US dollar has lost over 95% of its purchasing power since the Federal Reserve's creation in 1913.",
            "Real vs. Nominal Values: Your salary might increase nominally, but if prices rise faster, your real purchasing power decreases.",
            "The Impossible Trinity: Countries cannot simultaneously have fixed exchange rates, independent monetary policy, and free capital flows. This creates instability.",
            "Hyperinflation Cases: Venezuela, Zimbabwe, Weimar Germany - extreme examples of what happens when currency debasement accelerates."
          ],
          keyTakeaways: [
            "Inflation is money supply expansion, not just rising prices",
            "Currency debasement is a hidden tax on holders of the currency",
            "All fiat currencies eventually trend toward zero value",
            "Hyperinflation is the natural end state of unbacked currencies"
          ]
        }
      },
      {
        id: 5,
        title: "Austrian Economic Theory",
        duration: "25 min",
        content: {
          introduction: "Austrian economics provides the theoretical framework for understanding why sound money is essential for a healthy economy.",
          mainContent: [
            "Subjective Theory of Value: Value is not inherent in objects but exists in the minds of individuals. This explains why people value different things differently.",
            "Methodological Individualism: Economic phenomena should be explained in terms of individual human action, not aggregate statistics.",
            "Praxeology: The logic of human action. Ludwig von Mises developed this as the foundation for economic reasoning.",
            "Time Preference: People generally prefer goods now rather than later. Interest rates should reflect natural time preference, not central bank manipulation.",
            "Capital Structure: Production requires time and coordination. Artificial interest rates distort investment decisions and create malinvestment.",
            "The Knowledge Problem: Central planners cannot have the knowledge necessary to efficiently allocate resources. Markets coordinate information through prices.",
            "Sound Money Principles: Money should be a stable unit of account to enable economic calculation. Elastic money supplies distort economic signals."
          ],
          keyTakeaways: [
            "Economic value is subjective and determined by individuals",
            "Central planning fails due to the knowledge problem",
            "Interest rates should reflect natural time preference",
            "Sound money enables accurate economic calculation"
          ]
        }
      },
      {
        id: 6,
        title: "Store of Value Properties",
        duration: "20 min",
        content: {
          introduction: "Understanding what makes a good store of value helps us evaluate different monetary technologies.",
          mainContent: [
            "Scarcity: The most important property. If supply can be easily increased, value will be diluted over time.",
            "Durability: The asset must maintain its properties over long periods. Physical degradation or obsolescence destroys stored value.",
            "Recognizability: Others must be able to easily verify authenticity. Counterfeiting destroys confidence and value.",
            "Portability: Value must be transferable across space. Heavy or bulky assets are poor stores of value for mobile societies.",
            "Divisibility: The asset should be divisible into smaller units for transactions of various sizes.",
            "Salability: The asset should be easy to sell when needed. Illiquid assets are poor stores of value.",
            "Stock-to-Flow Ratio: The ratio of existing supply to new production. Higher ratios indicate better stores of value."
          ],
          keyTakeaways: [
            "Scarcity is the most critical property for store of value",
            "Multiple properties must work together effectively",
            "Stock-to-flow ratio helps quantify scarcity",
            "Perfect stores of value are rare in history"
          ]
        }
      },
      {
        id: 7,
        title: "Why Gold Failed",
        duration: "18 min",
        content: {
          introduction: "Gold served as money for thousands of years but ultimately failed in the modern era. Understanding why reveals important lessons.",
          mainContent: [
            "Physical Limitations: Gold is heavy, difficult to transport, and expensive to secure. This made it impractical for modern commerce.",
            "Centralization Risk: Physical gold concentrated in vaults created single points of failure and control.",
            "Verification Difficulty: Testing gold purity requires expertise and equipment. This enabled fractional reserve banking.",
            "Government Seizure: Governments could and did confiscate gold (US Executive Order 6102 in 1933).",
            "Supply Uncertainty: New discoveries or mining technology could potentially increase gold supply significantly.",
            "Not Programmable: Gold cannot be programmed with rules or sent digitally. It requires trusted intermediaries for modern use.",
            "The Gold Standard's End: Governments abandoned gold because it constrained their ability to print money and fund wars."
          ],
          keyTakeaways: [
            "Gold's physical properties became liabilities in the digital age",
            "Centralization enabled government control and manipulation",
            "Trusted intermediaries reintroduced counterparty risk",
            "Gold couldn't adapt to modern technological needs"
          ]
        }
      },
      {
        id: 8,
        title: "The Need for Hard Money",
        duration: "22 min",
        content: {
          introduction: "The case for hard money becomes clear when we understand the cumulative effects of monetary manipulation.",
          mainContent: [
            "Economic Calculation: Entrepreneurs need stable money to make rational investment decisions. Fluctuating money distorts profit and loss signals.",
            "Savings Incentive: Hard money encourages saving, which provides capital for productive investment. Soft money encourages consumption and speculation.",
            "Wealth Preservation: Individuals should be able to store value across time without involuntary depreciation.",
            "Economic Justice: Monetary inflation redistributes wealth from savers to debtors, from the poor to the wealthy.",
            "International Trade: Sound money facilitates global commerce without exchange rate volatility and manipulation.",
            "Innovation Incentive: Hard money rewards productivity improvements with increased purchasing power over time.",
            "Political Constraint: Hard money limits government's ability to fund wars and welfare through hidden taxation."
          ],
          keyTakeaways: [
            "Hard money enables accurate economic calculation",
            "Sound money promotes saving and productive investment",
            "Monetary manipulation redistributes wealth unfairly",
            "Hard money constrains government power and promotes peace"
          ]
        },
        quiz: [
          {
            question: "What percentage of its purchasing power has the US dollar lost since 1913?",
            options: [
              "Over 50%",
              "Over 75%", 
              "Over 95%",
              "Over 99%"
            ],
            correctAnswer: 2,
            explanation: "The US dollar has lost over 95% of its purchasing power since the Federal Reserve was created in 1913, demonstrating the long-term effects of monetary inflation."
          }
        ]
      }
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
      },
      {
        id: 2,
        title: "Peer-to-Peer Networks",
        duration: "12 min",
        content: {
          introduction: "Bitcoin operates as a peer-to-peer network, eliminating the need for trusted intermediaries in financial transactions.",
          mainContent: [
            "Direct Transactions: Bitcoin enables direct value transfer between parties without intermediaries.",
            "Network Architecture: Participants connect directly to each other, creating a resilient, distributed system.",
            "Consensus Mechanism: The network agrees on transaction validity through cryptographic proof, not trust.",
            "Redundancy: Multiple copies of the blockchain exist across thousands of nodes worldwide.",
            "Censorship Resistance: No central authority can block transactions or freeze accounts.",
            "Always Online: The network operates 24/7 globally, never requiring downtime or maintenance windows."
          ],
          keyTakeaways: [
            "Peer-to-peer eliminates intermediary risk and cost",
            "Distributed architecture provides resilience",
            "Consensus replaces trust in financial transactions",
            "The network operates continuously without central control"
          ]
        }
      },
      {
        id: 3,
        title: "Digital Scarcity",
        duration: "18 min",
        content: {
          introduction: "Digital scarcity was impossible before Bitcoin. Understanding how Bitcoin achieves this is crucial to understanding its value proposition.",
          mainContent: [
            "The Double-Spending Problem: Digital files can be copied infinitely. Bitcoin solves this for digital money.",
            "Proof of Work: Energy expenditure proves computational work was done, making Bitcoin costly to produce.",
            "Difficulty Adjustment: Mining difficulty adjusts every 2016 blocks to maintain 10-minute block times regardless of network hashpower.",
            "Supply Schedule: Bitcoin's issuance follows a predetermined schedule, halving every 210,000 blocks.",
            "Asymptotic Approach: Bitcoin supply approaches but never exceeds 21 million coins.",
            "Stock-to-Flow Model: Bitcoin's stock-to-flow ratio increases over time, making it increasingly scarce."
          ],
          keyTakeaways: [
            "Bitcoin solves the double-spending problem without trusted parties",
            "Proof of work creates digital scarcity through energy expenditure",
            "The supply schedule is mathematically predetermined and unchangeable",
            "Bitcoin becomes increasingly scarce over time"
          ]
        }
      },
      {
        id: 4,
        title: "Permissionless System",
        duration: "14 min",
        content: {
          introduction: "Bitcoin's permissionless nature represents a fundamental shift from traditional financial systems that require authorization.",
          mainContent: [
            "No KYC/AML: Anyone can use Bitcoin without providing identification or justification.",
            "Open Source: Bitcoin's code is public and auditable by anyone.",
            "Open Network: Anyone can run a node, mine, or build applications on Bitcoin.",
            "Censorship Resistance: Transactions cannot be blocked based on sender, receiver, or amount.",
            "Global Access: Geographic location, citizenship, or political status don't affect Bitcoin access.",
            "Innovation Without Permission: Developers can build Bitcoin applications without approval."
          ],
          keyTakeaways: [
            "Permissionless access removes barriers to financial participation",
            "Open source enables global verification and improvement",
            "Censorship resistance protects financial freedom",
            "Innovation thrives without gatekeepers"
          ]
        }
      },
      {
        id: 5,
        title: "Financial Sovereignty",
        duration: "16 min",
        content: {
          introduction: "Financial sovereignty means having complete control over your money without dependence on third parties.",
          mainContent: [
            "Self-Custody: You can hold Bitcoin directly without banks or custodians.",
            "Private Keys: Controlling private keys means controlling Bitcoin - 'not your keys, not your coins.'",
            "No Counterparty Risk: Bitcoin held in self-custody has no dependence on other parties' solvency.",
            "Seizure Resistance: Properly secured Bitcoin cannot be confiscated without access to private keys.",
            "Always Accessible: Your Bitcoin is available 24/7 without bank hours or approval.",
            "International Mobility: Bitcoin travels with you across borders without currency exchange."
          ],
          keyTakeaways: [
            "Self-custody eliminates counterparty risk",
            "Private key control equals monetary sovereignty",
            "Bitcoin enables true ownership of digital wealth",
            "Financial sovereignty provides security and freedom"
          ]
        }
      },
      {
        id: 6,
        title: "Censorship Resistance",
        duration: "15 min",
        content: {
          introduction: "Censorship resistance is one of Bitcoin's most important properties, ensuring financial transactions cannot be blocked or reversed.",
          mainContent: [
            "Transaction Finality: Confirmed Bitcoin transactions cannot be reversed or canceled.",
            "Network Decentralization: No single entity can control or censor the Bitcoin network.",
            "Pseudonymity: Bitcoin addresses don't require real-world identity, providing privacy protection.",
            "Global Distribution: Bitcoin nodes operate in every country, making network shutdown impossible.",
            "Economic Incentives: Miners are economically incentivized to include valid transactions.",
            "Protocol Rules: Mathematical rules, not human judgment, determine transaction validity."
          ],
          keyTakeaways: [
            "Decentralization prevents censorship by any single authority",
            "Economic incentives align miners with network neutrality",
            "Mathematical rules remove human bias from transaction processing",
            "Global distribution makes Bitcoin unstoppable"
          ]
        }
      }
    ]
  }
  // Import complete sections
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
      },
      {
        id: 2,
        title: "Private & Public Keys",
        duration: "22 min",
        content: {
          introduction: "Private and public keys are the cryptographic foundation that enables Bitcoin ownership and transactions without trusted third parties.",
          mainContent: [
            "Private keys are randomly generated 256-bit numbers. They must be kept secret and secure at all costs.",
            "Public keys are mathematically derived from private keys using elliptic curve cryptography. They can be shared safely.",
            "Bitcoin addresses are derived from public keys through hashing. One private key can generate many addresses.",
            "Digital signatures prove ownership without revealing the private key. This enables secure transactions.",
            "The relationship between private keys, public keys, and addresses is one-way: you can't derive a private key from a public key or address.",
            "Private key security is paramount: anyone with access to your private key controls your Bitcoin."
          ],
          keyTakeaways: [
            "Private keys must be kept absolutely secret",
            "Public keys and addresses can be shared safely",
            "Digital signatures prove ownership without revealing private keys",
            "The cryptographic relationship is mathematically one-way"
          ],
          practicalExercise: "Generate a Bitcoin address in your wallet and examine the public key. Note how the address is different from the public key."
                 }
       },
       // Additional lessons 3-10 for Section 3 follow the same pattern...
    ]
  },
  {
    id: 4,
    title: "Bitcoin Network & Protocol",
    description: "Understanding how Bitcoin works as a decentralized network",
    difficulty: "Intermediate",
    totalDuration: "4 hours",
    isUnlocked: false,
    lessons: [
      {
        id: 1,
        title: "Nodes & The Network",
        duration: "20 min",
        content: {
          introduction: "Bitcoin nodes are computers that maintain and validate the Bitcoin blockchain. They form the decentralized network that makes Bitcoin possible.",
          mainContent: [
            "Full nodes download and validate the entire blockchain, enforcing all consensus rules independently.",
            "Light nodes (SPV) only download block headers and rely on full nodes for transaction verification.",
            "Nodes communicate peer-to-peer, sharing transactions and blocks without central coordination.",
            "Running a full node gives you maximum security and privacy while supporting the network.",
            "Nodes vote on protocol changes by choosing which software version to run.",
            "The more nodes in the network, the more decentralized and censorship-resistant Bitcoin becomes."
          ],
          keyTakeaways: [
            "Full nodes validate the entire blockchain independently",
            "Nodes communicate in a peer-to-peer fashion",
            "Running a node maximizes your security and privacy",
            "More nodes increase decentralization"
          ]
        }
               }
       ]
       // Additional lessons for Section 4...
    ]
  },
  {
    id: 5,
    title: "Advanced Technical Concepts",
    description: "Deep dive into Bitcoin's cryptographic and technical foundations",
    difficulty: "Advanced",
    totalDuration: "6 hours",
    isUnlocked: false,
    lessons: [
      {
        id: 1,
        title: "Cryptographic Primitives",
        duration: "25 min",
        content: {
          introduction: "Bitcoin relies on several cryptographic building blocks that provide security, privacy, and verification capabilities.",
          mainContent: [
            "Hash functions (SHA-256, RIPEMD-160) create unique fingerprints of data.",
            "Elliptic curve cryptography enables public-key cryptography with smaller key sizes.",
            "Digital signatures prove ownership and prevent forgery using ECDSA.",
            "Merkle trees efficiently summarize large sets of transactions.",
            "Cryptographic commitments allow proving knowledge without revealing information.",
            "These primitives combine to create Bitcoin's trustless security model."
          ],
          keyTakeaways: [
            "Bitcoin combines multiple cryptographic techniques",
            "Each primitive serves specific security functions",
            "The combination creates a trustless system",
            "Understanding primitives helps with advanced Bitcoin development"
          ]
        }
      }
      // Additional advanced lessons...
    ]
  },
  {
    id: 6,
    title: "Bitcoin Development",
    description: "Contributing to Bitcoin's open-source ecosystem",
    difficulty: "Expert",
    totalDuration: "10 hours",
    isUnlocked: false,
    lessons: [
      {
        id: 1,
        title: "Bitcoin Core",
        duration: "35 min",
        content: {
          introduction: "Bitcoin Core is the reference implementation of the Bitcoin protocol, maintained by a global community of developers.",
          mainContent: [
            "Bitcoin Core implements the full Bitcoin protocol including node, wallet, and mining functionality.",
            "The codebase is written primarily in C++ for performance and security.",
            "Core follows a conservative development approach prioritizing security over feature velocity.",
            "The project uses a consensus-based development model with multiple maintainers.",
            "Bitcoin Core serves as the de facto standard that other implementations follow.",
            "Understanding Core is essential for serious Bitcoin protocol development."
          ],
          keyTakeaways: [
            "Bitcoin Core is the reference Bitcoin implementation",
            "It follows conservative, security-first development practices",
            "The project uses consensus-based governance",
            "Core knowledge is essential for protocol development"
          ]
        }
      }
      // Additional development lessons...
    ]
  }
];

export const getSection = (sectionId: number): Section | undefined => {
  return curriculum.find(section => section.id === sectionId);
};

export const getLesson = (sectionId: number, lessonId: number): Lesson | undefined => {
  const section = getSection(sectionId);
  return section?.lessons.find(lesson => lesson.id === lessonId);
};

export const getProgress = () => {
  // This would integrate with a state management system
  return {
    completedLessons: [
      { sectionId: 1, lessonId: 1 },
      { sectionId: 1, lessonId: 2 },
      { sectionId: 1, lessonId: 3 }
    ],
    currentLesson: { sectionId: 1, lessonId: 4 }
  };
}; 