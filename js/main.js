document.getElementById('analyzeButton').addEventListener('click', () => {
    let text = document.getElementById('textInput').value;
    const lines = text.split(/\r*\n/).length;
    const words = text.match(/\b\w+\b/g).length;
    const characters = text.replace(/\s/g, '').length;
    
    let result = document.getElementById('result');
    result.innerHTML = '<p>lines: ' + lines + '</p>' +
                       '<p>words: ' + words + '</p>' +
                       '<p>: characters' + characters + '</p>';
});

