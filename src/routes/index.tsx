import Counter from "@/components/Counter";
import { Link } from "@kobalte/core/link";
import { Title } from "@solidjs/meta";

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>
			<h1>Hello world!</h1>
			<Counter />
			<p>
				Visit{" "}
				<Link
					class="link"
					href="https://start.solidjs.com"
					target="_blank"
					rel="noreferrer"
				>
					start.solidjs.com
				</Link>{" "}
				to learn how to build SolidStart apps.
			</p>
		</main>
	);
}
