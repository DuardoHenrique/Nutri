# PRD — Landing Page Premium · Nutricionista
### Projeto Google Antigravity · Versão 1.0

---

> **Documento de referência para o time de produto, design e engenharia.**
> Este PRD é executável do briefing até o deploy. Cada seção é uma instrução de trabalho, não uma sugestão.

---

## Índice

1. [Visão Geral do Produto](#1-visão-geral-do-produto)
2. [Público-Alvo](#2-público-alvo)
3. [Objetivos de Negócio e KPIs](#3-objetivos-de-negócio-e-kpis)
4. [Proposta de Valor](#4-proposta-de-valor)
5. [Arquitetura da Experiência](#5-arquitetura-da-experiência)
6. [Direção de Copy](#6-direção-de-copy)
7. [Direção Visual Completa](#7-direção-visual-completa)
8. [Motion e Microinterações](#8-motion-e-microinterações)
9. [Responsividade e Mobile-First](#9-responsividade-e-mobile-first)
10. [Componentes e Sistema de Design](#10-componentes-e-sistema-de-design)
11. [Stack Tecnológica Recomendada](#11-stack-tecnológica-recomendada)
12. [Arquitetura de Código e Boas Práticas](#12-arquitetura-de-código-e-boas-práticas)
13. [Requisitos Funcionais](#13-requisitos-funcionais)
14. [Requisitos Não Funcionais](#14-requisitos-não-funcionais)
15. [Objeções e Estratégias de Conversão](#15-objeções-e-estratégias-de-conversão)
16. [Critérios de Qualidade](#16-critérios-de-qualidade)
17. [Checklist Final de Implementação](#17-checklist-final-de-implementação)

---

## 1. Visão Geral do Produto

### 1.1 O que é este produto

Uma **landing page de conversão premium**, desenvolvida para uma profissional de nutrição, com o objetivo único de conduzir o visitante ao agendamento de consulta. A página combina identidade visual sofisticada, narrativa de transformação e experiência de navegação fluida para posicionar a profissional como referência no mercado.

### 1.2 Posicionamento de mercado

A página não é um site institucional genérico. É um **ativo de conversão** — construído para persuadir com elegância, educar com precisão e converter com naturalidade.

O produto deve transmitir, em menos de 3 segundos de carregamento:

- Autoridade profissional
- Sofisticação visual
- Confiança humana
- Promessa clara de transformação

### 1.3 Problema que resolve

Pessoas que querem transformar o físico têm dificuldade de confiar em profissionais de nutrição por:

- Excesso de promessas genéricas no mercado
- Falta de clareza sobre o processo
- Medo de passar fome ou seguir dietas impossíveis
- Experiências anteriores frustrantes

Esta landing page **resolve a desconfiança antes que ela impeça a conversão**.

### 1.4 Escopo do produto

| Item | Incluso |
|------|---------|
| Landing page única | ✅ |
| Pop-up de agendamento | ✅ |
| Navbar fixa com scroll behavior | ✅ |
| Hero com vídeo animado por scroll | ✅ |
| Todas as seções de conversão | ✅ |
| Versão mobile otimizada | ✅ |
| Microinterações e scroll reveals | ✅ |
| Integração de mapa | ✅ |
| Múltiplas páginas ou blog | ❌ |
| Área logada ou dashboard | ❌ |

---

## 2. Público-Alvo

### 2.1 Perfil principal

**Homens e mulheres entre 25 e 45 anos** que:

- Querem emagrecer ou ganhar massa muscular
- Já tentaram dietas por conta própria ou com produtos milagrosos
- Se frustraram com resultados inconsistentes
- Têm rotina ativa e não toleram restrições que inviabilizem o dia a dia
- Buscam orientação profissional séria, clara e humana

### 2.2 Nível de consciência

**Nível 3 — Consciente da solução:** o visitante já sabe que precisa de acompanhamento profissional, mas ainda não decidiu por esta profissional. A página precisa **convencer, não educar do zero**.

### 2.3 Dores principais

- "Não consigo manter constância com nenhuma dieta"
- "Passo fome e desisto depois de poucos dias"
- "Não sei se isso funciona para o meu tipo de corpo"
- "Já tentei várias vezes e nada deu certo"
- "Tenho medo de investir e não ter resultado"

### 2.4 Desejos reais

- Ter um corpo que reflita o esforço que coloco na academia
- Sentir confiança com meu corpo
- Comer bem sem sofrer
- Ter clareza sobre o que comer e quando
- Um profissional que me entenda de verdade

### 2.5 Perfil de decisão

- Decisão emocional validada por racionalidade
- Confiança construída pela combinação de: aparência profissional + prova social + clareza do processo
- Convertidos principalmente por: **identificação com a dor + sensação de que essa profissional é diferente**

---

## 3. Objetivos de Negócio e KPIs

### 3.1 Objetivo principal

Levar o visitante ao **preenchimento do formulário de agendamento de consulta**.

### 3.2 Funil esperado

```
Visita → Atenção (hero) → Identificação (dor) → Interesse (método + benefícios)
→ Confiança (autoridade + prova social) → Decisão (FAQ + CTA) → Conversão (formulário)
```

### 3.3 KPIs de sucesso

| Métrica | Meta de referência |
|--------|-------------------|
| Taxa de conversão (visita → formulário preenchido) | ≥ 3,5% |
| Tempo médio na página | ≥ 2 minutos |
| Taxa de rejeição | ≤ 45% |
| CTR no CTA principal | ≥ 8% |
| Scroll depth ≥ 70% | ≥ 40% dos visitantes |
| LCP (Largest Contentful Paint) | ≤ 2,5s |
| CLS (Cumulative Layout Shift) | ≤ 0,1 |

### 3.4 Microconversões monitoráveis

- Hover no CTA por mais de 1 segundo
- Abertura do pop-up de formulário
- Expansão de FAQ
- Scroll até a seção de autoridade
- Clique em WhatsApp (se presente)

---

## 4. Proposta de Valor

### 4.1 Proposta central

> **"Plano nutricional inteligente e personalizado para transformar o físico com orientação profissional, sem fome e sem soluções milagrosas."**

### 4.2 O que o cliente está comprando de verdade

Não é uma dieta. É:

- **Clareza** — saber exatamente o que fazer
- **Orientação profissional** — não estar sozinho
- **Segurança** — processo validado
- **Aderência** — um plano que cabe na vida real
- **Resultado** — transformação física sustentável

### 4.3 Diferencial competitivo

| Promessa genérica do mercado | Diferencial desta profissional |
|------------------------------|-------------------------------|
| "Emagreça rápido" | "Resultado com aderência real" |
| "Dieta para todos" | "Plano personalizado para a sua rotina" |
| "Sem fome" como slogan vazio | "Plano que cabe na sua vida, não o contrário" |
| Foco em restrição | Foco em estratégia nutricional inteligente |
| Promessa de prazo curto | Foco em sustentabilidade |

---

## 5. Arquitetura da Experiência

A página segue uma sequência psicológica de conversão: **Capturar → Identificar → Educar → Provar → Converter.**

---

### 5.1 Navbar — Fixa com Comportamento de Scroll

**Função estratégica:** Manter o CTA sempre acessível e reforçar profissionalismo desde o primeiro momento.

**Comportamento:**
- Estado inicial: transparente, sem fundo
- Após 80px de scroll: fundo branco/off-white com `backdrop-blur`, sombra suave `box-shadow: 0 1px 24px rgba(0,0,0,0.06)`
- Transição: `transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1)`

**Conteúdo:**
- Logo ou nome da profissional (esquerda)
- Links de âncora: Sobre · Método · Depoimentos · FAQ (centro, visível apenas em desktop)
- Botão CTA: "Agendar Consulta" (direita, sempre visível)

**Mobile:**
- Hamburger menu discreto
- Menu lateral deslizante com animação suave
- CTA no topo do menu

---

### 5.2 Hero — Âncora Visual e Narrativa Principal

**Função estratégica:** Capturar atenção em 3 segundos, comunicar a transformação possível e convidar para ação imediata.

**Estrutura visual (desktop):**
- Lado esquerdo: headline + subtítulo + CTA + indicadores sociais rápidos (ex: "500+ pacientes atendidos")
- Lado direito ou centro: vídeo animado por scroll em container com bordas arredondadas e sombra elegante

**Estrutura visual (mobile):**
- Headline no topo
- Vídeo centralizado (menor, com aspect ratio preservado)
- CTA imediatamente abaixo do vídeo

**Vídeo animado por scroll:**
- Vídeo sem autoplay de áudio
- Sincronizado com `scrollY` via JavaScript
- O scroll do usuário avança o `currentTime` do vídeo de forma proporcional
- Duração ideal do vídeo: 6 a 10 segundos (curto o suficiente para ser leve, longo o suficiente para criar impacto)
- Fórmula de sincronização:
  ```
  video.currentTime = (scrollY / heroHeight) * video.duration
  ```
- O vídeo deve mostrar uma transformação, processo nutricional ou imagem aspiracional

**Headline:**
- Curta, forte, focada em transformação
- Estrutura recomendada: [Resultado desejado] + [sem a dor principal]
- Exemplos de lógica (não texto final):
  - "Emagreça com método, sem passar fome."
  - "Nutrição que transforma, sem abrir mão da sua rotina."
  - "Seu próximo nível físico com um plano feito para você."

**Subtítulo:**
- 1 a 2 linhas que completam a promessa com técnica e acolhimento
- Exemplo de lógica: "Acompanhamento profissional personalizado para emagrecimento e hipertrofia, adaptado à sua realidade."

**CTA principal:**
- Texto: "Agendar Consulta" ou "Quero Meu Plano"
- Abre pop-up de formulário
- Visual: botão verde com hover elegante

**Elementos de suporte no hero (escolher 2-3):**
- Número de pacientes atendidos
- Anos de experiência
- Avaliação média (estrelas)
- CRN da profissional (credibilidade técnica)

---

### 5.3 Prova Social Rápida

**Função estratégica:** Quebrar ceticismo imediatamente após o hero, antes que o usuário questione a credibilidade.

**Formato:** Faixa horizontal (ticker ou carrossel lento) com:
- Depoimentos curtos (1-2 linhas)
- Nome + foto (opcional)
- Resultado ou transformação mencionada

**Alternativa:** 3 cards dispostos horizontalmente com:
- Avatar
- Nome e objetivo (ex: "Pedro, emagrecimento")
- Depoimento de 2-3 linhas
- Estrelas de avaliação

**Animação:** Fade-in stagger ao entrar na viewport.

---

### 5.4 Seção de Dor e Identificação

**Função estratégica:** Fazer o visitante sentir que a profissional **o entende profundamente** — criando vínculo emocional antes de apresentar a solução.

**Headline da seção:**
- Lógica: "Você já tentou de tudo e nada funcionou de verdade?"
- Tom: empático, sem julgamento

**Corpo:**
Listar as dores em forma de afirmações que o usuário reconhece:

- "Dietas que prometem tudo e não sustentam nada além de frustração"
- "Passar fome o dia inteiro só para comer tudo no final do dia"
- "Regimes que funcionam por 2 semanas e somem depois"
- "A sensação de que seu corpo não responde igual ao dos outros"
- "O cansaço de começar do zero toda segunda-feira"

**Visual:** Lista com ícones sutis ou checkmarks estilizados. Fundo levemente diferente da seção anterior para criar separação visual.

**Transição para o método:** Frase de ponte — ex: "O problema nunca foi você. Foi a falta de estratégia certa."

---

### 5.5 Método de Trabalho

**Função estratégica:** Transformar a promessa em processo, reduzindo a incerteza de "como isso funciona".

**Estrutura em steps (5 etapas):**

| Step | Nome | Descrição curta |
|------|------|----------------|
| 1 | Avaliação Inicial | Entendimento profundo do seu histórico, objetivo e rotina |
| 2 | Definição do Objetivo | Clareza sobre emagrecimento, hipertrofia ou reeducação alimentar |
| 3 | Montagem do Plano | Protocolo nutricional 100% personalizado para a sua realidade |
| 4 | Acompanhamento | Ajustes contínuos conforme sua evolução e feedback |
| 5 | Sustentabilidade | Construção de hábitos que funcionam no longo prazo |

**Visual:**
- Cards ou steps numerados com ícone animado (Lottie ou CSS)
- Linha conectora entre os steps em desktop
- Empilhamento vertical no mobile
- Animação de entrada: stagger com fade-up conforme scroll

---

### 5.6 Benefícios Reais

**Função estratégica:** Converter o método em resultado percebido. O visitante precisa imaginar a própria vida com o plano.

**Headline:** "O que muda na sua vida com o plano certo"

**Benefícios sugeridos (6-8 itens em grid):**

- Emagrecer com aderência e sem oscilações de humor
- Ganhar massa com planejamento inteligente
- Comer bem sem a sensação de sacrifício
- Ter mais energia e disposição no dia a dia
- Parar de depender de soluções extremas
- Um plano adaptado à sua rotina, não o contrário
- Clareza sobre o que comer em qualquer situação
- Confiança para manter os resultados a longo prazo

**Visual:** Grid 2x4 (desktop) ou 1x8 (mobile) com cards leves, ícone + título + descrição curta. Hover com elevação sutil.

---

### 5.7 Diferenciais da Profissional

**Função estratégica:** Responder "por que ela e não qualquer outro nutricionista?"

**Formato sugerido:** 3-4 cards grandes com destaque visual, ou lista de diferenciais com ícone premium.

**Diferenciais estratégicos:**

- **Personalização real:** nenhum plano igual ao outro — cada protocolo é construído do zero
- **Foco em aderência:** o plano precisa caber na sua vida, não o contrário
- **Comunicação clara:** sem jargão técnico, sem receitas impossíveis
- **Acompanhamento de verdade:** suporte contínuo, não um PDF e sumiu
- **Resultado com saúde:** transformação que não sacrifica bem-estar

---

### 5.8 Bloco de Autoridade

**Função estratégica:** Dar lastro técnico à promessa. Sem isso, a landing parece mais marketing do que profissão.

**Conteúdo:**
- Foto profissional da nutricionista (tom amigável, não frio)
- Nome completo + CRN
- Formação e especializações relevantes
- Número de pacientes atendidos
- Filosofia de trabalho em 2-3 frases
- Se houver: participações em congressos, publicações, menções em mídia

**Formato:** Bloco dividido — foto ocupando 40%, conteúdo textual e credenciais nos 60% restantes. Mobile: empilhado com foto acima.

**Tom da copy:** Primeiro pessoa. Humano. Ex: "Acredito que a nutrição precisa respeitar a vida real das pessoas..."

---

### 5.9 Para Quem É / Para Quem Não É

**Função estratégica:** Qualificar leads, aumentar percepção de seriedade e criar desejo por exclusividade.

**Para quem é:**
- Você quer emagrecer com método e consistência
- Você quer ganhar massa muscular com planejamento
- Você está disposto a seguir orientação profissional
- Você busca resultado real e sustentável
- Você quer comer bem sem sofrimento desnecessário

**Para quem não é:**
- Você busca resultado em 7 dias
- Você quer uma dieta genérica da internet
- Você não está disposto a ajustar hábitos alimentares
- Você quer uma solução milagrosa sem compromisso

**Visual:** Dois blocos lado a lado — "Para você se..." / "Não é para você se..." com ícones de check verde e X suave. Fundo levemente diferenciado.

---

### 5.10 FAQ — Quebra de Objeções Final

**Função estratégica:** Remover as últimas dúvidas antes da decisão de agendar.

**Perguntas obrigatórias:**

1. Vou passar fome seguindo o plano?
2. Como funciona a consulta?
3. O plano é personalizado ou genérico?
4. Quanto tempo leva para ver resultado?
5. O plano funciona para ganho de massa também?
6. E se eu não conseguir seguir na minha rotina?
7. Como é o acompanhamento após a consulta?
8. Atende online ou presencialmente?

**Formato:** Accordion (expandir/recolher) com animação suave. Cada item: pergunta em bold + resposta objetiva de 2-4 linhas.

**Animação:** Item expande com `max-height` animado + fade-in no conteúdo.

---

### 5.11 CTA Final

**Função estratégica:** O convite final. Deve ser visualmente impactante e emocionalmente leve.

**Headline da seção:** "Pronto para transformar o seu físico com um plano feito para você?"

**Subtítulo:** "Agende sua consulta agora e dê o primeiro passo com orientação profissional."

**CTA:** Botão grande — "Agendar Consulta" — abre pop-up de formulário.

**Background:** Pode usar fundo em verde muito suave ou gradiente delicado para diferenciar visualmente do restante da página.

---

### 5.12 Contato e Mapa

**Função estratégica:** Validar a operação real, especialmente para quem prefere atendimento presencial.

**Conteúdo:**
- Endereço completo (se presencial)
- Telefone / WhatsApp
- E-mail
- Horários de atendimento
- Google Maps integrado (iframe responsivo)

**Formato:** Dois blocos — informações de contato na esquerda, mapa ocupando a direita. Mobile: mapa acima, informações abaixo.

---

### 5.13 Footer

**Conteúdo:**
- Logo
- Links de âncora (mesmos da navbar)
- CRN da profissional
- Política de privacidade (link)
- Redes sociais (ícones com hover)
- Copyright

---

## 6. Direção de Copy

### 6.1 Tom de voz

| Dimensão | Direção |
|----------|---------|
| Formalidade | Semiformal — profissional mas acessível |
| Emoção | Presente, mas controlada — nunca dramática |
| Técnica | Visível mas traduzida — sem jargão |
| Urgência | Leve — nunca pressão artificial |
| Empatia | Alta — mostra entendimento da dor |

### 6.2 Palavras e frases para usar

- "Feito para você"
- "Na sua rotina"
- "Com método"
- "Orientação profissional"
- "Resultado real"
- "Sem sofrimento desnecessário"
- "Com consistência"
- "Adaptado à sua realidade"

### 6.3 Palavras e frases para evitar

- "Milagroso"
- "Rápido e fácil"
- "Perca X kg em Y dias"
- "Dieta"
- "Proibido"
- "100% garantido"
- "Resultados extraordinários"

### 6.4 Estrutura de headline por seção

| Seção | Estrutura |
|-------|-----------|
| Hero | [Resultado] + [sem a dor] |
| Dor | Pergunta de identificação |
| Método | "Como funciona" + clareza |
| Benefícios | "O que muda na sua vida" |
| Autoridade | Quem é + filosofia |
| FAQ | Perguntas reais do cliente |
| CTA final | Convite suave + benefício direto |

---

## 7. Direção Visual Completa

### 7.1 Estética geral

O visual deve evocar: **saúde moderna, limpeza, sofisticação acessível e frescor.**

Referências estéticas: marcas de wellness premium, clínicas de estética de alto padrão, apps de saúde modernos.

**Não é:** clínica hospitalar fria, pharma genérico, blog de dieta dos anos 2010.

### 7.2 Paleta de cores

```css
:root {
  /* Base */
  --color-white:       #FFFFFF;
  --color-off-white:   #F8F9F6;
  --color-gray-50:     #F3F4F1;
  --color-gray-100:    #E8EAE4;
  --color-gray-400:    #9CA38F;
  --color-gray-700:    #4A4F42;
  --color-gray-900:    #1C1F18;

  /* Acentos verdes */
  --color-green-100:   #E8F5E9;
  --color-green-300:   #A8D5A2;
  --color-green-500:   #5A9E52;  /* Principal — CTAs, destaques */
  --color-green-700:   #3A6E34;  /* Contraste, textos em fundo verde */
  --color-green-900:   #1E3D1B;

  /* Funcionais */
  --color-surface:     #FFFFFF;
  --color-surface-alt: #F8F9F6;
  --color-border:      rgba(90, 158, 82, 0.12);
  --color-shadow:      rgba(60, 80, 55, 0.08);
}
```

### 7.3 Tipografia

```css
/* Display / Headlines */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');

/* Body / UI */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;

  /* Escala tipográfica */
  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg:   1.125rem;  /* 18px */
  --text-xl:   1.25rem;   /* 20px */
  --text-2xl:  1.5rem;    /* 24px */
  --text-3xl:  1.875rem;  /* 30px */
  --text-4xl:  2.25rem;   /* 36px */
  --text-5xl:  3rem;      /* 48px */
  --text-6xl:  3.75rem;   /* 60px */

  /* Line heights */
  --leading-tight:   1.25;
  --leading-snug:    1.375;
  --leading-normal:  1.5;
  --leading-relaxed: 1.625;

  /* Letter spacing */
  --tracking-tight:  -0.02em;
  --tracking-normal:  0;
  --tracking-wide:    0.04em;
  --tracking-wider:   0.08em;
}
```

**Regra de aplicação:**
- Headlines H1, H2: `font-family: var(--font-display); font-weight: 700;`
- Subtítulos, lead text: `font-family: var(--font-body); font-weight: 300; font-size: var(--text-xl);`
- Corpo de texto: `font-family: var(--font-body); font-weight: 400;`
- Labels, badges, CTAs: `font-family: var(--font-body); font-weight: 600; letter-spacing: var(--tracking-wide);`

### 7.4 Espaçamento e Grid

```css
:root {
  /* Espaçamento base */
  --space-1:   0.25rem;  /* 4px */
  --space-2:   0.5rem;   /* 8px */
  --space-3:   0.75rem;  /* 12px */
  --space-4:   1rem;     /* 16px */
  --space-6:   1.5rem;   /* 24px */
  --space-8:   2rem;     /* 32px */
  --space-10:  2.5rem;   /* 40px */
  --space-12:  3rem;     /* 48px */
  --space-16:  4rem;     /* 64px */
  --space-20:  5rem;     /* 80px */
  --space-24:  6rem;     /* 96px */
  --space-32:  8rem;     /* 128px */

  /* Container */
  --container-sm:  640px;
  --container-md:  768px;
  --container-lg:  1024px;
  --container-xl:  1280px;
  --container-2xl: 1440px;

  /* Seções */
  --section-padding-y: var(--space-24);
  --section-padding-x: var(--space-6);
}
```

### 7.5 Bordas, raios e sombras

```css
:root {
  /* Border radius */
  --radius-sm:   0.375rem;  /* 6px */
  --radius-md:   0.75rem;   /* 12px */
  --radius-lg:   1.25rem;   /* 20px */
  --radius-xl:   2rem;      /* 32px */
  --radius-full: 9999px;

  /* Sombras */
  --shadow-xs:  0 1px 3px rgba(60, 80, 55, 0.06);
  --shadow-sm:  0 2px 8px rgba(60, 80, 55, 0.08);
  --shadow-md:  0 4px 24px rgba(60, 80, 55, 0.10);
  --shadow-lg:  0 8px 48px rgba(60, 80, 55, 0.12);
  --shadow-xl:  0 16px 64px rgba(60, 80, 55, 0.14);

  /* Sombra verde (destaque premium) */
  --shadow-green: 0 8px 32px rgba(90, 158, 82, 0.20);
}
```

### 7.6 Glassmorphism

Usar com moderação. Aplicar apenas em:
- Navbar com scroll
- Pop-up de formulário
- Badges de prova social sobrepostos ao hero

```css
.glass {
  background: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.30);
  box-shadow: var(--shadow-md);
}
```

---

## 8. Motion e Microinterações

### 8.1 Filosofia de movimento

Cada animação tem uma função. Nunca decorativa por si só.

- **Entradas:** guiar o olho, revelar hierarquia
- **Hover:** confirmar interatividade, dar feedback
- **Scroll-driven:** criar profundidade e engajamento
- **Transições de estado:** evitar saltos visuais abruptos

### 8.2 Variáveis de timing

```css
:root {
  --duration-fast:    150ms;
  --duration-normal:  300ms;
  --duration-slow:    500ms;
  --duration-slower:  800ms;

  --ease-out:     cubic-bezier(0.0, 0.0, 0.2, 1.0);
  --ease-in-out:  cubic-bezier(0.4, 0.0, 0.2, 1.0);
  --ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1.0);
}
```

### 8.3 Scroll reveal (padrão base)

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--duration-slow) var(--ease-out),
              transform var(--duration-slow) var(--ease-out);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger entre elementos do mesmo grupo:**
```css
.card:nth-child(1) { transition-delay: 0ms; }
.card:nth-child(2) { transition-delay: 80ms; }
.card:nth-child(3) { transition-delay: 160ms; }
.card:nth-child(4) { transition-delay: 240ms; }
```

**Implementação com IntersectionObserver:**
```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Revela apenas uma vez
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
```

### 8.4 Vídeo sincronizado com scroll

```javascript
// Implementação precisa do scroll-driven video
const hero = document.querySelector('.hero');
const video = document.querySelector('.hero-video');

function updateVideoTime() {
  const heroRect = hero.getBoundingClientRect();
  const heroHeight = hero.offsetHeight;
  const windowHeight = window.innerHeight;

  // Progresso normalizado (0 a 1) durante a permanência do hero na viewport
  const progress = Math.min(
    Math.max((-heroRect.top) / (heroHeight - windowHeight), 0),
    1
  );

  if (video.duration) {
    video.currentTime = progress * video.duration;
  }
}

window.addEventListener('scroll', updateVideoTime, { passive: true });
```

**Atenção:** O vídeo deve ter `preload="auto"` e **não** ter `autoplay` (exceto muted em mobile como fallback de performance).

### 8.5 Botões — Especificação completa

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-8);
  background: var(--color-green-500);
  color: white;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  letter-spacing: var(--tracking-wide);
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-green);
  transition:
    background var(--duration-normal) var(--ease-out),
    transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out);
}

.btn-primary:hover {
  background: var(--color-green-700);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(90, 158, 82, 0.30);
}

.btn-primary:active {
  transform: translateY(0px);
  box-shadow: var(--shadow-green);
}
```

### 8.6 Cards — Hover state

```css
.card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--duration-normal) var(--ease-out),
    box-shadow var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(90, 158, 82, 0.25);
}
```

### 8.7 FAQ Accordion

```javascript
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Fechar todos os outros
      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.faq-content').style.maxHeight = '0';
        }
      });

      // Toggle atual
      item.classList.toggle('is-open', !isOpen);
      content.style.maxHeight = isOpen ? '0' : `${content.scrollHeight}px`;
    });
  });
}
```

---

## 9. Responsividade e Mobile-First

### 9.1 Breakpoints

```css
/* Mobile first — escrever o CSS base para mobile, sobrescrever para telas maiores */

/* sm */  @media (min-width: 640px) { }
/* md */  @media (min-width: 768px) { }
/* lg */  @media (min-width: 1024px) { }
/* xl */  @media (min-width: 1280px) { }
/* 2xl */ @media (min-width: 1536px) { }
```

### 9.2 Comportamento por seção

| Seção | Mobile | Desktop |
|-------|--------|---------|
| Navbar | Logo + hamburger + CTA | Logo + links + CTA |
| Hero | Texto acima, vídeo abaixo | Texto esquerda, vídeo direita |
| Prova social | Cards em coluna ou carrossel | Cards em row |
| Método | Steps empilhados | Steps em linha com conector |
| Benefícios | 1 coluna | Grid 2x4 |
| Autoridade | Foto acima, texto abaixo | 40/60 lado a lado |
| FAQ | Accordion vertical | Accordion em 2 colunas (opcional) |
| Contato | Mapa acima, info abaixo | Info esquerda, mapa direita |

### 9.3 Regras de adaptação obrigatórias

- **Nunca** usar fonte menor que `16px` no corpo em mobile
- **Sempre** garantir CTA visível sem scroll na primeira tela
- Imagens com `loading="lazy"` exceto o hero
- Vídeo do hero com fallback de imagem estática se não suportado
- Animações com `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Componentes e Sistema de Design

### 10.1 Átomos (primitivos)

| Componente | Variantes |
|-----------|-----------|
| Button | primary, secondary, ghost, icon-only |
| Badge | green, gray, outline |
| Input | default, focused, error, disabled |
| Textarea | default, focused, error |
| Icon | outlined, filled (via Phosphor Icons ou Lucide) |
| Divider | horizontal, vertical, com texto |
| Avatar | sm, md, lg, com initial fallback |

### 10.2 Moléculas (composições)

| Componente | Descrição |
|-----------|-----------|
| NavLink | Link + estado ativo + hover |
| TestimonialCard | Avatar + nome + texto + estrelas |
| BenefitCard | Ícone + título + descrição |
| StepCard | Número + ícone + título + texto |
| FAQItem | Trigger + conteúdo expansível |
| StatBadge | Número + label (ex: "500+ pacientes") |
| FormField | Label + Input + ErrorMessage |

### 10.3 Organismos (seções completas)

| Componente | Seção |
|-----------|-------|
| Navbar | Toda a barra de navegação |
| HeroSection | Hero completo com vídeo |
| SocialProof | Faixa ou grid de depoimentos |
| PainSection | Seção de identificação de dor |
| MethodSection | Steps do método |
| BenefitsSection | Grid de benefícios |
| DifferentialsSection | Diferenciais |
| AuthoritySection | Bloco de autoridade |
| WhoIsItFor | Para quem é / não é |
| FAQSection | Accordion de FAQ |
| CTASection | CTA final |
| ContactSection | Contato + mapa |
| Footer | Rodapé |
| AppointmentModal | Pop-up de formulário |

---

## 11. Stack Tecnológica Recomendada

### 11.1 Framework principal

**Recomendação: Next.js 14+ (App Router)**

Justificativa:
- Server-side rendering para SEO e performance
- Static generation para páginas de conteúdo fixo
- Image optimization nativo (`next/image`)
- Font optimization nativo (`next/font`)
- Routing baseado em sistema de arquivos
- Excelente DX e ecossistema robusto

**Alternativa viável:** Astro 4+ (excelente para páginas estáticas com menos JavaScript)

### 11.2 Linguagem

**TypeScript** (obrigatório)

Justificativa:
- Tipos explícitos eliminam bugs de runtime evitáveis
- Autocompletion acelera o desenvolvimento
- Manutenção futura muito mais segura

### 11.3 Estilização

**CSS Modules + CSS Custom Properties**

Justificativa:
- Zero dependência de runtime
- Escopo de CSS automático por componente
- Variáveis CSS nativas para temas
- Sem overhead de bundle

**Alternativa aceitável:** Tailwind CSS v4 (caso o time já tenha familiaridade)

**Evitar:**
- Styled Components / Emotion (overhead de runtime desnecessário para landing page)
- CSS-in-JS pesado

### 11.4 Animações

**GSAP (GreenSock Animation Platform) — Recomendado**

Aplicação:
- ScrollTrigger para animações conduzidas por scroll
- Timeline para sequências complexas
- SplitText para animações de headlines (plugin premium)

**Alternativa para equipes menores:** Framer Motion (ótima DX, integração nativa com React)

**CSS puro para:**
- Transitions de hover
- Fade-in simples de entrada
- Estados de botão

### 11.5 Ícones

**Phosphor Icons** ou **Lucide React**

Justificativa:
- SVG inline (sem requests externos)
- Tree-shakeable (apenas ícones usados no bundle)
- Consistência de estilo

### 11.6 Formulário

**React Hook Form + Zod**

```typescript
// Exemplo de schema de validação
import { z } from 'zod';

export const appointmentSchema = z.object({
  name: z.string().min(2, 'Nome muito curto').max(60),
  phone: z.string().regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone inválido'),
  email: z.string().email('E-mail inválido'),
  objective: z.enum(['emagrecimento', 'hipertrofia', 'reeducacao', 'outro']),
  message: z.string().max(300).optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
```

### 11.7 Envio do formulário

**Opção A:** Resend (e-mail transacional) + API Route do Next.js
**Opção B:** Integração direta com WhatsApp API (Twilio ou Z-API)
**Opção C:** Google Forms embed (mais simples, menos premium)

Recomendação: **Opção A** para manter a experiência premium do pop-up.

### 11.8 Analytics

**Google Analytics 4** + **Google Tag Manager**

Configurar eventos customizados para:
- `form_open` — pop-up aberto
- `form_submit` — formulário enviado
- `cta_click` — qualquer CTA clicado
- `scroll_depth` — 25%, 50%, 75%, 100%
- `faq_open` — item de FAQ expandido

### 11.9 SEO e Performance

**next/head** ou **Metadata API** do App Router para:
- Title, description, OG tags
- Canonical URL
- Structured data (JSON-LD para LocalBusiness)
- Sitemap automático

### 11.10 Hospedagem

**Vercel** (recomendado para Next.js)

Justificativa:
- Deploy automático com push
- Edge network global
- Preview deployments para QA
- Analytics integrado
- Certificado SSL automático

**Alternativa:** Cloudflare Pages

### 11.11 Mapa

**Google Maps Embed API** (iframe responsivo)

Para evitar bundle pesado do SDK JavaScript completo:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=...SEU_PLACE_ID..."
  width="100%"
  height="400"
  style="border:0; border-radius: 16px;"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
/>
```

### 11.12 Resumo da stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 14 |
| Linguagem | TypeScript |
| Estilização | CSS Modules + Custom Properties |
| Animações | GSAP ScrollTrigger + CSS |
| Ícones | Phosphor Icons |
| Formulário | React Hook Form + Zod |
| E-mail | Resend |
| Analytics | GA4 + GTM |
| Hosting | Vercel |
| Mapa | Google Maps Embed |

---

## 12. Arquitetura de Código e Boas Práticas

### 12.1 Estrutura de pastas

```
/
├── app/
│   ├── layout.tsx              # Root layout com metadata global
│   ├── page.tsx                # Landing page principal
│   ├── api/
│   │   └── appointment/
│   │       └── route.ts        # API route para envio do formulário
│   └── globals.css             # Reset + variáveis CSS globais
│
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   └── index.ts
│   │   ├── Badge/
│   │   └── Input/
│   │
│   ├── molecules/
│   │   ├── TestimonialCard/
│   │   ├── BenefitCard/
│   │   ├── StepCard/
│   │   ├── FAQItem/
│   │   └── FormField/
│   │
│   └── organisms/
│       ├── Navbar/
│       ├── HeroSection/
│       ├── SocialProofSection/
│       ├── PainSection/
│       ├── MethodSection/
│       ├── BenefitsSection/
│       ├── AuthoritySection/
│       ├── WhoIsItForSection/
│       ├── FAQSection/
│       ├── CTASection/
│       ├── ContactSection/
│       ├── Footer/
│       └── AppointmentModal/
│
├── hooks/
│   ├── useScrollReveal.ts      # IntersectionObserver para animações
│   ├── useScrollProgress.ts    # Progresso de scroll para o hero video
│   ├── useModal.ts             # Estado do modal de formulário
│   └── useNavbarScroll.ts      # Comportamento da navbar
│
├── lib/
│   ├── validations.ts          # Schemas Zod
│   ├── sendEmail.ts            # Integração com Resend
│   └── analytics.ts            # Helpers do GTM/GA4
│
├── content/
│   ├── testimonials.ts         # Dados de depoimentos
│   ├── benefits.ts             # Dados de benefícios
│   ├── method-steps.ts         # Dados dos steps do método
│   └── faq.ts                  # Perguntas e respostas
│
├── types/
│   ├── forms.ts                # Tipos de formulário
│   └── content.ts              # Tipos de conteúdo
│
└── public/
    ├── videos/
    │   └── hero.mp4
    ├── images/
    └── fonts/ (se não usar Google Fonts)
```

### 12.2 Princípios de código limpo

**Nomenclatura:**
```typescript
// ✅ Correto — nomes descritivos e consistentes
const isModalOpen = false;
const handleFormSubmit = () => {};
const testimonials: Testimonial[] = [];

// ❌ Evitar — abreviações obscuras ou nomes sem contexto
const mo = false;
const hfs = () => {};
const t = [];
```

**Componentes:**
```typescript
// ✅ Componente bem tipado e com props claras
interface TestimonialCardProps {
  authorName: string;
  authorObjective: string;
  content: string;
  rating: number;
  avatarUrl?: string;
}

export function TestimonialCard({
  authorName,
  authorObjective,
  content,
  rating,
  avatarUrl,
}: TestimonialCardProps) {
  // ...
}

// ❌ Evitar — props não tipadas, any
export function TestimonialCard(props: any) {
  // ...
}
```

**Separação de responsabilidades:**
```typescript
// ✅ Lógica de negócio separada da UI

// hooks/useModal.ts
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return { isOpen, open, close };
}

// components/organisms/AppointmentModal/AppointmentModal.tsx
export function AppointmentModal() {
  const { isOpen, close } = useModal();
  // Apenas UI aqui
}
```

**Dados separados da apresentação:**
```typescript
// content/benefits.ts
export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    id: 'adherence',
    icon: 'CheckCircle',
    title: 'Emagreça com aderência',
    description: 'Um plano que você consegue seguir na vida real.',
  },
  // ...
];

