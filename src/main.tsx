import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "~/shared/styles/globals.scss";

import { RouterProvider } from "react-router-dom";
import { router } from "~/shared/router";

const container = document.getElementById("root");
if (!container) throw new Error("Root element not found");

createRoot(container).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
