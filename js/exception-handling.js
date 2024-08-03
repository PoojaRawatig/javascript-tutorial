function multiply(){
    try{
        let input1 = document.getElementById('num1');
        let input2 = document.getElementById('num2');

        console.log(input1);

        let num1 = input1.value;
        let num2 = input2.value;
        let multiplication = num1*num2;

        let result = document.getElementById('Result');
        result.innerHTML = 'Result = ' + multiplication;
    }catch(err){
        console.log(err);
    }finally{
        console.log('finally block')
    }  
}