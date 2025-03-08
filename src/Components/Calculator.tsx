import styled from "styled-components";
import useCalculator from "./hooks/useCalculator";

const CalculatorContainer = styled.div`
    margin: 2vh auto;
    padding: 2vh 2vw;
    background-color: aqua;
    border-radius: 2px;
    width: 60%;
    text-align: center;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const CalculatorButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1vh;
    justify-content: center;
`;

const OutputContainer = styled.div`
    text-align: center;
    margin-top: 1vh;
`;

const Output = styled.p<{ isNegative: boolean }>`
    font-size: calc(14px + 1vw);
    color: ${({ isNegative }) => (isNegative ? "red" : "#2c3e50")};
`;

export default function Calculator() {
    const { firstInput, setFirstInput, secondInput, setSecondInput, output, calc, clearInputs } = useCalculator();

return (
    <CalculatorContainer>
        <InputContainer>
            <input type="text" value={firstInput} onChange={(e) => setFirstInput(e.target.value)} placeholder="Enter first number" />
            <input type="text" value={secondInput} onChange={(e) => setSecondInput(e.target.value)} placeholder="Enter second number" />
        </InputContainer>

        <CalculatorButtons>
            <button onClick={() => calc("add")}>+</button>
            <button onClick={() => calc("subtract")}>-</button>
            <button onClick={() => calc("multiply")}>*</button>
            <button onClick={() => calc("divide")}>/</button>
            <button onClick={() => calc("power")}>**</button>
            <button onClick={clearInputs}>Clear</button>
        </CalculatorButtons>

        <OutputContainer>
            <Output isNegative={Number(output) < 0}>{output}</Output>
        </OutputContainer>
    </CalculatorContainer>
);
}