export { 
  completeCurriculum as curriculum,
  getSection,
  getLesson,
  type Lesson,
  type Section
} from './curriculum-complete';

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