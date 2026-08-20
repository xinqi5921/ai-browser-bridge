/// <reference types="@types/chrome" />
function injectMarkers() {
    const elements = document.querySelectorAll("button, a, input, select, textarea");
    elements.forEach((el, index) => {
        el.setAttribute("data-ai-ref", "elem_" + index);
    });
}
injectMarkers();
console.log("AI Browser Bridge content script ready");
