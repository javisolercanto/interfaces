fillbackground();
    function fillbackground() {
        let text = '';
        for (let i = 0; i < 50; i++) {
            text += 'Javier Soler Cantó ';
        }
        document.getElementById('bg-text').appendChild(document.createTextNode(text))
    }