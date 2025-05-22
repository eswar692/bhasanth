import { useEffect, useState } from "react";

const Header = () => {
  const [lang, setLang] = useState("en");

   useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };
  }, []);

  const handleTranslate = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = "te"; // Telugu
      select.dispatchEvent(new Event("change"));
    }
  };



  return (
    <header className="flex justify-between items-center px-6 py-3 shadow-md bg-white">
      <h1 className="text-xl font-bold text-gray-800">My Website</h1>
      <div className="flex items-center gap-3">
        {/* Custom Language Selector */}
        <div>
          <button onClick={() => handleTranslate()} className="bg-blue-500 text-white px-4">Just</button>
        </div>

        {/* Hidden Google Translate Widget */}
        <div id="google_translate_element"  ></div>
      </div>
    </header>
  ); 
};

export default Header;


