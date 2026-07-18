/**
 * Home "Meet your ducks" data.
 *
 * The eight autos are the automatable workflows the setup wizard and config
 * editor expose (product, architect, engineer, waves, reviewer, rework,
 * resolver, checks). Each duck is one workflow with two modes: a
 * default/event-driven `primary` and an alternate/manual `secondary`. Keep
 * labels and slash commands in sync with the configuration reference.
 */

export interface DuckMode {
  /** Bold lead-in, e.g. "Auto", "Manual", "Waves", "Sequential", "Loop". */
  term: string;
  /** One-line description of the mode. Omit for command-only manual modes. */
  desc?: string;
  /** Slash commands (WITHOUT the leading slash) rendered as chips. */
  commands?: string[];
}

export interface Duck {
  /** Workflow label, e.g. "Auto Spec". */
  label: string;
  /** Role/persona tag, e.g. "Architect". */
  role: string;
  /** Link into the relevant docs page. */
  href: string;
  /** Starlight built-in icon name. */
  icon: string;
  /** Accent color (hex) driving the card's `--duck-accent`. */
  accent: string;
  /** Default / event-driven behavior. */
  primary: DuckMode;
  /** Alternate / manual behavior. */
  secondary: DuckMode;
}

export const DUCKS: Duck[] = [
  {
    label: 'Groom',
    role: 'Product Owner',
    href: '/agents/product',
    icon: 'list-format',
    accent: '#768390',
    primary: {
      term: 'Auto',
      desc: 'Grooms your backlog on a schedule.',
    },
    secondary: { term: 'Manual', commands: ['triage'] },
  },
  {
    label: 'Design & Spec',
    role: 'Architect',
    href: '/agents/architect',
    icon: 'pencil',
    accent: '#a836e5',
    primary: {
      term: 'Auto',
      desc: 'Converts drafts into <strong>full specifications</strong> or revises existing ones.',
    },
    secondary: { term: 'Manual', commands: ['design', 'architect'] },
  },
  {
    label: 'Tactical Plan',
    role: 'Engineer',
    href: '/agents/engineer',
    icon: 'puzzle',
    accent: '#e55398',
    primary: {
      term: 'Auto',
      desc: 'Creates a <strong>subtask implementation plan</strong> for a specification.',
    },
    secondary: { term: 'Manual', commands: ['tactics', 'engineer'] },
  },
  {
    label: 'Orchestration Modes',
    role: 'Maestro',
    href: '/agents/maestro',
    icon: 'rocket',
    accent: '#28a745',
    primary: {
      term: 'Waves',
      desc: "<strong>Parallelize</strong> subtask execution based on the tactical plan's work <strong>waves</strong>.",
    },
    secondary: {
      term: 'Sequential',
      desc: 'Execute subtasks in the order they are defined in the tactical plan, <strong>over the same codebase</strong>/branch.',
    },
  },
  {
    label: 'Backpressured Loops',
    role: 'Developer',
    href: '/agents/developer#verification-loop',
    icon: 'approve-check',
    accent: '#1f6feb',
    primary: {
      term: 'Loop',
      desc: 'Each subtask is executed <strong>until it passes</strong> all checks (a backpressured Ralph loop).',
    },
    secondary: {
      term: 'Without loop',
      desc: 'Subtasks are <strong>automatically merged</strong> into the feature once they are executed.',
    },
  },
  {
    label: 'Conflict Resolution',
    role: 'Resolver',
    href: '/guides/when-things-fail#merge-conflicts',
    icon: 'random',
    accent: '#d29922',
    primary: { term: 'Auto', desc: 'Resolves conflicts in Pull Requests as they appear.' },
    secondary: { term: 'Manual', commands: ['resolve'] },
  },
  {
    label: 'Auto Review',
    role: 'Reviewer',
    href: '/agents/reviewer',
    icon: 'comment',
    accent: '#1b7c83',
    primary: {
      term: 'Auto',
      desc: 'Reviews PRs when they are moved from Draft to <strong>Ready for Review</strong>.',
    },
    secondary: { term: 'Manual', commands: ['review'] },
  },
  {
    label: 'Rework Loops',
    role: 'Reworker',
    href: '/agents/utilities#rework',
    icon: 'right-arrow',
    accent: '#d62828',
    primary: {
      term: 'Auto',
      desc: "Adjusts the code to meet a PR reviewer's comments, wrapped in a <strong>review-rework loop</strong> until an approval is received.",
    },
    secondary: { term: 'Manual', commands: ['rework'] },
  },
];

export type PluginStatus = 'available' | 'soon';

export interface Plugin {
  name: string;
  icon: string;
  accent: string;
  status: PluginStatus;
  href?: string;
}

export const PLUGINS: Plugin[] = [
  {
    name: 'Playwright',
    icon: 'laptop',
    accent: '#28a745',
    status: 'available',
    href: '/guides/plugins#reference-plugin',
  },
  {
    name: 'RTK',
    icon: 'rocket',
    accent: '#d29922',
    status: 'soon',
  },
  {
    name: 'Agentistics',
    icon: 'random',
    accent: '#a836e5',
    status: 'soon',
  },
  {
    name: 'Custom plugins',
    icon: 'puzzle',
    accent: '#1f6feb',
    status: 'available',
    href: '/guides/plugins',
  },
];
