'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { 
  BookOpen, 
  Coins, 
  Shield, 
  TrendingUp, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  Lock,
  Globe,
  Server,
  Key
} from "lucide-react";
import Link from "next/link";

const curriculumSections = [
  {
    id: 1,
    title: "The Fiat Problem & Hard Money Solution",
    description: "Understanding why Bitcoin exists and the fundamental problems it solves",
    icon: TrendingUp,
    difficulty: "Beginner",
    lessons: 8,
    duration: "2 hours",
    topics: [
      "What is Money?",
      "History of Money",
      "Fiat Currency Problems", 
      "Inflation & Debasement",
      "Austrian Economic Theory",
      "Store of Value Properties",
      "Why Gold Failed",
      "The Need for Hard Money"
    ],
    isUnlocked: true
  },
  {
    id: 2,
    title: "What is Bitcoin?",
    description: "High-level conceptual understanding of Bitcoin's core properties",
    icon: Coins,
    difficulty: "Beginner",
    lessons: 6,
    duration: "1.5 hours",
    topics: [
      "Bitcoin's Core Properties",
      "Peer-to-Peer Networks",
      "Digital Scarcity",
      "Permissionless System",
      "Financial Sovereignty",
      "Censorship Resistance"
    ],
    isUnlocked: true
  },
  {
    id: 3,
    title: "Using Bitcoin",
    description: "Practical skills for safely storing and transacting with Bitcoin",
    icon: Shield,
    difficulty: "Beginner",
    lessons: 10,
    duration: "3 hours",
    topics: [
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
    isUnlocked: false
  },
  {
    id: 4,
    title: "Bitcoin Network & Protocol",
    description: "Understanding how Bitcoin works as a decentralized network",
    icon: Globe,
    difficulty: "Intermediate",
    lessons: 12,
    duration: "4 hours",
    topics: [
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
    isUnlocked: false
  },
  {
    id: 5,
    title: "Advanced Technical Concepts",
    description: "Deep dive into Bitcoin's cryptographic and technical foundations",
    icon: Server,
    difficulty: "Advanced",
    lessons: 15,
    duration: "6 hours",
    topics: [
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
    isUnlocked: false
  },
  {
    id: 6,
    title: "Bitcoin Development",
    description: "Contributing to Bitcoin's open-source ecosystem",
    icon: Key,
    difficulty: "Expert",
    lessons: 20,
    duration: "10 hours",
    topics: [
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
    ],
    isUnlocked: false
  }
];

const stats = [
  { label: "Deep Understanding", value: "First Principles", icon: BookOpen },
  { label: "Practical Skills", value: "Real-World Ready", icon: Zap },
  { label: "Financial Sovereignty", value: "Self-Custody", icon: Shield },
  { label: "Informed Decisions", value: "Sound Money", icon: TrendingUp }
];

export default function Home() {
  const scrollToCurriculum = () => {
    document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image 
                src="/clarion_chain_logo.png" 
                alt="ClarionEDU Logo" 
                width={32} 
                height={32}
                className="h-8 w-8"
              />
              <h1 className="text-2xl font-bold">ClarionEDU</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="#curriculum" className="text-gray-300 hover:text-white transition-colors">
                Curriculum
              </a>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/progress">
                <Button variant="outline" size="sm">
                  View Progress
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Learn Bitcoin
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              The world's most comprehensive Bitcoin education platform. 
              Learn from first principles: understand the problem, master the solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/learn/section-1/lesson-1">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-3" onClick={scrollToCurriculum}>
                View Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Progressive Learning Path</h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our curriculum is designed to take you from Bitcoin curious to Bitcoin expert. 
              Each section builds upon the previous, ensuring deep understanding at every level.
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {curriculumSections.map((section, index) => (
              <Card key={section.id} className={`bg-gray-900/50 border-gray-700 ${!section.isUnlocked ? 'opacity-60' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${section.isUnlocked ? 'bg-orange-600' : 'bg-gray-700'}`}>
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <CardTitle className="text-xl">{section.title}</CardTitle>
                          {!section.isUnlocked && <Lock className="h-4 w-4 text-gray-500" />}
                        </div>
                        <CardDescription className="text-gray-400">
                          {section.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={section.difficulty === 'Beginner' ? 'default' : 
                                   section.difficulty === 'Intermediate' ? 'secondary' : 
                                   section.difficulty === 'Advanced' ? 'destructive' : 'outline'}>
                      {section.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                    <span>{section.lessons} lessons</span>
                    <span>{section.duration}</span>
                    {section.isUnlocked && <Progress value={section.id === 1 ? 60 : section.id === 2 ? 30 : 0} className="w-24" />}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    {section.topics.slice(0, 6).map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                    {section.topics.length > 6 && (
                      <div className="text-gray-500 text-xs">
                        +{section.topics.length - 6} more topics
                      </div>
                    )}
                  </div>
                  {section.isUnlocked && (
                    <Link href={
                      section.id === 1 ? '/learn/section-1/lesson-1' : 
                      section.id === 2 ? '/learn/section-2/lesson-1' : 
                      '#'
                    }>
                      <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                        {section.id === 1 ? 'Continue Learning' : 'Start Section'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Image 
              src="/clarion_chain_logo.png" 
              alt="ClarionEDU Logo" 
              width={24} 
              height={24}
              className="h-6 w-6"
            />
            <span className="text-xl font-bold">ClarionEDU</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering the next generation of Bitcoin advocates through world-class education.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/progress" className="hover:text-white transition-colors">Progress</Link>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
