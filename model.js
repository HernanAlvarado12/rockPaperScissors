const options = [...document.getElementById('sectionOptions').children]
const lines = [...document.querySelectorAll('#sectionOptions > article > div + span.absolute')]
console.log(lines)

document.addEventListener('click', event => {
    /**
     * @type {Element}
     */
    const target = event.target
    if(target.matches('#sectionOptions :is(#optionPaper, #optionPaper :is(div), #optionPaper :is(figure, img))')) {
        cleanNodes(options, '#optionPaper, #youPicked', lines)
    }else if(target.matches('#sectionOptions :is(#optionScissors, #optionScissors :is(div), #optionScissors :is(figure, img))')) {
        cleanNodes(options, '#optionScissors, #youPicked', lines)
    }else if(target.matches('#sectionOptions :is(#optionRock, #optionRock :is(div), #optionRock :is(figure, img))')) {
        cleanNodes(options, '#optionRock, #youPicked', lines)
    }
})


/**
 * 
 * @param {Array<Element>} optionsNodes 
 * @param {String} nodeSelector 
 */
function cleanNodes(optionsNodes, nodeSelector, lines) {
    optionsNodes.filter(optionNode => !optionNode.matches(nodeSelector))
                .forEach(optionNode => optionNode.classList.add('hidden'))
    cleanLines(lines)
}


/**
 * 
 * @param {Array<Element>} linesList 
 */
function cleanLines(linesList) {
    linesList.forEach(lineNode => lineNode.classList.add('hidden'))
} 