import { Section } from './sections';

// Complete Section 4: Bitcoin Network & Protocol (continuing from sections.ts)
export const section4Extended = {
  // ... continuing lessons 4-12 for Section 4
  lessons: [
    {
      id: 4,
      title: "Mining & Miners",
      duration: "24 min",
      content: {
        introduction: "Mining is the process of adding new blocks to the blockchain while securing the network and earning rewards.",
        mainContent: [
          "Miners collect transactions from the mempool and attempt to create valid blocks.",
          "Mining requires specialized hardware (ASICs) that can perform trillions of hash calculations per second.",
          "Miners compete to find a nonce that makes the block hash below the difficulty target.",
          "The first miner to find a valid block broadcasts it to the network and earns the block reward plus transaction fees.",
          "Mining difficulty adjusts every 2016 blocks to maintain 10-minute average block times.",
          "Mining pools allow smaller miners to combine resources and share rewards proportionally."
        ],
        keyTakeaways: [
          "Mining secures the network through competitive computation",
          "Specialized ASIC hardware is required for profitable mining",
          "Difficulty adjusts to maintain consistent block times",
          "Mining pools enable smaller participants to earn regular rewards"
        ]
      }
    },
    {
      id: 5,
      title: "Hash Functions",
      duration: "20 min",
      content: {
        introduction: "Hash functions are mathematical functions that convert input data into fixed-size strings, crucial for Bitcoin's security.",
        mainContent: [
          "Bitcoin uses SHA-256 (Secure Hash Algorithm 256-bit) for most hashing operations.",
          "Hash functions are deterministic: the same input always produces the same output.",
          "They're one-way functions: it's computationally infeasible to reverse the process.",
          "A small change in input creates a completely different output (avalanche effect).",
          "Hash functions are used for proof of work, transaction IDs, and Merkle trees.",
          "The fixed output size (256 bits) means there are 2^256 possible hash outputs."
        ],
        keyTakeaways: [
          "SHA-256 is Bitcoin's primary hash function",
          "Hash functions are deterministic and one-way",
          "Small input changes create dramatically different outputs",
          "Hash functions enable Bitcoin's security properties"
        ]
      }
    },
    {
      id: 6,
      title: "Digital Signatures", 
      duration: "22 min",
      content: {
        introduction: "Digital signatures prove ownership of Bitcoin without revealing private keys, enabling secure transactions.",
        mainContent: [
          "Digital signatures use elliptic curve cryptography (specifically secp256k1 curve).",
          "Signing requires the private key and transaction data to create a unique signature.",
          "Verification uses the public key, signature, and transaction data to confirm authenticity.", 
          "Signatures prove that the private key holder authorized the transaction.",
          "Each signature is unique to both the transaction and the private key used.",
          "Signature verification can be performed by anyone with the public key."
        ],
        keyTakeaways: [
          "Digital signatures prove ownership without revealing private keys",
          "Bitcoin uses elliptic curve cryptography (secp256k1)",
          "Signatures are unique to each transaction",
          "Anyone can verify signatures using public keys"
        ]
      }
    }
  ]
};

