import { Pie Chart } from 'react-minimal-pie-chart';

function Budget(){
    return(
        <div>
            <div>
                <h2>Plan Your Travel Budget</h2>
            </div>
            <div>
                <br></br>
                <PieChart
                    data={[
                        {title: 'Transport', value: 10, color: '#FF5733'},
                        {title: 'Hotel', value: 10, color: '#FFC333'},
                        {title: 'Food', value: 10, color: '#4AEC2F'},
                        {title: 'Activities', value: 10, color: '#2F64EC'},
                        {title: 'Shopping', value: 10, color: '#EC2F2F'},
                    ]}
                />;
                <br></br>
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