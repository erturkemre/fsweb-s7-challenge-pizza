import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CounterDisplay from "./CounterDisplay";
import OrderSum from "./OrderSum";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ekMalzemeler = [
  "pepperoni",
  "domates",
  "biber",
  "sosis",
  "misir",
  "sucuk1",
  "kanadaJambonu",
  "sucuk2",
  "ananas",
  "tavukIzgara",
  "jalepone",
  "kabak",
  "sogan",
  "sarimsak",
  "pastırma",
];

const OrderForm = (product) => {
  const [errors, setErrors] = useState({
    boyut: "",
    hamur: "",
    ekMalzemeler: "",
    özel: "",
  });
  const [adet, setAdet] = useState(1);
  const arttirAction = (e) => {
    setAdet(adet + 1);
  };

  const azaltAction = (e) => {
    setAdet(adet - 1);
  };

  const [isValid, setValid] = useState(false);
  const [formdata, setFormData] = useState({
    boyut: "",
    hamur: "",
    ekMalzemeler: [],
    özel: "",
  });
  const history = useHistory();

  const orderFormSchema = Yup.object().shape({
    boyut: Yup.string().required("Boyut Seçiniz!"),
    hamur: Yup.string().required("Hamur Kalınlığını Seçmediniz!"),
    özel: Yup.string().nullable(),
    ekMalzemeler: Yup.array().max(10, "En fazla 10 adet malzeme seçiniz!"),
  });

  const inputChangeHandler = (event) => {
    const { value, name, checked, type } = event.target;
    setFormData({ ...formdata, [name]: type === "checkbox" ? checked : value });

    Yup.reach(orderFormSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });

    
  };
  const ekMalzemeChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      if (formdata.ekMalzemeler.length >= 10) {
        
      } else {
        setFormData({
          ...formdata,
          ekMalzemeler: [...formdata.ekMalzemeler, name],
        });
      }
    } else {
      setFormData({
        ...formdata,
        ekMalzemeler: [...formdata.ekMalzemeler.filter((m) => m !== name)],
      });
    }
    Yup.reach(orderFormSchema, "ekMalzemeler")
      .validate([...formdata.ekMalzemeler])
      .then((valid) => {
        if (errors.ekMalzemeler)
          setErrors({ ...errors, ekMalzemeler: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, ekMalzemeler: err.errors[0] });
      });
  };

  useEffect(() => {
    console.log("productData > ", formdata);
    orderFormSchema.isValid(formdata).then((valid) => setValid(valid));
  }, [formdata]);

  useEffect(() => {
    console.log("formErrors > ", errors);
  }, [errors]);
    

  
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formdata)
      .then((res) => {
        history.push("/success" , formdata);
      })
      .catch((error) => {
        console.error("HTTP POST hatası:", error);
      });
  };

  const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0% 25%;
  `;
  const Form1 = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Choice = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    label {
      display: flex;
      align-items: center;
      flex-basis: 29.33%;
      cursor: pointer;
    }

    input {
      padding: 1rem;
      background-color: #faf7f2;
      border: none;
      cursor: pointer;
    }
  `;

  const Not = styled.input`
    width: 100%;
    background-color: #faf7f2;
    border: none;
    padding: 3%;
    border-radius: 10px;
  `;

  const Line = styled.div`
    margin: 10% 0%;
    width: 100%;
    height: 0.5vh;
    background-color: #292929;
  `;

  const OrderDis = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 35%;
  `;
  const Select = styled.select`
    border: none;
    background-color: #faf7f2;
    padding: 10%;
    border-radius: 10px;
  `;
  const RadioBut = styled.label`
    -webkit-appearance: none;
    display: inline-block;
    cursor: pointer;
    background-color: ${(props) => (props.isChecked ? "#fdc913" : "#faf7f2")};
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 1.25rem;
    margin-right: 0.5rem;
    user-select: none;

    input[type="radio"] {
      display: none;
    }

    &:hover {
      transform: scale(1.1);
    }

    span {
      display: inline-block;
      padding: 0.6rem 1rem;
      border-radius: 1rem;
    }
  `;

  return (
    
    <Container id="pizza-form" onSubmit={submitHandler}>
      <Form1>
        <div className="d-flex justify-content-between">
          <h4>Boyut Seç *</h4>

          <div className="form-group boyutSec w-100 d-flex gap-2">
            <RadioBut isChecked={formdata.boyut === "S"}>
              <input
                onChange={inputChangeHandler}
                id="radio-S"
                className=" boyut-input"
                type="radio"
                name="boyut"
                value="S"
                checked={formdata.boyut === "S"}
              />

              <span className="boyut-label" htmlFor="radio-S">
                S
              </span>
            </RadioBut>

            <RadioBut isChecked={formdata.boyut === "M"}>
              <input
                onChange={inputChangeHandler}
                id="radio-M"
                className="boyut-input"
                type="radio"
                name="boyut"
                value="M"
                checked={formdata.boyut === "M"}
              />
              <span className="boyut-label" htmlFor="radio-M">
                M
              </span>
            </RadioBut>

            <RadioBut isChecked={formdata.boyut === "L"}>
              <input
                onChange={inputChangeHandler}
                id="radio-L"
                className="boyut-input"
                name="boyut"
                type="radio"
                value="L"
                checked={formdata.boyut === "L"}
              />
              <span className="boyut-label" htmlFor="radio-L">
                L
              </span>
            </RadioBut>
            <div className="text-danger">{errors.boyut}</div>
          </div>
        </div>
        <div className="option">
          <h4>Hamur Seç *</h4>
          <Select
            id="size-dropdown"
            type="select"
            bsSize="lg"
            className="mb-3"
            name="hamur"
            onChange={inputChangeHandler}
            value={formdata.hamur}
            
            
          >
            <option selected="selected" disabled>
              --Hamur Kalınlığı Seç--
            </option>
            <option>İnce</option>
            <option>Orta</option>
            <option>Kalın</option>
          </Select>
          <div className="text-danger">{errors.hamur}</div>
        </div>

      </Form1>
      <div>
        <h4>Ek Malzemeler</h4>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <Choice>
          {ekMalzemeler.map((malzeme) => (
            <label key={malzeme}>
              <input
                type="checkbox"
                name={malzeme}
                value={malzeme}
                onChange={ekMalzemeChange}
                checked={formdata.ekMalzemeler.includes(malzeme)}
              ></input>
              {malzeme}
            </label>
          ))}
        </Choice>
        <div
          className={`invalid-feedback ${errors.ekMalzemeler ? "d-block" : ""}`}
        >
          {errors.ekMalzemeler}
        </div>
      </div>

      <div>
        <h4>Sipariş Notu</h4>
        <Not
          id="special-text" 
          name="özel"
          type="text"
          placeholder="Siparişine eklemek istediğin not var mı?"
          invalid={!!errors.özel}
          value={formdata.özel}
          onChange={inputChangeHandler}
        />
         <div className="invalid-feedback">{errors.özel}</div>
      </div>
      <Line></Line>
      <OrderDis>
        <CounterDisplay
          sayac={adet}
          arttirAction={arttirAction}
          azaltAction={azaltAction}
        />
        <OrderSum
          submitHandler={submitHandler}
          product={product}
          formdata={formdata}
          adet ={adet}
          isValid={isValid}
        />
      </OrderDis>
    </Container>
  );
};

export default OrderForm;
