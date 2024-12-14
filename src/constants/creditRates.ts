// Define credit costs for different features
export const CREDIT_RATES = {
  SURVEY: {
    MAX_QUESTIONS_PER_GENERATION: 10, // Maximum questions per generation
    CREDITS_PER_GENERATION: 5  // 5 credits per generation of up to 10 questions
  },
  REPORT: {
    TEXT_GENERATION: 5,
    IMAGE_GENERATION: 5,
    STANDARD_SECTION: 2
  },
  QUIZ: {
    TEXT_EVALUATION: 2
  }
} as const;