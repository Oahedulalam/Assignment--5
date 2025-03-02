document.getElementById('card-btn').addEventListener('click', function () {
   window.location.href = "secondPage.html"
})

let colors = ['red', 'blue', 'yellow', 'orange', 'Moss Green', 'Violet', 'Sky blue', 'green', 'black', 'tomato', 'Platinum'];
let navBtn = document.getElementById('nav-btn').addEventListener('click', function () {
   let randomColor = colors[Math.floor(Math.random() * colors.length)];
   document.body.style.background = randomColor;
})
const currentDate = new Date().toLocaleDateString('en-US', {
   weekday: 'short',
   day: '2-digit',
   month: 'short',
   year: 'numeric',
});
document.getElementById('currentDate').innerText = currentDate;



document.getElementById('clearHistory').addEventListener('click', function () {
   document.getElementById('update-status').innerText = '';
})

let taskAssignedNumber = 6;
document.getElementById('first-card-btn').addEventListener('click', function () {
   alert('Board Updated Successfully');
   document.getElementById('first-card-btn').disabled = true;
   if (taskAssignedNumber > 0) {
      taskAssignedNumber -= 1;
      document.getElementById('taskAssigned').innerText = taskAssignedNumber;
      const updateStatusElement = document.getElementById('update-status');
      updateStatusElement.innerText = 'you have complected the task fix mobile button issue at: 1:26:50 AM';
      const newNumber = document.getElementById('navNumber');
      let newnumber = Number(newNumber.innerText);
      newnumber += 1;
      newNumber.innerText = newnumber;
   }
})