// components/organisms/BenefitsSection.tsx
import { benefits } from '@/content/benefits';

export function BenefitsSection() {
  return (
    <section>
      {benefits.map((benefit) => (
        <BenefitCard key={benefit.id} {...benefit} />
      ))}
    </section>
  );
}
```

### 12.3 Performance — Regras obrigatórias

**Imagens:**
```tsx
// ✅ Sempre usar next/image
import Image from 'next/image';

<Image
  src="/images/nutritionist-photo.jpg"
  alt="Foto da nutricionista [Nome]"
  width={600}
  height={800}
  priority // Apenas para imagens above-the-fold
  className={styles.authorPhoto}
/>
```

**Fontes:**
```typescript
// app/layout.tsx
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});
```

**Code splitting:**
```typescript
// Componentes pesados com carregamento lazy
import dynamic from 'next/dynamic';

const AppointmentModal = dynamic(
  () => import('@/components/organisms/AppointmentModal'),
  { ssr: false } // Modal não precisa de SSR
);

const MapSection = dynamic(
  () => import('@/components/organisms/ContactSection'),
  { ssr: false } // Mapa não precisa de SSR
);
```

### 12.4 Acessibilidade — Requisitos base

```tsx
// ✅ Semântica HTML correta
<header role="banner">
  <nav aria-label="Navegação principal">
    <a href="#hero" aria-label="Ir para o início">Logo</a>
  </nav>
