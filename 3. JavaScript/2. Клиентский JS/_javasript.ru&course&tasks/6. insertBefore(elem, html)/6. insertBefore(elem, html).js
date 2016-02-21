

function insertBefore(elem,html) {
    if(elem.insertAdjacentHTML) {
        elem.insertAdjacentHTML('beforeBegin',html);
    } else {
        var f = document.createDocumentFragment();
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        while(tmp.firstChild) {
            fragment.appendChild(tmp.firstChild);
        }
        elem.parentNode.insertBefore(f, elem);
    }
}
insertBefore(document.body.children[0].children[2],
    "<li>3</li><li>4</li>");