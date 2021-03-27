const supportLink = document.querySelectorAll('.support__link')
const allTabs = document.querySelectorAll('.tabs')

supportLink.forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault()
        let currentLink = item
        let tabId = currentLink.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)

        if ( ! currentTab.classList.contains('active-tabs')) {
            supportLink.forEach(
                (child) => child.classList.remove('support__link__active'),
    
            )
            allTabs.forEach(
                (child) => child.classList.remove('active-tabs')
            )
            currentTab.classList.add('active-tabs')
            currentLink.classList.add('support__link__active')
        }
        console.log(tabId);
        console.log(currentLink)
        
    })    
)
console.log(allTabs);

