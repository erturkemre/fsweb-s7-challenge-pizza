import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import OrderSum from "./OrderSum";

const formDataInitial = {
  isim: "",
  boyut: "",
  malzeme1: false,
  malzeme2: false,
  malzeme3: false,
  malzeme4: false,
  malzeme5: false,
  özel: "",
};

const OrderForm = () => {
  const [formdata, setFormData] = useState({ formDataInitial });

  const inputChangeHandler = (event) => {
    const { value, name, checked, type } = event.target;
    setFormData({ ...formdata, [name]: type === "checkbox" ? checked : value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0% 30%;
  `;
  const Form1 = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Choice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-bottom: 5%;
    }

    label {
      margin-right: 18%;
    }
  `;

  const Not = styled.input`
    width: 100%;

    background-color: #faf7f2;
    border: none;
    padding: 3%;
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
    border-radius: 10%;
  `;

  return (
    <Container id="pizza-form" onSubmit={submitHandler}>
      <Form1>
        <div>
          <h4>Boyut Seç *</h4>

          <div className="form-group">
            <input id="kucuk-boy" name="radio1" type="radio" />{" "}
            <label htmlFor="kucuk-boy" >
              Küçük
            </label>
            <input id="orta-boy" name="radio2" type="radio" />{" "}
            <label htmlFor="orta-boy">
              Orta
            </label>
            <input id="buyuk-boy" name="radio3" type="radio" />{" "}
            <label htmlFor="buyuk-boy">
              Büyük
            </label>
          </div>
        </div>
        <div className="option">
          <h4>Hamur Seç *</h4>
          <Select id="size-dropdown" bsSize="lg" className="mb-3" type="select">
            <option selected="selected" disabled>
              --Hamur Kalınlığı Seç--
            </option>
            <option>İnce</option>
            <option>Orta</option>
            <option>Kalın</option>
          </Select>
        </div>
      </Form1>
      <div>
        <h4>Ek Malzemeler</h4>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <Choice>
          <div>
            <input id="" type="checkbox" onChange={inputChangeHandler} />{" "}
            <label check htmlFor="">
              Pepperoni
            </label>
            <input type="checkbox" /> <label check>Domates</label>
            <input type="checkbox" /> <label check>Biber</label>
          </div>
          <div>
            <input type="checkbox" /> <label check>Sosis</label>
            <input type="checkbox" /> <label check>Mısır</label>
            <input type="checkbox" /> <label check>Sucuk</label>
          </div>
          <div>
            <input type="checkbox" /> <label check>Kanada Jambonu</label>
            <input type="checkbox" /> <label check>Sucuk</label>
            <input type="checkbox" /> <label check>Ananas</label>
          </div>
          <div>
            <input type="checkbox" /> <label check>Tavuk Izgara</label>
            <input type="checkbox" /> <label check>Jalepone</label>
            <input type="checkbox" /> <label check>Kabak</label>
          </div>
          <div>
            <input type="checkbox" /> <label check>Soğan</label>
            <input type="checkbox" /> <label check>Sarımsak</label>
          </div>
        </Choice>
      </div>
      <div>
        <h4>Sipariş Notu</h4>
        <Not
          id="special-text"
          type="text"
          placeholder="Siparişine eklemek istediğin not var mı?"
        />
      </div>
      <Line></Line>
      <OrderDis>
        <Counter />
        <OrderSum />
      </OrderDis>
    </Container>
  );
};

export default OrderForm;
