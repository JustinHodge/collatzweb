function collatz(){
    console.log(document.getElementById('start_num'))
    let start_num = parseInt(document.getElementById('start_num').value);
    let current_num = start_num
    let num_iterations = 1;
    let max_num = current_num
    while (current_num > 1) {
        num_iterations +=1
        if (current_num % 2 == 0){
            current_num = current_num / 2
        } else {
            current_num = 3 * current_num + 1
        }
        if (current_num > max_num) {
            max_num = current_num;
        }
    }

    document.getElementById('start_num').value = start_num + 1
    color_r = (start_num % 256).toString(16);
    color_g = (num_iterations % 256).toString(16);
    color_b = (max_num % 256).toString(16);
    color_r = color_r.length < 2 ? '0' + color_r : color_r;
    color_g = color_g.length < 2 ? '0' + color_g : color_g;
    color_b = color_b.length < 2 ? '0' + color_b : color_b;

    document.getElementById('display-info').innerHTML = `start_num=${start_num} num_iterations=${num_iterations} max_num=${max_num}`
    document.getElementById('combined-color').style = 'background-color: #' + color_r + color_g + color_b;
    document.getElementById('start-color').style = 'background-color: #' + color_r + '0000';
    document.getElementById('iter-color').style = 'background-color: #00' + color_g + '00';
    document.getElementById('max-color').style = 'background-color: #0000' + color_b;
}

setInterval(collatz, 1000);
collatz();