</header>

<main id="main-content">
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">Headline principal</h1>
  </section>
</main>

// ✅ Modal acessível
<dialog
  aria-modal="true"
  aria-labelledby="modal-title"
  role="dialog"
>
  <h2 id="modal-title">Agendar Consulta</h2>
  <button aria-label="Fechar modal" onClick={close}>×</button>
</dialog>

// ✅ Focus trap no modal
// Usar a biblioteca 'focus-trap-react' ou implementar manualmente
```

**Contraste mínimo:** 4.5:1 para texto normal, 3:1 para texto grande.

### 12.5 Segurança

```typescript
// API Route — validação e rate limiting
// app/api/appointment/route.ts

import { z } from 'zod';
import { appointmentSchema } from '@/lib/validations';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validar com Zod — nunca confiar no input do cliente
    const data = appointmentSchema.parse(body);
    
    // Sanitizar dados antes de usar
    const sanitizedName = data.name.trim().slice(0, 60);
    
    // Enviar e-mail
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'noreply@seudominio.com.br',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nova consulta: ${sanitizedName}`,
      // ...
    });
    
    return Response.json({ success: true }, { status: 200 });
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: 'Dados inválidos', details: error.errors },
        { status: 400 }
      );
    }
    
    // Nunca expor detalhes de erro interno
    return Response.json(
      { error: 'Erro interno. Tente novamente.' },
      { status: 500 }
    );
  }
}
```

