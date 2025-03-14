import { Button } from "@kobalte/core/button";
import { createSignal } from "solid-js";

export default function Counter() {
	const [count, setCount] = createSignal(0);
	return (
		<Button class="btn" onClick={() => setCount(count() + 1)}>
			Clicks: {count()}
		</Button>
	);
}
