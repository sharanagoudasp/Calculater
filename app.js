document.addEventListener("DOMContentLoaded", function () {

    let input = document.getElementById("inputbox");
    let buttons = document.querySelectorAll(".items button");

    let string = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.innerText;

            if (value === "AC") {
                string = "";
            } 
            else if (value === "Del") {
                string = string.slice(0, -1);
            } 
            else if (value === "=") {
                try {
                    // Replace comma with dot
                    string = string.replace(/,/g, ".");
                    string = eval(string).toString();
                } catch {
                    string = "Error";
                }
            } 
            else {
                string += value;
            }

            input.value = string;
        });
    });

});