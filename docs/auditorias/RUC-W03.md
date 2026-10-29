# Relatório Unificado de Conformidade (RUC) — W-03 (Revisão Pós-Auditoria)

**Projeto:** perfil_profissional  
**Repositório:** [github.com/hallanbrito/perfil_profissional](https://github.com/hallanbrito/perfil_profissional)  
**Fatia:** W-03 — Engenharia, Qualidade e Segurança  
**Data:** 29 de outubro de 2026  
**Autonomia:** CH-2 (Execução agêntica estrita, abertura de Draft PR, merge bloqueado aguardando homologação do PO)  
**Referência da Auditoria Independente:** `AUD-W03-01` (Aprovação Condicionada)  
**Pull Request:** [Draft PR #22](https://github.com/hallanbrito/perfil_profissional/pull/22)  

---

## 1. Rastreabilidade e SHAs

- **SHA Baseline (`master`):** `b8460f4dfa8fe03f2c67436af9fcecd4f2e47272`
- **SHA Auditado (`AUD-W03-01`):** `3bee263c0244ad55ffcb8fe32f3193bf46e7fc02`
- **Branch de Trabalho:** `agy/w03-engenharia-qualidade-seguranca`
- **Issues Cobertas:**
  - Issue-Mãe [#2](https://github.com/hallanbrito/perfil_profissional/issues/2) — [W-03] Engenharia, Qualidade e Segurança
  - Subissue [#3](https://github.com/hallanbrito/perfil_profissional/issues/3) — W03-01: Lint e Typecheck
  - Subissue [#4](https://github.com/hallanbrito/perfil_profissional/issues/4) — W03-02: Testes Unitários e de Integração
  - Subissue [#5](https://github.com/hallanbrito/perfil_profissional/issues/5) — W03-03: CI com GitHub Actions
  - Subissue [#6](https://github.com/hallanbrito/perfil_profissional/issues/6) — W03-04: Auditoria de Segurança e Controles
- **Relação entre Versões:**
  - `3bee263` implementou a infraestrutura completa de W-03 (Vitest, Testing Library, ESLint 9, Typecheck, CI GitHub Actions).
  - A revisão pós-auditoria atende pontualmente aos 6 itens de `AUD-W03-01`: refinamento dos ignores do ESLint, especificação rigorosa de asserções de URLs e segurança nos testes de projetos, investigação das 2 anotações do CI, auditoria aprofundada de segurança/segredos, documentação de governança e versionamento do RUC no repositório.

---

## 2. Ações Corretivas Executadas (`AUD-W03-01`)

### 2.1. Rastreabilidade
- Correção do SHA auditado no RUC para `3bee263c0244ad55ffcb8fe32f3193bf46e7fc02`.
- Versionamento do presente relatório em `docs/auditorias/RUC-W03.md` para assegurar rastreabilidade perene no repositório git.

### 2.2. ESLint — Revisão de Ignores Globais
- **Arquivo modificado:** `eslint.config.mjs`.
- **Alteração:** Remoção dos globs excessivamente amplos `*.config.js` e `*.config.mjs` da chave `ignores`.
- **Justificativa das exceções remanescentes:**
  - `.next/**`, `out/**`, `build/**`, `dist/**`: artefatos temporários de compilação.
  - `node_modules/**`: dependências externas.
  - `next-env.d.ts`: declaração de tipos gerada dinamicamente pelo compilador do Next.js.
- **Resultado:** Os arquivos de configuração do ecossistema (`eslint.config.mjs`, `postcss.config.mjs`) agora são analisados pelo linter. `npm run lint` validado com zero erros e zero advertências.

### 2.3. Testes — Fortalecimento de Asserções de Repositórios
- **Arquivo modificado:** `src/__tests__/ProjectsSection.test.tsx`.
- **Alteração:** O teste `contains valid repository URLs and destinations for open-source projects` agora valida explicitamente os destinos esperados (`metodo-ch`, `PulseOps`, `maestro-router`, `DriveHub-API`, `CHDevFlow`), além de garantir a presença dos atributos de segurança `target="_blank"` e `rel="noopener noreferrer"` em todos os links externos.
- **Resultado:** 100% dos testes passaram (6 suites, 18 testes unitários/integração).

### 2.4. GitHub Actions — Análise das Anotações de CI
Na execução do workflow *CI Quality Gate* (Run ID `40941496461`, Job ID `123685752811`) no PR #22, foram inspecionadas via API do GitHub as duas anotações registradas:
1. **Warning (start_line: 2):**  
   `"Node.js 20 is deprecated. The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4, actions/setup-node@v4. For more information see: https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/"`  
   *Diagnóstico:* Trata-se de aviso informativo do runner do GitHub referente à transição interna das actions oficiais do ecossistema GitHub (`actions/checkout@v4` e `actions/setup-node@v4`) para o runtime Node.js 24. Não há falha no workflow nem no código do projeto; as actions continuam funcionando perfeitamente e suportadas pelo GitHub.
2. **Notice (start_line: 1):**  
   `"The ubuntu-latest label will migrate to Ubuntu 26 beginning October 19, 2026. For more information, see https://github.com/actions/runner-images/issues/14748"`  
   *Diagnóstico:* Comunicado de ciclo de vida da imagem do runner do GitHub Actions anunciando a migração futura do rótulo `ubuntu-latest` para Ubuntu 26. Não afeta a execução atual nem introduz risco operacional.

### 2.5. Governança e Proteção de Branch
- **Consulta à API do GitHub:** `GET /repos/hallanbrito/perfil_profissional/branches/master/protection`
- **Resultado:** HTTP 404 (`Branch not protected`).
- **Impedimento técnico registrado:** A configuração de branch protection rules requer credenciais de administração do repositório no GitHub. O agente AGY atua sob nível de autonomia CH-2 e com escopo limitado de automação, não possuindo permissão nem autorização para alterar configurações administrativas do repositório via API.
- **Recomendação ao PO:** Habilitar via GitHub Web UI (`Settings -> Branches -> Add branch protection rule` na branch `master`):
  - *Require a pull request before merging*.
  - *Require status checks to pass before merging* selecionando o check `Lint, Typecheck, Test & Build`.

---

## 3. Auditoria de Segurança Detalhada

### 3.1. Dependências de Produção (`npm audit --omit=dev`)
- **Data da execução:** 29 de outubro de 2026
- **Vulnerabilidades detectadas:** 2 vulnerabilidades transitivas (1 moderada, 1 alta):
  - `postcss <=8.5.22` empacotado internamente em `node_modules/next/node_modules/postcss`:
    - GHSA-qx2v-qp2m-jg93 (XSS via unescaped `</style>` em stringify output)
    - GHSA-6g55-p6wh-862q (Arbitrary file read via attacker-controlled sourceMappingURL em CSS comments)
    - GHSA-fxqj-rqcc-2cmp (Incomplete fix de GHSA-6g55-p6wh-862q)
    - GHSA-r28c-9q8g-f849 (Path Traversal em source map auto-loading)
- **Impacto e Resolução Recomendada:**
  - O utilitário `npm audit fix --force` sugere a instalação forçada do `next@16.4.3`.
  - **Decisão e Restrição Metodológica:** A migração para o Next.js 16 envolve quebra de compatibilidade com React 19 / APIs do Next.js e constitui mudança de major version, expressamente vetada pelas restrições da fatia W-03 e pelas regras de governança do PO. O `next@15.5.28` resolveu com sucesso os bloqueios críticos de deploy da Vercel. A eventual migração para Next.js 16 deverá ser planejada em fatia dedicada ou avaliada após release LTS consolidada pelo PO.

### 3.2. Dependências de Desenvolvimento (`npm audit`)
- A execução de `npm audit` completo apresentou exatamente as mesmas 2 vulnerabilidades transitivas do Next.js.
- **Resultado:** Nenhuma vulnerabilidade foi introduzida pelas novas dependências de engenharia e testes (`vitest`, `@testing-library/react`, `@testing-library/dom`, `@testing-library/jest-dom`, `jsdom`, `@types/node@^24`, `eslint`, `typescript`).

### 3.3. Varredura de Segredos
- **Ferramenta:** Script automatizado de busca heurística por expressões regulares (Python regex scanner).
- **Escopo:** Varredura recursiva de 43 arquivos do repositório (código-fonte, testes, dados, configs e workflows de CI), ignorando `.git` e artefatos de compilação.
- **Padrões inspecionados:** Padrões para GitHub PATs (`ghp_`, `github_pat_`), chaves privadas SSH/RSA/EC (`-----BEGIN PRIVATE KEY-----`), credenciais genéricas (`api_key`, `secret`, `password`, `token`), tokens da Vercel, OpenAI e Google API keys.
- **Resultado:** **0 segredos ou dados sensíveis encontrados**. Repositório limpo de credenciais.

---

## 4. Matriz de Validação da Esteira

| Etapa | Comando Executado | Resultado | Status |
|---|---|---|---|
| Instalação Limpa | `npm ci` | 415 pacotes auditados em 26s | Aprovado |
| Linting | `npm run lint` | `eslint .` concluído sem erros ou warnings | Aprovado |
| Verificação de Tipos | `npm run typecheck` | `tsc --noEmit` concluído sem inconsistências | Aprovado |
| Testes Automatizados | `npm test` | 6 suites, 18 testes passando em 6.46s | Aprovado |
| Compilação de Produção | `npm run build` | Páginas estáticas compiladas com sucesso (5/5) | Aprovado |
| Auditoria de Produção | `npm audit --omit=dev` | 2 vulnerabilidades transitivas documentadas (Next 15) | Documentado |

---

## 5. Resumo das Suites de Testes (Vitest + Testing Library)

1. `src/__tests__/Navbar.test.tsx` (4 testes):
   - Renderização da identidade visual e cargo full-stack.
   - Presença dos links de navegação (`#metodologia`, `#projetos`, `#sobre`, `#contato`).
   - Pill de disponibilidade e links de redes sociais.
2. `src/__tests__/Hero.test.tsx` (3 testes):
   - Títulos, subtítulo e badges de especialidades.
   - Links de CTA com destinos corretos e atributos de segurança.
3. `src/__tests__/MethodologyHighlight.test.tsx` (3 testes):
   - Tese central do Método Ágil C.H.
   - Todos os 5 estágios do Ciclo CHAVE (Contextualizar, Harmonizar, Agir, Verificar, Evoluir).
   - Links para a documentação canônica no GitHub.
4. `src/__tests__/ProjectsSection.test.tsx` (4 testes):
   - Título e filtros de categoria (IA, Back-end, Full-stack, Logística).
   - Renderização inicial de todos os projetos.
   - Filtragem dinâmica interativa via estado.
   - **Validação estrita de URLs de destino e segurança (`target="_blank"`, `rel="noopener noreferrer"`)**.
5. `src/__tests__/AboutSection.test.tsx` (2 testes):
   - Narrativa profissional, formação acadêmica e destaque de neurodivergência.
   - Catálogo de certificações acadêmicas da Wyden e filtragem por categoria.
6. `src/__tests__/ContactSection.test.tsx` (2 testes):
   - Canais de contato direto (E-mail, LinkedIn, GitHub, WhatsApp) com links e parâmetros válidos.

---

## 6. Riscos Residuais e Ações Recomendadas

1. **Next.js 16:** A vulnerabilidade de PostCSS transitiva só possui correção oficial com major upgrade do Next.js. Recomenda-se manter Next.js 15.5.28 até decisão expressa de migração pelo PO.
2. **Branch Protection:** Recomenda-se que o PO ative as regras de proteção na branch `master` pelo painel de controle do GitHub para garantir que nenhum commit seja mesclado sem que o workflow *CI Quality Gate* esteja verde.
3. **Rollback e Isolamento:** Todas as alterações estão isoladas na branch `agy/w03-engenharia-qualidade-seguranca`. A branch `master` e o ambiente de produção da Vercel permanecem inalterados no SHA `b8460f4dfa8fe03f2c67436af9fcecd4f2e47272`. Em caso de necessidade de rollback da branch de trabalho, basta fechar o PR #22 ou descartar a branch `agy/w03-engenharia-qualidade-seguranca`.

---

## 7. Status do Gate CH-2

- [x] Correções da auditoria `AUD-W03-01` implementadas.
- [x] Testes e lint validados localmente.
- [x] RUC versionado em `docs/auditorias/RUC-W03.md`.
- [ ] Push efetuado e PR #22 atualizado.
- [ ] CI Quality Gate verde no GitHub Actions.
- [ ] Aguardando parecer da 2ª auditoria independente e autorização expressa do PO antes de qualquer merge.