**Variáveis de ambiente:**
```env
# .env.local (NUNCA commitar no Git)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=contato@seudominio.com.br
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_MAPS_API_KEY=AIzaXXXXXXXXXXX
```

### 12.6 Git e fluxo de trabalho

**Convenção de commits (Conventional Commits):**
```
feat: adiciona seção de depoimentos
fix: corrige animação do FAQ no iOS
style: ajusta espaçamento da seção hero
perf: lazy loading nas imagens de autoridade
a11y: adiciona aria-label nos botões de CTA
chore: atualiza dependências
```

**Branches:**
```
main          → produção (deploy automático via Vercel)
staging       → homologação
feat/*        → novas funcionalidades
fix/*         → correções
```

**.gitignore essencial:**
```
.env
.env.local
.env.production
node_modules/
.next/
.vercel/
```

---

## 13. Requisitos Funcionais

### 13.1 Pop-up de formulário

| Requisito | Especificação |
|-----------|---------------|
| Abertura | Ao clicar em qualquer CTA da página |
| Fechamento | Botão X, tecla Esc, ou clique fora |
| Campos | Nome · Telefone · E-mail · Objetivo (select) · Mensagem (opcional) |
| Validação | Em tempo real, mensagens claras abaixo do campo |
| Envio | Loading state no botão durante o POST |
| Sucesso | Mensagem de confirmação no próprio modal |
| Erro | Mensagem de erro com instrução de reenvio |
| Acessibilidade | Focus trap, aria-modal, fechar com Esc |

