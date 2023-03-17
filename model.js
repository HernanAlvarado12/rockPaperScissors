const options = [...document.getElementById('sectionOptions').children]

document.addEventListener('click', event => {
    /**
     * @type {Element}
     */
    const target = event.target
    if(target.matches('#sectionOptions :is(#optionPaper, #optionPaper :is(div), #optionPaper :is(figure, img))')) {
        options.forEach(option => {
            if(!option.matches('#optionPaper, #youPicked')) {
                option.classList.add('hidden')
            }
        })
    }else if(target.matches('#sectionOptions :is(#optionScissors, #optionScissors :is(div), #optionScissors :is(figure, img))')) {
        options.forEach(option => {
            if(!option.matches('#optionScissors, #youPicked')) {
                option.classList.add('hidden')
            }
        })
    }else if(target.matches('#sectionOptions :is(#optionRock, #optionRock :is(div), #optionRock :is(figure, img))')) {
        options.forEach(option => {
            if(!option.matches('#optionRock, #youPicked')) {
                option.classList.add('hidden')
            }
        })
    }
})