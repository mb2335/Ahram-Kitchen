import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ko";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "menu.items": "Menu Items",
    "menu.addNew": "Add New Item",
    "order.management": "Order Management",
    "order.processing": "Processing",
    "order.complete": "Mark Complete",
    "order.reject": "Reject",
    "order.items": "Items",
    "order.customer": "Customer",
    "button.edit": "Edit",
    "button.delete": "Delete"
  },
  ko: {
    "menu.items": "메뉴 항목",
    "menu.addNew": "새 항목 추가",
    "order.management": "주문 관리",
    "order.processing": "처리 중",
    "order.complete": "완료 표시",
    "order.reject": "거절",
    "order.items": "주문 항목",
    "order.customer": "고객",
    "button.edit": "수정",
    "button.delete": "삭제"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ko" : "en"));
    console.log("Language toggled to:", language === "en" ? "ko" : "en");
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};