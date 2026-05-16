# Prompt Engineering

## Introdução

**Prompt Engineering** é a arte e ciência de criar prompts (instruções) eficazes para obter os melhores resultados de Large Language Models (LLMs).

## Princípios Básicos

### 1. Seja Específico e Claro

❌ **Ruim:**
```
Escreva sobre IA
```

✅ **Bom:**
```
Escreva um artigo de 500 palavras explicando como Large Language Models funcionam,
focando em arquitetura Transformer, para uma audiência técnica com conhecimento
básico de machine learning.
```

### 2. Forneça Contexto

❌ **Ruim:**
```
Como faço isso?
```

✅ **Bom:**
```
Estou desenvolvendo uma API REST em Node.js com Express. Como implemento
autenticação JWT com refresh tokens, incluindo middleware de proteção de rotas?
```

### 3. Especifique o Formato Desejado

```
Liste 5 vantagens de usar TypeScript sobre JavaScript.
Formato: Lista numerada com explicação de 1-2 frases por item.
```

### 4. Use Exemplos (Few-Shot Learning)

```
Converta nomes de variáveis para snake_case:

userName -> user_name
totalCount -> total_count
apiKey -> api_key

Agora converta: isAuthenticated
```

## Técnicas Avançadas

### Chain-of-Thought (CoT)

Peça ao modelo para "pensar em voz alta":

```
Resolva este problema passo a passo, explicando seu raciocínio:

Um trem sai da cidade A às 9h viajando a 80km/h em direção à cidade B.
Outro trem sai de B às 10h viajando a 100km/h em direção a A.
A distância entre as cidades é 540km.
Quando e onde os trens se encontram?
```

### Role Prompting

Defina um papel para o modelo:

```
Você é um arquiteto de software sênior especializado em microservices.
Revise esta arquitetura proposta e sugira melhorias considerando:
- Escalabilidade
- Resiliência
- Observabilidade
- Custos de infraestrutura
```

### System Prompts

Configure comportamento base:

```
System: Você é um assistente técnico especializado em Python.
Sempre forneça código limpo seguindo PEP 8, com type hints e docstrings.
Explique conceitos complexos com analogias simples.

User: Como implemento um decorator em Python?
```

### Zero-Shot vs Few-Shot vs Many-Shot

**Zero-Shot (sem exemplos):**
```
Classifique o sentimento: "Este produto é fantástico!"
```

**Few-Shot (poucos exemplos):**
```
Classifique o sentimento (Positivo/Negativo/Neutro):

"Adorei este filme!" -> Positivo
"Péssima experiência." -> Negativo
"O produto é ok." -> Neutro

"Este restaurante superou expectativas!"
```

**Many-Shot (muitos exemplos):**
Forneça 10+ exemplos para tarefas complexas.

### Tree of Thought

Explore múltiplos caminhos de raciocínio:

```
Problema: Como reduzir latência de uma API?

Explore 3 abordagens diferentes:
1. Otimização de database
2. Caching estratégico
3. Arquitetura assíncrona

Para cada abordagem:
- Liste prós e contras
- Estime complexidade de implementação
- Avalie impacto esperado

Então recomende a melhor opção com justificativa.
```

### ReAct (Reasoning + Acting)

Combine raciocínio com ações:

```
Tarefa: Encontre a temperatura atual em Tokyo e converta para Celsius.

Pense em voz alta sobre os passos necessários e execute-os.
```

## Templates Úteis

### Para Código

```
Linguagem: [Python/JavaScript/etc]
Tarefa: [Descrição clara]
Requisitos:
- [Requisito 1]
- [Requisito 2]
Considere: [Edge cases, performance, etc]
Formato de saída: [Código comentado/com testes/etc]
```

### Para Análise

```
Contexto: [Background information]
Dados: [Relevant data]
Pergunta: [Specific question]
Considere: [Factors to analyze]
Formato: [Bullet points/Structured report/etc]
```

