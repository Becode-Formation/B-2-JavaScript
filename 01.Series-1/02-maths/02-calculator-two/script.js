
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let opOne = parseInt(document.getElementById("op-one").value, 10)
        let opTwo = parseInt(document.getElementById("op-two").value, 10)

        let result = 0;

        switch (operation) {
            case "addition" :
                result = opOne + opTwo
                break;
            case "substraction":
                 result = opOne - opTwo
                break;
            case "multiplication":
                result = opOne * opTwo
                break;
            case "division":
                 result = opOne / opTwo 
                break;
        }

        return alert(result)
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