### 13.2 Navbar

| Requisito | Especificação |
|-----------|---------------|
| Posição | `position: fixed; top: 0; z-index: 100` |
| Estado inicial | Transparente, sem fundo |
| Após 80px de scroll | Background + blur (glass effect) |
| Links | Scroll suave para âncoras (`scroll-behavior: smooth`) |
| Mobile | Hamburger → menu lateral com overlay escuro |
| CTA | Sempre visível, sempre funcional |

### 13.3 Vídeo do hero

| Requisito | Especificação |
|-----------|---------------|
| Sincronização | `currentTime` atualizado via `scroll` event (passive) |
| Formato | `.mp4` com `codec: H.264` para compatibilidade universal |
| Fallback | Imagem estática se `video` não suportado |
| Mobile | Reprodução muted + playsinline |
| Performance | `preload="auto"`, vídeo otimizado ≤ 5MB |

### 13.4 Navegação e scroll

| Requisito | Especificação |
|-----------|---------------|
| Âncoras | IDs em cada seção: `#sobre`, `#metodo`, `#depoimentos`, `#faq` |
| Scroll suave | CSS: `html { scroll-behavior: smooth }` |
| Offset | Compensar altura da navbar fixa: `scroll-margin-top: 80px` |

### 13.5 FAQ Accordion

