function generateBoard() {
    let tables = $('table');
    $.each(tables, function() {
        for (let i = 65; i >= 1; i--) {
            if (i == 10 || i == 30 || i == 50 || i == 65)
                $(`#${this.id} tbody`).append(`<tr><td class="${this.id}" id="${i}" style="text-align: center; border-top:1px solid black"></td></tr>`);
            else
                $(`#${this.id} tbody`).append(`<tr><td class="${this.id}" id="${i}" style="text-align: center"></td></tr>`);
        }
    });  
}

function clickTd() {
    $('td').click(function() {
        let limit = parseInt(this.id);
        let tdClass = this.className.split(' ')[0];
        let color = getColor(tdClass);
        if ($(this).hasClass('marcado')) {
            for (let j = 65; j >= limit; j--) {
                $(`td#${j}.${tdClass}`).removeClass('marcado');
                $(`td#${j}.${tdClass}`).removeAttr('bgcolor');
            }
        }
        else {
            for (let i = limit; i >= 1; i--) {
                $(`td#${i}.${tdClass}`).addClass('marcado');
                $(`td#${i}.${tdClass}`).attr('bgcolor',color);
            }
        }
    });
}

function getColor(table) {
    switch (table){
        case 'table_1':
            return '#FAE142';
        case 'table_2':
            return '#F94D71';
        case 'table_3':
            return '#B54DF9';
        case 'table_4':
            return '#FA5622';
        case 'table_5':
            return '#8BF552';
    }
}

$(document).ready(function() {
    generateBoard();
    clickTd();
});