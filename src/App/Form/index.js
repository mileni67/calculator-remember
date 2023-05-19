import { useState } from "react";
import { StyledForm, StyledHeader, StyledButton, Field, LabelText } from "./styled";
import { currencies } from "../currencies"
import { Result } from "./Result";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");


    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledHeader>
                Przelicznik walut
            </StyledHeader>
            <p>
                <label>
                    <LabelText>
                        Kwota w zl*:
                    </LabelText>
                    <Field
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Wpisz kwote w zl"
                        type="number"
                        required
                        step="0.01"
                    />
                </label>
            </p>
            <p>
                <label>
                    <LabelText>
                        Waluta:
                    </LabelText>
                    <Field
                        as="select"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </Field>
                </label>
            </p>
            <p>
                <StyledButton 
                as="button">Przelicz!
                </StyledButton>
            </p>
            <Result result={result} />
        </StyledForm>
    );

};

export default Form;