| Requisito | Especificação |
|-----------|---------------|
| Comportamento | Um item aberto por vez (accordion) |
| Animação | `max-height` animado + fade-in |
| Mobile | Largura total, sem colunas |
| Acessibilidade | `aria-expanded`, `aria-controls` |

---

## 14. Requisitos Não Funcionais

### 14.1 Performance

| Métrica | Meta |
|---------|------|
| LCP (Largest Contentful Paint) | ≤ 2.5s |
| FID / INP (Interaction to Next Paint) | ≤ 200ms |
| CLS (Cumulative Layout Shift) | ≤ 0.1 |
| FCP (First Contentful Paint) | ≤ 1.8s |
| Lighthouse Performance Score | ≥ 90 |
| Bundle JS inicial | ≤ 150KB gzipped |

### 14.2 SEO

| Item | Requisito |
|------|-----------|
| Title tag | Inclui nome da profissional + especialidade + cidade |
| Meta description | 120-160 caracteres, com CTA implícito |
| H1 | Único, com keyword principal |
| Imagens | Alt text descritivo em todas |
| Schema.org | JSON-LD para `LocalBusiness` ou `HealthAndBeautyBusiness` |
| Canonical URL | Configurada corretamente |
| OG Tags | Título, descrição, imagem (1200x630px) |

