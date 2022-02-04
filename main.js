const card = document.querySelectorAll('.cards__item');

for (let i = 0; i < card.length; i++) {
    const deleteIcon = card[i].querySelector('.delete-icon');
    card[i].addEventListener('mouseover', function() {
        deleteIcon.classList.remove('none');
    });
    card[i].addEventListener('mouseout', function() {
        deleteIcon.classList.add('none');
    });
}

