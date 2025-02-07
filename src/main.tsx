import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import RemoteAppRoutes from "@/routes/Routes.tsx";
import I18NextProvider from "@/providers/I18NextProvider.tsx";
import ApolloProvider from "@/providers/ApolloProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <ApolloProvider>
        <I18NextProvider>
            <BrowserRouter>
                <RemoteAppRoutes />
            </BrowserRouter>
        </I18NextProvider>
    </ApolloProvider>
);
