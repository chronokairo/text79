# 🎯 INÍCIO RÁPIDO - Mascote e Chatbot

## ✅ O que foi feito

Substituímos o botão do WhatsApp por um **vídeo do mascote animado** que abre um **chatbot interativo** quando clicado.

## 🚀 Como Testar AGORA

1. Abra o arquivo `index.html` no seu navegador
2. Você verá um **botão circular com ícone de robô** no canto inferior direito
3. **Clique no botão** para abrir o chatbot
4. **Teste as respostas rápidas** (Ver Planos, Como Funciona, Agendar Demo)
5. **Digite uma mensagem** como "Quanto custa?" e pressione Enter
6. **Feche o chat** clicando no X

## 📹 Adicionar seu Vídeo do Mascote

### Passo 1: Preparar o Vídeo
- Crie um vídeo curto (2-5 segundos) do seu mascote
- Resolução: 200x200px ou 300x300px (quadrado)
- Loop suave
- Fundo transparente ou circular

### Passo 2: Converter para os formatos corretos

**MP4:**
```bash
ffmpeg -i mascote-original.mov -vf scale=300:300 -c:v libx264 -preset slow -crf 23 mascot-animation.mp4
```

**WebM:**
```bash
ffmpeg -i mascote-original.mov -vf scale=300:300 -c:v libvpx-vp9 -crf 30 mascot-animation.webm
```

### Passo 3: Colocar os Arquivos
Coloque os arquivos na raiz do projeto:
```
text79/
├── index.html
├── mascot-animation.mp4  ← AQUI
├── mascot-animation.webm ← AQUI
├── styles.css
└── script.js
```

## 🎨 Personalizar as Cores

Edite o arquivo `styles.css` e procure por:
```css
--primary-color: #6366f1;  /* Azul principal */
--secondary-color: #8b5cf6; /* Roxo secundário */
```

Mude para as cores da sua marca!

## 💬 Adicionar Novas Respostas do Bot

Edite o arquivo `script.js` e procure pela função `handleBotResponse()`.

Adicione um novo `if` com suas palavras-chave:

```javascript
if (lowerMessage.includes('horário') || lowerMessage.includes('atendimento')) {
    response = '🕐 Atendemos de segunda a sexta, das 9h às 18h!';
}
```

## 📱 Funciona em Mobile?

**SIM!** 
- Desktop: Modal flutuante (380x550px)
- Mobile: Tela cheia para melhor experiência
- Totalmente responsivo

## 🔧 Ajustes Rápidos

### Mudar o tamanho do botão:
```css
.mascot-float {
    width: 120px;  /* Padrão: 100px */
    height: 120px;
}
```

### Mudar a posição do botão:
```css
.mascot-float {
    bottom: 20px;  /* Distância do fundo */
    right: 20px;   /* Distância da direita */
}
```

### Desabilitar animação de flutuação:
```css
.mascot-float {
    animation: none; /* Remove o bounce */
}
```

## 🐛 Problemas Comuns

### O vídeo não aparece
✅ **Solução**: Enquanto você não adicionar o vídeo, um ícone de robô aparece automaticamente

### O chatbot não abre
✅ **Verifique**: Se o JavaScript está carregando (F12 → Console)

### Respostas não funcionam
✅ **Verifique**: Se a função `initChatbot()` está sendo chamada no `script.js`

## 📚 Documentação Completa

Para mais detalhes, consulte:
- `MASCOTE-CHATBOT.md` - Especificações técnicas
- `IMPLEMENTACAO-COMPLETA.md` - Lista completa de mudanças

## 🎯 Checklist de Implementação

- [x] Remover botão WhatsApp
- [x] Adicionar botão do mascote
- [x] Criar modal do chatbot
- [x] Adicionar respostas inteligentes
- [x] Tornar responsivo
- [x] Atualizar todas as páginas (index, recursos, preços, para-quem, contato)
- [ ] **Adicionar vídeo real do mascote** ← PRÓXIMO PASSO
- [ ] Integrar com API de chat real (opcional)

## 💡 Próximos Passos Recomendados

1. **Adicione o vídeo do mascote** (mascot-animation.mp4)
2. **Teste em diferentes dispositivos** (desktop, tablet, mobile)
3. **Personalize as cores** para combinar com sua marca
4. **Adicione mais respostas** baseado nas perguntas dos usuários
5. **Configure analytics** para rastrear interações

## 📞 Suporte

Se tiver dúvidas, consulte a documentação completa ou abra uma issue no repositório.

---

**Status**: ✅ Totalmente funcional (aguardando vídeo do mascote)
**Versão**: 1.0
**Data**: 2025
