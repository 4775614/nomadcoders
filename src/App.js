import "./App.css";
import { useState } from "react";

function App() {
	// ☑️ 1. useState 작성하기
	// ☑️ 8. useState() -> (0) // default 값을 0으로 설정
	const [amount, setAmount] = useState(0);
	// ☑️ 15. state 하나 더 만들어줌. 기본 default 값을 false라고 해줌
	// 이 state는 우리가 flop을 했는지 안했는지를 확인해줌
	const [inverted, setInverted] = useState(false);
	// ☑️ 3. onChange 이벤트 함수 만들어주기
	const onChange = (event) => {
		//☑️ 5. console에 event를 찍고 타고 들어가다보면 target 안에 value 값이 있음.
		// event.target.value를 찍어보면 숫자 치는대로 나옴
		// 지운 코드 : console.log(event.target.value);

		// ☑️ 6. 5번의 value를 데이터에 업데이트 해주기 위해 setState 함수를 사용
		setAmount(event.target.value);
	};
	// ☑️ 11. Reset 함수 만들어주기
	const reset = () => {
		setAmount(0);
	};

	// ☑️ 14. onFlip 화살표 함수 까지만 작성.
	// ☑️ 16. state를 만들고 온 후, 아래 onFlip 효과를 가진 버튼을 누르면 inverted 값을
	// 반전 시킬 수 있게 만들어주기. inverted이 true 상태라면, false를 반환 또는 반대.
	// current = !inverted = current 상태 state의 정반대
	const onFlip = () => {
		// ☑️ 21. flip할 때 마다 리셋 기능
		reset();
		setInverted((current) => !inverted);
	};

	return (
		<div>
			<h1 className="hi">Super Converter</h1>
			<div>
				<labe himFor="minutes">Minutes</labe>
				<input
					// ☑️ 2. input에 state value 주기
					// ☑️ 21. 만약 inverted 상태가 아니라면 (false) amount를 보여줘
					value={inverted ? amount * 60 : amount}
					id="minutes"
					placeholer="Minutes"
					type="number"
					// ☑️ 4. onChange 이벤트 추가. input에 변화가 생기면 onChange가 실행될 예정
					onChange={onChange}
					// ☑️ 18.inverted는 단순히 true 혹은 false인 변수
					// Flip 버튼을 누르면 onFlip 함수가 실행되는데
					// onFlip 함수는 (current) => !current현재 값을 받아서 그 반대의 값을 내놓음.
					// hours의 inverted === false 라면 minutes는 disabled됨
					disabled={inverted === true}
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

					// ☑️ 20. 삼항 연산자로 바꾸기. 만약 우리가 inverted 상태(true)라면
					//단위 변환을 보여주지 말라는 명령. inverted상태 = state에 있는 값 보여주기
					// inverted 상태가 아니라면 변환된 값을 보여줌
					// value={Math.round(minutes / 60)}
					value={inverted ? amount : Math.round(amount / 60)}
					id="hours"
					placeholer="Hours"
					type="number"
					// ☑️ 12. hours input 비활성화. true값은 명시적으로 쓸 수 있음
					// ☑️ 17. flase 쓰면 입력 가능 상태가 됨
					disabled={inverted === false}
					//☑️ 19. 이제 hours에 글 작성 가능
					onChange={onChange}
				/>
			</div>
			{/* ☑️ 10. Reset 버튼 만들어주기 */}
			<button onClick={reset}>Reset</button>
			{/* ☑️ 13. 클릭할 때 마다 Hours와 Minutes를 번갈아 가며 입력 가능하게 해줌
      이 버튼을 누르면 onFlip이 실행됨 */}
			<button onClick={onFlip}>{inverted ? "Turn back" : "Invert"}</button>
		</div>
	);
}
export default App;
