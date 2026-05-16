import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IA Know',
  description: 'Base de conhecimento sobre IA, LLM, Agentes e Ferramentas de Desenvolvimento',
  lang: 'pt-BR',

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Resumo', link: '/resumo' },
      { text: 'Glossário', link: '/glossario' }
    ],

    sidebar: [
      {
        text: 'Introdução',
        items: [
          { text: 'Resumo Executivo', link: '/resumo' },
          { text: 'Glossário', link: '/glossario' }
        ]
      },
      {
        text: 'Large Language Models (LLM)',
        items: [
          { text: 'O que são LLMs', link: '/llm/introducao' },
          { text: 'GPT e OpenAI', link: '/llm/gpt-openai' },
          { text: 'Claude (Anthropic)', link: '/llm/claude' },
          { text: 'Outros Modelos', link: '/llm/outros-modelos' }
        ]
      },
      {
        text: 'Ferramentas de Desenvolvimento com IA',
        items: [
          { text: 'GitHub Copilot', link: '/ferramentas/github-copilot' },
          { text: 'Claude Code', link: '/ferramentas/claude-code' },
          { text: 'OpenAI Codex', link: '/ferramentas/codex' },
          { text: 'Cursor IDE', link: '/ferramentas/cursor' },
          { text: 'Outras Ferramentas', link: '/ferramentas/outras' }
        ]
      },
      {
        text: 'Agentes de IA',
        items: [
          { text: 'Conceitos de Agentes', link: '/agentes/conceitos' },
          { text: 'Agentes Autônomos', link: '/agentes/autonomos' },
          { text: 'Multi-Agent Systems', link: '/agentes/multi-agent' },
          { text: 'Frameworks de Agentes', link: '/agentes/frameworks' }
        ]
      },
      {
        text: 'AGI e Futuro',
        items: [
          { text: 'O que é AGI', link: '/agi/introducao' },
          { text: 'Estado Atual', link: '/agi/estado-atual' },
          { text: 'Desafios e Perspectivas', link: '/agi/desafios' }
        ]
      },
      {
        text: 'Boas Práticas',
        items: [
          { text: 'Prompt Engineering', link: '/praticas/prompt-engineering' },
          { text: 'Segurança', link: '/praticas/seguranca' },
          { text: 'Ética e Responsabilidade', link: '/praticas/etica' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/juninmd/ia-know' }
    ],

    footer: {
      message: 'Lançado sob a Licença MIT',
      copyright: 'Copyright © 2024-presente'
    },

    search: {
      provider: 'local'
    }
  }
})
