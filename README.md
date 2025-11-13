# ⚙️ Repair Shop — Sistema de Gerenciamento de Assistência Técnica

Um sistema web moderno desenvolvido com **Next.js 15**, voltado para o **gerenciamento de uma assistência técnica**.  
Permite o controle de **clientes, ordens de serviço, status de reparos**, além de integrar autenticação e banco de dados de forma eficiente.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com um stack moderno e performático:

### **Frontend & Framework**
- [Next.js 15](https://nextjs.org/) — Framework React de alto desempenho  
- [React 19](https://react.dev/) — Biblioteca base para UI  
- [Tailwind CSS 4](https://tailwindcss.com/) — Estilização rápida e responsiva  
- [shadcn/ui](https://ui.shadcn.com/) — Componentes acessíveis e bonitos  
- [Lucide React](https://lucide.dev/) — Ícones minimalistas e consistentes  
- [next-themes](https://github.com/pacocoursey/next-themes) — Suporte a tema claro/escuro

### **Backend & Banco de Dados**
- [Drizzle ORM](https://orm.drizzle.team/) — ORM moderno, typesafe e rápido  
- [Neon Serverless Postgres](https://neon.tech/) — Banco de dados PostgreSQL serverless  
- [Drizzle Kit](https://orm.drizzle.team/docs/kit) — Ferramenta de migração e geração de schema

### **Autenticação**
- [Kinde Auth Next.js](https://kinde.com/docs/developer-tools/nextjs-sdk/) — Autenticação moderna e segura

### **Validação e Formulários**
- [React Hook Form](https://react-hook-form.com/) — Gerenciamento de formulários reativo  
- [Zod](https://zod.dev/) — Validação de dados com TypeScript  
- [drizzle-zod](https://www.npmjs.com/package/drizzle-zod) — Integração entre Drizzle e Zod  
- [@hookform/resolvers](https://react-hook-form.com/api/useform) — Conecta React Hook Form e Zod

### **Outros**
- [Sentry](https://sentry.io/welcome/) — Monitoramento e rastreamento de erros  
- [clsx](https://github.com/lukeed/clsx) / [class-variance-authority](https://cva.style/) — Controle dinâmico de classes CSS  
- [Radix UI](https://www.radix-ui.com/) — Componentes de acessibilidade base  
- [tsx](https://github.com/esbuild-kit/tsx) — Execução de scripts TypeScript moderna  
- [dotenv](https://github.com/motdotla/dotenv) — Variáveis de ambiente  
- ESLint e TypeScript para garantir qualidade e padronização do código  

---

## 📂 Estrutura do Projeto

```
repair-shop/
│
├── src/
│   ├── app/               # Páginas e rotas Next.js (App Router)
│   ├── components/        # Componentes reutilizáveis
│   ├── db/                # Configuração e schema do banco (Drizzle)
│   ├── lib/               # Utilitários e helpers
│   ├── styles/            # Estilos globais e configurações Tailwind
│   └── ...                # Outras pastas do projeto
│
├── drizzle.config.ts      # Configuração do Drizzle
├── tailwind.config.ts     # Configuração do Tailwind
├── tsconfig.json          # Configuração TypeScript
├── .env.local             # Variáveis de ambiente (não versionar)
└── package.json
```

---

## ⚙️ Scripts Disponíveis

| Comando | Descrição |
|----------|------------|
| `npm run dev` | Inicia o servidor de desenvolvimento com Turbopack |
| `npm run build` | Cria a versão otimizada para produção |
| `npm start` | Inicia o app em modo de produção |
| `npm run lint` | Executa o linter para verificar erros de código |
| `npm run db:generate` | Gera o schema do banco de dados com Drizzle |
| `npm run db:migrate` | Executa as migrações no banco de dados |

---

## 🧩 Configuração do Banco de Dados

1. Crie um banco **PostgreSQL** (pode ser local ou via [Neon](https://neon.tech))
2. Configure seu `.env.local`:

```bash
DATABASE_URL="sua_string_de_conexao"
KINDE_ISSUER_URL="sua_url_kinde"
KINDE_CLIENT_ID="seu_client_id"
KINDE_CLIENT_SECRET="seu_client_secret"
```

3. Gere e aplique as migrações:

```bash
npm run db:generate
npm run db:migrate
```

---

## 🧠 Roadmap Futuro

- [ ] Dashboard com gráficos de serviços e faturamento  
- [ ] Notificações automáticas para clientes  
- [ ] Upload de imagens de produtos/serviços  
- [ ] Multiusuário com permissões (técnico, gerente, admin)  

---

## 👨‍💻 Autor

**Vinicius Lima**  
🎓 Engenheiro da Computação | 💻 Desenvolvedor Web  
🔗 [LinkedIn](https://linkedin.com/in/viniciuslima115) • [GitHub](https://github.com/ViniciusLima115)

---

## 📝 Licença

Este projeto é distribuído sob a licença **MIT**.  
Sinta-se livre para usar, modificar e contribuir!
