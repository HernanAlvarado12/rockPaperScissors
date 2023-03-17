const options = [...document.getElementById('sectionOptions').children]
const lines = [...document.querySelectorAll('#sectionOptions > article > div + h3.uppercase.text-center')]

document.addEventListener('click', event => {
    /**
     * @type {Element}
     */
    const target = event.target
    if(target.matches('#sectionOptions :is(#optionPaper, #optionPaper :is(div), #optionPaper :is(figure, img))')) {
        cleanNodes(options, '#optionPaper, #youPicked')
    }else if(target.matches('#sectionOptions :is(#optionScissors, #optionScissors :is(div), #optionScissors :is(figure, img))')) {
        cleanNodes(options, '#optionScissors, #youPicked')
    }else if(target.matches('#sectionOptions :is(#optionRock, #optionRock :is(div), #optionRock :is(figure, img))')) {
        cleanNodes(options, '#optionRock, #youPicked')
    }
})


/**
 * 
 * @param {Array<Element>} optionsNodes 
 * @param {String} nodeSelector 
 */
function cleanNodes(optionsNodes, nodeSelector) {
    optionsNodes.filter(optionNode => !optionNode.matches(nodeSelector))
                .forEach(optionNode => optionNode.remove())
}