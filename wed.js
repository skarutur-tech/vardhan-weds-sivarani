function openInvitation() {
    document.getElementById('welcomePopup').classList.add('hidden');
    audio.play();
    document.getElementById('mainInvitation').classList.remove('hidden');
}

const audio = document.getElementById('bgAudio');
const muteButton = document.getElementById('muteButton');

muteButton.addEventListener('click', () => {
    const isMuted = audio.muted = !audio.muted;
    muteButton.textContent = isMuted ? '🔇' : '🔊';
    muteButton.setAttribute('aria-label', isMuted ? 'Audio Off' : 'Audio On');
});