### 14.3 Acessibilidade

| Item | Requisito |
|------|-----------|
| Contraste | WCAG AA (4.5:1 texto, 3:1 UI) |
| Teclado | Navegação total via Tab/Shift+Tab/Enter/Esc |
| Leitores de tela | Testado com VoiceOver (iOS) e NVDA (Windows) |
| Texto alternativo | Em todos os elementos visuais |
| Foco visível | Outline visível e estilizado |

### 14.4 Compatibilidade

| Browser | Suporte |
|---------|---------|
| Chrome (últimas 2 versões) | ✅ |
| Safari (últimas 2 versões) | ✅ |
| Firefox (últimas 2 versões) | ✅ |
| Edge (últimas 2 versões) | ✅ |
| Samsung Internet | ✅ |
| IE 11 | ❌ (não suportado) |

---

## 15. Objeções e Estratégias de Conversão

### 15.1 Mapeamento completo

| Objeção | Onde tratar | Como tratar |
|---------|-------------|-------------|
| "Vou passar fome?" | Seção de benefícios + FAQ | Mostrar aderência, flexibilidade, plano adaptado à rotina |
| "Isso funciona para mim?" | Método + Autoridade | Mostrar personalização real e processo individualizado |
| "Já tentei tudo" | Seção de dor | Validar a frustração; mostrar que o problema é estratégia, não esforço |
| "Vale o investimento?" | Diferenciais + CTA | Reforçar acompanhamento, resultado sustentável, valor do método |
| "Consigo seguir?" | Método + FAQ | Mostrar que o plano é construído para a rotina real |
| "É realmente profissional?" | Autoridade + CRN + Prova social | Credenciais, formação, número de pacientes, depoimentos reais |

