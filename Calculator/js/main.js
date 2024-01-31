
    function btn_pressed(btn_id){
        let input_box=document.getElementById("input_values")
        if(btn_id == "one")         input_box.value +='1';
        else if(btn_id == 'two')    input_box.value += '2';
        else if(btn_id == 'three')  input_box.value += '3';
        else if(btn_id == 'four')   input_box.value += '4';
        else if(btn_id == 'five')   input_box.value += '5';
        else if(btn_id == 'six')    input_box.value += '6';
        else if(btn_id == 'seven')  input_box.value += '7';
        else if(btn_id == 'eight')  input_box.value += '8';
        else if(btn_id == 'nine')   input_box.value += '9';
        else if(btn_id == 'zero')   input_box.value += '0';

        else if(btn_id == 'plus'){
            input_box.value += '+';
        }   
        else if(btn_id == 'minus'){
            input_box.value += '-';
        }
        else if(btn_id == 'multi'){
            input_box.value += '*';
        }
        else if(btn_id == 'div'){
            input_box.value += '/';
        }

        else if(btn_id == "eql") solve(input_box);
    }

    function solve(input_box){
        let exp=input_box.value;
        input_box.value = "";
        document.getElementById("result").value = math.evaluate(exp)
        
    }

    function cls(){
        document.getElementById("result").value = "";
        document.getElementById("input_values").value = "";
        
    }
