const BLOCK_SIZE = 128;

const tools = {
    fill: 0,
    chooseColor: 1,
    pencil: 2,
    transform: 3,
};

let currentTool = tools.pencil;

const canvas = document.querySelector('#canvas');
const pen = document.querySelector('.tool-pencil');
const color = document.querySelector('.tool-choseColor');

const draw = (e) => { 
    console.log(e) 
    const { offsetX, offsetY } = e;
    const deltaX = Math.ceil(offsetX / BLOCK_SIZE) - 1;
    const deltaY = Math.ceil(offsetY / BLOCK_SIZE) - 1;
    const ctx = canvas.getContext('2d');
    console.log(BLOCK_SIZE * deltaX, BLOCK_SIZE * deltaY, deltaX, deltaY)
    ctx.fillRect(BLOCK_SIZE * deltaX, BLOCK_SIZE * deltaY, BLOCK_SIZE, BLOCK_SIZE);
}

pen.style.color = 'red';
canvas.addEventListener('click', draw);

function set_color_black(){
    pen.style.color = 'rgba(0, 0, 0, 0.87)';
    color.style.color = 'rgba(0, 0, 0, 0.87)';
}

const usePencil = (e) => {
    currentTool = tools.pencil;
    e.preventDefault();
    e.stopPropagation();
    console.log('pencil used', e);
    canvas.addEventListener('click', draw);
    set_color_black();
    pen.style.color = 'red';
};



const openColorPicker = () => {
    console.log('open color')
};

const useChooseColor = e => {
    currentTool = tools.chooseColor;
    set_color_black();
    color.style.color = 'red';
    canvas.removeEventListener('click', draw);
    openColorPicker();
};

document.querySelector('.tool-choseColor').addEventListener('click', useChooseColor);
document.querySelector('.tool-pencil').addEventListener('click', usePencil);
