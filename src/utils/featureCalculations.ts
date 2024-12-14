import { CREDIT_RATES } from '../constants/creditRates';

export function calculateFeatureCredits(
  featureId: string,
  inputs: Record<string, number>
): number {
  switch (featureId) {
    case 'survey-generation':
      return calculateSurveyCredits(inputs.questionCount);
    case 'standard-report':
      return calculateStandardReportCredits(inputs.sectionCount, inputs.imageCount);
    case 'dynamic-report':
      return calculateDynamicReportCredits(inputs.reportCount);
    case 'quiz-evaluation':
      return calculateQuizEvaluationCredits(inputs.questionCount);
    default:
      return 0;
  }
}

function calculateSurveyCredits(questionCount: number): number {
  const { MAX_QUESTIONS_PER_GENERATION, CREDITS_PER_GENERATION } = CREDIT_RATES.SURVEY;
  // Calculate how many generations are needed based on max questions per generation
  return Math.ceil((questionCount || 1) / MAX_QUESTIONS_PER_GENERATION) * CREDITS_PER_GENERATION;
}

function calculateStandardReportCredits(sectionCount: number, imageCount: number): number {
  const { TEXT_GENERATION, IMAGE_GENERATION } = CREDIT_RATES.REPORT;
  return ((sectionCount || 1) * TEXT_GENERATION) + ((imageCount || 0) * IMAGE_GENERATION);
}

function calculateDynamicReportCredits(reportCount: number): number {
  const { TEXT_GENERATION, IMAGE_GENERATION } = CREDIT_RATES.REPORT;
  // 1 text generation (5 credits) + 3 images (5 credits each) per report
  return (reportCount || 1) * (TEXT_GENERATION + (3 * IMAGE_GENERATION));
}

function calculateQuizEvaluationCredits(questionCount: number): number {
  const { TEXT_EVALUATION } = CREDIT_RATES.QUIZ;
  return (questionCount || 1) * TEXT_EVALUATION;
}