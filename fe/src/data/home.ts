export const navItems = ['Solutions', 'Services', 'Products', 'About'];

export const trustBadges = [
  'Senior Dev Delivery',
  'Weekly Working Demos',
  'Documented Handover',
];

export const heroMetrics = [
  {
    label: 'Response',
    value: '24h',
    detail: 'Engineer Reply',
  },
  {
    label: 'Discovery',
    value: '30m',
    detail: 'Free fit assessment',
  },
  {
    label: 'Delivery',
    value: 'Weekly',
    detail: 'Live system reviews',
  },
  {
    label: 'Support',
    value: 'Post-launch',
    detail: 'Care after go-live',
  },
];

export type SolutionIcon =
  | 'infrastructure'
  | 'development'
  | 'automation'
  | 'llm'
  | 'cloud'
  | 'custom';

export const solutions = [
  {
    icon: 'infrastructure',
    title: 'AI Infrastructure',
    description:
      'Enterprise-grade AI systems engineered for automation, scalability, and intelligent operations.',
  },
  {
    icon: 'development',
    title: 'Modern Development',
    description:
      'Build high-performance platforms using React, Bun, and ElysiaJS with scalable architecture.',
  },
  {
    icon: 'automation',
    title: 'OCR & Automation',
    description:
      'Automate document processing, OCR pipelines, and enterprise data workflows.',
  },
  {
    icon: 'llm',
    title: 'LLM Integration',
    description:
      'Integrate OpenAI, Claude, Gemini, and local AI models into your organization workflows.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & On-Premise',
    description:
      'Deploy securely on cloud environments or private on-premise infrastructure.',
  },
  {
    icon: 'custom',
    title: 'Custom Solutions',
    description:
      'Tailored software experiences designed specifically for your business operation.',
  },
] satisfies Array<{
  icon: SolutionIcon;
  title: string;
  description: string;
}>;
