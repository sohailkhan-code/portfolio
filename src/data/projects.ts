import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    tagline: "Real-time fraud scoring on transaction streams",
    description:
      "An end-to-end machine learning pipeline that flags fraudulent credit card transactions from highly imbalanced data. Includes exploratory analysis, feature engineering, model comparison across multiple classifiers, and a Flask API serving live predictions to an interactive dashboard.",
    techStack: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Flask", "NumPy"],
    highlights: ["99.96% accuracy", "Random Forest classifier", "Flask REST API", "Interactive dashboard"],
    github: "https://github.com/sohailkhan-code/CreditCardFraudDetection",
    image: "fraud",
    category: "ML",
  },
  {
    id: "fake-news-detection",
    title: "Fake News Detection",
    tagline: "NLP pipeline separating signal from misinformation",
    description:
      "A pipes-and-filters architecture that classifies news articles as real or fake using TF-IDF vectorization and Logistic Regression, wrapped in a Flask prediction interface. Built as a research-backed project with emphasis on reproducible preprocessing and model evaluation.",
    techStack: ["Python", "NLP", "TF-IDF", "Scikit-learn", "Flask"],
    highlights: ["TF-IDF vectorization", "Logistic Regression", "Flask prediction UI", "Pipes-and-filters architecture"],
    github: "https://github.com/sohailkhan-code/fake-news-detection",
    image: "fakenews",
    category: "NLP",
  },
];
