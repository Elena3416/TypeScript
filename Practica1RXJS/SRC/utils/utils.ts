export const displaylog = (content:any) => {
    const element = document.createElement("div");
    element.innerText = content;
    const logContainer = document.querySelector("#log-container");
    logContainer?.appendChild(element);
}