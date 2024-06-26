export const ExampleAppCode = `
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

function App() {
	return (
		<>
			<ComponentA />
			<ComponentB />
		</>
	);
}

export default App;
`;

export const ExampleComponentA = `
import { useTunnel, useTunnelFunction } from "tunnel-fn";

export default const ComponentA = () => {
	const { callTunnel } = useTunnel();

	const funcA = useTunnelFunction("funcA", () => {
		toast.success("Called FuncA");
	});

	return (
		<div>
			<Button onClick={() => funcA()}>Call FuncA</Button>
			<Button
				onClick={() => {
					callTunnel("funcB", 1);
				}}
			>
				Call FuncB
			</Button>
		</div>
	);
};

`;

export const ExampleComponentB = `
import { useTunnel, useTunnelFunction } from "tunnel-fn";

export default const ComponentB = () => {
	const [counter, setCounter] = useState(0);
	const { callTunnel } = useTunnel();

	const funcB = useTunnelFunction("funcB", (number: number) => {
		setCounter(counter + 1);
		toast.success(\`Called FuncB with parameter number: $\{number}\`);

	return (
		<div>
			<Button onClick={() => funcB(1)}>Call FuncB</Button>
			<Button onClick={() => callTunnel("funcA")}>Call FuncA</Button>
			<p>Counter: {counter}</p>
		</div>
	);
};

`;
