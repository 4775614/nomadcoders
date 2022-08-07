import "./App.css";
import { useState } from "react";

function App() {
	// ☑️ 1. useState 작성하기
	// ☑️ 8. useState() -> (0) // default 값을 0으로 설정
	const [minutes, setMinutes] = useState(0);
	// ☑️ 3. onChange 이벤트 함수 만들어주기
	const onChange = (event) => {
		//☑️ 5. console에 event를 찍고 타고 들어가다보면 target 안에 value 값이 있음.
		// event.target.value를 찍어보면 숫자 치는대로 나옴
		// 지운 코드 : console.log(event.target.value);

		// ☑️ 6. 5번의 value를 데이터에 업데이트 해주기 위해 setState 함수를 사용
		setMinutes(event.target.value);
	};

	// ☑️ 11. Reset 함수 만들어주기
	const reset = () => {
		setMinutes(0);
	};
	return (
		<div>
			<h1 className="hi">Super Converter</h1>
			<div>
				<labe himFor="minutes">Minutes</labe>
				<input
					// ☑️ 2. input에 state value 주기
					value={minutes}
					id="minutes"
					placeholer="Minutes"
					type="number"
					// ☑️ 4. onChange 이벤트 추가. input에 변화가 생기면 onChange가 실행될 예정
					onChange={onChange}
				/>
			</div>
			<div>
				{/* ☑️ 7. 6번이 잘 작동하는지 확인하기 위해 title 만들어보기
      결과는? input에 넣는 숫자 그대로 title에 동기화 되어 나타남
      이제 value가 무엇인지 찾아냈으니 아래 h4는 주석처리 완료*/}
				{/* <h4>You want to convert {minutes}</h4> */}
				<label himFor="hours">Hours</label>
				<input
					// ☑️ 9. hours에도 value를 줘야함. {minutes / 60}으로 적어줄 수 있지만
					// Math.round를 사용하면 반올림 해줌
					value={Math.round(minutes / 60)}
					id="hours"
					placeholer="Hours"
					type="number"
					disabled
				/>
			</div>
			{/* ☑️ 10. Reset 버튼 만들어주기 */}
			<button onClick={reset}>Reset</button>
		</div>
	);
}
export default App;
