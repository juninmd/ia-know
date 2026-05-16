# IA Know 🤖

> Base de conhecimento completa sobre IA, LLM, Agentes e ferramentas de desenvolvimento com Inteligência Artificial

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Documentation](https://img.shields.io/badge/docs-vitepress-green.svg)](https://vitepress.dev/)

## 📚 Sobre

**IA Know** é uma base de conhecimento centralizada e em constante evolução para desenvolvedores que desejam entender e utilizar:

- **🧠 Large Language Models (LLMs)**: GPT, Claude, Gemini, LLaMA, Mistral
- **🤖 Agentes de IA**: Sistemas autônomos, multi-agent systems, frameworks
- **🛠️ Ferramentas de Desenvolvimento**: GitHub Copilot, Claude Code, Cursor, Codex
- **🎯 AGI**: Conceitos de Inteligência Artificial Geral
- **✨ Boas Práticas**: Prompt engineering, segurança, ética

## 🚀 Acesso Rápido

### Documentação Online
A documentação completa está disponível em formato VitePress:

```bash
# Instalar dependências
npm install

# Rodar localmente
npm run docs:dev

# Build para produção
npm run docs:build
```

Acesse: `http://localhost:5173`

### Principais Seções

- **[Resumo Executivo](docs/resumo.md)**: Visão geral de todos os tópicos
- **[Glossário Completo](docs/glossario.md)**: Dicionário de termos técnicos de A-Z
- **[Large Language Models](docs/llm/introducao.md)**: Entenda GPT, Claude, Gemini e outros
- **[Ferramentas de Desenvolvimento](docs/ferramentas/github-copilot.md)**: Copilot, Claude Code, Cursor
- **[Agentes de IA](docs/agentes/conceitos.md)**: Construa sistemas autônomos
- **[AGI](docs/agi/introducao.md)**: O futuro da Inteligência Artificial
- **[Boas Práticas](docs/praticas/prompt-engineering.md)**: Prompt engineering e muito mais

## 📖 Conteúdo

### 1. Large Language Models (LLM)

Aprenda sobre os modelos que estão revolucionando a tecnologia:

- **GPT-4 Turbo** (OpenAI): Modelo multimodal de última geração
- **Claude 3.5 Sonnet** (Anthropic): Focado em segurança e coding
- **Gemini 1.5** (Google): Contexto de até 1M tokens
- **LLaMA 3** (Meta): Open-source e customizável
- **Mistral**: Modelos europeus de alta performance

### 2. Ferramentas de Desenvolvimento

Aumente sua produtividade com IA:

#### GitHub Copilot
- Autocompletar código inteligente
- Chat integrado no editor
- Suporta 100+ linguagens

#### Claude Code
- CLI para desenvolvimento
- Edição multi-arquivo
- Refatoração em escala

#### Cursor
- IDE completa com IA
- Composer mode
- Chat contextual

#### Outras Ferramentas
- OpenAI Codex
- Amazon CodeWhisperer
- Tabnine, Codeium, Replit Ghostwriter

### 3. Agentes de IA

Sistemas autônomos que executam tarefas complexas:

- **Conceitos**: Arquitetura, planejamento, memória, ferramentas
- **Frameworks**: LangChain, CrewAI, AutoGen, LlamaIndex
- **Agentes Autônomos**: AutoGPT, BabyAGI, MetaGPT
- **Multi-Agent Systems**: Colaboração entre agentes

### 4. AGI - Inteligência Artificial Geral

O futuro da IA:

- O que é AGI e por que importa
- Estado atual da pesquisa
- Desafios técnicos e éticos
- Implicações para sociedade

### 5. Boas Práticas

Use IA de forma eficiente e responsável:

- **Prompt Engineering**: Técnicas avançadas (CoT, Few-shot, etc)
- **Segurança**: Prompt injection, validação, privacidade
- **Ética**: Vieses, transparência, impacto social

## 🆕 Novidades (2024-2026)

### Modelos Recentes
- **GPT-4 Turbo**: 128k contexto, mais rápido e barato
- **Claude 3.5 Sonnet**: Melhor em coding e análise
- **Gemini 1.5 Pro**: Até 1M tokens de contexto
- **Llama 3**: Nova geração open-source

### Ferramentas
- **Claude Code**: Nova CLI da Anthropic
- **Cursor Composer**: Multi-file editing
- **GitHub Copilot Workspace**: IDE completa
- **Devin AI**: "Engenheiro de software autônomo"

### Conceitos
- **RAG** (Retrieval Augmented Generation)
- **Fine-tuning eficiente**: LoRA, QLoRA
- **Mixture of Experts** (MoE)
- **Multimodalidade**: Texto + Imagem + Áudio + Vídeo

## 🎯 Para Quem é Este Repositório?

- **Desenvolvedores** que querem usar IA no dia a dia
- **Engenheiros de ML** explorando LLMs e agentes
- **Tech Leads** avaliando ferramentas de IA
- **Estudantes** aprendendo sobre IA moderna
- **Entusiastas** acompanhando evolução da área

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Este projeto está em constante evolução.

### Como você pode ajudar:

1. **Adicione novos conteúdos**
   - Novos modelos lançados
   - Ferramentas emergentes
   - Técnicas e padrões

2. **Atualize informações existentes**
   - Versões de modelos
   - Preços e features
   - Links quebrados

3. **Melhore a documentação**
   - Corrija erros
   - Adicione exemplos
   - Melhore explicações

4. **Compartilhe casos de uso**
   - Exemplos práticos
   - Tutoriais
   - Lições aprendidas

### Processo:

```bash
# Fork o repositório
git clone https://github.com/juninmd/ia-know.git

# Crie um branch
git checkout -b feature/novo-conteudo

# Faça suas alterações
# Edite arquivos em /docs

# Commit e push
git add .
git commit -m "Adiciona conteúdo sobre [tópico]"
git push origin feature/novo-conteudo

# Abra um Pull Request
```

## 📋 Estrutura do Projeto

```
ia-know/
├── docs/
│   ├── .vitepress/
│   │   └── config.js          # Configuração VitePress
│   ├── index.md               # Página inicial
│   ├── resumo.md              # Resumo executivo
│   ├── glossario.md           # Glossário A-Z
│   ├── llm/                   # Large Language Models
│   │   ├── introducao.md
│   │   ├── gpt-openai.md
│   │   ├── claude.md
│   │   └── outros-modelos.md
│   ├── ferramentas/           # Ferramentas de desenvolvimento
│   │   ├── github-copilot.md
│   │   ├── claude-code.md
│   │   ├── cursor.md
│   │   └── outras.md
│   ├── agentes/               # Agentes de IA
│   │   ├── conceitos.md
│   │   ├── autonomos.md
│   │   ├── multi-agent.md
│   │   └── frameworks.md
│   ├── agi/                   # AGI
│   │   ├── introducao.md
│   │   ├── estado-atual.md
│   │   └── desafios.md
│   └── praticas/              # Boas práticas
│       ├── prompt-engineering.md
│       ├── seguranca.md
│       └── etica.md
├── package.json
├── .gitignore
└── README.md
```

## 🔗 Links Úteis

### Empresas e Modelos
- [OpenAI](https://openai.com/) - GPT-4, ChatGPT, DALL-E
- [Anthropic](https://anthropic.com/) - Claude
- [Google AI](https://ai.google/) - Gemini, PaLM
- [Meta AI](https://ai.meta.com/) - LLaMA
- [Mistral AI](https://mistral.ai/) - Mistral Models

### Ferramentas
- [GitHub Copilot](https://github.com/features/copilot)
- [Cursor](https://cursor.sh/)
- [Replit](https://replit.com/)

### Frameworks
- [LangChain](https://python.langchain.com/)
- [LlamaIndex](https://www.llamaindex.ai/)
- [CrewAI](https://www.crewai.io/)
- [AutoGen](https://microsoft.github.io/autogen/)

### Comunidades
- [HuggingFace](https://huggingface.co/)
- [r/MachineLearning](https://reddit.com/r/MachineLearning)
- [r/LocalLLaMA](https://reddit.com/r/LocalLLaMA)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👤 Autor

**juninmd**

- GitHub: [@juninmd](https://github.com/juninmd)

## ⭐ Star History

Se este repositório foi útil para você, considere dar uma ⭐!

---

**Última atualização**: Maio 2026

**Status**: 🟢 Ativo e em constante evolução