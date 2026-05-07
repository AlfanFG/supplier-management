import { createBrowserRouter } from "react-router-dom";

import SupplierListPage from "./pages/SupplierListPage";

import ReviewApprovalsPage from "./pages/ReviewApprovalsPage";
// import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/templates/DashboardLayout";

const route = createBrowserRouter([
	{
		path: "/",
		element: <DashboardLayout />,
		children: [
			{
				path: "supplier-list",
				element: <SupplierListPage />,
			},

			{
				path: "review-approvals",
				element: <ReviewApprovalsPage />,
			},

			// { path: "*", element: <NotFound /> },
		],
	},
]);

export default route;
