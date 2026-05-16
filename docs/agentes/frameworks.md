# Frameworks para Agentes de IA

## LangChain

### Visão Geral
Framework mais popular para construir aplicações com LLMs.

### Componentes
- **Chains**: Sequências de operações
- **Agents**: Sistemas autônomos
- **Tools**: Integrações (APIs, DBs, etc)
- **Memory**: Gerenciamento de estado
- **Prompts**: Templates reutilizáveis

### Exemplo Básico
```python
from langchain.agents import create_react_agent
from langchain.tools import Tool

tools = [
    Tool(name="Search", func=search_web),
    Tool(name="Calculator", func=calculate)
]

agent = create_react_agent(llm, tools)
result = agent.run("Quanto é 25% de 480?")
```

## LlamaIndex

### Visão Geral
Especializado em RAG (Retrieval Augmented Generation).

### Foco
- Indexação de documentos
- Retrieval eficiente
- Integração com LLMs

### Caso de Uso
```python
from llama_index import VectorStoreIndex, SimpleDirectoryReader

documents = SimpleDirectoryReader('docs').load_data()
index = VectorStoreIndex.from_documents(documents)

query_engine = index.as_query_engine()
response = query_engine.query("Como funciona X?")
```

## CrewAI

### Visão Geral
Orquestração de múltiplos agentes especializados.

### Conceitos
- **Agents**: Com roles e goals
- **Tasks**: Trabalho a ser feito
- **Crew**: Equipe de agentes

### Exemplo
```python
from crewai import Agent, Task, Crew

researcher = Agent(
    role='Researcher',
    goal='Find accurate information',
    backstory='Expert researcher'
)

writer = Agent(
    role='Writer',
    goal='Write engaging content',
    backstory='Professional writer'
)

task1 = Task(
    description='Research AI trends',
    agent=researcher
)

crew = Crew(agents=[researcher, writer], tasks=[task1])
result = crew.kickoff()
```

## AutoGen (Microsoft)

### Visão Geral
Framework para conversações multi-agent.

### Características
- Agentes conversacionais
- Code execution
- Human-in-the-loop

## Semantic Kernel (Microsoft)

### Visão Geral
SDK para integrar LLMs em aplicações.

### Foco
- Enterprise applications
- .NET e Python
- Plugins e planners

## LangGraph

### Visão Geral
Controle de fluxo baseado em grafos (da equipe LangChain).

### Características
- Estado persistente
- Ciclos e condições
- Controle fino de execução

## Escolhendo Framework

### Use LangChain se:
- Projeto geral com LLMs
- Ecossistema rico de integrações
- Comunidade grande

### Use LlamaIndex se:
- Foco em RAG
- Grande volume de documentos
- Busca semântica importante

### Use CrewAI se:
- Múltiplos agentes especializados
- Workflow bem definido
- Colaboração entre agentes

### Use AutoGen se:
- Conversações complexas
- Code execution necessário
- Microsoft ecosystem

## Recursos
- [LangChain Docs](https://python.langchain.com/)
- [LlamaIndex Docs](https://docs.llamaindex.ai/)
- [CrewAI Docs](https://docs.crewai.com/)
- [AutoGen Docs](https://microsoft.github.io/autogen/)
