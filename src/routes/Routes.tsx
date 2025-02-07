import App from "@/App";
import Help from "@/views/Help";
import Cart from "@/views/Cart";
import Profile from "@/views/Profile";
import Release from "@/views/Release";
import Messages from "@/views/Messages";
import Settings from "@/views/Settings";
import Wantlist from "@/views/Wantlist";
import Dashboard from "@/views/Dashboard";
import Collection from "@/views/Collection";
import NotFound from "@/components/NotFound";
import { Routes, Route } from "react-router";

export default function RemoteAppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/help" element={<Help />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/my" element={<Dashboard />} />
            <Route path="/wantlist" element={<Wantlist />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/release" element={<Release />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/user/:username" element={<Profile />} />
            <Route path="/release/:id" element={<Release />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