// Complete Section 5: Advanced Technical Concepts
export const section5: Section = {
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
    },
    {
      id: 2,
      title: "Elliptic Curve Cryptography",
      duration: "28 min",
      content: {
        introduction: "Elliptic Curve Cryptography (ECC) enables Bitcoin's public-key cryptography with efficient key sizes and strong security.",
        mainContent: [
          "Bitcoin uses the secp256k1 elliptic curve specified by SEC (Standards for Efficient Cryptography).",
          "The curve equation is y² = x³ + 7 over a finite field of prime order.",
          "Point multiplication is easy forward but hard to reverse (discrete logarithm problem).",
          "Private keys are 256-bit integers; public keys are points on the curve.",
          "The curve provides approximately 128 bits of security strength.",
          "secp256k1 was chosen for its efficiency and well-studied security properties."
        ],
        keyTakeaways: [
          "Bitcoin uses the secp256k1 elliptic curve",
          "ECC provides strong security with smaller key sizes",
          "Point multiplication is a one-way function", 
          "The curve choice balances security and efficiency"
        ]
      }
    },
    {
      id: 3,
      title: "Merkle Trees",
      duration: "22 min",
      content: {
        introduction: "Merkle trees efficiently summarize all transactions in a block, enabling lightweight verification and fraud proofs.",
        mainContent: [
          "Merkle trees are binary trees where each leaf represents a transaction hash.",
          "Internal nodes contain hashes of their children, creating a hierarchical structure.",
          "The root hash represents a commitment to all transactions in the block.",
          "Changing any transaction changes the Merkle root, detecting tampering.",
          "Merkle proofs allow verification of transaction inclusion without downloading the full block.",
          "SPV (Simple Payment Verification) clients use Merkle proofs for lightweight verification."
        ],
        keyTakeaways: [
          "Merkle trees create efficient commitments to transaction sets",
          "The root hash changes if any transaction is modified",
          "Merkle proofs enable lightweight verification",
          "SPV clients rely on Merkle proofs for security"
        ]
      }
    },
    {
      id: 4,
      title: "Script Language",
      duration: "30 min",
      content: {
        introduction: "Bitcoin Script is a stack-based programming language that defines the conditions under which Bitcoin can be spent.",
        mainContent: [
          "Script is intentionally simple, stack-based, and non-Turing complete for security.",
          "Scripts define spending conditions through a combination of opcodes and data.",
          "Common script types include Pay-to-Public-Key-Hash (P2PKH) and Pay-to-Script-Hash (P2SH).",
          "Scripts enable complex spending conditions like multi-signature, time locks, and conditional payments.",
          "The script execution environment is isolated and deterministic across all nodes.",
          "Advanced scripts enable features like atomic swaps, payment channels, and smart contracts."
        ],
        keyTakeaways: [
          "Script defines Bitcoin's programmable money capabilities",
          "The language is intentionally limited for security",
          "Scripts enable complex spending conditions",
          "Script execution must be deterministic across all nodes"
        ]
      }
    },
    {
      id: 5,
      title: "Transaction Types",
      duration: "26 min",
      content: {
        introduction: "Bitcoin supports various transaction types that enable different use cases and security models.",
        mainContent: [
          "Pay-to-Public-Key-Hash (P2PKH) is the original transaction type using public key hashes.",
          "Pay-to-Script-Hash (P2SH) enables complex scripts while maintaining address compatibility.",
          "Pay-to-Witness-Public-Key-Hash (P2WPKH) is the SegWit version of P2PKH with lower fees.",
          "Pay-to-Witness-Script-Hash (P2WSH) combines SegWit efficiency with script flexibility.",
          "Pay-to-Taproot (P2TR) provides enhanced privacy and smart contract capabilities.",
          "Each type has different security properties, fee structures, and use cases."
        ],
        keyTakeaways: [
          "Different transaction types serve different use cases",
          "Newer types generally offer better efficiency and privacy",
          "P2SH enables complex scripts with simple addresses",
          "Taproot provides the most advanced capabilities"
        ]
      }
    }
  ]
};

// Complete Section 6: Bitcoin Development
export const section6: Section = {
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
    },
    {
      id: 2,
      title: "Development Environment",
      duration: "28 min",
      content: {
        introduction: "Setting up a proper development environment is crucial for contributing to Bitcoin projects effectively and safely.",
        mainContent: [
          "Development requires Linux, macOS, or Windows with WSL for the best compatibility.",
          "Essential tools include Git, GCC/Clang compilers, and build dependencies like autotools.",
          "Bitcoin Core uses autotools and Make for building, with support for various architectures.",
          "Testing environments include regtest for isolated testing and testnet for realistic testing.",
          "Development often involves running multiple nodes and simulating network conditions.",
          "Proper security practices include code signing, isolated environments, and backup procedures."
        ],
        keyTakeaways: [
          "Proper environment setup is crucial for Bitcoin development",
          "Testing networks enable safe experimentation",
          "Security practices protect development and testing",
          "Multiple tools and dependencies are required"
        ]
      }
    },
    {
      id: 3,
      title: "Testing Framework",
      duration: "32 min",
      content: {
        introduction: "Bitcoin's extensive testing framework ensures protocol reliability and prevents regressions in the critical financial infrastructure.",
        mainContent: [
          "Unit tests verify individual functions and components in isolation.",
          "Functional tests simulate real network scenarios and user interactions.",
          "Integration tests verify interactions between different system components.",
          "Performance tests ensure changes don't degrade system performance.",
          "The test suite includes over 1000 tests covering critical protocol functionality.",
          "Continuous integration runs tests automatically on code changes."
        ],
        keyTakeaways: [
          "Comprehensive testing prevents bugs in critical infrastructure",
          "Multiple test types cover different aspects of functionality",
          "Tests must pass before code changes are accepted",
          "Testing is essential for safe protocol evolution"
        ]
      }
    }
  ]
}; 