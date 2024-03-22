import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberA, setNumbera] = useState(false);
  const [CharA, setChara] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef('');

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberA) {
      str += "0123456789";
    }
    if (CharA) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [numberA, CharA, length, setPassword]);


  const Copy = useCallback(
    () => {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password)
    } ,[password], 
  )

  useEffect(() => {
    passwordGen();
  }, [numberA, CharA, length, passwordGen]);

  return (
    <>
      <div className="w-full h-screen relative">
        <div className="w-full h-screen absolute">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzc3dvcmQlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center h-52 w-96 absolute inset-y-1/4 inset-x-1/3 m-11 p-5">
          <div className="absolute h-52 w-96 bg-gray-500 rounded-3xl blur-sm opacity-45"></div>
          <h1 className="text-white text-3xl mt-2 mb-9 z-10">Password Generator</h1>
          <div className="bg-white rounded-lg w-80 flex flex-row justify-center z-10">
            <input
              className="w-[88%]"
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button className=" bg-blue-500 text-white rounded-lg p-1" onClick={Copy}>
              Copy
            </button>
          </div>
          <div className="w-80 text-white flex justify-evenly z-10">
            <input
              type="range"
              name="Length"
              value={length}
              min={8}
              max={24}
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length </label>
            <input type="checkbox" name="Number"
            defaultChecked={numberA}
            onChange={()=>{setNumbera((prev)=>!prev)}}
            />
            <label htmlFor="NumberInput">Numbers </label>
            <input type="checkbox" name="Char" 
            defaultChecked={CharA}
            onChange={()=>{setChara((prev)=>!prev)}}
            />
            <label htmlFor="CharInput">Characters </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
