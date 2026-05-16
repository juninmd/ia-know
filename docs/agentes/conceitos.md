# Conceitos de Agentes de IA

## O que são Agentes de IA?

**Agentes de IA** são sistemas autônomos que podem:
1. **Perceber** o ambiente (receber inputs)
2. **Raciocinar** sobre o que fazer
3. **Agir** para atingir objetivos
4. **Aprender** com resultados

Diferente de LLMs simples que apenas respondem, agentes podem executar tarefas complexas de forma independente.

## Arquitetura Básica

### Componentes de um Agente

```
┌─────────────────────────────────────┐
│          AGENTE DE IA               │
│                                     │
│  ┌──────────┐      ┌────────────┐  │
│  │   LLM    │◄────►│  Memória   │  │
│  │ (Cérebro)│      │  (Estado)  │  │
│  └─────┬────┘      └────────────┘  │
│        │                            │
│        ▼                            │
│  ┌──────────────────────────────┐  │
│  │    Planejamento & Raciocínio │  │
│  └──────────┬───────────────────┘  │
│             │                       │
│             ▼                       │
│  ┌──────────────────────────────┐  │
│  │      Ferramentas/Actions     │  │
│  │  - API calls                 │  │
│  │  - File operations           │  │
│  │  - Web search                │  │
│  │  - Code execution            │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
         │              ▲
         │              │
         ▼              │
    ┌────────────────────┐
    │    Ambiente        │
    │  (Mundo Externo)   │
    └────────────────────┘
```

### 1. LLM (Large Language Model)
O "cérebro" que processa informações e toma decisões.

### 2. Memória
- **Short-term**: Contexto da conversa/tarefa atual
- **Long-term**: Conhecimento persistente, experiências passadas

### 3. Planejamento
Capacidade de:
- Quebrar tarefas complexas em sub-tarefas
- Criar planos de ação
- Adaptar planos quando necessário

### 4. Ferramentas (Tools)
Ações que o agente pode executar:
- Buscar informações (web search, database)
- Executar código
- Manipular arquivos
- Chamar APIs
- Enviar emails/mensagens

## Tipos de Agentes

### 1. Agentes Reativos Simples

**Características:**
- Respondem diretamente a inputs
- Sem memória de estados anteriores
- Baseados em regras if-then

**Exemplo:**
```python
if user_says("olá"):
    respond("Olá! Como posso ajudar?")
```

**Uso:** Chatbots simples, automações básicas

### 2. Agentes Baseados em Modelos

**Características:**
- Mantêm modelo interno do mundo
- Consideram estado atual
- Mais sofisticados que reativos

**Exemplo:** Assistente que lembra preferências do usuário

### 3. Agentes Baseados em Objetivos

**Características:**
- Têm objetivos específicos
- Planejam ações para alcançá-los
- Avaliam diferentes caminhos

**Exemplo:**
```
Objetivo: "Agendar reunião com toda a equipe"

Plano:
1. Verificar calendário de todos
2. Encontrar horário livre comum
3. Enviar convites
4. Confirmar presença
```

### 4. Agentes Baseados em Utilidade

**Características:**
- Avaliam "qualidade" de diferentes ações
- Otimizam para melhor resultado
- Consideram trade-offs

**Exemplo:** Agente que escolhe melhor rota considerando tempo, custo e conforto

### 5. Agentes de Aprendizado

**Características:**
- Melhoram com experiência
- Adaptam comportamento
- Usam feedback

**Exemplo:** Agente que aprende preferências de escrita do usuário

## Padrões de Agentes LLM

### ReAct (Reasoning + Acting)

Ciclo de **Raciocínio → Ação → Observação**:

```
Thought: Preciso saber o clima atual em São Paulo
Action: weather_api("São Paulo")
Observation: Temperatura: 22°C, Ensolarado

Thought: O clima está bom, posso sugerir atividade ao ar livre
Action: respond("O clima está ótimo em SP! Que tal um passeio no parque?")
```

### Plan-and-Execute

1. **Planejamento**: Cria plano completo
2. **Execução**: Executa passo a passo
3. **Replanejamento**: Ajusta se necessário

```
Tarefa: "Criar relatório de vendas Q1 2024"

Plan:
1. Buscar dados de vendas (Jan-Mar 2024)
2. Calcular métricas (total, crescimento, top produtos)
3. Gerar gráficos
4. Escrever análise
5. Formatar em PDF

Execute:
[Executar cada etapa...]
```

### Reflection

Agente revisa e critica seu próprio trabalho:

```
Action: Escrever código
Reflection: Este código tem O(n²), posso otimizar?
Action: Refatorar para O(n)
Reflection: Melhor! Mas falta tratamento de erro
Action: Adicionar try-catch
```

## Ferramentas e Ações

### Tipos Comuns de Tools

**Informação:**
- Web Search (Google, Bing)
- Wikipedia
- Database queries
- File reading

**Computação:**
- Code execution (Python, JavaScript)
- Calculadora
- Data analysis

**Comunicação:**
- Send email
- Post to Slack/Discord
- Create GitHub issue

**Criação:**
- Generate image (DALL-E)
- Create document
- Write to file

### Exemplo: Function Calling

