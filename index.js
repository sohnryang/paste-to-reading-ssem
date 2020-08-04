window.copyInjectionScript = () => {
  const injectionScriptElem = document.getElementById("injectionscript");
  injectionScriptElem.select();
  document.execCommand("copy");
};

window.createInjectionScript = () => {
  const bookReport = document.getElementById("bookreport").value;
  fetch('injection-template.js')
    .then(response => response.text())
    .then(code => {
      const encoded = btoa(encodeURIComponent(bookReport));
      const injectionCode = `bookReport = decodeURIComponent(atob("${encoded}"));\n` + code;
      const injectionScriptElem = document.getElementById("injectionscript");
      injectionScriptElem.value = injectionCode;
    });
};
