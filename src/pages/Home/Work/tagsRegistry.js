// Pastel-like palette (base hues). Kept as reference/colors for tags.
export const COLORS = {
  RED: '#ef4444',
  ORANGE: '#f59e0b',
  YELLOW: '#eab308',
  GREEN: '#22c55e',
  TEAL: '#14b8a6',
  BLUE: '#60a5fa',
  INDIGO: '#818cf8',
  PURPLE: '#a78bfa',
  PINK: '#f472b6',
  BROWN: '#a38b78',
  GRAY: '#9ca3af',
};

// Registry for well-known tags. Only hex color and label are stored.
export const TAGS = {
  react: { key: 'react', label: 'React', color: COLORS.BLUE },
  redux: { key: 'redux', label: 'Redux', color: COLORS.PURPLE },
  nextjs: { key: 'nextjs', label: 'Next.js', color: COLORS.INDIGO },
  typescript: { key: 'typescript', label: 'TypeScript', color: COLORS.BLUE },
  javascript: { key: 'javascript', label: 'JavaScript', color: COLORS.YELLOW },
  css: { key: 'css', label: 'CSS', color: COLORS.BLUE },
  html: { key: 'html', label: 'HTML', color: COLORS.ORANGE },
  python: { key: 'python', label: 'Python', color: COLORS.YELLOW },
  django: { key: 'django', label: 'Django', color: COLORS.GREEN },
  drf: { key: 'drf', label: 'Django REST Framework', color: COLORS.RED },
  electron: { key: 'electron', label: 'Electron', color: COLORS.BLUE },
  node: { key: 'node', label: 'Node.js', color: COLORS.GREEN },
  postgres: { key: 'postgres', label: 'Postgres', color: COLORS.TEAL },
  redis: { key: 'redis', label: 'Redis', color: COLORS.RED },
  tailwind: { key: 'tailwind', label: 'Tailwind', color: COLORS.TEAL },
  styled: { key: 'styled', label: 'Styled Components', color: COLORS.PINK },
  svelte: { key: 'svelte', label: 'Svelte', color: COLORS.ORANGE },
  linux: { key: 'linux', label: 'Linux', color: COLORS.GRAY },
  obs: { key: 'obs', label: 'OBS', color: COLORS.GRAY },
  matlab: { key: 'matlab', label: 'Matlab', color: COLORS.ORANGE },
  mqtt: { key: 'mqtt', label: 'MQTT', color: COLORS.PINK },
  rabbitmq: { key: 'rabbitmq', label: 'RabbitMQ', color: COLORS.ORANGE },
};

export const resolveTags = (keys = []) => keys
  .map(k => TAGS[k])
  .filter(Boolean);


