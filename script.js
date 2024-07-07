const descriptions = {
    A: {
        1: "from central to cheppok via nh 217.",
        2: "Description for Source A and Destination 2.",
        3: "Description for Source A and Destination 3.",
        4: "Description for Source A and Destination 4."
    },
    B: {
        1: "Description for Source B and Destination 1.",
        2: "Description for Source B and Destination 2.",
        3: "Description for Source B and Destination 3.",
        4: "Description for Source B and Destination 4."
    },
    C: {
        1: "Description for Source C and Destination 1.",
        2: "Description for Source C and Destination 2.",
        3: "Description for Source C and Destination 3.",
        4: "Description for Source C and Destination 4."
    },
    D: {
        1: "Description for Source D and Destination 1.",
        2: "Description for Source D and Destination 2.",
        3: "Description for Source D and Destination 3.",
        4: "Description for Source D and Destination 4."
    }
};

function updateDescription() {
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const descriptionDiv = document.getElementById("description");

    const description = descriptions[source][destination];
    descriptionDiv.innerHTML = `<p>${description}</p>`;
}
