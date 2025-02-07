import i18n from "@/i18n";
import { I18nextProvider } from "react-i18next";

export default function I18NextProvider({ children }: { children: React.ReactNode }) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
