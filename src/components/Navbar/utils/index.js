const scrollLock = () => document.querySelector('html').classList.add('lock-scroll');
const scrollUnlock = () => document.querySelector('html').classList.remove('lock-scroll');

export { scrollLock, scrollUnlock };
