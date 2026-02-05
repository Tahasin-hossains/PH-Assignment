const countcalories = document.getElementById("calories-number");
const countworkouts =document.getElementById("workout-number");
const countminutes=document.getElementById("minutes-number");
const information=document.querySelectorAll(".workout-card-lowbutton");
const countreps=document.getElementById("Total-reps")
let calories=0;
let workouts=0;
let minutes=0;
let activity=[];

information.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        const card=e.target.closest(".workout-card")
        const informationPackage={
            calories:Number(card.dataset.cal),
            Time:Number(card.dataset.time),
            Name:card.dataset.name,
        }
    addTochart(informationPackage)
    
    });
});

function addTochart (product){
    calories =calories+product.calories;
    countcalories.innerText=calories;
    workouts++;
    countworkouts.innerText=workouts;
    countreps.innerText=workouts;
    minutes=minutes+product.Time;
    countminutes.innerText=minutes;
    activity.push(product);
    Activity();



}
function Activity(){
    const Cardsection=document.getElementById("activity-update")
    activity.forEach(items=>{
        const div =document.createElement('div');
        div.className="card-items"
        div.innerHTML=`
        <div>
        <div class="activity-name">${items.Name}</div>
        <p class='mission-icon'>Mission Passed RESPECT!!!</p>
        <div class="activity-calories">Total calories:${items.calories}</div>
        <div class="activity-time">Total time:${items.Time}</div>
        
        </div>
        `;
        Cardsection.appendChild(div)
        activity=[]

    })
}