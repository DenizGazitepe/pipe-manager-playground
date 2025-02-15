import { createSignal } from "solid-js";
import { Button } from "@kobalte/core/button";

export default function Counter() {
	const [count, setCount] = createSignal(0);
	return (
		<Button class="btn" onClick={() => setCount(count() + 1)}>
			Clicks: {count()}
		</Button>
	);
}
