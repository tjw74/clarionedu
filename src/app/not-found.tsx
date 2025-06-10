import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Home, BookOpen, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
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
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-orange-500 mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-400 mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          {/* Helpful Options */}
          <Card className="bg-gray-900/50 border-gray-700 mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">What would you like to do?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 h-14">
                    <Home className="mr-2 h-5 w-5" />
                    Go Home
                  </Button>
                </Link>
                <Link href="/learn/section-1/lesson-1">
                  <Button variant="outline" className="w-full h-14">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Learning
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Popular Links */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Popular Pages:</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                → About ClarionEDU
              </Link>
              <Link href="/progress" className="block text-gray-400 hover:text-white transition-colors">
                → Your Progress
              </Link>
              <Link href="/learn/section-1/lesson-1" className="block text-gray-400 hover:text-white transition-colors">
                → What is Money?
              </Link>
              <Link href="/learn/section-2/lesson-1" className="block text-gray-400 hover:text-white transition-colors">
                → Bitcoin's Core Properties
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="text-gray-400 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 