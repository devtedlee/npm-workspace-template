import { useState } from 'react';
import { Button, Tag } from '@web-learning/shared';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="p-6 max-w-lg mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-center text-gray-800">
          학습홈 템플릿
        </h1>
      </div>

      <div className="p-4 border rounded-lg shadow-sm bg-white space-y-4">
        <p className="text-lg font-semibold text-gray-700">카운터</p>
        <div className="flex items-center space-x-3">
          <Button onClick={() => setCount((count) => count + 1)}>
            증가 ({count})
          </Button>
          <Tag item={`현재 카운트: ${count}`} />
        </div>
      </div>

      <div className="p-4 border rounded-lg shadow-sm bg-white space-y-2">
        <label
          htmlFor="name-input"
          className="block text-sm font-medium text-gray-700"
        >
          이름 입력
        </label>
        <input
          id="name-input"
          type="text"
          placeholder="이름을 입력하세요..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        />
        <p className="text-sm text-gray-500">입력된 이름: {inputValue}</p>
      </div>

      <div className="text-center">
        <p className="text-base text-gray-900">
          여기에 일반 텍스트가 들어갑니다.
        </p>
        <span className="inline-block px-2 py-0.5 rounded-md bg-green-100 text-green-800 text-xs mt-2">
          성공 태그
        </span>
      </div>
    </div>
  );
}

export default App;
