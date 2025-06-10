import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { 
  Trophy, 
  Clock, 
  BookOpen, 
  Target, 
  CheckCircle, 
  Star,
  TrendingUp,
  Award,
  Calendar
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Completed your first lesson",
    icon: Trophy,
    earned: true,
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Money Master",
    description: "Completed 'What is Money?' section",
    icon: Star,
    earned: true,
    date: "2024-01-16"
  },
  {
    id: 3,
    title: "Quiz Champion",
    description: "Scored 100% on 5 quizzes",
    icon: Award,
    earned: false,
    date: null
  },
  {
    id: 4,
    title: "Consistency King",
    description: "Studied for 7 days straight",
    icon: Calendar,
    earned: false,
    date: null
  }
];

const sectionProgress = [
  {
    id: 1,
            title: "The Fiat Problem & Hard Money Solution",
    completed: 3,
    total: 8,
    percentage: 37.5,
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "What is Bitcoin?",
    completed: 0,
    total: 6,
    percentage: 0,
    difficulty: "Beginner"
  },
  {
    id: 3,
    title: "Using Bitcoin",
    completed: 0,
    total: 10,
    percentage: 0,
    difficulty: "Beginner"
  },
  {
    id: 4,
    title: "Bitcoin Network & Protocol",
    completed: 0,
    total: 12,
    percentage: 0,
    difficulty: "Intermediate"
  },
  {
    id: 5,
    title: "Advanced Technical Concepts",
    completed: 0,
    total: 15,
    percentage: 0,
    difficulty: "Advanced"
  },
  {
    id: 6,
    title: "Bitcoin Development",
    completed: 0,
    total: 20,
    percentage: 0,
    difficulty: "Expert"
  }
];

export default function ProgressPage() {
  const totalLessons = sectionProgress.reduce((sum, section) => sum + section.total, 0);
  const completedLessons = sectionProgress.reduce((sum, section) => sum + section.completed, 0);
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

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
          {/* Page Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Learning Progress</h2>
            <p className="text-xl text-gray-400">
              Track your journey to Bitcoin mastery
            </p>
          </div>

          {/* Overall Progress */}
          <Card className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 border-orange-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <TrendingUp className="h-8 w-8 text-orange-500" />
                <span>Overall Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    {overallProgress}%
                  </div>
                  <Progress value={overallProgress} className="h-3 mb-2" />
                  <p className="text-gray-400">Course Completion</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {completedLessons}/{totalLessons}
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-400">
                    <BookOpen className="h-4 w-4" />
                    <span>Lessons Completed</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {achievements.filter(a => a.earned).length}
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-400">
                    <Trophy className="h-4 w-4" />
                    <span>Achievements Earned</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Section Progress */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Target className="h-6 w-6 text-orange-500" />
                <span>Section Progress</span>
              </h3>
              <div className="space-y-4">
                {sectionProgress.map((section) => (
                  <Card key={section.id} className="bg-gray-900/50 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{section.title}</h4>
                        <Badge variant={
                          section.difficulty === 'Beginner' ? 'default' :
                          section.difficulty === 'Intermediate' ? 'secondary' :
                          section.difficulty === 'Advanced' ? 'destructive' : 'outline'
                        }>
                          {section.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">
                          {section.completed} of {section.total} lessons
                        </span>
                        <span className="text-sm font-semibold">
                          {Math.round(section.percentage)}%
                        </span>
                      </div>
                      <Progress value={section.percentage} className="h-2" />
                      {section.completed > 0 && (
                        <Link href={`/learn/section-${section.id}/lesson-${section.completed + 1}`}>
                          <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                            Continue Learning
                          </Button>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-orange-500" />
                <span>Achievements</span>
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <Card 
                    key={achievement.id} 
                    className={`border-gray-700 ${
                      achievement.earned 
                        ? 'bg-green-900/20 border-green-700' 
                        : 'bg-gray-900/50 opacity-60'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${
                          achievement.earned ? 'bg-green-600' : 'bg-gray-700'
                        }`}>
                          <achievement.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold flex items-center space-x-2">
                            <span>{achievement.title}</span>
                            {achievement.earned && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {achievement.description}
                          </p>
                          {achievement.earned && achievement.date && (
                            <p className="text-green-400 text-xs mt-1">
                              Earned on {new Date(achievement.date).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Study Stats */}
          <Card className="bg-gray-900/50 border-gray-700 mt-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-orange-500" />
                <span>Study Statistics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">2h 45m</div>
                  <p className="text-gray-400">Total Study Time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">7</div>
                  <p className="text-gray-400">Day Streak</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
                  <p className="text-gray-400">Average Quiz Score</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                  <p className="text-gray-400">Sections Unlocked</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 