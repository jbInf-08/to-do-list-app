$(document).ready(function() {
    // Function to add a new item to the to-do list
    function newItem() {
        let inputValue = $('#input').val().trim(); // Trim any whitespace from the input value
        if (!inputValue) {
            alert("You must write something!");
            return; // Exit the function early if input is empty or contains only whitespace
        }

        let li = $('<li></li>').text(inputValue);
        let crossOutButton = $('<button>X</button>').addClass('crossOutButton');
        li.append(crossOutButton);

        // Double-click to toggle strike-through with slow fade effect
        li.on('dblclick', function() {
            $(this).animate({ opacity: 0 }, 1000, function() {
                $(this).toggleClass('strike').animate({ opacity: 1 }, 1000);
            });
        });

        // Click to delete
        crossOutButton.on('click', function() {
            $(this).parent().remove();
        });

        // Append the new item to the list and clear the input field
        $('#list').append(li);
        $('#input').val(''); 

        // Make the list sortable
        $('#list').sortable();
    }

    // Event listener for adding a new item when the "Add" button is clicked
    $('#button').on('click', newItem);
});