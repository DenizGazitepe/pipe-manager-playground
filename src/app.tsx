import { MetaProvider, Title } from "@solidjs/meta";
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { Button } from "@kobalte/core/button";
import { DropdownMenu } from "@kobalte/core/dropdown-menu";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>SolidStart - Basic</Title>
					<header class="navbar bg-neutral shadow-sm">
						<div class="navbar-start">
							<DropdownMenu>
								<DropdownMenu.Trigger>
									<Button class="btn">Menu</Button>
								</DropdownMenu.Trigger>
								<DropdownMenu.Portal>
									<DropdownMenu.Content class="z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
										<DropdownMenu.Item>
											<Button class="btn btn-link" as={A} href="/">
												Index
											</Button>
										</DropdownMenu.Item>
										<DropdownMenu.Item>
											<Button class="btn btn-link" as={A} href="/about">
												About
											</Button>
										</DropdownMenu.Item>
									</DropdownMenu.Content>
								</DropdownMenu.Portal>
							</DropdownMenu>
						</div>
						<div class="navbar-center">center</div>
						<div class="navbar-end">end</div>
					</header>
					<Suspense>{props.children}</Suspense>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
