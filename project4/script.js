let workouts=[];

function addWorkout(){
    const workoutName=document.getElementById('workoutName').value;
    const workoutDate=document.getElementById('workoutDate').value;
    if(workoutName && workoutDate){
        const workout={ id: Date.now(), name:workoutName, date:workoutDate, exercises: []};
        workouts.push(workout);
        document.getElementById('workoutName').value= '';
        document.getElementById('workoutDate').value= '';
        displayWorkouts();
    }
}

function editWorkout(id){
    const workout=workouts.find(w=> w.id===id);
    const newName=prompt('enter new workout name',workout.name);
    const newDate=prompt('enter new workout date',workout.date);
    if(newName && newDate){
        workout.name=newName;
        workout.date=newDate;
        displayWorkouts();
    }
}

function deleteWorkout(id){
    workouts=workouts.filter(w=>w.id !== id);
    displayWorkouts();
}

function logExercise(workoutId){
    const exerciseName=prompt('enter name of the workout');
    const sets=prompt('enter number of sets');
    const reps=prompt('enter number of repititions');
    if(exerciseName && sets && reps){
        const workout = workouts.find(w => w.id === workoutId);
        workout.exercises.push({ name: exerciseName, sets, reps });
        displayWorkouts();
    }

}

function filterWorkouts() {
    const filterName = document.getElementById('filterName').value.toLowerCase();
    const filterDate = document.getElementById('filterDate').value;
    const filteredWorkouts = workouts.filter(workout => {
        return (workout.name.toLowerCase().includes(filterName) && 
                (!filterDate || workout.date === filterDate));
    });
    displayWorkouts(filteredWorkouts);
}

function displayWorkouts(filteredWorkouts=workouts){
    const workoutsDiv=document.getElementById('workouts');
    workoutsDiv.innerHTML='';
    filteredWorkouts.forEach(workout=>{
        const workoutDiv=document.createElement('div');
        workoutDiv.className='workout';
        workoutDiv.innerHTML=`
        <h3>${workout.name} (${workout.date})</h3>
        <button onclick="editWorkout(${workout.id})">edit</button>
        <button onclick="deleteWorkout(${workout.id})">delete</button>
        <button onclick="logExercise(${workout.id})">Log exercises</button>
        <div class="exercises">
         ${workout.exercises.map(ex => `
                    <div class="exercise">
                        ${ex.name} - ${ex.sets} sets x ${ex.reps} reps
                    </div>
                `).join('')}
            </div>
            `;
            workoutsDiv.appendChild(workoutDiv);
    })
}
displayWorkouts();