### 15.2 Gatilhos psicológicos aplicados por seção

| Seção | Gatilho principal |
|-------|------------------|
| Hero | Desejo de transformação |
| Prova social | Prova social + validação |
| Dor | Identificação + empatia |
| Método | Segurança + clareza |
| Benefícios | Antecipação de resultado |
| Diferenciais | Exclusividade + comparação |
| Para quem é/não é | Comprometimento + qualificação |
| FAQ | Redução de incerteza |
| CTA final | Reciprocidade + facilidade de ação |

---

## 16. Critérios de Qualidade

### 16.1 O que define uma implementação excelente

- [ ] Página carrega em menos de 2.5 segundos em 4G
- [ ] Visual transmite premium nos primeiros 3 segundos
- [ ] CTA visível sem scroll em qualquer dispositivo
- [ ] Vídeo do hero sincronizado sem travamentos
- [ ] Formulário enviado com feedback claro de sucesso
- [ ] Navegação por teclado funciona completamente
- [ ] Mobile com hierarquia tão forte quanto desktop
- [ ] Nenhum erro no console em produção
- [ ] Lighthouse score ≥ 90 em todas as métricas
- [ ] Todas as animações fluidas a 60fps

### 16.2 O que seria um erro grave

- [ ] Hero sem CTA visível no primeiro scroll
- [ ] Layout quebrado em algum breakpoint
- [ ] Formulário que não funciona ou não dá feedback
- [ ] Vídeo que trava a experiência de scroll
- [ ] Textos ilegíveis (contraste, tamanho)
- [ ] Animações que causam CLS
- [ ] Tempo de carregamento acima de 4 segundos
- [ ] Pop-up que não fecha com Esc
- [ ] Imagens sem alt text
- [ ] Credenciais da profissional ausentes

---

## 17. Checklist Final de Implementação

### Conteúdo
- [ ] Headline principal definida e aprovada
- [ ] Subtítulo definido e aprovado
- [ ] CTA text definido
- [ ] Vídeo do hero produzido e otimizado (≤5MB)
- [ ] Foto profissional da nutricionista entregue
- [ ] Depoimentos coletados (mínimo 3)
- [ ] Dados de prova social confirmados (nº de pacientes, etc.)
- [ ] Texto do método escrito e aprovado
- [ ] Benefícios listados e aprovados
- [ ] FAQ escrito (mínimo 8 perguntas)
- [ ] Texto de autoridade escrito
- [ ] Informações de contato confirmadas

### Design
- [ ] Paleta de cores aprovada
- [ ] Tipografia selecionada e testada
- [ ] Design do hero aprovado (desktop + mobile)
- [ ] Design de todas as seções aprovado
- [ ] Design do pop-up aprovado
- [ ] Estados de hover definidos
- [ ] Animações definidas e aprovadas

### Desenvolvimento
- [ ] Setup do projeto Next.js + TypeScript
- [ ] CSS custom properties configuradas
- [ ] Sistema de fontes configurado
- [ ] Todos os componentes implementados
- [ ] Vídeo scroll-sync implementado e testado
- [ ] Pop-up implementado com focus trap
- [ ] Formulário validando e enviando
- [ ] Navbar com comportamento de scroll
- [ ] Scroll reveals implementados
- [ ] FAQ accordion funcionando
- [ ] Mapa integrado e responsivo
- [ ] Lazy loading em imagens
- [ ] Code splitting em componentes pesados

### Qualidade
- [ ] Teste em Chrome, Safari, Firefox, Edge
- [ ] Teste em iPhone (Safari) e Android (Chrome)
- [ ] Teste com teclado (sem mouse)
- [ ] Lighthouse ≥ 90 em Performance, SEO, Accessibility
- [ ] CLS ≤ 0.1 confirmado
- [ ] Nenhum erro no console
- [ ] Formulário testado de ponta a ponta (envio real)
- [ ] E-mail de notificação recebido com dados corretos

### SEO e Analytics
- [ ] Title tag configurada
- [ ] Meta description configurada
- [ ] OG image criada (1200x630px)
- [ ] Schema.org JSON-LD implementado
- [ ] GA4 + GTM instalados
- [ ] Eventos customizados configurados (form_submit, cta_click)
- [ ] Google Search Console conectado

### Deploy
- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Domínio personalizado conectado
- [ ] SSL ativo
- [ ] Redirecionamentos configurados (www → sem www ou vice-versa)
- [ ] Deploy de produção testado

---

*PRD versão 1.0 — Projeto Google Antigravity*
*Nutricionista Premium Landing Page*
*Documento gerado para uso interno do time de produto, design e engenharia.*
