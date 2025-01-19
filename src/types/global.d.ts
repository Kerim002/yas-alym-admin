type LanguageShortVariant = "tm" | "en" | "ru";
type LanguageFullVariant = "Turkmen" | "English" | "Russian";
type LanguageSchema = {
  full: LanguageFullVariant;
  short: LanguageShortVariant;
};

type TokenSchema = {
  refresh_token: string;
  token: string;
};
