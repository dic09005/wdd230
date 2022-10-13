
//Adding and removing list elements //


const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
const error = document.getElementById('error');

button.addEventListener('click', function() {

    if (input.value.length === 0) {

        error.textContent = 'Please enter a Book and Chapter'
        error.style.color = "red"; 
    } else {
    
        let myItem = input.value;
            const listItem = document.createElement('li')
            const listText = document.createElement('span')
            const listButton = document.createElement('button')

            listItem.appendChild(listText);
            listText.textContent = myItem;
            listItem.appendChild(listButton);
            listButton.textContent = '❌';
            list.appendChild(listItem);
        
        input.value = '';

        listButton.addEventListener('click', function () {
            list.removeChild(listItem)
        });
    }
    input.focus();
}
)