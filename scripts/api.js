const adviceNumber = document.querySelector("#adviceNumber");
const advice = document.querySelector("#advice");

//Advice Paragraph ===============================================================

const getAdvice = async () => { 
    const response = await fetch("https://api.adviceslip.com/advice");
    
    if (response.status !== 200) {
        throw new Error ("Cannot fetch data");
    }
    const data = await response.json();
   
    return data;
};

getAdvice()
    .then(data => {
        const adviceObject = data.slip.advice;
        advice.innerHTML = `<p>"${adviceObject}"</p>`
        // console.log(adviceObject);
       
    });

//Advice # =============================================================

const getAdviceId = async () => { 
    const response = await fetch("https://api.adviceslip.com/advice");
    
    if (response.status !== 200) {
        throw new Error ("Cannot fetch data");
    }
    const data = await response.json();
   
    return data;
};

getAdviceId()
    .then(data => {
        const adviceObject = data.slip.id;
        adviceNumber.innerHTML = `<p>${adviceObject}</p>`
});
