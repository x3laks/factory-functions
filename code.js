const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};