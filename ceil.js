const currentDate = () => new Date().toLocaleDateString('en-US');
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);