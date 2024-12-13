const links = document.querySelectorAll('.preview-link'); 
const previewBox = document.getElementById('preview-box');
const previewIframe = document.getElementById('preview-iframe'); 

links.forEach(link => {
    link.addEventListener('mouseover', event => {
        const previewPage = link.getAttribute('data-preview'); 
        previewIframe.src = previewPage; 
        previewBox.style.display = 'block'; 
        previewBox.style.left = `${event.pageX + 10}px`;
        previewBox.style.top = `${event.pageY + 10}px`;
    });

    link.addEventListener('mousemove', event => {
        previewBox.style.left = `${event.pageX + 10}px`; 
        previewBox.style.top = `${event.pageY + 10}px`;
    });

    link.addEventListener('mouseout', () => {
        previewBox.style.display = 'none'; 
        previewIframe.src = ''; 
    });
});