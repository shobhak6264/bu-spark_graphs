export const objectData = (data,graphData,categories,setgraphType) => {
    let j=0;
    let newArray= Object.keys(data);
        for(j=0;j<newArray.length;j++)
        {
        //   console.log(data[newArray[j]])
           graphData.push(data[newArray[j]]);
           categories.push(newArray[j]);
        //    typeof newArray[j] === "string" ? categories.push("Question "+ newArray[j]) :
        }
        // graphData.length === '1' ? setgraphType("bar") : setgraphType("line");
}

export const arrayData = (data,graphData,categories,index,setgraphType) => {
    graphData.push(data);
    categories.push("Question "+ index);
    // graphData.length === '1' ? setgraphType("bar") : setgraphType("line");
}