export const objectData = (data,graphData,categories) => {
    let j=0;
    let newArray= Object.keys(data);
        for(j=0;j<newArray.length;j++)
        {
        //   console.log(data[newArray[j]])
           graphData.push(data[newArray[j]]);
           typeof newArray[j] === Number ? categories.push("Question "+ newArray[j]) :
           categories.push(newArray[j]);
        }
}

export const arrayData = (data,graphData,categories,index) => {
    graphData.push(data);
    categories.push("Question "+ index);
}