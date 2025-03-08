import { useState } from "react";

export default function useCalculator() {
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");
    const [output, setOutput] = useState("");

    function calc(operation: string) {
        const first = Number(firstInput);
        const second = Number(secondInput);
        let output;

        if (operation == "add") {
            output = first + second;
        } else if (operation === "subtract") {
            output = first - second;
        } else if (operation === "multiply") {
            output = first * second;
        } else if (operation === "divide") {
            output = first/second
        } else if (operation === "power") {
            let exponent = second;
            if (exponent < 0) {
                exponent = -1 * exponent;
            }

            output = 1;
            for (let i = 0; i < exponent; i++) {
                output = output * first
            }

            if (second < 0) {
                output = 1 / output;
            }
        } else {
            output = ""
        }

        setOutput(String(output))
    }

    function clearInputs() {
        setFirstInput("");
        setSecondInput("");
        setOutput("");
    }
    return {firstInput, setFirstInput, secondInput, setSecondInput, output, calc, clearInputs}
}