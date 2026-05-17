# Papers de IA e LLMs

> Catalogo gerado automaticamente pelo PAC-MEMORY a partir de fontes academicas como arXiv.

Atualizado em: 2026-05-17T19:05:16.853Z
Total de papers: 3

## Destaques recentes

### ATLAS: Agentic or Latent Visual Reasoning? One Word is Enough for Both

- **Autores:** Ziyu Guo
- **Publicado:** 2026-05-14T17:59:55.000Z
- **Categorias:** Nao informado
- **Links:** [Resumo](https://arxiv.org/abs/2605.15198) | [PDF](https://arxiv.org/pdf/2605.15198.pdf)
- **Score:** 83%

Visual reasoning, often interleaved with intermediate visual states, has emerged as a promising direction in the field. A straightforward approach is to directly generate images via unified models during reasoning, but this is computationally expensive and architecturally non-trivial. Recent alternatives include agentic reasoning through code or tool calls, and latent reasoning with learnable hidden embeddings. However, agentic methods incur context-switching latency from external execution, while latent methods lack task generalization and are difficult to train with autoregressive parallelization. To combine their strengths while mitigating their limitations, we propose ATLAS, a framework in which a single discrete 'word', termed as a functional token, serves both as an agentic operation and a latent visual reasoning unit. Each functional token is associated with an internalized visual operation, yet requires no visual supervision and remains a standard token in the tokenizer vocabulary, which can be generated via next-token prediction. This design avoids verbose intermediate visual content generation, while preserving compatibility with the vanilla scalable SFT and RL training, without architectural or methodological modifications. To further address the sparsity of functional tokens during RL, we introduce Latent-Anchored GRPO (LA-GRPO), which stabilizes the training by anchoring functional tokens with a statically weighted auxiliary objective, providing stronger gradient updates. Extensive experiments and analyses demonstrate that ATLAS achieves superior performance on challenging benchmarks while maintaining clear interpretability. We hope ATLAS offers a new paradigm inspiring future visual reasoning research.

### EntityBench: Towards Entity-Consistent Long-Range Multi-Shot Video Generation

- **Autores:** Ruozhen He
- **Publicado:** 2026-05-14T17:59:55.000Z
- **Categorias:** Nao informado
- **Links:** [Resumo](https://arxiv.org/abs/2605.15199) | [PDF](https://arxiv.org/pdf/2605.15199.pdf)
- **Score:** 78%

Multi-shot video generation extends single-shot generation to coherent visual narratives, yet maintaining consistent characters, objects, and locations across shots remains a challenge over long sequences. Existing evaluations typically use independently generated prompt sets with limited entity coverage and simple consistency metrics, making standardized comparison difficult. We introduce EntityBench, a benchmark of 140 episodes (2,491 shots) derived from real narrative media, with explicit per-shot entity schedules tracking characters, objects, and locations simultaneously across easy / medium / hard tiers of up to 50 shots, 13 cross-shot characters, 8 cross-shot locations, 22 cross-shot objects, and recurrence gaps spanning up to 48 shots. It is paired with a three-pillar evaluation suite that disentangles intra-shot quality, prompt-following alignment, and cross-shot consistency, with a fidelity gate that admits only accurate entity appearances into cross-shot scoring. As a baseline, we propose EntityMem, a memory-augmented generation system that stores verified per-entity visual references in a persistent memory bank before generation begins. Experiments show that cross-shot entity consistency degrades sharply with recurrence distance in existing methods, and that explicit per-entity memory yields the highest character fidelity (Cohen's d = +2.33) and presence among methods evaluated. Code and data are available at https://github.com/Catherine-R-He/EntityBench/.

### FutureSim: Replaying World Events to Evaluate Adaptive Agents

- **Autores:** Shashwat Goel
- **Publicado:** 2026-05-14T17:59:28.000Z
- **Categorias:** Nao informado
- **Links:** [Resumo](https://arxiv.org/abs/2605.15188) | [PDF](https://arxiv.org/pdf/2605.15188.pdf)
- **Score:** 83%

AI agents are being increasingly deployed in dynamic, open-ended environments that require adapting to new information as it arrives. To efficiently measure this capability for realistic use-cases, we propose building grounded simulations that replay real-world events in the order they occurred. We build FutureSim, where agents forecast world events beyond their knowledge cutoff while interacting with a chronological replay of the world: real news articles arriving and questions resolving over the simulated period. We evaluate frontier agents in their native harness, testing their ability to predict world events over a three-month period from January to March 2026. FutureSim reveals a clear separation in their capabilities, with the best agent's accuracy being 25%, and many having worse Brier skill score than making no prediction at all. Through careful ablations, we show how FutureSim offers a realistic setting to study emerging research directions like long-horizon test-time adaptation, search, memory, and reasoning about uncertainty. Overall, we hope our benchmark design paves the way to measure AI progress on open-ended adaptation spanning long time-horizons in the real world.

