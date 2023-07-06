$(".sidebar ul li").on('click', function(){
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active'); 
    
});

$('.open-btn').on('click', function (){
    $('.sidebar').addClass('active');
}); 

$('.close-btn').on('click', function (){
    $('.sidebar').removeClass('active');
});

// function toogleSidebar() {
//   const sidebar = document.getElementById('side_nav');
//   sidebar.classList.toggle('open');
  
// }

const ctx = document.getElementById('myChart');
// const ctx2 = document.getElementById('myChart2');
// const ctx3 = document.getElementById('myChart3');
// const ctx4 = document.getElementById('myChart4');


new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
    //   label: '# of Votes',
      data: [0, 100,120,0,200,180,0],
    //   borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// new Chart2(ctx2, {
//     type: 'bar',
//     data = {
//         datasets: [{
//             data: [10, 20, 30]
//         }],
    
//         // These labels appear in the legend and in the tooltips when hovering different arcs
//         labels: [
//             'Red',
//             'Yellow',
//             'Blue'
//         ]
//     },

     
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });