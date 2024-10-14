const nav = document.querySelector(".links");
let timeoutId;

document.body.addEventListener('click',(ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable__title-bar");
    const expandable = ev.target.closest(".expandable");

    if (!isExpandableTitle){
        return;
    }
    expandable.classList.toggle("expandable--open");
});

function openNav() {
    document.getElementById('nav').style.width= '250px';
    document.getElementById('main').style.marginLeft = '250px';
}
function closeNav(){
    document.getElementById('nav').style.width= '0';
    document.getElementById('main').style.marginLeft = '0';
}


document.querySelectorAll('.links a').forEach(link => {
    link.onclick = () => {
        nav.classList.remove('active');
    }
});

function changeImage(imageId, newSrc) {
    timeoutId = setTimeout(function() {
        document.getElementById(imageId).src = newSrc;
    }, 100);
}
function resetImage(imageId, originalSrc) {
  clearTimeout(timeoutId);
  document.getElementById(imageId).src = originalSrc;
}

