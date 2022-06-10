
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActive = $('.tab-item.active');
const line = $('.tabs .line');


tabs.forEach((tab, index) => {
    //Tại sao chỗ này pane lại biết đang click vào đâu mà không cần cho vào tab.onclick vậy ạ?
    const pane = panes[index];

    tab.onclick = function() {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');
        
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');
    }
})