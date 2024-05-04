document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('click1').addEventListener('click', function() {
        // Ẩn page1 và hiển thị page2 khi nút có id là click1 được click
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page4').style.display = 'block';
    });

    document.getElementById('click3').addEventListener('click', function() {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
    });

    document.getElementById('click2').addEventListener('click', function() {
        // Add your code here for the click2 event
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';
    });

    document.getElementById('click5').addEventListener('click', function(){
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page6').style.display = 'block';
    });

    document.getElementById('click6').addEventListener('click', function(){
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page7').style.display = 'block';
    });

    document.getElementById('click7').addEventListener('click', function(){
        document.getElementById('page4').style.display = 'none';
        document.getElementById('page3').style.display = 'block';
    });

    document.getElementById('click8').addEventListener('click', function(){
        document.getElementById('page4').style.display = 'none';
        document.getElementById('page5').style.display = 'block';
    });

    document.getElementById('click4').addEventListener('click', function() {
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page5').style.display = 'block';
    });

    function handleClick() {
        document.getElementById('page5').style.display = 'none';
        document.getElementById('page8').style.display = 'block';
    }
    
    document.getElementById('click9').addEventListener('click', handleClick);
    document.getElementById('click10').addEventListener('click', handleClick);
    document.getElementById('click11').addEventListener('click', handleClick);
});



//     function Height(button, increment) {
//         var minSize = 250;
//         var currentHeight = button.offsetHeight;
//         var currentWidth = button.offsetWidth;
//         var newHeight = currentHeight + increment;
//         var newWidth = currentWidth + increment;
//         if (newHeight < minSize || newWidth < minSize) {
//             button.style.height = newHeight + "px";
//             button.style.width = newWidth + "px";
//         }
//     }


    
//     document.getElementById('click2').addEventListener('click', function() {
//         var button1 = document.getElementById('click1');
//         Height(button1, 20); // Tăng kích thước của nút click1 khi click2 được nhấn
//     });
    
//     document.getElementById('click4').addEventListener('click', function() {
//         var button3 = document.getElementById('click3');
//         Height(button3, 20); // Tăng kích thước của nút click3 khi click4 được nhấn
//     });
    
//     document.getElementById('click6').addEventListener('click', function() {
//         var button5 = document.getElementById('click5');
//         Height(button5, 20);
//     });
// });