```python
tools = [
    {
        "name": "get_weather",
        "description": "Get current weather for a location",
        "parameters": {
            "location": "string"
        }
    },
    {
        "name": "send_email",
        "description": "Send an email",
        "parameters": {
            "to": "string",
            "subject": "string",
            "body": "string"
        }
    }
]

# Agent decide qual ferramenta usar
agent_response = {
    "tool": "get_weather",
    "parameters": {"location": "Tokyo"}
}
```

## Frameworks Populares

### LangChain

```python
from langchain.agents import create_react_agent
from langchain.tools import Tool

tools = [
    Tool(name="Search", func=search_web),
    Tool(name="Calculator", func=calculate)
]

agent = create_react_agent(llm, tools)
agent.run("Quanto é 15% de 230 e qual o clima em Paris?")
```

### AutoGPT

Agente autônomo que:
- Define sub-objetivos
- Executa tarefas
- Auto-avalia progresso

### CrewAI

Multi-agent system com papéis especializados:

```python
from crewai import Agent, Task, Crew

researcher = Agent(
    role="Researcher",
    goal="Find accurate information"
)

writer = Agent(
    role="Writer",
    goal="Write engaging content"
)

crew = Crew(agents=[researcher, writer])
```

## Memória em Agentes

### Short-Term Memory
- Contexto da conversa atual
- Limitado por context window
- Perdida após sessão

### Long-Term Memory

**Vector Database:**
```
User: "Qual minha cor favorita?"
→ Search in vector DB
→ Found: "O usuário disse que gosta de azul"
→ Response: "Você me disse que gosta de azul!"
```

**Structured Storage:**
```python
memory = {
    "user_preferences": {
        "color": "blue",
        "language": "Python"
    },
    "past_tasks": [
        {"task": "Create API", "status": "completed"},
    ]
}
```

## Desafios

### 1. Alucinação de Ferramentas
Agente pode "inventar" ferramentas inexistentes
- **Solução**: Validação rígida de tool calls

### 2. Loops Infinitos
Agente pode ficar preso repetindo ações
- **Solução**: Limitar iterações, detectar loops

### 3. Custo
Múltiplas chamadas ao LLM = caro
- **Solução**: Cache, modelos menores para sub-tarefas

### 4. Confiabilidade
Difícil garantir que agente sempre complete tarefa
- **Solução**: Human-in-the-loop, fallbacks

### 5. Segurança
Agente com acesso a ferramentas pode ser perigoso
- **Solução**: Sandboxing, aprovação de ações críticas

## Boas Práticas

### ✅ Faça

1. **Limite escopo inicial**
   - Comece com agentes simples
   - Adicione complexidade gradualmente

2. **Defina objetivos claros**
   ```python
   agent = Agent(
       goal="Responder perguntas sobre produtos usando database",
       constraints=["Não acessar dados de clientes", "Máximo 3 queries por pergunta"]
   )
   ```

3. **Implemente observabilidade**
   - Log todas as ações
   - Trace raciocínio
   - Monitore custos

4. **Valide outputs**
   - Não confie cegamente
   - Valide tool calls
   - Revise respostas críticas

5. **Human-in-the-loop**
   - Aprovação para ações importantes
   - Feedback para melhorias

### ❌ Evite

1. **Acesso irrestrito**
   - Não dê acesso total ao sistema
   - Princípio do menor privilégio

2. **Sem limites**
   - Sempre limite iterações
   - Timeout para tarefas

3. **Ignorar custos**
   - Monitore tokens
   - Use modelos apropriados

## Casos de Uso

### Atendimento ao Cliente
```
Cliente: "Preciso cancelar meu pedido #12345"

Agente:
1. Busca pedido no database
2. Verifica se cancelável
3. Processa cancelamento
4. Envia email de confirmação
5. Atualiza status
```

### Pesquisa e Análise
```
Tarefa: "Analise tendências de IA em 2024"

Agente:
1. Web search por artigos recentes
2. Extrai informações chave
3. Categoriza tendências
4. Gera sumário
5. Cria visualizações
```

### Automação DevOps
```
Incidente: "API está lenta"

Agente:
1. Checa métricas (CPU, memory, latency)
2. Analisa logs
3. Identifica problema (DB query lenta)
4. Cria issue no GitHub
5. Notifica equipe no Slack
```

### Assistente Pessoal
```
Pedido: "Agende reunião com equipe na próxima semana"

Agente:
1. Acessa calendário de todos
2. Encontra slot livre
3. Cria evento
4. Envia convites
5. Confirma com usuário
```

## Próximos Passos

- [Agentes Autônomos](/agentes/autonomos): AutoGPT, BabyAGI e mais
- [Multi-Agent Systems](/agentes/multi-agent): Múltiplos agentes colaborando
- [Frameworks](/agentes/frameworks): LangChain, CrewAI, AutoGen
- [Ferramentas](/ferramentas/claude-code): Use agentes no desenvolvimento

## Recursos

- [LangChain Agents Documentation](https://python.langchain.com/docs/modules/agents/)
- [OpenAI Function Calling Guide](https://platform.openai.com/docs/guides/function-calling)
- [ReAct Paper](https://arxiv.org/abs/2210.03629)