### Para Criação de Conteúdo

```
Tópico: [Subject]
Audiência: [Target audience]
Tom: [Professional/Casual/Technical]
Extensão: [Word count]
Estrutura: [Intro/Body/Conclusion or specific sections]
Incluir: [Key points to cover]
Evitar: [What not to include]
```

## Boas Práticas

### ✅ Faça

1. **Itere e Refine**
   - Primeira versão raramente é perfeita
   - Ajuste baseado em resultados

2. **Delimite Escopo**
   ```
   Limite sua resposta a 3 parágrafos focando em [aspecto específico]
   ```

3. **Peça Validação**
   ```
   Antes de responder, confirme se entendeu corretamente pedindo clarificação
   ```

4. **Use Delimitadores**
   ```
   Analise o código entre ### e sugira melhorias:
   ###
   [código aqui]
   ###
   ```

5. **Especifique Constraints**
   ```
   Use apenas bibliotecas padrão do Python
   Mantenha funções com < 20 linhas
   Inclua tratamento de erros
   ```

### ❌ Evite

1. **Ambiguidade**
   - Seja específico sobre o que quer

2. **Prompts Muito Longos**
   - Foque no essencial
   - Use estruturação clara

3. **Assumir Conhecimento Implícito**
   - Forneça contexto necessário

4. **Ignorar Limitações**
   - LLMs têm knowledge cutoff
   - Podem alucinar

## Otimização por Modelo

### GPT-4
- Excelente com instruções complexas
- Bom com raciocínio multi-step
- Use temperature 0 para consistência

### Claude
- Ótimo para análise longa
- Prefere instruções estruturadas
- Forte em edição de código

### Gemini
- Bom com contexto muito longo
- Multimodal (texto + imagem)
- Integração com Google tools

## Parâmetros Importantes

### Temperature
- **0.0**: Determinístico, sempre mesma resposta
- **0.3-0.5**: Mais focado, pouca variação
- **0.7**: Balanceado (padrão)
- **1.0+**: Criativo, mais variado

### Max Tokens
Limite de resposta em tokens:
```
Responda em no máximo 100 palavras.
```

### Top-p (Nucleus Sampling)
- **0.1**: Muito focado
- **0.9**: Mais diverso

## Casos de Uso Específicos

### Debugging

```
Analise este código e identifique bugs:

[código]

Para cada bug encontrado:
1. Linha do problema
2. Descrição do bug
3. Solução proposta
4. Explicação do por quê funciona
```

### Code Review

```
Revise este pull request para:
- Problemas de segurança (SQL injection, XSS, etc)
- Performance issues
- Padrões de código
- Possíveis edge cases não tratados

Forneça feedback construtivo e específico.
```

### Refatoração

```
Refatore este código para:
- Melhorar legibilidade
- Aplicar SOLID principles
- Reduzir complexidade ciclomática
- Manter mesma funcionalidade

Explique cada mudança significativa.
```

### Documentação

```
Gere documentação completa para esta função incluindo:
- Descrição do propósito
- Parâmetros (tipo e descrição)
- Valor de retorno
- Exemplos de uso
- Possíveis exceptions
- Complexidade (Big O)
```

## Ferramentas

### Prompt Libraries
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [LangChain Hub](https://smith.langchain.com/hub)
- [PromptBase](https://promptbase.com/)

### Testing
- [OpenAI Playground](https://platform.openai.com/playground)
- [Anthropic Console](https://console.anthropic.com/)
- [PromptPerfect](https://promptperfect.ai/)

## Recursos

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Engineering](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [Learn Prompting](https://learnprompting.org/)

## Próximos Passos

- [Agentes](/agentes/conceitos): Use prompts para agentes
- [Segurança](/praticas/seguranca): Proteja contra prompt injection
- [Ferramentas](/ferramentas/github-copilot): Aplique em desenvolvimento
