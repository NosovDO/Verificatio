let deleteVerivic = () => {
    let verevic = document.querySelectorAll('div[id*=age]');
    verevic.forEach(el => el.remove());
}

setTimeout(deleteVerivic, 100);