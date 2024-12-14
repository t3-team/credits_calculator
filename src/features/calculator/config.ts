import { Feature } from '../../types/calculator';
import { CREDIT_RATES } from '../../constants/creditRates';

export const features: Feature[] = [
  {
    id: 'survey-generation',
    name: 'Survey/Quiz Questions Generation',
    description: `${CREDIT_RATES.SURVEY.CREDITS_PER_GENERATION} AI Credits per batch of up to ${CREDIT_RATES.SURVEY.MAX_QUESTIONS_PER_GENERATION} questions`,
    inputs: [
      {
        id: 'questionCount',
        label: 'Number of Questions',
        placeholder: 'Enter the number of questions (e.g., 10)',
        type: 'number',
        min: 1
      }
    ]
  },
  {
    id: 'standard-report',
    name: 'Standard Report Builder',
    description: `${CREDIT_RATES.REPORT.TEXT_GENERATION} Credits per Text Generation + ${CREDIT_RATES.REPORT.IMAGE_GENERATION} Credits per Image`,
    inputs: [
      {
        id: 'sectionCount',
        label: 'Number of Sections for Text Generation',
        placeholder: 'Enter the number of sections',
        type: 'number',
        min: 1
      },
      {
        id: 'imageCount',
        label: 'Number of Images to Generate',
        placeholder: 'Enter the number of images',
        type: 'number',
        min: 0
      }
    ]
  },
  {
    id: 'dynamic-report',
    name: 'Dynamic AI Report Generation',
    description: `${CREDIT_RATES.REPORT.TEXT_GENERATION + (3 * CREDIT_RATES.REPORT.IMAGE_GENERATION)} Credits per Report (${CREDIT_RATES.REPORT.TEXT_GENERATION} Credits for Text + 3 Images × ${CREDIT_RATES.REPORT.IMAGE_GENERATION} Credits)`,
    inputs: [],
    autoSetResponse: true
  },
  {
    id: 'quiz-evaluation',
    name: 'Quiz Answer Evaluation',
    description: `${CREDIT_RATES.QUIZ.TEXT_EVALUATION} Credits per Short-Text Question`,
    inputs: [
      {
        id: 'questionCount',
        label: 'Number of Short-Text Questions',
        placeholder: 'Enter the number of short-text questions',
        type: 'number',
        min: 1
      }
    ]
  }
];