import React, { useState } from "react";

const TeacherRatingFunc = () => {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [result, setResult] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (first && second && third) {
      let top = first.name;
      if (first.score < second.score && second.score >= third.score) {
        top = second.name;
      }
      if (first.score < third.score && third.score > second.score) {
        top = third.name;
      }
      setResult(`Teacher of the Year award goes to ${top}`);
    } else {
      setResult("Give rating to all the teachers.");
    }
  };

  return (
    <div id="main">
      <form onSubmit={onFormSubmit}>
        <h1>Teacher Review </h1>
        <label>Names </label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label> 3</label>&nbsp;&nbsp;&nbsp;
        <label>2</label>&nbsp;&nbsp;&nbsp;
        <label>1</label>
        <br />
        <label id="first">
          Miss Mary &nbsp;
          <input
            id="m3"
            type="radio"
            value="3"
            name="Miss Mary"
            onChange={(e) =>
              setFirst({ name: "Miss Mary", score: Number(e.target.value) })
            }
          />
          <input
            id="m2"
            type="radio"
            value="2"
            name="Miss Mary"
            onChange={(e) =>
              setFirst({ name: "Miss Mary", score: Number(e.target.value) })
            }
          />
          <input
            id="m1"
            type="radio"
            value="1"
            name="Miss Mary"
            onChange={(e) =>
              setFirst({ name: "Miss Mary", score: Number(e.target.value) })
            }
          />
        </label>
        <br />
        <label id="second">
          Mr.Vikram &nbsp;
          <input
            id="v3"
            type="radio"
            value="3"
            name="Mr.Vikram"
            onChange={(e) =>
              setSecond({ name: "Mr.Vikram", score: Number(e.target.value) })
            }
          />
          <input
            id="v2"
            type="radio"
            value="2"
            name="Mr.Vikram"
            onChange={(e) =>
              setSecond({ name: "Mr.Vikram", score: Number(e.target.value) })
            }
          />
          <input
            id="v1"
            type="radio"
            value="1"
            name="Mr.Vikram"
            onChange={(e) =>
              setSecond({ name: "Mr.Vikram", score: Number(e.target.value) })
            }
          />
        </label>
        <br />
        <label id="third">
          RK Kumar &nbsp;
          <input
            id="r3"
            type="radio"
            value="3"
            name="RK Kumar"
            onChange={(e) =>
              setThird({ name: "RK Kumar", score: Number(e.target.value) })
            }
          />
          <input
            type="radio"
            id="r2"
            value="2"
            name="RK Kumar"
            onChange={(e) =>
              setThird({ name: "RK Kumar", score: Number(e.target.value) })
            }
          />
          <input
            type="radio"
            id="r1"
            value="1"
            name="RK Kumar"
            onChange={(e) =>
              setThird({ name: "RK Kumar", score: Number(e.target.value) })
            }
          />
        </label>
        <br />
        <br />
        <input id="submit" type="submit" value="Submit" />
      </form>
      <div id="result">{result}</div>
    </div>
  );
};

export default TeacherRatingFunc;
