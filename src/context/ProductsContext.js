import { createContext, useState } from "react"

export const ProductsContext = createContext({});

export function ProductsContextProvider({children}) {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [weight1, setWeight1] = useState(0);
    const [weight2, setWeight2] = useState(0);
    const [selectInput1, setSelectInput1] = useState("");
    const [selectInput2, setSelectInput2] = useState("");
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    const [resultName, setResultName] = useState(0);
    const [resultWeight, setResultWeight] = useState(0);
    const [resultPrice, setResultPrice] = useState(0);
    const [resultUnit, setResultUnit] = useState(0);

    function calculate() {
        let minVal1 = weight1;
        let minVal2 = weight2;

        //transforma em gr ou ml
        switch (selectInput1) {
            case "kg":
            minVal1 = weight1 * 1000;
            break;
            
            case "l":
            minVal1 = weight1 * 1000;
            break;
        }
        switch (selectInput2) {
            case "kg":
            minVal2 = weight2 * 1000;
            break;
            
            case "l":
            minVal2 = weight2 * 1000;
            break;
        }

        let minPrice1 = (1 * parseFloat(price1)) / parseFloat(minVal1);
        let minPrice2 = (1 * parseFloat(price2)) / parseFloat(minVal2);

        if(minPrice1 > minPrice2) {
            //bestWorth product 2
            setResultName(name2 === "" ? "Produto 2" : name2);
            setResultWeight(weight2);
            setResultPrice(price2);
            setResultUnit(selectInput2)
        } else {
            //bestWorth product 1
            setResultName(name1 === "" ? "Produto 1" : name1);
            setResultWeight(weight1);
            setResultPrice(price1);
            setResultUnit(selectInput1)
        }
    }

    function validateFields() {
        if(!weight1) {
            alert("Preencha o peso do produto 1")
            return false;
        }
        if(!weight2) {
            alert("Preencha o peso do produto 2")
            return false;
        }
        if(!selectInput1) {
            alert("Selecione a unidade de medida do produto 1")
            return false;
        }
        if(!selectInput2) {
            alert("Selecione a unidade de medida do produto 2")
            return false;
        }
        if(!price1) {
            alert("Preencha o valor do produto 1")
            return false;
        }
        if(!price2) {
            alert("Preencha o valor do produto 2")
            return false;
        }
        if(selectInput1 === "gr" || selectInput1 === "kg") {
            if(selectInput2 === "l" || selectInput2 === "ml") {
                alert("Não é possível comparar essas unidades de medidas!")
                return false;
            }
        }
        if(selectInput2 === "gr" || selectInput2 === "kg") {
            if(selectInput1 === "l" || selectInput1 === "ml") {
                alert("Não é possível comparar essas unidades de medidas!")
                return false;
            }
        }
        return true;
    }

    function resetValues() {
        setName1("");
        setName2("");
        setWeight1(0);
        setWeight2(0);
        setSelectInput1("");
        setSelectInput2("");
        setPrice1(0);
        setPrice2(0);
        setResultName(0);
        setResultWeight(0);
        setResultPrice(0);
    }

    return (
        <ProductsContext.Provider
            value={{
                name1, setName1,
                name2, setName2,
                weight1, setWeight1,
                weight2, setWeight2,
                selectInput1, setSelectInput1,
                selectInput2, setSelectInput2,
                price1, setPrice1,
                price2, setPrice2,
                calculate, validateFields,
                resultPrice, resultWeight, resultName, resultUnit,
                resetValues
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}