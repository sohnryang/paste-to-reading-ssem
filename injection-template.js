const editorIframeContainerElem = document.body.querySelector("div.write_content");
const editorIframeElem = editorIframeContainerElem.querySelector("iframe");
const editareaIframeElem = editorIframeElem.contentWindow.document.body.querySelector("iframe");
const smartEditorBodyElem = editareaIframeElem.contentWindow.document.body;
smartEditorBodyElem.innerHTML = "";
const splitted = bookReport.split();
for (const line of splitted) {
  const paragraphElem = document.createElement("p");
  paragraphElem.innerText = line;
  smartEditorBodyElem.appendChild(paragraphElem);
}
