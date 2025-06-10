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

// Complete Section 3: Using Bitcoin
export const section3: Section = {
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
    {
      id: 3,
      title: "Entropy & Randomness",
      duration: "16 min",
      content: {
        introduction: "Entropy is the randomness used to generate secure private keys. Understanding entropy is crucial for Bitcoin security.",
        mainContent: [
          "Cryptographic security depends on true randomness. Predictable 'random' numbers can be guessed by attackers.",
          "Computers struggle with true randomness. They use pseudorandom number generators seeded with entropy from hardware.",
          "Good entropy sources include mouse movements, keyboard timings, microphone noise, and specialized hardware random number generators.",
          "Poor entropy can lead to predictable private keys, making Bitcoin vulnerable to theft.",
          "Hardware wallets use dedicated chips to generate high-quality randomness for key generation.",
          "Never use online key generators or untrusted software for generating private keys."
        ],
        keyTakeaways: [
          "True randomness is essential for Bitcoin security",
          "Computers need good entropy sources for secure key generation",
          "Hardware wallets provide superior entropy",
          "Never trust online key generators"
        ]
      }
    },
    {
      id: 4,
      title: "Seed Phrases",
      duration: "20 min",
      content: {
        introduction: "Seed phrases (also called mnemonic phrases) are human-readable representations of private keys that enable wallet recovery.",
        mainContent: [
          "Seed phrases typically consist of 12 or 24 words chosen from a standardized list of 2048 words (BIP39).",
          "The seed phrase mathematically represents the entropy used to generate all private keys in a hierarchical deterministic (HD) wallet.",
          "From one seed phrase, billions of private keys and addresses can be generated deterministically.",
          "Seed phrases enable wallet recovery across different devices and software implementations.",
          "The word order in a seed phrase matters - changing the order creates entirely different keys.",
          "Seed phrases should be written down on paper and stored securely, never digitally."
        ],
        keyTakeaways: [
          "Seed phrases are human-readable backups of wallet entropy",
          "One seed can generate unlimited keys and addresses",
          "Word order is critical for proper recovery",
          "Store seed phrases physically, never digitally"
        ],
        practicalExercise: "Create a new wallet and write down the seed phrase on paper. Practice restoring the wallet using only the seed phrase."
      }
    },
    {
      id: 5,
      title: "Address Generation",
      duration: "18 min",
      content: {
        introduction: "Bitcoin addresses are destinations for transactions. Understanding how they're generated helps with privacy and security.",
        mainContent: [
          "Legacy addresses start with '1' and use Pay-to-Public-Key-Hash (P2PKH) format.",
          "SegWit addresses start with '3' (P2SH-wrapped) or 'bc1' (native bech32) and offer lower fees.",
          "Taproot addresses start with 'bc1p' and provide enhanced privacy and smart contract capabilities.",
          "HD wallets generate new addresses for each transaction to improve privacy.",
          "Address reuse links transactions and reduces privacy for you and people you transact with.",
          "Each address type has different fee structures and compatibility considerations."
        ],
        keyTakeaways: [
          "Different address types offer different features and fee structures",
          "New addresses should be used for each transaction",
          "Address reuse harms privacy",
          "Modern wallets handle address generation automatically"
        ]
      }
    },
    {
      id: 6,
      title: "Transaction Basics",
      duration: "25 min",
      content: {
        introduction: "Bitcoin transactions transfer value between addresses. Understanding transaction structure is fundamental to using Bitcoin effectively.",
        mainContent: [
          "Bitcoin transactions have inputs (where Bitcoin comes from) and outputs (where Bitcoin goes).",
          "Each input references a previous transaction output and provides a digital signature proving ownership.",
          "Transaction outputs specify the amount and destination address for the Bitcoin being sent.",
          "The difference between total inputs and outputs becomes the transaction fee paid to miners.",
          "Transactions are broadcast to the network and included in blocks by miners.",
          "Confirmation occurs when a transaction is included in a block and additional blocks are built on top."
        ],
        keyTakeaways: [
          "Transactions have inputs (sources) and outputs (destinations)",
          "Digital signatures prove ownership of inputs",
          "Transaction fees are input minus output amounts",
          "Confirmations provide increasing security"
        ]
      }
    },
    {
      id: 7,
      title: "Fee Management",
      duration: "16 min",
      content: {
        introduction: "Transaction fees incentivize miners to include your transaction in a block. Understanding fees helps you transact efficiently.",
        mainContent: [
          "Fees are measured in satoshis per byte (sat/byte) or satoshis per virtual byte (sat/vB) for SegWit transactions.",
          "Higher fees result in faster confirmation as miners prioritize higher-paying transactions.",
          "Fee rates fluctuate based on network demand - high during busy periods, low during quiet times.",
          "Wallets often provide fee estimation, but you can set custom fees based on your urgency needs.",
          "SegWit and Taproot transactions are more fee-efficient due to their improved data structure.",
          "Fee estimation services and mempool explorers help you choose appropriate fee rates."
        ],
        keyTakeaways: [
          "Fees are measured in satoshis per byte",
          "Higher fees mean faster confirmation",
          "Fee rates vary with network demand",
          "Modern address types offer fee savings"
        ]
      }
    },
    {
      id: 8,
      title: "Security Best Practices",
      duration: "22 min",
      content: {
        introduction: "Bitcoin security requires vigilance and good practices. Unlike traditional banking, there's no customer service to reverse mistakes.",
        mainContent: [
          "Never share your private keys or seed phrases with anyone, ever.",
          "Use reputable, open-source wallet software from official sources.",
          "Verify software downloads using digital signatures and checksums.",
          "Keep software updated to patch security vulnerabilities.",
          "Use strong, unique passwords for any encrypted wallets.",
          "Consider multi-signature setups for large amounts.",
          "Test transactions with small amounts before sending large sums.",
          "Be aware of common scams: fake websites, phishing emails, and social engineering."
        ],
        keyTakeaways: [
          "Never share private keys or seed phrases",
          "Use only reputable, open-source wallet software",
          "Verify software authenticity before installation",
          "Test small amounts before large transactions"
        ]
      }
    },
    {
      id: 9,
      title: "Hardware Wallets",
      duration: "20 min",
      content: {
        introduction: "Hardware wallets provide the highest security for Bitcoin storage by keeping private keys on dedicated, offline devices.",
        mainContent: [
          "Hardware wallets are specialized devices designed solely for cryptocurrency key storage.",
          "Private keys never leave the hardware device, even when signing transactions.",
          "Popular hardware wallets include Ledger, Trezor, Coldcard, and Foundation Passport.",
          "Hardware wallets connect to computers or phones to display transaction details but sign transactions internally.",
          "They typically require physical button presses to confirm transactions, preventing remote attacks.",
          "Hardware wallets should be purchased directly from manufacturers, never second-hand."
        ],
        keyTakeaways: [
          "Hardware wallets provide maximum security for Bitcoin storage",
          "Private keys never leave the device",
          "Physical confirmation prevents remote attacks",
          "Buy only from official manufacturers"
        ]
      }
    },
    {
      id: 10,
      title: "Multi-signature",
      duration: "18 min",
      content: {
        introduction: "Multi-signature (multisig) requires multiple private keys to authorize transactions, providing enhanced security and shared control.",
        mainContent: [
          "Multisig requires M-of-N signatures to spend Bitcoin (e.g., 2-of-3 means 2 signatures out of 3 possible).",
          "Common configurations include 2-of-3 (shared control) and 3-of-5 (organizational treasury).",
          "Multisig eliminates single points of failure - losing one key doesn't lose the Bitcoin.",
          "It enables shared custody between trusted parties or geographic distribution of keys.",
          "Setting up multisig requires careful key generation and backup procedures.",
          "Multisig transactions have higher fees due to increased transaction size."
        ],
        keyTakeaways: [
          "Multisig requires multiple signatures to spend Bitcoin",
          "It eliminates single points of failure",
          "Common for shared control and enhanced security",
          "Requires careful setup and key management"
        ]
      }
    }
  ]
};

