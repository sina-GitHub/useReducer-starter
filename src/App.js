import {useReducer} from 'react';

const initialization = {count: 0};

function reducerFunction(state, action) {
	switch (action.type) {
		case 'plus':
			return {count: state.count + 1};
		case 'minus':
			return {count: state.count - 1};
		default:
			throw new Error();
	}
}

export default function App() {
	const [state, dispatch] = useReducer(reducerFunction, initialization);

	return (
		<>
			<div>Count: {state.count}</div>

			<button onClick={() => dispatch({type: 'plus'})}>plus</button>
			<button onClick={() => dispatch({type: 'minus'})}>minus</button>
		</>
	);
}
