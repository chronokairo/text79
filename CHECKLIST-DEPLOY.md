# ✅ Checklist de Publicação - Text79

## Antes de Publicar

### 📝 Conteúdo
- [ ] Revisar todos os textos em português
- [ ] Verificar links internos funcionando
- [ ] Conferir informações de contato (telefone, email)
- [ ] Adicionar imagens reais (substituir placeholders)
- [ ] Atualizar estatísticas e números
- [ ] Verificar preços e valores corretos

### 🎨 Design
- [ ] Testar em diferentes navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Verificar animações em todos os navegadores
- [ ] Conferir cores e contraste
- [ ] Validar acessibilidade (WCAG)
- [ ] Testar em modo escuro (se aplicável)

### 🔧 Funcionalidades
- [ ] Testar navegação entre páginas
- [ ] Verificar menu mobile
- [ ] Testar formulário de contato
- [ ] Validar campos do formulário
- [ ] Testar botão WhatsApp
- [ ] Verificar smooth scroll
- [ ] Testar toggle de preços
- [ ] Conferir tabs de recursos

### ⚡ Performance
- [ ] Comprimir imagens
- [ ] Minificar CSS
- [ ] Minificar JavaScript
- [ ] Otimizar fontes
- [ ] Configurar cache
- [ ] Testar velocidade de carregamento
- [ ] Verificar Performance no Lighthouse

### 🔍 SEO
- [ ] Adicionar meta tags em todas as páginas
- [ ] Criar sitemap.xml
- [ ] Criar robots.txt
- [ ] Adicionar Open Graph tags
- [ ] Adicionar Twitter Cards
- [ ] Configurar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Adicionar alt text em imagens

### 🔒 Segurança
- [ ] Configurar HTTPS
- [ ] Adicionar headers de segurança
- [ ] Sanitizar inputs do formulário
- [ ] Configurar CSP (Content Security Policy)
- [ ] Adicionar proteção contra CSRF
- [ ] Configurar rate limiting

## Configurações do Servidor

### Arquivo .htaccess (Apache)

```apache
# Redirecionar HTTP para HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Comprimir arquivos
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache de arquivos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Segurança
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://seusite.com/sitemap.xml
```

## Testando Online

### Ferramentas de Teste

1. **Performance**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

2. **SEO**
   - Google Search Console
   - SEMrush
   - Ahrefs

3. **Acessibilidade**
   - WAVE
   - aXe DevTools
   - Lighthouse

4. **Responsividade**
   - BrowserStack
   - Responsinator
   - Google Mobile-Friendly Test

5. **Validação**
   - W3C HTML Validator
   - W3C CSS Validator
   - JSHint (JavaScript)

## Integrações Recomendadas

### Analytics e Tracking
- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Facebook Pixel (se usar anúncios)
- [ ] Hotjar (mapas de calor)

### Marketing
- [ ] Mailchimp/SendGrid (email marketing)
- [ ] Typeform (formulários avançados)
- [ ] Calendly (agendamento de demos)

### Chat/Suporte
- [ ] Tawk.to (chat ao vivo)
- [ ] Zendesk
- [ ] Intercom

### Pagamentos (para planos pagos)
- [ ] Stripe
- [ ] PayPal
- [ ] PagSeguro/Mercado Pago (Brasil)

## Backup e Manutenção

### Antes do Deploy
- [ ] Fazer backup completo do site atual
- [ ] Testar em ambiente de staging
- [ ] Preparar plano de rollback

### Após o Deploy
- [ ] Verificar todas as páginas
- [ ] Monitorar logs de erro
- [ ] Verificar analytics funcionando
- [ ] Testar formulários de contato
- [ ] Verificar integrações

### Manutenção Regular
- [ ] Backup semanal automático
- [ ] Atualizar dependências mensalmente
- [ ] Revisar analytics mensalmente
- [ ] Atualizar conteúdo regularmente
- [ ] Monitorar uptime

## Comandos Úteis

### Comprimir Arquivos

```bash
# CSS
npx cleancss -o styles.min.css styles.css
npx cleancss -o pages-styles.min.css pages-styles.css

# JavaScript
npx terser script.js -o script.min.js
npx terser pages-scripts.js -o pages-scripts.min.js

# Imagens
npx imagemin images/*.{jpg,png} --out-dir=images/optimized
```

### Deploy com Git

```bash
# Adicionar arquivos
git add .

# Commit
git commit -m "Deploy: Atualização do site"

# Push para produção
git push origin main

# Deploy automático (se configurado)
# O servidor irá automaticamente atualizar
```

### FTP/SFTP

```bash
# Upload via SFTP
sftp usuario@seuservidor.com
put -r * /public_html/
```

## Contatos de Emergência

### Suporte Técnico
- Hospedagem: [contato da hospedagem]
- Domínio: [contato do registrador]
- Desenvolvedor: [seu contato]

### Senhas e Acessos
- [ ] Documentar todos os acessos em local seguro
- [ ] Usar gerenciador de senhas (1Password, LastPass)
- [ ] Configurar autenticação de 2 fatores

## Pós-Lançamento

### Primeiros Dias
- [ ] Monitorar tráfego
- [ ] Verificar erros 404
- [ ] Ler feedback dos usuários
- [ ] Corrigir bugs urgentes
- [ ] Responder comentários/mensagens

### Primeiros Meses
- [ ] Analisar métricas
- [ ] A/B testing de CTAs
- [ ] Otimizar conversão
- [ ] Coletar depoimentos
- [ ] Criar conteúdo para blog

## Status do Projeto

- [ ] Tudo testado e funcionando
- [ ] Documentação completa
- [ ] Cliente aprovou
- [ ] Backup realizado
- [ ] Deploy em staging OK
- [ ] Pronto para produção

---

**Boa sorte com o lançamento!** 🚀

Data de Deploy: ___/___/______
Responsável: _________________
