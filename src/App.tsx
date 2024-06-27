import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-400 rounded-md bg-slate-50 p-10 ">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 rounded-md py-2 bg-green-300 text-xl font-bold text-white"
        >
          IncrementByValue
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 rounded-md py-2 bg-green-300 text-xl font-bold text-white"
        >
          Increment
        </button>

        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 rounded-md py-2 bg-red-300 text-xl font-bold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
