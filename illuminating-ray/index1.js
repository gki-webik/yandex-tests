const rootElement = document.getElementById("root");
const testsSelect = document.getElementById("tests-select");

rootElement.addEventListener("onSolutionReady", (event) => {
    const { detail } = event;

    if (detail) {
        testsSelect.innerHTML = detail
            .map((t, index) => `<option value="${t.id}">${index + 1}</option>`)
            .join("");

        rootElement.innerHTML = detail[0].content;

        testsSelect.addEventListener("change", (e) => {
            const test = detail.find((t) => t.id === e.target.value);
            rootElement.innerHTML = test.content;
        });
    }
});