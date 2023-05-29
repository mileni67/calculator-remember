import { useState } from "react";
import { StyledForm, StyledHeader, StyledButton, Field, LabelText, Loading, Failure } from "./styled";
import { Result } from "./Result";
import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,

        });
    }

    const [currency, setCurrency] = useState("EUR")
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
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Sekundka... <br /> Laduje kursy walut Europejskiego Banku Centralnego 😊
                    </Loading>
                ) : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Cos poszlo nie tak 😔, czy masz polaczenie z internetem?
                        </Failure>
                    ) : (
                        <>
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
                                        {Object.keys(ratesData.rates).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
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
                        </>
        
                    )

            )}
        </StyledForm>

    );

};

export default Form;