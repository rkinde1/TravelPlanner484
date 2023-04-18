function Budget(){
    return(
        <div>
            <div>
                <h2>Plan Your Travel Budget</h2>
            </div>
            <div>
                <fieldset>
                    <legend>Budgeted Expenses</legend>
                    <label for="transport">Transportation $</label>
                    <input type="text" id="transport"></input>
                    <br></br>
                    <label for="food">Food $</label>
                    <input type="text" id="food"></input>
                    <br></br>
                    <label for="activities">Activities $</label>
                    <input type="text" id="activities"></input>
                    <br></br>
                    <label for="shopping" id="shopping">Shopping $</label>
                    <input type="text" id="shopping"></input>
                </fieldset>
            </div>
        </div>
        
    );
}

export default Budget;