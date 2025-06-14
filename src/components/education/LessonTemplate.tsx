'use client';

export const dynamic = 'force-dynamic';

import LessonLayout from "@/components/education/LessonLayout";
import { completeCurriculum } from "@/lib/content/curriculum-complete";

const getSection = (sectionId: number) => {
  return completeCurriculum.find(section => section.id === sectionId);
};

const getLesson = (sectionId: number, lessonId: number) => {
  const section = getSection(sectionId);
  return section?.lessons.find(lesson => lesson.id === lessonId);
};
import { defaultLessonContent } from "@/lib/content/default-lessons";

interface LessonTemplateProps {
  sectionId: number;
  lessonId: number;
}

export default function LessonTemplate({ sectionId, lessonId }: LessonTemplateProps) {
  const section = getSection(sectionId);
  let lesson = getLesson(sectionId, lessonId);
  
  // If lesson doesn't exist, create default content
  if (!lesson && section) {
    lesson = defaultLessonContent(sectionId, lessonId, section);
  }

  if (!section || !lesson) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <p className="text-gray-400">This lesson is coming soon!</p>
        </div>
      </div>
    );
  }

  const sectionProgress = Math.round((lessonId / section.lessons.length) * 100);

  return (
    <LessonLayout
      section={section}
      lesson={lesson}
      lessonNumber={lessonId}
      totalLessons={section.lessons.length}
      sectionProgress={sectionProgress}
    />
  );
} 