import React, {useState} from "react";

function Matrix() {
  function createMatrix(value) {
    var mat1;
    var result = [];
    var arr = [];
    mat1 = value.split(";");
    for (let i = 0; i < mat1.length; i++) {
      arr = [];
      for (let j = 0; j < mat1[i].split(",").length; j++) {
        console.log(mat1[i].split(",")[j]);
        arr.push(parseInt([mat1[i].split(",")[j]]));
      }
      result.push(arr);
    }
    return result;
  }
  function addition(arr1, arr2) {
    let start = performance.now();
    var mark = "mark";
    performance.mark(mark);
    var result = [];
    var arr = [];
    for (let i = 0; i < arr1.length; i++) {
      arr = [];
      for (let j = 0; j < arr1[i].length; j++) {
        arr.push(arr1[i][j] + arr2[i][j]);
      }
      result.push(arr);
    }
    var end = "end";
    performance.mark(end);
    let duration = performance.now() - start;
    console.log("Execution Time: "+ duration);
    console.log(performance.measure("Measured Performance: ", mark, end));
    return result;
  }
  function subs(arr1, arr2) {
    var result = [];
    var arr = [];
    for (let i = 0; i < arr1.length; i++) {
      arr = [];
      for (let j = 0; j < arr1[i].length; j++) {
        arr.push(arr1[i][j] - arr2[i][j]);
      }
      result.push(arr);
    }
    return result;
  }

  function mult(arr1, arr2) {
    let start = performance.now();
    var mark = "mark";
    performance.mark(mark);
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
      result[i] = [];
      for (var j = 0; j < arr2[0].length; j++) {
        var sum = 0;
        for (var k = 0; k < arr1[0].length; k++) {
          sum += arr1[i][k] * arr2[k][j];
        }
        result[i][j] = sum;
      }
    }
    var end = "end";
    performance.mark(end);
    let duration = performance.now() - start;
    console.log(performance.measure("Measured Performance: ", mark, end));

    console.log("Execution Time: "+ duration);
    return result;
  }

  const [matrix1, setMatrix1] = useState([[]]);
  const [matrix2, setMatrix2] = useState([[]]);
  const [result, setResult] = useState([[]]);
  const [val, setVal] = useState(true);

  var array1 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  var array2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  return (
    <div className="matrix-table">
      <row className="matrix-header">
        <h1>Matrix Table 1</h1>
        {val ? (
          <div>
            <table>
              <tbody>
                {array1.map((item, index) => {
                  return (
                    <tr>
                      {item.map((row, index) => (
                        <td>{row}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <table>
              <tbody>
                {matrix1.map((item2, index) => {
                  return (
                    <tr>
                      {item2.map((row, index) => (
                        <td>{row}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <form>
          <label>
            Value:
            <input
              type="text"
              name="name"
              onChange={(event) => {
                setMatrix1(createMatrix(event.target.value));
                setVal(false);
                console.log(matrix1);
              }}
            />
          </label>
        </form>
      </row>
      <row className="matrix-header">
        <h1>Matrix Table 2</h1>
        {val ? (
          <div>
            <table>
              <tbody>
                {array2.map((item, index) => {
                  return (
                    <tr>
                      {item.map((row, index) => (
                        <td>{row}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <table>
              <tbody>
                {matrix2.map((item2, index) => {
                  return (
                    <tr>
                      {item2.map((row, index) => (
                        <td>{row}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <form>
          <label>
            Value:
            <input
              type="text"
              name="name"
              onChange={(event) => {
                setMatrix2(createMatrix(event.target.value));
                setVal(false);
                console.log(matrix2);
              }}
            />
          </label>
        </form>
      </row>
      <div className="button-group">
        <button
          disabled = {!(matrix1.length === matrix2.length && matrix1[0].length === matrix2[0].length)}
          className="btn btn-default"
          onClick={() => {
            setResult(addition(matrix1, matrix2));
          }}
        >
          Addition
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            setResult(subs(matrix1, matrix2));
          }}
        >
          Substraction
        </button>
        <button
          className="btn btn-default"
          onClick={() => {
            setResult(mult(matrix1, matrix2));
          }}
        >
          Multiplication
        </button>
      </div>
      <row className="matrix-header">
        <h1>Result</h1>
        {val
        ?
        <div>
          <table>
            <tbody>
              {array1.map((item, index) => {
                return (
                  <tr>
                    {item.map((row, index) => (
                      <td>{row}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        : 
        <div>
          <table>
            <tbody>
              {result.map((item, index) => {
                return (
                  <tr>
                    {item.map((row, index) => (
                      <td>{row}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        }
        <div>
          <table>
            <tbody>
              {result.map((item, index) => {
                return (
                  <tr>
                    {item.map((row, index) => (
                      <td>{row}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </row>
    </div>
  );
}

export default Matrix;
