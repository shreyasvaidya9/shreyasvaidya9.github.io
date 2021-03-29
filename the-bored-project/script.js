fetch("https://www.boredapi.com/api/activity/", {
}).then(response => {
	return response.json();
}).then(data => {
    console.log(data);
    const difficulty = () => {
        if (data.accessibility < 0.4) {
            return `Easy`
        } else if (data.accessibility < 0.7) {
            return `Medium`
        } else {
            return `Hard`
        }
    }
    document.getElementsByTagName('title').innerHTML = `${data.activity}`;
    document.getElementById('bored').innerHTML = `
        <div class="text-center mt-5">
            <h1>Hey, are you bored?</h1>
            <div class="container-fluid">
                <div class="row mt-5">
                    <div class="col-md-8 offset-md-2">
                        <div class="activity">
                            <h5>Do this activity:</h5>
                            <h3>${data.activity}</h3> <br/>
                            <h5>No. of participants: ${data.participants}</h5>
                            <h5>Type of activity: ${data.type}</h5>
                            <h5>Price: $${data.price}</h5>
                            <h5>Difficulty: ${difficulty()}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}).catch(err => {
	console.error(err);
});