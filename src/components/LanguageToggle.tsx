import { ToggleLeft, ToggleRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      {language === "en" ? (
        <ToggleLeft className="h-5 w-5" />
      ) : (
        <ToggleRight className="h-5 w-5" />
      )}
      <span>{language === "en" ? "EN" : "한국어"}</span>
    </Button>
  );
};