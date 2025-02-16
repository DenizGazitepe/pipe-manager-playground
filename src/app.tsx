import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import { MetaProvider, Title } from "@solidjs/meta";
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>SolidStart - Basic</Title>
					<header class="navbar bg-neutral shadow-sm">
						<div class="navbar-start">
							<DropdownMenu>
								<DropdownMenu.Trigger class="btn">Menu</DropdownMenu.Trigger>
								<div class="dropdown">
									<DropdownMenu.Portal>
										<DropdownMenu.Content class="menu dropdown-content z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
											<DropdownMenu.Item
												class="btn btn-link"
												as={A}
												href="/index"
											>
												Home
											</DropdownMenu.Item>
											<DropdownMenu.Item
												class="btn btn-link"
												as={A}
												href="/about"
											>
												About
											</DropdownMenu.Item>
										</DropdownMenu.Content>
									</DropdownMenu.Portal>
								</div>
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
