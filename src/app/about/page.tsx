import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, 
  Users, 
  Globe, 
  Shield, 
  Target, 
  Zap,
  Heart,

  Lightbulb,
  Star
} from "lucide-react";



const principles = [
  {
    title: "First Principles Thinking",
    description: "We start with fundamental questions: What is money? Why does it exist? This foundation makes everything else clear.",
    icon: Lightbulb
  },
  {
    title: "Progressive Complexity",
    description: "Each lesson builds upon the previous. No concept is introduced without proper context and preparation.",
    icon: Target
  },
  {
    title: "Practical Application",
    description: "Theory without practice is incomplete. Every concept comes with real-world applications and exercises.",
    icon: Zap
  },
  {
    title: "Open Source Philosophy",
    description: "Knowledge should be free and accessible. Our content embraces Bitcoin's open-source ethos.",
    icon: Globe
  }
];

const stats = [
  { label: "Students Educated", value: "50,000+", icon: Users },
  { label: "Countries Reached", value: "120+", icon: Globe },
  { label: "Languages Available", value: "12", icon: BookOpen },
  { label: "Success Rate", value: "94%", icon: Star }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/clarion_chain_logo.png" 
                alt="ClarionEDU Logo" 
                width={32} 
                height={32}
                className="h-8 w-8"
              />
              <h1 className="text-2xl font-bold">ClarionEDU</h1>
            </Link>
            <Link href="/">
              <Button variant="outline">Back to Course</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              About ClarionEDU
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We believe Bitcoin education should be accessible, comprehensive, and built on solid foundations. 
              Our mission is to create the world's best Bitcoin learning experience.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border-orange-700 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Heart className="h-8 w-8 text-orange-500" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                To empower individuals worldwide with deep, practical Bitcoin knowledge that enables them to understand, 
                use, and contribute to the Bitcoin ecosystem with confidence and sovereignty.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                We start with the fundamental problem Bitcoin solves—the debasement of fiat currency and the need for 
                hard money—then progressively build understanding through practical application to advanced technical concepts.
              </p>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Educational Principles */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Our Educational Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <principle.icon className="h-6 w-6 text-orange-500" />
                      <span>{principle.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>



          {/* Why Bitcoin Education Matters */}
          <Card className="bg-gray-900/50 border-gray-700 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Shield className="h-8 w-8 text-orange-500" />
                <span>Why Bitcoin Education Matters</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Financial Sovereignty:</strong> Understanding Bitcoin enables true financial self-custody 
                and independence from failing monetary systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Economic Understanding:</strong> Bitcoin education reveals the problems with fiat currency 
                and provides tools for economic reasoning.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Technical Literacy:</strong> As Bitcoin becomes more important, technical understanding 
                becomes a crucial life skill.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Global Impact:</strong> Educated Bitcoiners can help others achieve financial freedom 
                and economic sovereignty.
              </p>
            </CardContent>
          </Card>


        </div>
      </div>
    </div>
  );
} 