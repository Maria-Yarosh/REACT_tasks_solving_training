import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompanyDetails } from "./pages/CompanyDetails.tsx";
import { RoleDetails } from "./pages/RoleDetails.tsx";
import { UsersList } from "./pages/UsersList.tsx";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/company_details/:id" element={<CompanyDetails />} />
          <Route path="/role_details/:roleId" element={<RoleDetails />} />
          <Route path="/user_list" element={<UsersList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
