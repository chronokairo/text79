# Mascote e Chatbot - Text79

## 📹 Vídeo do Mascote

O botão flutuante agora usa um vídeo do mascote em vez do ícone do WhatsApp. 

### Formatos de Vídeo Necessários

Você precisa adicionar os seguintes arquivos de vídeo na raiz do projeto:

1. **mascot-animation.mp4** - Formato principal (compatível com a maioria dos navegadores)
2. **mascot-animation.webm** - Formato alternativo (melhor compressão e qualidade)

### Especificações Recomendadas do Vídeo

- **Resolução**: 200x200px ou 300x300px (quadrado)
- **Duração**: 2-5 segundos (loop)
- **Formato**: MP4 (H.264) e WebM (VP9)
- **Taxa de quadros**: 30 FPS
- **Fundo**: Transparente ou circular
- **Tamanho**: Máximo 500KB para carregamento rápido

### Como Criar o Vídeo

1. **Design do Mascote**: Crie uma animação do mascote (exemplo: acenar, piscar, sorrir)
2. **Exportar**: Exporte em MP4 e WebM
3. **Otimizar**: Use ferramentas como HandBrake ou FFmpeg para reduzir o tamanho

### Exemplo de Conversão com FFmpeg

```bash
# Converter para MP4 otimizado
ffmpeg -i mascote-original.mov -vf scale=300:300 -c:v libx264 -preset slow -crf 23 mascot-animation.mp4

# Converter para WebM
ffmpeg -i mascote-original.mov -vf scale=300:300 -c:v libvpx-vp9 -crf 30 mascot-animation.webm
```

## 💬 Funcionalidades do Chatbot

### Recursos Implementados

✅ **Abertura/Fechamento Suave**: Modal com animações fluidas
✅ **Respostas Inteligentes**: Bot responde baseado em palavras-chave
✅ **Quick Replies**: Botões de resposta rápida para ações comuns
✅ **Design Responsivo**: Funciona perfeitamente em mobile (tela cheia)
✅ **Avatar Animado**: Vídeo do mascote também aparece no header do chat
✅ **Interface Moderna**: Design clean e profissional

### Tópicos que o Bot Responde

1. **Planos e Preços** - Informações sobre planos disponíveis
2. **Como Funciona** - Explicação sobre os recursos da plataforma
3. **Demonstração** - Agendamento de demo personalizada
4. **Contato** - Formas de contato
5. **Plano Gratuito** - Informações sobre o plano estudante
6. **Soluções para Escolas** - Proposta para instituições
7. **IA e Autorregulação** - Como a IA é usada na plataforma

### Personalização

Para adicionar mais respostas, edite a função `handleBotResponse()` em `script.js`:

```javascript
if (lowerMessage.includes('sua-palavra-chave')) {
    response = 'Sua resposta aqui';
}
```

## 🎨 Estilos Personalizáveis

Você pode personalizar as cores do chatbot editando as variáveis CSS em `styles.css`:

```css
/* Cores principais do chatbot */
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
```

## 📱 Responsividade

- **Desktop**: Chatbot aparece como modal no canto inferior direito (380x550px)
- **Mobile**: Chatbot ocupa tela cheia para melhor experiência
- **Mascote**: Reduz de tamanho em telas menores (100px → 80px → 70px)

## 🚀 Próximas Melhorias Sugeridas

- [ ] Integração com API de chat real
- [ ] Histórico de conversas
- [ ] Notificações sonoras
- [ ] Typing indicator (bot digitando...)
- [ ] Suporte a anexos
- [ ] Integração com WhatsApp/Telegram
- [ ] Analytics de conversas

## 📝 Notas Importantes

1. O vídeo do mascote deve carregar rapidamente (mantenha abaixo de 500KB)
2. Use `autoplay`, `loop` e `muted` para reprodução automática
3. O fallback é um ícone padrão caso o vídeo não carregue
4. O chatbot é fechado automaticamente ao clicar no botão X
5. O mascote reaparece quando o chatbot é fechado
