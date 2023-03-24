/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item')

// 1. Выберите каждый элемент
accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.accordion__header')

    // 2. Выберите каждый клик по заголовку
    accordionHeader.addEventListener('click', () =>{
        // 7. Создайте переменную
        const openItem = document.querySelector('.accordion-open')
        
        // 5. Вызовите функцию переключения элемента
        toggleItem(item)

        // 8. Проверить, существует ли класс
        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

// 3. Создайте функцию постоянного типа
const toggleItem = (item) =>{
    // 3.1 Создайте переменную
    const accordionContent = item.querySelector('.accordion__content')

    // 6. Если есть другой элемент, содержащий класс accorion-open, удаляющий его класс
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        // 4. Добавьте максимальную высоту контента
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}