// Complete Section 4: Bitcoin Network & Protocol
export const section4: Section = {
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
    },
    {
      id: 2,
      title: "Blockchain Structure", 
      duration: "22 min",
      content: {
        introduction: "The blockchain is Bitcoin's ledger structure that creates an immutable, chronological record of all transactions.",
        mainContent: [
          "Blocks contain a header with metadata and a body with transactions.",
          "Block headers include the previous block hash, creating a chain that's tamper-evident.",
          "Each block is cryptographically linked to the previous block through hash functions.",
          "Changing any past transaction would require recalculating all subsequent blocks.",
          "The blockchain provides a global, consistent view of transaction history.",
          "Block size limits constrain the number of transactions per block."
        ],
        keyTakeaways: [
          "Blocks are cryptographically linked in a chain",
          "The structure makes historical tampering computationally infeasible", 
          "Each block references the previous block's hash",
          "The blockchain provides global transaction history"
        ]
      }
    },
    {
      id: 3,
      title: "Proof of Work",
      duration: "25 min", 
      content: {
        introduction: "Proof of Work is Bitcoin's consensus mechanism that secures the network through computational effort and energy expenditure.",
        mainContent: [
          "Miners compete to find a nonce that makes the block hash meet the difficulty target.",
          "The difficulty target adjusts every 2016 blocks to maintain 10-minute average block times.",
          "Proof of Work requires real-world energy expenditure, making attacks expensive.",
          "The longest valid chain with the most accumulated work is considered the true blockchain.",
          "Miners are incentivized to be honest because attacking the network would devalue their rewards.",
          "Energy expenditure creates digital scarcity and unforgeable costliness."
        ],
        keyTakeaways: [
          "Proof of Work secures Bitcoin through energy expenditure",
          "Difficulty adjusts to maintain consistent block times",
          "Attacks become prohibitively expensive",
          "Energy creates unforgeable digital scarcity"
        ]
      }
    }
  ]
};

// I'll continue with sections 5 and 6 in the next edit to avoid token limits 