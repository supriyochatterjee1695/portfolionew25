import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

// Base64 encoded webhook URL to hide it from plain text search / casual snooping
const _w = atob('aHR0cHM6Ly9TdXByaXlvRE1vbmtleTE2OTUtbjhuLWNzZWFtZXRyeS5oZi5zcGFjZS93ZWJob29rLzQ5ZmRmOTMzLTYwZTYtNGU1My1iMGY1LTVjZjQxZjQxNWEyNy9jaGF0');

createChat({
  webhookUrl: _w,
  mode: 'window',
  showWelcomeScreen: true,
  initialMessages: [
    'Hi, I’m Supy, your 24*7 Personal Support Buddy 👋',
    'Tell me what you feel !'
  ],
  i18n: {
    en: {
      title: 'Supy',
      subtitle: 'Your Buddy Supy is here !',
      footer: '',
      getStarted: 'Talk to me',
      inputPlaceholder: 'Type here...'
    }
  }
});
