import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Lightbulb,
  Target,
  HelpCircle
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Lesson, Section } from "@/lib/content/curriculum";

interface LessonLayoutProps {
  section: Section;
  lesson: Lesson;
  lessonNumber: number;
  totalLessons: number;
  sectionProgress: number;
}

export default function LessonLayout({ 
  section, 
  lesson, 
  lessonNumber, 
  totalLessons, 
  sectionProgress 
}: LessonLayoutProps) {
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);

  const handleQuizSubmit = () => {
    setShowResults(true);
    // Here you would typically save progress to your backend
  };

  const markLessonComplete = () => {
    setLessonCompleted(true);
    // Here you would save lesson completion to your backend
  };

  const nextLessonUrl = lessonNumber < totalLessons 
    ? `/learn/section-${section.id}/lesson-${lessonNumber + 1}`
    : section.id < 6 
    ? `/learn/section-${section.id + 1}/lesson-1`
    : '/progress';

  const prevLessonUrl = lessonNumber > 1 
    ? `/learn/section-${section.id}/lesson-${lessonNumber - 1}`
    : section.id > 1 
    ? `/learn/section-${section.id - 1}`
    : '/';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Progress */}
      <header className="border-b border-white/10 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Course</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">{section.difficulty}</Badge>
              <div className="text-sm text-gray-400">
                Lesson {lessonNumber} of {totalLessons}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-bold">{section.title}</h1>
              <div className="text-sm text-gray-400">{sectionProgress}% Complete</div>
            </div>
            <Progress value={sectionProgress} className="h-2" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Lesson Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <BookOpen className="h-8 w-8 text-orange-500" />
              <div>
                <h2 className="text-3xl font-bold">{lesson.title}</h2>
                <div className="flex items-center space-x-4 text-gray-400 mt-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{lesson.duration}</span>
                  </div>
                  {lessonCompleted && (
                    <div className="flex items-center space-x-2 text-green-500">
                      <CheckCircle className="h-4 w-4" />
                      <span>Completed</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <Card className="bg-gray-900/50 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-orange-500" />
                <span>Introduction</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed text-lg">
                {lesson.content.introduction}
              </p>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Card className="bg-gray-900/50 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle>Main Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {lesson.content.mainContent.map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="bg-gray-900/50 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                <span>Key Takeaways</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {lesson.content.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Practical Exercise */}
          {lesson.content.practicalExercise && (
            <Card className="bg-blue-900/20 border-blue-700 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  <span>Practical Exercise</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {lesson.content.practicalExercise}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Quiz Section */}
          {lesson.quiz && (
            <Card className="bg-gray-900/50 border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-purple-500" />
                  <span>Knowledge Check</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {lesson.quiz.map((question, qIndex) => (
                  <div key={qIndex} className="space-y-4">
                    <h4 className="font-semibold text-lg">{question.question}</h4>
                    <RadioGroup
                      value={quizAnswers[qIndex]?.toString()}
                      onValueChange={(value) => 
                        setQuizAnswers(prev => ({ ...prev, [qIndex]: parseInt(value) }))
                      }
                    >
                      {question.options.map((option, oIndex) => (
                        <div key={oIndex} className="flex items-center space-x-2">
                          <RadioGroupItem value={oIndex.toString()} id={`q${qIndex}-${oIndex}`} />
                          <Label 
                            htmlFor={`q${qIndex}-${oIndex}`} 
                            className="text-gray-300 cursor-pointer"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    
                    {showResults && (
                      <Alert className={
                        quizAnswers[qIndex] === question.correctAnswer 
                          ? "border-green-600 bg-green-900/20" 
                          : "border-red-600 bg-red-900/20"
                      }>
                        <AlertDescription>
                          {quizAnswers[qIndex] === question.correctAnswer ? (
                            <div className="text-green-400">
                              ✓ Correct! {question.explanation}
                            </div>
                          ) : (
                            <div className="text-red-400">
                              ✗ Incorrect. {question.explanation}
                            </div>
                          )}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                ))}
                
                {!showResults && (
                  <Button 
                    onClick={handleQuizSubmit}
                    className="bg-purple-600 hover:bg-purple-700"
                    disabled={Object.keys(quizAnswers).length < lesson.quiz.length}
                  >
                    Submit Quiz
                  </Button>
                )}
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Link href={prevLessonUrl}>
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>
            </Link>

            <div className="flex items-center space-x-4">
              {!lessonCompleted && (
                <Button 
                  onClick={markLessonComplete}
                  variant="outline"
                  className="text-green-400 border-green-400 hover:bg-green-400 hover:text-black"
                >
                  Mark as Complete
                </Button>
              )}
              
              <Link href={nextLessonUrl}>
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 flex items-center space-x-2"
                  disabled={!lessonCompleted && lesson.quiz && !showResults}
                >
                  <span>Next Lesson</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 