$(document).ready(function(){

    // reference

    var todoItems = [   'open Zoom', 
                        'listen to the lesson',
                        'coding',
                        'run 10 km',
                        'read a book'
                    ];
    
    var list = $('.todo');
    var newInput = $('.add-element');

    // add element todo list

    for (var i = 0; i < todoItems.length; i++) {

        // call template
        var elementList = $('.template li').clone();
        // add dynamic text a template
        elementList.prepend(todoItems[i]);
        //add clone to list
        list.append(elementList);
    }

    // remove todo items 

    $('body').on('click', '.todo li i', function() {
        $(this).parent().remove();
    });

    // add new todo items
    
    newInput.keyup( function(event) {

        if (event.which == 13 || event.keyCode == 13) {
            var text = newInput.val().trim();
            console.log(event.which);
            // validation
            if (text !== '') {
                var elementNew = $('.template li').clone();
                elementNew.prepend(text);
                list.append(elementNew);
                // clear input
                newInput.val('');
            }
        }

        // todo item completed

        $('body').on('click','.todo li', function(){
            $(this).toggleClass('completed');
        });

    });




}); // end jQuery