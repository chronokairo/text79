# Botão Flutuante de Chatbot - Text79

## Visão Geral

Foi implementado um botão flutuante de chatbot em todas as páginas do site Text79, usando o ícone do robô (`robo.svg`) dos assets.

## Características Implementadas

### 1. Design Visual
- **Posição**: Canto inferior direito (fixo)
- **Cor**: Azul primário da marca (`--primary-blue: #4070B7`)
- **Ícone**: Robô SVG com filtro para ficar branco
- **Tamanho**: 60px × 60px (desktop), 55px × 55px (mobile)
- **Efeitos**: Sombra suave com efeito de elevação no hover

### 2. Animações
- **Entrada**: Animação de escala ao carregar a página
- **Pulsação**: Efeito de pulso após 1 segundo para chamar atenção
- **Hover**: Aumenta de tamanho e muda para azul escuro
- **Click**: Animação de bounce ao clicar

### 3. Funcionalidade
- **Evento de clique**: Configurado com placeholder (alert temporário)
- **Remoção de pulso**: Para após primeira interação
- **Acessibilidade**: Inclui `aria-label` para leitores de tela

## Arquivos Modificados

### 1. `styles.css`
Adicionado no final do arquivo:
- Classe `.floating-chatbot` com estilos base
- Animação `@keyframes chatbot-pulse` para efeito pulsante
- Media queries para responsividade mobile

### 2. `script.js`
Adicionado no final do arquivo:
- Event listener para `DOMContentLoaded`
- Lógica de animação de entrada
- Handler de clique com animação de bounce
- Controle da animação de pulso

### 3. Páginas HTML (todas)
Adicionado antes do `</body>`:
```html
<!-- Floating Chatbot Button -->
<button class="floating-chatbot" aria-label="Abrir chat de ajuda">
    <img src="assets/robo.svg" alt="Assistente Virtual">
</button>
```

**Páginas atualizadas:**
- `index.html`
- `home.html`
- `recursos.html`
- `precos.html`
- `para-quem.html`
- `contato.html`

## Como Personalizar

### Alterar Posição
```css
.floating-chatbot {
    bottom: 2rem;  /* Distância do fundo */
    right: 2rem;   /* Distância da direita */
}
```

### Alterar Cores
```css
.floating-chatbot {
    background: var(--primary-blue);  /* Cor de fundo */
}

.floating-chatbot:hover {
    background: var(--dark-blue);     /* Cor no hover */
}
```

### Implementar Funcionalidade Real
No arquivo `script.js`, substitua este código:
```javascript
alert('Em breve! O chat será implementado aqui.');
```

Por:
```javascript
// Abrir widget de chat
// Exemplo: window.openChatWidget();
// Ou redirecionar: window.location.href = '/chat';
// Ou exibir modal de chat customizado
```

## Próximos Passos

1. **Integrar com plataforma de chat**: WhatsApp, Intercom, Drift, ou chat customizado
2. **Adicionar tooltip**: "Precisa de ajuda?" ao passar o mouse
3. **Contador de mensagens**: Badge com número de mensagens não lidas
4. **Status online/offline**: Indicador visual de disponibilidade

## Compatibilidade

- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Responsivo para mobile e desktop
- ✅ Acessível com ARIA labels
- ✅ Performance otimizada com CSS animations

## Suporte

O botão está pronto para ser conectado a qualquer sistema de chat. Basta implementar a lógica de abertura no event listener do botão no arquivo `script.js`.
