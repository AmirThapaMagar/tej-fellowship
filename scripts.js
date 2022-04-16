(function(){
    // Task 1 --starts--
    alert("Hello tej!")
    // Task 1 --ends--

    //Task 2 --starts--
    hello_btn = document.getElementById('alert_hello_btn')
    hello_btn.onclick = function(e){
        alert("Hello there!")
    }
    //Task 2 --ends--

    //Task 3 --starts--
    curr_number = document.getElementById('curr_num')
    increase_btn = document.getElementById('increase_num')
    increase_btn.onclick = function(e){
        curr_number.innerHTML = Number(curr_number.innerHTML) + 1
         
    }
    decrease_btn = document.getElementById('decrease_num')
    decrease_btn.onclick = function(e){
        if(Number(curr_number.innerHTML) == 0){return false}
        curr_number.innerHTML = Number(curr_number.innerHTML) - 1
    }
    //Task 3 --ends--
})()
